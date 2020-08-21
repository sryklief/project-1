import React, { Component } from 'react'
import '../App.css'


class footer extends Component {
    render () {
        return (
            <div className="footer bg-dark">
            <p className='footer-content' style={{paddingTop: '2rem', paddingBottom: '2rem', textAlign: "center", color: "white"}}>
                Flokkies Flock<br/>
                Email - flokkiesflock@gmail.com<br/>
                Contact - 123-456-7890
            </p>
        </div>
        )
    }
}

export default footer;