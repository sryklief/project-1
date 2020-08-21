import React, { Component } from 'react';
import headimg2 from './assests/headimg2.jpg';

class About extends Component {
    render () {
        return (
        <div>
            <div container>
                <img src={headimg2} alt="pic" className="head-pic" style={{width: '100%', height: '80%'}}/>
                <div className="centered">
                    <h1 class="center" style={{color: 'black'}}>About Us</h1>
                    <p className="about-contents" style={{color: 'white'}}>
                    Here At Flokkies Flock Our Goal Is Very Simple; To Provide The Widest Range Of Bird Food And 
                    Supplies At The Lowest Possible Prices. We Strive To Provide Low Price, Expert Customer Service 
                    And Fast Reliable Delivery To All Our Customers. That’s It, Simple And Straightforward.
                    We Hope You Will Give Us A Try.
                </p>
                </div>
            </div>
        </div>
        )
    }
}

export default About;
