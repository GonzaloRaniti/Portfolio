
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SobreMi from './components/SobreMi';
import Proyectos from './components/Proyectos';
import Conocimientos from './components/Conocimientos';
import Footer from './components/Footer';

function App() {
  return (
    <>

        <NavBar />
        <SobreMi />
        <Conocimientos />
        <Proyectos />
        <Footer />
        
    </>
  );
}

export default App;
