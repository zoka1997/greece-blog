import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import './Components/Header.css';
import Home from './Components/Home';
import Place from './Components/Place';
import './Components/Place.css';
import Contactus from './Components/Contactus';
import './Components/Contactus.css';
import Footer from './Components/Footer';
import './Components/Footer.css';
import BackToTop from './Components/BackToTop';
import './Components/BackToTop.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
        <Header />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/place" component={Place} />
    <Route path="/contact" component={Contactus} />
    </Switch>
        <BackToTop />
        <Footer />
     </Router>
    </div>
  );
}

export default App;
