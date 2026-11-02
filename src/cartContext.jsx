import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (item, qty = 1) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === item.id)
      if (found) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + qty } : p
        )
      }
      return [...prev, { ...item, qty }]
    })
  }

  const changeQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: p.qty + delta } : p))
        .filter((p) => p.qty > 0)
    )
  }

  const removeItem = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id))
  }

  const totalItems = cart.reduce((sum, p) => sum + p.qty, 0)
  const totalPrice = cart.reduce((sum, p) => sum + p.qty * p.price, 0)

  return (
    <CartContext.Provider
      value={{ cart, addToCart, changeQty, removeItem, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}