import { Link } from 'react-router-dom'
import { useFav } from './favContext.jsx'
import './cart.css'

function Favorites() {
  const { favorites, toggleFav } = useFav()

  if (favorites.length === 0) {
    return (
      <div className="cart-empty">
        <h1>Favoris</h1>
        <p>NO FAVORITES YET ♡</p>
        <Link to="/" className="cart-back">BACK TO Acceuil</Link>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h1>Favoris</h1>

      {favorites.map((p) => (
        <div className="cart-row" key={p.id}>
          <Link to={`/detail/${p.id}`}>
            <img src={p.imageUrl} alt={p.name} />
          </Link>
          <div className="cart-name">
            <h3>{p.name}</h3>
            <span>{p.price}</span>
          </div>
          <button className="cart-remove" onClick={() => toggleFav(p)}>✕</button>
        </div>
      ))}
    </div>
  )
}

export default Favorites