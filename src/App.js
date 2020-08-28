import React from 'react';
import './App.css';
import Home from './components/Home'
import Procedures from './components/Procedures'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Home />
      <Procedures />
      <Contact />
    </div>
  );
}

export default App;
