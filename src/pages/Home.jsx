import React from 'react'
import Contact from '../components/Contact'
import About from '../components/Home/About'
import Hero from '../components/Home/Hero'
import ProjectsSection from '../components/Home/ProjectsSection'
import Skills from '../components/Home/Skills'

const Home = () => {

  return (
    <div className='home'>
      <svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' className='mask_svg'> 
        <clipPath id='mask'> 
          <path d='M0,200 A200,200 0,1,1 400,200 A200,200 0,1,1 0,200 z 
                M100,200 A100,100 0,1,1 300,200 A100,100 0,1,1 100,200 z' 
                clip-rule='evenodd'/> 
        </clipPath>
      </svg> 
      <div className='layer_1 bg-opacity-anim'></div>
      <Hero />
      <ProjectsSection />
      <About />
      <Skills />
      <Contact />
    </div>
  )
}

export default Home