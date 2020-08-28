import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link 
} from 'react-router-dom';
import Home from './components/Home'
import Procedures from './components/Procedures'
import Contact from './components/Contact'
import WidgetShow from './components/WidgetShow';
import MakeAppointment from './components/MakeAppointment';
import SmileGallery from './components/SmileGallery';
import Offers from './components/Offers';



function App() {
  const procedures = [
    "Deep cleaning",
    "Oral Surgery",
    "Root Canal",
    "Crown",
    "Implants",
    "Fillings"
  ]
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>{'  '}
          <Link to="/procedures">Procedures</Link> {'  '}
          <Link to="/gallery">Smile Gallery</Link> {'  '}
          <Link to="/offers">Best Offers</Link> {'  '}
          <Link to="/appointment">Make an Appointment</Link> {'  '}
          <Link to="/contact">Contact Us!</Link>{'  '}

        </nav>
        <Route exact path='/' component={Home}/>
        <Route path='/procedures' render={()=> <Procedures procedures={procedures} />}/>
        <Route path='/contact' component={Contact}/>
        <Route path="/widgets/:id" render={(props)=> <WidgetShow procedures={procedures} {...props}/>}/>
        <Route path='/appointment' component={MakeAppointment}/>
        <Route path='/gallery' component={SmileGallery}/>
        <Route path='/offers' component={Offers}/>
      </div>
    </Router>
  );
}

export default App;
