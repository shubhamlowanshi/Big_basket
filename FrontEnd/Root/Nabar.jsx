import React from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css'
const Nabar = () => {
  return (
    <>
      <div className='navbar'>
       <div className='nav-items'>
        <div className='items'><Link  to="/"> <FaShoppingCart className="icon1" />Big Basket</Link></div>
       <div className='items'>  <Link  to="/">Home</Link></div>
        <div className='items'>
        <Link to="/products">Products</Link>
        </div>
       {/* <div className='items'>  <Link  to="/createnew">Add new product</Link></div> */}
       <div className='items'>  <Link  to="/productlist">products list</Link></div>
       </div>
       <div className='items2'><Link to="/productlist">Admin</Link></div>
      </div>
    </>
  )
}

export default Nabar



