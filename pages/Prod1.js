import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Breeders from './assests/Breeders.jpg' ;
import racemix from './assests/racemix.jpg';
import SuperCrack from './assests/SuperCrack.jpg'
import mielies from './assests/mielies.jpg';
import sunflower from './assests/sunflower.jpg';

class Prod1 extends Component {
    render () {
        return (
           <div className="prod-body">
                <div class="row">
                    <div class="col-sm-3">
                        <div className="card">
                            <img class="card-img-top" src={Breeders} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Breeders 25kg</h5>
                                <p class="card-text">Quality seed for parents raising chicks.</p>
                            </div>
                            <div class="card-body">
                                <p>R160,00</p>
                                <Link to="/breeder" class="card-link">View Product</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                    <div className="card">
                        <img class="card-img-top" src={racemix} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Race Mix 25kg</h5>
                                <p class="card-text">High energy seed.</p>
                            </div>
                            <div class="card-body">
                                <p>R120,00</p>
                                <a href="/race" class="card-link">View Product</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                    <div className="card">
                        <img class="card-img-top" src={SuperCrack} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Recovery Mix 25kg</h5>
                                <p class="card-text">High protein seed for after races.</p>
                            </div>
                            <div class="card-body">
                                <p>R145,00</p>
                                <a href="Recover" class="card-link">View Product</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                    <div className="card">
                        <img class="card-img-top" src={mielies} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Corn 25kg</h5>
                                <p class="card-text">Quality corn seed.</p>
                            </div>
                            <div class="card-body">
                                <p>R80,00</p>
                                <a href="/Corn" class="card-link">View Product</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                    <div className="card"  style={{marginBottom: "1rem"}}>
                        <img class="card-img-top" src={sunflower} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Sunflower</h5>
                                <p class="card-text">Quality sunflower seed.</p>
                            </div>
                            <div class="card-body">
                                <p>R90,00</p>
                                <a href="/Sun" class="card-link">View Product</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Prod1;
