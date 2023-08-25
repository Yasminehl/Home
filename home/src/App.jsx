import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <About />
      <Projects />
      <Signup />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
