import React from 'react';

// Components
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';

// Pages
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Services from './Pages/Services.jsx';
import Projects from './Pages/Projects.jsx';
import Contact from './Pages/Contact.jsx';

const App = () => {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App