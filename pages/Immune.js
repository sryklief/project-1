import React, { Component } from 'react';
import immune from './assests/immune.jpg';

class Immune extends Component {
    render () {
        return (
            <div container>
                <div class="row" style={{marginTop: "1rem", marginBottom: "1rem", marginLeft:"1rem"}}>
                    <div class="col-sm-4">
                        <div class="card-1">
                            <img class="card-img-top" src={immune} alt="Card image cap"/>
                        </div>
                    </div>
                    <div class="col-sm-4" style={{marginTop: "2rem"}}>
                        <h5><u>Immune Booster</u></h5>
                        <ul class="list-unstyled">
                            <ul>
                                <li>To stregnthen the immune system of your birds.</li>
                                <li>Free delivery available</li>
                                <li>In stock</li>
                            </ul><br/>
                            <p className="price"><bold>Price: R110,00</bold></p>
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Immune;