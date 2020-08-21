import React, { Component } from 'react';
import feeder from './assests/feeder.jpg';

class Feeder extends Component {
    render () {
        return (
            <div container>
                <div class="row" style={{marginTop: "1rem", marginBottom: "1rem", marginLeft:"1rem"}}>
                    <div class="col-sm-4">
                        <div class="card-1">
                            <img class="card-img-top" src={feeder} alt="Card image cap"/>
                        </div>
                    </div>
                    <div class="col-sm-4" style={{marginTop: "2rem"}}>
                        <h5><u>Feeder</u></h5>
                        <ul class="list-unstyled">
                            <ul>
                                <li>1 meter feeding tray</li>
                                <li>Free delivery available</li>
                                <li>In stock</li>
                            </ul><br/>
                            <p className="price"><bold>Price: R30,00</bold></p>
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feeder;