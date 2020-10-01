import React from 'react';
import './App.css';
import Cards from './container/Cards/Cards'

function App() {
  return (
    <div className="App">
      <h2 style={{marginBottom:"30px"}}>Colleges in North India</h2>
      <Cards/>
    </div>
  );
}

export default App;
