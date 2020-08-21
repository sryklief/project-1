import React, { Component } from 'react';
import nest_pads from './assests/nest_pads.jpg';

class Nest extends Component {
    render () {
        return (
            <div container>
                <div class="row" style={{marginTop: "1rem", marginBottom: "1rem", marginLeft:"1rem"}}>
                    <div class="col-sm-4">
                        <div class="card-1">
                            <img class="card-img-top" src={nest_pads} alt="Card image cap"/>
                        </div>
                    </div>
                    <div class="col-sm-4" style={{marginTop: "2rem"}}>
                        <h5><u>Nest Pads</u></h5>
                        <ul class="list-unstyled">
                            <ul>
                                <li>Nest pads manufactured with natural materials</li>
                                <li>Free delivery available</li>
                                <li>In stock</li>
                            </ul><br/>
                            <p className="price"><bold>Price: R10,00</bold></p>
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nest;