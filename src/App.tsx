import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import HomePage from './component/HomePage';
import Footer from './component/Footer';
import Features from './component/Features';
import Pricing from './component/Pricing';
import Team from './component/Team';


function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <Features/>
      <Pricing />
      <Team />
      {/* <Footer/> */}
    </>
  );
}

export default App;
