import { gsap } from "gsap";
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {FaInstagram, FaFacebookSquare,FaGithub} from 'react-icons/fa'
import SplitType from "split-type";

const Header = () => {
  
  const [reversed, setReversed] = useState(true);  
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setReversed(!reversed)
  }

  
  const boxRef = useRef();
  const headerTl = useRef();
  const menuTl = useRef();

  useLayoutEffect(() => {

    const text = new SplitType('.menu_text', {charClass: 'menu_chars'})

    // -- ANIMATION CODE HERE --

    let ctx = gsap.context(() => {
    
      // all our animations can use selector text like ".box" 
      // and it's properly scoped to our component
      if(window.innerWidth > 1100) {
        headerTl.current = gsap.timeline()
        .from('header', {
          y: -100,
          opacity: 1
        })
        .to('.opacity-anim', {
          opacity: 1,
          stagger: .1
        }, '-=.5') 
      } else if (window.innerWidth < 1100){
        headerTl.current = gsap.timeline()
        .from('.header', {
          y: -100,
        })
        .to('.header', {
          y: 0
        })
        menuTl.current = gsap.timeline()
        .to(".nav_container", {
          x: 0,
          ease: 'sine'
        })
        .to(".menu_chars", {
          y: 0,
          stagger: 0.02,
          delay: .02,
          duration: .02
        })
        .to('.opacity-social', {
          opacity: 1,
          stagger: .1
        }, '-=.5') 
      }
      
    }, boxRef); // <- IMPORTANT! Scopes selector text 
    
    return () => ctx.revert(); // cleanup 
  }, [])
  
  useEffect(() => {  
    if (window.innerWidth < 1100){
      menuTl.current.reversed(reversed);
    }  
  }, [reversed]);


  return (
        <header ref={boxRef}>
          <div className='flex jc-sb ai-c header' >
              <a href="/" className='cursor-link opacity-anim logo s'>ardzcodes</a>
              <div className={`nav_container ${isOpen ? 'nav_container--active' : ''} flex ai-c jc-sb`}>
                <nav className='nav flex'>
                    <a className='menu-font cursor-link opacity-anim menu_text' href="/#about">About</a>
                    <a className='menu-font cursor-link opacity-anim menu_text' href="/portfolio">Portfolio</a>
                    <a className='menu-font cursor-link opacity-anim menu_text' href="#contact">Let's work together!</a>
                </nav>
                <div className='nav_icons flex cursor-link opacity-anim'>
                    <a target='_blank' rel='noreferrer' href="https://www.instagram.com/a.rdzcodes24/" ><FaInstagram size={23} /></a>
                    <a href="/" ><FaFacebookSquare size={23} /></a>
                    <a target='_blank' rel='noreferrer' href="https://github.com/angel2424" ><FaGithub size={23} /></a>
                </div>
              </div>
              <div className={`hamburger cursor-link opacity-anim ${isOpen ? 'hamburger--active' : ''}`} onClick={toggleMenu}>
                <span className='bar cursor-link'></span>
                <span className='bar cursor-link'></span>
              </div>
            </div>
        </header>
  )
}

export default Header