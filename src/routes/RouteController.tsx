import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Liked from './liked/Liked'
import Cart from './Cart/Cart'
import All from './All/All'
import Product from './product/Product'
import NotFound from './notFound/NotFound'

const RouteController : React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='liked' element={<Liked/>} />
      <Route path='cart' element={<Cart/>} />
      <Route path='all/' element={<All/>}/>
      <Route path='product/:id' element={<Product/>}/>
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default RouteController