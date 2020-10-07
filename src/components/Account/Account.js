import React from 'react'
import './Account.css'
import { Link } from 'react-router-dom'

 
const Account = () => {
    return (
        <div className="account-page">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img src={require('../../img/image1.png')} style={{width: "100%"}} />
                    </div>

                    <div className="col-2">
                        <div className="form-container">
                            <div className="form-btn">
                                <span
                                    onClick={() => {
                                        document.getElementById("RegForm").style.transform = "translateX(300px)";
                                        document.getElementById("LoginForm").style.transform = "translateX(300px)";
                                        document.getElementById("Indicator").style.transform = "translateX(0px)";
                                    }}
                                >
                                    Login
                                </span>
                                <span
                                    onClick={() => {
                                        document.getElementById("RegForm").style.transform = "translateX(0px)";
                                        document.getElementById("LoginForm").style.transform = "translateX(0px)";
                                        document.getElementById("Indicator").style.transform = "translateX(100px)";
                                    }}
                                >
                                    Register
                                </span>
                                <hr id="Indicator" />
                            </div>

                            <form id="LoginForm" >
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <button type="submit" class="btn">Login</button>
                                <Link to="" className="forgot-btn">Forgot Password?</Link>
                            </form>

                            <form id="RegForm" >
                                <input type="text" placeholder="Username" />
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <button type="submit" class="btn">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account