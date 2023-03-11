import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    // BEM naming convenshion
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
