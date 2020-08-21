import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Prod1 from './pages/Prod1';
import Prod2 from './pages/Prod2';
import Prod3 from './pages/Prod3';
import Footer from './layout/Footer';
import Breeder from './pages/Breeder';
import Race from './pages/Race';
import Recover from './pages/Recover';
import Corn from './pages/Corn';
import Sun from './pages/Sun';
import Canker from './pages/Canker';
import Worm from './pages/Worm';
import Mala from './pages/Mala';
import Pmv from './pages/Pmv';
import Immune from './pages/Immune';
import Bath from './pages/Bath';
import Bowl from './pages/Bowl';
import Nest from './pages/Nest';
import Drink from './pages/Drink';
import Feeder from './pages/Feeder';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact={true} component={Prod1}/>
          <Route path="/prod1" component={Prod1}/>
          <Route path="/prod2" component={Prod2}/>
          <Route path="/prod3" component={Prod3}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
          <Route path="/Breeder" component={Breeder}/>
          <Route path="/Race" component={Race}/>
          <Route path="/Recover" component={Recover}/>
          <Route path="/Corn" component={Corn}/>
          <Route path="/Sun" component={Sun}/>
          <Route path="/Canker" component={Canker}/>
          <Route path="/Worm" component={Worm}/>
          <Route path="/Mala" component={Mala}/>
          <Route path="/Pmv" component={Pmv}/>
          <Route path="/Immune" component={Immune}/>
          <Route path="/Bath" component={Bath}/>
          <Route path="/Bowl" component={Bowl}/>
          <Route path="/Nest" component={Nest}/>
          <Route path="/Drink" component={Drink}/>
          <Route path="/Feeder" component={Feeder}/>
          <Route path="/page-not-found" component={PageNotFound}/>
        </Switch>
        <Footer />
      </div>
    )
  }

}

export default App;

