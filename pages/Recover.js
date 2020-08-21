import React, { Component } from 'react';
import SuperCrack from './assests/SuperCrack.jpg'

class Recover extends Component {
    render () {
        return (
            <div container>
                <div class="row" style={{marginTop: "1rem", marginBottom: "1rem", marginLeft:"1rem"}}>
                    <div class="col-sm-4">
                        <div class="card-1">
                            <img class="card-img-top" src={SuperCrack} alt="Card image cap"/>
                        </div>
                    </div>
                    <div class="col-sm-4" style={{marginTop: "2rem"}}>
                        <h5><u>Recovery Mix 25kg</u></h5>
                        <ul class="list-unstyled">
                            <ul>
                                <li>High protein seed for after races.</li>
                                <li>Free delivery available</li>
                                <li>In stock</li>
                            </ul><br/>
                            <p className="price"><bold>Price: R145,00</bold></p>
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recover;