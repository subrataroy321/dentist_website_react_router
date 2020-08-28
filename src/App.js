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



function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>{'  '}
          <Link to="/procedures">Procedures</Link> {'  '}
          <Link to="/contact">Contact Us!</Link>{'  '}
        </nav>
        <Route exact path='/' component={Home}/>
        <Route path='/procedures' component={Procedures}/>
        <Route path='/contact' component={Contact}/>
      </div>
    </Router>
  );
}

export default App;
