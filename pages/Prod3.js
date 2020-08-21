import React, { Component } from 'react';
import bath from './assests/bath.jpg';
import bowls5 from './assests/bowls5.jpg';
import Drinker from './assests/Drinker.jpg'
import feeder from './assests/feeder.jpg';
import nest_pads from './assests/nest_pads.jpg';


class Prod3 extends Component {
    render () {
        return (
           <div className="prod-body">
                <div class="row">
                    <div class="col-sm-3">
                        <div className="card">
                            <img class="card-img-top" src={bath} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Bath</h5>
                                <p class="card-text">15 bird bath.</p>
                            </div>
                            <div class="card-body">
                                <p>R40,00</p>
                                <a href="/Bath" class="card-link">View Product</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                    <div className="card">
                        <img class="card-img-top" src={bowls5} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Nest Bowls</h5>
                                <p class="card-text">Clay nest bowls.</p>
                            </div>
                            <div class="card-body">
                                <p>R20,00</p>
                                <a href="/Bowl" class="card-link">View Product</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                    <div className="card">
                        <img class="card-img-top" src={nest_pads} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Nest Pads</h5>
                                <p class="card-text">Nest pads manufactured with natural materials</p>
                            </div>
                            <div class="card-body">
                                <p>R10,00</p>
                                <a href="/Nest" class="card-link">View Product</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                    <div className="card">
                        <img class="card-img-top" src={Drinker} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Drinker</h5>
                                <p class="card-text">5 Liter drinker.</p>
                            </div>
                            <div class="card-body">
                                <p>R100,00</p>
                                <a href="/Drink" class="card-link">View Product</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                    <div className="card"  style={{marginBottom: "1rem"}}>
                        <img class="card-img-top" src={feeder} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Feeding Tray</h5>
                                <p class="card-text">! meter feeding tray.</p>
                            </div>
                            <div class="card-body">
                                <p>R30,00</p>
                                <a href="/Feeder" class="card-link">View Product</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Prod3;
