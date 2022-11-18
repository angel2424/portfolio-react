import React, { useRef } from 'react'
import Contact from '../components/Contact'
import About from '../components/Home/About'
import Hero from '../components/Home/Hero'
import ProjectsSection from '../components/Home/ProjectsSection'
import Skills from '../components/Home/Skills'
import { gsap } from "gsap";
import { Helmet } from "react-helmet";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Home = () => {

  const el = useRef();
  const tl = useRef();

  React.useLayoutEffect(() => {

    // -- ANIMATION CODE HERE --

    let ctx = gsap.context(() => {
    
      // all our animations can use selector text like ".box" 
      // and it's properly scoped to our component
      
      tl.current = gsap.timeline()
      .from('.bg-opacity-anim', {
        opacity: 0,
        duration: 3.5,
      })
    }, el); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
    
  }, [])
  
  React.useLayoutEffect(() => {
    ScrollTrigger.refresh()
  })

  return (
    <>
      <Helmet>
        <title>ardzcodes - Home</title>
        <meta name="keywords" content="HTML,CSS,JavaScript" />
        <meta
          name="description"
          content="Ideas page using react helmet very easy to implement "
        />
      </Helmet>
      <div className='home' ref={el}>
        <svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' className='mask_svg'> 
          <clipPath id='mask'> 
            <path d='M0,200 A200,200 0,1,1 400,200 A200,200 0,1,1 0,200 z 
                  M100,200 A100,100 0,1,1 300,200 A100,100 0,1,1 100,200 z' 
                  clip-rule='evenodd'/> 
          </clipPath>
        </svg> 
        <svg xmlns="http://www.w3.org/2000/svg"  width='400' height='400' viewBox="0 0 1095 1095" className='mask_svg'>
          <clipPath id='mask2'> 
            <path d="M1095,547.5c0,302.38-245.12,547.5-547.5,547.5S0,849.88,0,547.5,245.12,0,547.5,0s547.5,245.12,547.5,547.5ZM547.5,28.57C260.9,28.57,28.57,260.9,28.57,547.5s232.34,518.93,518.93,518.93,518.93-232.34,518.93-518.93S834.1,28.57,547.5,28.57Z"/>
          </clipPath>
        </svg>
        <div className='layer_1 bg-opacity-anim'></div>
        <div className='layer_2 bg-opacity-anim'></div>
        <Hero />
        <ProjectsSection />
        <About />
        <Skills />
        <Contact />
      </div>
    </>
  )
}

export default Home