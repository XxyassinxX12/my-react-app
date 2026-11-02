import { useState } from 'react'
import './service.css'

function Service() {
  const [produits, setProduits] = useState([])

  async function charger() {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    setProduits(data.products)
  }

  return (
    <>
      <h1>Service</h1>

      <div className="service-top">
        <button className="service-btn" onClick={charger}>Charger</button> 
      </div>

      <div className="service-grid">
        {produits.map((item) => (
          <div className="service-card" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <div className="service-info">
              <h3>{item.title}</h3>
              <span className="service-cat">{item.category}</span>
              <div className="service-bottom">
                <p className="service-price">{item.price} $</p>
                <p>★ {item.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Service