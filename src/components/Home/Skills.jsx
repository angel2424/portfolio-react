import js from '../../images/js.png'
import react from '../../images/react.png'
import nextjs from '../../images/nextjs.png'
import sass from '../../images/sass.png'
import npm from '../../images/npm.png'
import github from '../../images/github.png'
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from 'react';

const Skills = () => {

    const boxRef = useRef();

    useLayoutEffect(() => {
  
      // -- ANIMATION CODE HERE --
  
      let ctx = gsap.context(() => {
      
        // all our animations can use selector text like ".box" 
        // and it's properly scoped to our component
  
        gsap.to(".title-anim", {
          y: 0,
          delay: .1,
          duration: .3,
          ease: 'back.out',
          scrollTrigger: {
            trigger: '.title',
          }
        })
        gsap.from(".skill img", {
          y: 100,
          opacity: 0,
          duration: .8,
          scrollTrigger: {
            trigger: '.skill',
          }
        })
        gsap.to(".skill .text-anim", {
          y: 0,
          duration: .3,
          delay: .5,
          ease: 'back.out',
          scrollTrigger: {
            trigger: '.skill',
          }
        })
  
      }, boxRef); // <- IMPORTANT! Scopes selector text
      
      return () => ctx.revert(); // cleanup
      
  
    }, [])

  return (
    <div className='skills' ref={boxRef}>
        
        <h2 className='xl title'><span className='title-anim'>Skills</span></h2>

        <div className={`skills_list flex flex-wrap ai-c jc-c`}>
            <div className='skill flex direction-c ai-c jc-c'>
                <img src={js} alt="" />
                <h4 className='xs text'><span className='text-anim'>Javascript</span></h4>
            </div>
            <div className='skill flex direction-c ai-c jc-c'>
                <img src={react} alt="" />
                <h4 className='xs text'><span className='text-anim'>React JS</span></h4>
            </div>
            <div className='skill flex direction-c ai-c jc-c'>
                <img src={nextjs} alt="" />
                <h4 className='xs text'><span className='text-anim'>Next JS</span></h4>
            </div>
            <div className='skill flex direction-c ai-c jc-c'>
                <img src={sass} alt="" />
                <h4 className='xs text'><span className='text-anim'>Sass</span></h4>
            </div>
            <div className='skill flex direction-c ai-c jc-c'>
                <img src={npm} alt="" />
                <h4 className='xs text'><span className='text-anim'>Npm</span></h4>
            </div>
            <div className='skill flex direction-c ai-c jc-c'>
                <img src={github} alt="" />
                <h4 className='xs text'><span className='text-anim'>Github</span></h4>
            </div>
        </div>

    </div>
  )
}

export default Skills