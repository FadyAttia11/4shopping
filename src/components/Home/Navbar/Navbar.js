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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/account">Account</Link></li>
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