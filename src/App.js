import React from 'react';
import './App.css';

import Navbar from './components/Navbar.js';
import HeroComponent from './components/HeroComponent';
import Collage from './components/Collage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <HeroComponent />
      <Collage />
      <Footer />
    </div>
  );
}

export default App;
