import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import HomePage from './component/HomePage';
import Footer from './component/Footer';
import Features from './component/Features';


function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <Features/>
      {/* <Footer/> */}
    </>
  );
}

export default App;
