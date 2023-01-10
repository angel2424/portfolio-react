import { gsap } from "gsap/dist/gsap";
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {FaInstagram, FaFacebookSquare,FaGithub} from 'react-icons/fa'
import logo from '../images/logo_icon.svg'
import logoDark from '../images/logo_icon-dark.svg'
import { useTranslation} from 'react-i18next';
import { useContext } from "react";
import { ThemeContext } from "../App";
import on from '../images/lightbulb-on.svg'
import off from '../images/lightbulb-off.svg'

const useIsomorphicLayoutEffect = typeof window !== "undefined" 
  ? useLayoutEffect 
  : useEffect;

const Header = () => {

  const { t, i18n } = useTranslation();
  
  const [isOpen, setIsOpen] = useState(false)
  // eslint-disable-next-line
  const [mobile, setMobile] = useState(false)
  const [scroll, setScroll] = useState(false)
  const [reversed, setReversed] = useState(true);  

  const {theme, toggleTheme} = useContext(ThemeContext)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setReversed(!reversed)
  }

  
  const boxRef = useRef();
  const headerTl = useRef();
  const menuTl = useRef();

  useIsomorphicLayoutEffect(() => {

    // eslint-disable-next-line no-unused-vars

    // -- ANIMATION CODE HERE --

    let ctx = gsap.context(() => {
    
      // all our animations can use selector text like ".box" 
      // and it's properly scoped to our component
      if(window.innerWidth > 1100) {
        headerTl.current = gsap.timeline()
        .from(".header", {
          y: -100,
          opacity: 1,
          duration: .7
        })
        .to(".title-anim", {
          y: 0,
          stagger: .2,
          delay: .1,
          duration: .3,
        })
        .to('.opacity-anim', {
          opacity: 1,
          stagger: .1
        }, '-=2') 
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
        .to(".title-anim", {
          y: 0,
          stagger: .1,
          delay: .1,
          duration: .1,
        })
        .from('.nav_icons', {
          opacity: 0,
          duration: .1,
          ease: 'power2.out'
        })
        .from('.switch', {
          opacity: 0,
          duration: .2,
          ease: 'power2.out'
        })
        .from('.bulb', {
          opacity: 0,
          duration: .2,
          ease: 'power2.out'
        })
      }
      
      
    }, boxRef); // <- IMPORTANT! Scopes selector text 
    
    return () => ctx.revert(); // cleanup 
  }, [])
  
  useEffect(() => {  
    if (window.innerWidth < 1100){
      menuTl?.current.reversed(reversed);
    }  
  }, [reversed]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 5) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    })
  }, [])

  useEffect(() => {
      if(window.innerWidth < 1100) {
        setMobile(true)
      } else {
        setMobile(false)
      }
  }, [])

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if(i18n.language === 'es') {
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }
  }, [i18n.language])

  const handleOnChange = () => {
    setIsChecked(!isChecked);

    if(isChecked === true) {}
  };

  return (
        <header ref={boxRef}>
          <div className='flex jc-sb ai-c header'>
              <a href="/" className={`cursor-link opacity-anim logo s ${scroll ? 'logo--active' : '' }`}>
                <img className="cursor-link" src={theme === 'dark' ? logo : logoDark } alt="" />
                <span className="cursor-link">ardzcodes</span>
              </a>
              <div className={`nav_container ${isOpen ? 'nav_container--active' : ''} flex ai-c jc-sb`}>
                <nav className='nav flex ai-c'>
                    <a className='menu-font opacity-anim title' onClick={toggleMenu} href="/"><span className="title-anim cursor-link">{t('header.home')}</span></a>
                    <a className='menu-font opacity-anim title' onClick={toggleMenu} href="/portfolio"><span className="title-anim cursor-link">{t('header.portfolio')}</span></a>
                    <a className='menu-font opacity-anim title' onClick={toggleMenu} href="#contact"><span className="title-anim cursor-link">{t('header.contact')}</span></a>
                </nav>
                <div className='nav_icons flex cursor-link opacity-anim'>
                    <a target='_blank' rel='noreferrer' href="https://www.instagram.com/a.rdzcodes24/" ><FaInstagram size={23} /></a>
                    <a href="/" ><FaFacebookSquare size={23} /></a>
                    <a target='_blank' rel='noreferrer' href="https://github.com/angel2424" ><FaGithub size={23} /></a>
                </div>
                <div className="nav_toggles">
                    <div class="switch">
                      <input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox" checked={isChecked}
                        onChange={handleOnChange} onClick={() => isChecked ? i18n.changeLanguage('en') : i18n.changeLanguage('es')}></input>
                      <label for="language-toggle" ></label>
                      <span class="on">EN</span>
                      <span class="off">ES</span>
                    </div>
                  <button className="bulb cursor-link" onClick={toggleTheme}><img className='cursor-link' src={`${theme === 'dark' ? off : on}`} alt="" /></button>
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