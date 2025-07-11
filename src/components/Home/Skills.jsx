import js from '../../images/js.png'
import react from '../../images/react.png'
import nextjs from '../../images/nextjs.png'
import sass from '../../images/sass.png'
import npm from '../../images/npm.png'
import github from '../../images/github.png'
import jsDark from '../../images/js-dark.png'
import reactDark from '../../images/react-dark.png'
import nextjsDark from '../../images/nextjs-dark.png'
import sassDark from '../../images/sass-dark.png'
import npmDark from '../../images/npm-dark.png'
import githubDark from '../../images/github-dark.png'
import { gsap } from "gsap";
import { useContext, useLayoutEffect, useRef } from 'react';
import { ThemeContext } from '../../App'
import { FaVuejs, FaGreen, FaFigma } from 'react-icons/fa'
import { SiTailwindcss, SiNuxtdotjs, SiGreensock } from 'react-icons/si'

const Skills = () => {

    const boxRef = useRef();

    const {theme} = useContext(ThemeContext)

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
        gsap.from(".skill svg", {
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
                <img src={theme === 'dark' ? js : jsDark} alt="Javascript" />
                <h4 className='xs text'><span className='text-anim'>Javascript</span></h4>
            </div>
            <div className='skill flex direction-c ai-c jc-c'>
                <img src={theme === 'dark' ? react : reactDark} alt="React Js" />
                <h4 className='xs text'><span className='text-anim'>React JS</span></h4>
            </div>
            <div className='skill flex direction-c ai-c jc-c'>
                <img src={theme === 'dark' ? nextjs : nextjsDark} alt="Next Js" />
                <h4 className='xs text'><span className='text-anim'>Next JS</span></h4>
            </div>
            <div className='skill flex direction-c ai-c jc-c'>
                <FaVuejs size='5rem' color={theme === 'dark' ? '#fff' : '#000'} />
                <h4 className='xs text'><span className='text-anim'>Vue JS</span></h4>
            </div>
            <div className='skill flex direction-c ai-c jc-c'>
                <SiNuxtdotjs size='5rem' color={theme === 'dark' ? '#fff' : '#000'} />
                <h4 className='xs text'><span className='text-anim'>Nuxt</span></h4>
            </div>
            <div className='skill flex direction-c ai-c jc-c'>
                <img src={theme === 'dark' ? sass : sassDark} alt="Sass" />
                <h4 className='xs text'><span className='text-anim'>Sass</span></h4>
            </div>
            <div className='skill flex direction-c ai-c jc-c'>
                <SiTailwindcss size='5rem' color={theme === 'dark' ? '#fff' : '#000'} />
                <h4 className='xs text'><span className='text-anim'>Tailwind CSS</span></h4>
            </div>
            <div className='skill flex direction-c ai-c jc-c'>
                <SiGreensock size='5rem' color={theme === 'dark' ? '#fff' : '#000'} />
                <h4 className='xs text'><span className='text-anim'>GSAP</span></h4>
            </div>
            <div className='skill flex direction-c ai-c jc-c'>
                <FaFigma size='5rem' color={theme === 'dark' ? '#fff' : '#000'} />
                <h4 className='xs text'><span className='text-anim'>Figma</span></h4>
            </div>
            <div className='skill flex direction-c ai-c jc-c'>
                <img src={theme === 'dark' ? npm : npmDark} alt="NPM" />
                <h4 className='xs text'><span className='text-anim'>Npm</span></h4>
            </div>
            <div className='skill flex direction-c ai-c jc-c'>
                <img src={theme === 'dark' ? github : githubDark} alt="Github" />
                <h4 className='xs text'><span className='text-anim'>Github</span></h4>
            </div>
        </div>
    </div>
  )
}

export default Skills
