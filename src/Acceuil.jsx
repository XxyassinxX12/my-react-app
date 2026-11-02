import { useState } from 'react'
import { Link } from 'react-router-dom'
import Data from './8bbaf7ee5a00428f1fe0bd9bcda6b6fb.js'
import { useCart } from './cartContext.jsx'
import { useFav } from './favContext.jsx'
import './acceuil.css'

function Card({ item }) {
  const [count, setCount] = useState(1)
  const [added, setAdded] = useState(false)
  const { addToCart } = useCart()
  const { toggleFav, isFav } = useFav()
  const fav = isFav(item.id)

  const handleAdd = () => {
    addToCart(item, count)
    setCount(1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1000)
  }

  return (
    <div className="item">
      <button
        className={`fav ${fav ? 'active' : ''}`}
        onClick={() => toggleFav(item)}
        aria-label="Favorite"
      >
        {fav ? '♥' : '♡'}
      </button>

      <Link to={`/detail/${item.id}`}>
        <img src={item.imageUrl} alt={item.name} />
      </Link>

      <div className="info">
        <h3>
          <Link to={`/detail/${item.id}`}>{item.name}</Link>
        </h3>
        <p>{item.price}</p>
      </div>

      <div className="actions">
        <button className="btn counter" onClick={() => setCount(count + 1)}>
          {count}
        </button>
        <button
          className={`btn cart ${added ? 'added' : ''}`}
          onClick={handleAdd}
        >
          {added ? 'Added ✓' : 'Add to cart'}
        </button>
      </div>
    </div>
  )
}

function Home() {
  return (
    <div className="home">
      {Data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Home