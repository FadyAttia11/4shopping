import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="wrapper">
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <Link to="/"><img src={require('../../../img/logo.png')} style={{width: "125px"}} /></Link>
                </div>

                <nav>
                    <ul id="menuItems" style={{maxHeight: "0px"}}>
                        <li><Link to="/4shopping/">Home</Link></li>
                        <li><Link to="/4shopping/products"><span>Best Sellers</span></Link></li>
                        <li><Link to="/4shopping/product">Offers & Deals</Link></li>
                        <li><Link to="/4shopping/products">All Products</Link></li>
                        <li><Link to="/4shopping/about">Visit Us</Link></li>
                        <li><Link to="/4shopping/account">Login</Link></li>
                    </ul>
                </nav>
                <Link to="/cart"><img src={require('../../../img/cart.png')} className="cart-icon"/></Link>
                <img 
                    src={require('../../../img/menu.png')} 
                    className="menu-icon" 
                    onClick={() => document.getElementById('menuItems').style.maxHeight == "0px" 
                        ? (document.getElementById('menuItems').style.maxHeight = "200px") 
                        : (document.getElementById('menuItems').style.maxHeight = "0px")} 
                />
            </div>
        </div>
        </div>
    )
}

export default Navbar