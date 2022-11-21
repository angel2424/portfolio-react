import { gsap } from "gsap";
import React, { useLayoutEffect, useRef } from 'react';

const Contact = () => {

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
        <span className='s text' style={{color: '#31809D'}}><span className="text-anim">Want to hire me?</span></span>
        <h2 className='xl title'>
          <span className='title-anim'>Let's get in contact!</span>
        </h2>

        <form name="contact" method="POST" data-netlify="true" className="contact-form">
          <div className='contact_inputs flex'>
            <div>
              <p>
                <label>Your Name: <input type="text" name="name" /></label>
              </p>
              <p>
                <label>Your Email: <input type="email" name="email" /></label>
              </p>
              <p>
                <label>Subject: <input type="email" name="email" /></label>
              </p>
          </div>
          <div className='form_message'>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            </div>
          </div>
          <p>
          <button className='button xs' type='submit'>
            <a className='button_link flex jc-c ai-c' href="/">
              Submit
            </a>
          </button>
          </p>
        </form>
    </div>
  )
}

export default Contact