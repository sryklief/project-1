import React, { Component } from 'react';
import headimg2 from '../assests/headimg2.jpg';

class About extends Component {
    render () {
        return (
        <div>
            <div container>
                <img src={headimg2} alt="pic" className="head-pic" style={{width: 'fixed', height: '80%'}}/>
                <div className="centered">
                    <h1 className="heading" style={{color: 'white'}}>About Us</h1>
                    <p className="about-contents" style={{color: 'white'}}>
                    Here At Flokkies Flock Our Goal Is Very Simple; To Provide The Widest Range Of Bird Food And 
                    Supplies At The Lowest Possible Prices. We Strive To Provide Low Price, Expert Customer Service 
                    And Fast Reliable Delivery To All Our Customers. That’s It, Simple And Straightforward.
                    We Hope You Will Give Us A Try.
                </p>
                </div>
            </div>
            <div className="footer" style={{backgroundColor: 'grey'}}>
            <p className='footer-content' style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
                Flokkies Flock<br/>
                Email - flokkiesflock@gmail.com<br/>
                Contact - 123-456-7890
            </p>
            </div>
        </div>
        
        )
    }
}

export default About;