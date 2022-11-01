import { gsap } from "gsap";
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {FaInstagram, FaFacebookSquare,FaGithub} from 'react-icons/fa'
import SplitType from "split-type";
import logo from '../images/logo_icon.svg'
import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  en: { nativeName: 'EN' },
  es: { nativeName: 'ES' }
};

const Header = () => {

  const { t, i18n } = useTranslation();
  
  const [reversed, setReversed] = useState(true);  
  const [isOpen, setIsOpen] = useState(false)
  const [scroll, setScroll] = useState(false)

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
      }
      
    }, boxRef); // <- IMPORTANT! Scopes selector text 
    
    return () => ctx.revert(); // cleanup 
  }, [])
  
  useEffect(() => {  
    if (window.innerWidth < 1100){
      menuTl.current.reversed(reversed);
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
          <div className='flex jc-sb ai-c header' >
              <a href="/" className={`cursor-link opacity-anim logo s ${scroll ? 'logo--active' : '' }`}>
                <img className="cursor-link" src={logo} alt="" />
                <span className="cursor-link">ardzcodes</span>
              </a>
              <div className={`nav_container ${isOpen ? 'nav_container--active' : ''} flex ai-c jc-sb`}>
                <nav className='nav flex ai-c'>
                    <a className='menu-font cursor-link opacity-anim menu_text' onClick={toggleMenu} href="/#about">{t('header.about')}</a>
                    <a className='menu-font cursor-link opacity-anim menu_text' onClick={toggleMenu} href="/portfolio">{t('header.portfolio')}</a>
                    <a className='menu-font cursor-link opacity-anim menu_text' onClick={toggleMenu} href="#contact">{t('header.contact')}</a>
                </nav>
                <div className='nav_icons flex cursor-link opacity-anim'>
                    <a target='_blank' rel='noreferrer' href="https://www.instagram.com/a.rdzcodes24/" ><FaInstagram size={23} /></a>
                    <a href="/" ><FaFacebookSquare size={23} /></a>
                    <a target='_blank' rel='noreferrer' href="https://github.com/angel2424" ><FaGithub size={23} /></a>
                </div>
                <center>
                  <div class="switch">
                    <input id="language-toggle" class="check-toggle check-toggle-round-flat" type="checkbox" checked={isChecked}
                      onChange={handleOnChange} onClick={() => isChecked ? i18n.changeLanguage('en') : i18n.changeLanguage('es')}></input>
                    <label for="language-toggle" ></label>
                    {console.log(i18n.language)}
                    <span class="on">EN</span>
                    <span class="off">ES</span>
                  </div>
                </center>
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