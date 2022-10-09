import React, { useState } from 'react'
import {FaInstagram, FaFacebookSquare,FaGithub} from 'react-icons/fa'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
        <header className='flex jc-sb ai-c'>
            <a href="/" className='cursor-link logo s'>ardzcodes</a>
            <div className={`nav_container ${isOpen ? 'nav_container--active' : ''} flex ai-c jc-sb`}>
              <nav className='nav flex'>
                  <a className='menu-font cursor-link' href="/#about">About</a>
                  <a className='menu-font cursor-link' href="/portfolio">Portfolio</a>
                  <a className='menu-font cursor-link' href="#contact">Let's work together!</a>
              </nav>
              <div className='nav_icons flex'>
                  <a target='_blank' rel='noreferrer' href="https://www.instagram.com/a.rdzcodes24/"><FaInstagram size={23} /></a>
                  <a href="/"><FaFacebookSquare size={23} /></a>
                  <a target='_blank' rel='noreferrer' href="https://github.com/angel2424"><FaGithub size={23} /></a>
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