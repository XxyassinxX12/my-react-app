import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img from './Lacoste.png'; //[cite: 5]
import { useCart } from './cartContext.jsx'; //[cite: 5]
import { useFav } from './favContext.jsx'; //[cite: 5]

function Header() {
    const { totalItems } = useCart(); //[cite: 5]
    const { favorites } = useFav(); //[cite: 5]
    const [user, setUser] = useState({});

    async function getuser() {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const res = await fetch('https://dummyjson.com/auth/me', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await res.json();
                setUser(data);
            } catch (error) {
                console.error("Mochkil f jiban data");
            }
        }
    }

    useEffect(() => {
        getuser();
    }, []);

    return (
        <header> {/*[cite: 5] */}
            <img src={img} className="logo" alt="Lacoste logo" /> {/*[cite: 5] */}
            <ul>
                <li><Link to="/">Acceuil</Link></li> {/*[cite: 5] */}
                <li><Link to="/contact">Contact</Link></li> {/*[cite: 5] */}
                <li><Link to="/service">Service</Link></li> {/*[cite: 5] */}
                
                {/* هنا كنفيريفيو واش كاين المستعمل باش نبيّنو التصويرة ولا الرابط ديال Login */}
                {user && user.image ? (
                    <li>
                        <img width="35" height="35" src={user.image} alt="Profile" style={{ borderRadius: "50%", objectFit: "cover" }} />
                    </li>
                ) : (
                    <li><Link to="/login">Login</Link></li> /*[cite: 5] */
                )}

                <li>
                    <Link to="/favorites" className="cart-link"> {/*[cite: 5] */}
                        ♥
                        {favorites?.length > 0 && <span className="cart-badge">{favorites.length}</span>} {/*[cite: 5] */}
                    </Link>
                </li>
                <li>
                    <Link to="/cart" className="cart-link"> {/*[cite: 5] */}
                        🛒
                        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>} {/*[cite: 5] */}
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Header; //[cite: 5]