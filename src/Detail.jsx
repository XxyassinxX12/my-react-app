import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Data from './8bbaf7ee5a00428f1fe0bd9bcda6b6fb.js'
import { useCart } from './cartContext.jsx'
import './detail.css'

function Detail() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [count, setCount] = useState(1)
  const [added, setAdded] = useState(false)

  const item = Data.find((p) => p.id === Number(id))

  if (!item) {
    return (
      <div className="detail">
        <h1>Produit introuvable</h1>
        <Link to="/" className="detail-back">Retour</Link>
      </div>
    )
  }

  const handleAdd = () => {
    addToCart(item, count)
    setCount(1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1000)
  }

  return (
    <div className="detail">
      <img src={item.imageUrl} alt={item.name} />

      <div className="detail-info">
        <h1>{item.name}</h1>
        <p className="detail-price">{item.price}</p>

        <div className="actions">
          <button className="btn counter" onClick={() => setCount(count + 1)}>
            {count}
          </button>
          <button className={`btn cart ${added ? 'added' : ''}`} onClick={handleAdd}>
            {added ? 'Added ✓' : 'Add to cart'}
          </button>
        </div>

        <Link to="/" className="detail-back">← Retour</Link>
      </div>
    </div>
  )
}

export default Detail