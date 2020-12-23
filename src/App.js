
import './App.css';
import React from 'react';
import Header from './components/header';
import Portfolio from './components/portfolio';
import About from './components/about';
import Contact from './components/contact';
import Experience from './components/experience';


function App() {
  return (
    <>
      <Header />
      <div className="content">
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </div>
    </>
  )
}




export default App;
