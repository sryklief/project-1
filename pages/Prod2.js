import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import data from '../../backend/data';

class Prod2 extends Component {
    render () {
        return (
           <div>
                <div className="container">
                    <ul className="nav nav-tabs nav-justified">
                        <li className="nav-item">
                            <Link className="nav-link" to="/prod1" role="tab" data-toggle="tab">Prod1</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="#prod2" role="tab" data-toggle="tab">Prod2</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/prod3" role="tab" data-toggle="tab">Prod3</Link>
                        </li>
                    </ul>
                </div>
                <div className="tab-content mb-5" >
                <Row>
                        {data.products2.map(product =>
                            <div id="#prod" className="tab-pane in active text-center mt-5" role="tabpanel1">
                            <div class="proj-card" style={{width: "300px", paddingLeft: '5em'}}>
                                <img src={product.image} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                <h5 class="card-title">{product.name}</h5>
                                    <p class="card-text">All medication has been lab tested.</p>
                                </div>
                                
                            <div class="card-body">
                            <a class="card-link">{product.price}</a>
                                <a href="#" class="card-link">Add to cart</a>
                            </div>
                            </div>
                        </div>
                            )}
                    </Row>
                </div>
                <div className="footer" style={{backgroundColor: 'grey'}}>
                    <p className='footer-content' style={{paddingTop: '2rem', paddingBottom: '4rem'}}>
                        Flokkies Flock<br/>
                        Email - flokkiesflock@gmail.com<br/>
                        Contact - 123-456-7890
                    </p>
                </div>
            </div>
        )
    }
}

export default Prod2;