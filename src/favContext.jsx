import { createContext, useContext, useState } from 'react'

const FavContext = createContext()

export function FavProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  const toggleFav = (item) => {
    setFavorites((prev) => {
      const exists = prev.find((p) => p.id === item.id)
      return exists
        ? prev.filter((p) => p.id !== item.id)
        : [...prev, item]
    })
  }

  const isFav = (id) => favorites.some((p) => p.id === id)

  return (
    <FavContext.Provider value={{ favorites, toggleFav, isFav }}>
      {children}
    </FavContext.Provider>
  )
}

export function useFav() {
  return useContext(FavContext)
}