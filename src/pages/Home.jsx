import React from 'react'
import Contact from '../components/Contact'
import About from '../components/Home/About'
import Hero from '../components/Home/Hero'
import ProjectsSection from '../components/Home/ProjectsSection'
import Skills from '../components/Home/Skills'

const Home = () => {
  return (
    <div>
      <Hero />
      <ProjectsSection />
      <About />
      <Skills />
      <Contact />
    </div>
  )
}

export default Home