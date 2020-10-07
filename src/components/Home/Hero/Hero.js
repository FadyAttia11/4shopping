import React from 'react'
import './Hero.css'

const Navbar = () => {

    return (
        <div className="header">
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <img src={require('../../../img/logo.png')} style={{width: "125px"}} />
                    </div>

                    <nav>
                        <ul id="menuItems">
                            <li><a href="">Home</a></li>
                            <li><a href="">Products</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Account</a></li>
                        </ul>
                    </nav>
                    <img src={require('../../../img/cart.png')} style={{width: "30px", height: "30px", marginLeft: "20px"}} />
                    <img 
                        src={require('../../../img/menu.png')} 
                        className="menu-icon" 
                        onClick={() => document.getElementById('menuItems').style.maxHeight == "0px" 
                            ? (document.getElementById('menuItems').style.maxHeight = "200px") 
                            : (document.getElementById('menuItems').style.maxHeight = "0px")} 
                    />
                </div>


                <div className="row">
                    <div className="col-2">
                        <h1>Give Your Workout<br />A New Style!</h1>
                        <p>Success isn't always about greatness. it's about consistency. Consistent<br />hard work gains 
                        success. Greatness will come.</p>
                        <a href="" className="btn">Explore Now &#8594;</a>
                    </div>

                    <div className="col-2">
                        <img src={require('../../../img/image1.png')} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar