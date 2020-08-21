import React, { Component } from 'react'
import canker from './assests/canker.png';
import worms from './assests/worms.jpg';
import malaria from './assests/malaria.jpg';
import PMV from './assests/PMV.jpg';
import immune from './assests/immune.jpg';

class Prod2 extends Component {
    render () {
        return (
               <div className="prod-body">
                    <div class="row">
                        <div class="col-sm-3">
                            <div className="card">
                                <img class="card-img-top" src={canker} alt="Card image cap"/>  
                                <div class="card-body">
                                    <h5 class="card-title">Canker Treatment</h5>
                                    <p class="card-text">For the treament of canker.</p>
                                </div>
                                <div class="card-body">
                                    <p>R155,00</p>
                                    <a href="/Canker" class="card-link">View Product</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                        <div className="card">
                            <img class="card-img-top" src={worms} alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">Dewormer</h5>
                                    <p class="card-text">For the treament of worms.</p>
                                </div>
                                <div class="card-body">
                                    <p>R150,00</p>
                                    <a href="/Worm" class="card-link">View Product</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                        <div className="card">
                            <img class="card-img-top" src={malaria} alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">Malaria Vaccine</h5>
                                    <p class="card-text">For the prevension of malaria.</p>
                                </div>
                                <div class="card-body">
                                    <p>R160,00</p>
                                    <a href="/Mala" class="card-link">View Product</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                        <div className="card">
                                <img class="card-img-top" src={PMV} alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">PMV Vaccince</h5>
                                    <p class="card-text">For the prevention of paramyxo virus.</p>
                                </div>
                                <div class="card-body">
                                    <p>R200,00</p>
                                    <a href="/Pmv" class="card-link">View Product</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                        <div className="card" style={{marginBottom: "1rem"}}>
                            <img class="card-img-top" src={immune} alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">Immune Booster</h5>
                                    <p class="card-text">To stregnthen the immune system of your birds.</p>
                                </div>
                                <div class="card-body">
                                    <p>R110,00 </p>
                                    <a href="/Immune" class="card-link">View Product</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Prod2;
