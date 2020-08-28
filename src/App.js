import React from 'react';
import './App.css';
import Home from './components/Home'
import Procedures from './components/Procedures'
import Contact from './components/Contact'

import {
  BrowserRouter as Router,
  Route,
  Link 
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Home}/>
        <Route path='/procedures' component={Procedures}/>
        <Route path='/contact' component={Contact}/>
      </div>
    </Router>
  );
}

export default App;
