import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <h1>Give Your Workout<br />A New Style!</h1>
                        <p>Success isn't always about greatness. it's about consistency. Consistent<br />hard work gains 
                        success. Greatness will come.</p>
                        <a href="" className="btn">Explore Now &#8594;</a>
                    </div>

                    <div className="col-2">
                        <img src={require('../../img/image1.png')} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home