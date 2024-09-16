import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import HomePage from './component/HomePage';
import Footer from './component/Footer';
import Features from './component/Features';
import Pricing from './component/Pricing';


function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <Features/>
      <Pricing />
      {/* <Footer/> */}
    </>
  );
}

export default App;
