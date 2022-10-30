import React from 'react'

import Header from './components/header/Header'
import Navbar from './components/nav/Navbar'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


function App() {
  return (
    <>
    <Header />
    {/* <Navbar /> */}
    <Skills />
    <Projects />
    <Services />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
