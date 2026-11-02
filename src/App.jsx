import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './header.jsx'
import Acceuil from './Acceuil.jsx'
import Contact from './contact.jsx'
import Service from './service.jsx'
import Login from './login.jsx'
import Cart from './cart.jsx'
import Detail from './Detail.jsx'
import Favorites from './Favorites.jsx'
import { CartProvider } from './cartContext.jsx'
import { FavProvider } from './favContext.jsx'
import './App.css'

function App() {
  return (
    <CartProvider>
      <FavProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Acceuil />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/service' element={<Service />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </FavProvider>
    </CartProvider>
  )
}

export default App