import { gsap } from "gsap";
import React, { useLayoutEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";

const Contact = () => {

  const { t } = useTranslation();

  const boxRef = useRef();


  useLayoutEffect(() => {

    // -- ANIMATION CODE HERE --

    let ctx = gsap.context(() => {
    
      // all our animations can use selector text like ".box" 
      // and it's properly scoped to our component
      
      gsap.to(".text-anim", {
        y: 0,
        delay: .2,
        duration: .3,
        scrollTrigger: {
          trigger: '.contact .text',
        }
      })
      gsap.to(".title-anim", {
        y: 0,
        delay: .2,
        duration: .3,
        scrollTrigger: {
          trigger: '.contact h2',
        }
      })
      gsap.from(".contact_inputs p", {
        y: 100,
        opacity: 0,
        duration: .5,
        stagger: .2,
        scrollTrigger: {
          trigger: '.contact_inputs',
          start: '+200px bottom'
        }
      })
      gsap.to(".contact-form button", {
        opacity: 1,
        duration: .5,
        delay: .3,
        scrollTrigger: {
          trigger: ".contact-form button"
        }
      })

    }, boxRef); // <- IMPORTANT! Scopes selector text
    
    return () => ctx.revert(); // cleanup
    

  }, [])

  return (
    <div className='contact' id='contact' ref={boxRef}>
        <span className='s text' style={{color: '#31809D'}}><span className="text-anim">{t('contact.subTitle')}</span></span>
        <h2 className='xl title'>
          <span className='title-anim'>{t('contact.title')}</span>
        </h2>

        <form name="contact" method="POST" data-netlify="true" className="contact-form">
          <div className='contact_inputs flex'>
            <div>
              <p>
                <label>{t('contact.name')} <input type="text" name="name" /></label>
              </p>
              <p>
                <label>{t('contact.email')} <input type="email" name="email" /></label>
              </p>
              <p>
                <label>{t('contact.subject')} <input type="email" name="email" /></label>
              </p>
          </div>
          <div className='form_message'>
            <p>
              <label>{t('contact.message')} <textarea name="message"></textarea></label>
            </p>
            </div>
          </div>
          <p>
          <button className='button xs' type='submit'>
            <a className='button_link flex jc-c ai-c' href="/">
              {t('contact.btn')}
            </a>
          </button>
          </p>
        </form>
    </div>
  )
}

export default Contact