import React from 'react';
import logo from './logo.svg';

import Inp from './Components/Inp';
import Shower from './Components/Shower';
import Header from './Components/Header';
import './App.css';
function App() {
  return (
    <div className="App">
      <Header />
       <Inp/>
       <Shower />
    </div>
  );
}

export default App;
