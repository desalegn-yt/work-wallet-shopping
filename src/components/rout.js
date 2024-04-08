import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './home'
import Shop from './shop'
import Cart from './cart'

const Rout = ({cart, shop, Filter, allCateFilter, addToCart , setCart}) => {
  return (
    <>
    <Routes>
<Route path='/' element={<Home  addToCart = {addToCart} />}/>
<Route path='shop' element={<Shop shop={shop} Filter = {Filter} allCateFilter = {allCateFilter} addToCart = {addToCart} />}/>
<Route path='cart' element={<Cart cart={cart} setCart= {setCart}/>}/>
    </Routes>
    </>
  )
}

export default Rout