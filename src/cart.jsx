import { Link } from 'react-router-dom'
import { useCart } from './cartContext.jsx'

import './cart.css'

function Cart() {
  const { cart, changeQty, removeItem, totalPrice ,} = useCart()

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h1>Cart</h1>
        <p>NO PRODUCTS IN YOUR CART 🛒</p>
        <Link to="/" className="cart-back">BACK TO Acceuil</Link>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h1>Cart</h1>

      {cart.map((p) => (
        <div className="cart-row" key={p.id}>
          <img src={p.imageUrl} alt={p.name} />
          <div className="cart-name">
            <h3>{p.name}</h3>
            <span>{p.price}</span>
          </div>

          <div className="cart-qty">
            <button onClick={() => changeQty(p.id, -1)}>−</button>
            <span>{p.qty}</span>
            <button onClick={() => changeQty(p.id, 1)}>+</button>
          </div>

          <strong className="cart-sub">{p.qty * p.price}</strong>
          <button className="cart-remove" onClick={() => removeItem(p.id)}>✕</button>
        </div>
      ))}

      <div className="cart-total">
        <span>Total</span>
        <strong>{totalPrice}</strong>
      </div>
    </div>
  )
}

export default Cart

