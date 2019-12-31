import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import PrevState from './lastState'

function App() {
  return (
    <div className="App">
      <Search />
      <PrevState />
      
    </div>
  );
}

export default App;
