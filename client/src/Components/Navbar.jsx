import React, { useState, useEffect } from 'react'
import '../Styles/Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl sm:text-2xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              Mohiddin.dev
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <ul className="flex items-center space-x-6 lg:space-x-8">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-white font-semibold hover:text-blue-400 transition-colors text-sm lg:text-base"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white font-semibold hover:text-blue-400 transition-colors text-sm lg:text-base"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white font-semibold hover:text-blue-400 transition-colors text-sm lg:text-base"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-white font-semibold hover:text-blue-400 transition-colors text-sm lg:text-base"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white font-semibold hover:text-blue-400 transition-colors text-sm lg:text-base"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-white font-semibold hover:text-blue-400 transition-colors w-full text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white font-semibold hover:text-blue-400 transition-colors w-full text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white font-semibold hover:text-blue-400 transition-colors w-full text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-white font-semibold hover:text-blue-400 transition-colors w-full text-left"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white font-semibold hover:text-blue-400 transition-colors w-full text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar