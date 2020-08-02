import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/Navbar';
import { Switch, Route } from 'react-router-dom';

import About from './components/pages/About';
import Contact from './components/pages/Contact';
import PageNotFound from './components/pages/PageNotFound';
import SignIn from './components/pages/SignIn';
import Prod1 from './components/pages/Prod1';
import Prod2 from './components/pages/Prod2';
import Prod3 from './components/pages/Prod3';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact={true} component={SignIn}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/prod1" component={Prod1}/>
          <Route path="/prod2" component={Prod2}/>
          <Route path="/prod3" component={Prod3}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
          <Route path="/page-not-found" component={PageNotFound}/>
        </Switch>
      </div>
    )
  }

}

export default App;
