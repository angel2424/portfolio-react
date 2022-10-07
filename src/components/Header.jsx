import React, { useEffect, useState } from 'react'
import {FaInstagram, FaFacebookSquare,FaGithub} from 'react-icons/fa'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const close = () => {
    setIsOpen(false)
  }

  return (
        <header className='flex jc-sb ai-c'>
            <span className='logo s'>ardzcodes</span>
            <div className={`nav_container ${isOpen ? 'nav_container--active' : ''} flex ai-c jc-sb`}>
              <nav className='nav flex'>
                  <a className='menu-font cursor-link' href="/">About</a>
                  <a className='menu-font cursor-link' href="/portfolio">Portfolio</a>
                  <a className='menu-font cursor-link' href="/portfolio">Let's work together!</a>
              </nav>
              <div className='nav_icons flex'>
                  <a href="/"><FaInstagram size={23} /></a>
                  <a href="/"><FaFacebookSquare size={23} /></a>
                  <a href="/"><FaGithub size={23} /></a>
              </div>
            </div>
            <div className={`hamburger cursor-link ${isOpen ? 'hamburger--active' : ''}`} onClick={toggleMenu}>
              <span className='bar cursor-link'></span>
              <span className='bar cursor-link'></span>
            </div>
        </header>
  )
}

export default Header