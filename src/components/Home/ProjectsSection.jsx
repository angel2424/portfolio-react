import React, { useEffect, useState } from 'react'
import weather from '../../images/weather_app.png'
import ecommerce from '../../images/ecommerce_img.png'
import Project from '../Project'

const ProjectsSection = () => {
  
  const [size, setSize] = useState(null)

  useEffect(() => {
      setSize(window.innerWidth)
  },[])

  return (
    <div className='projects_section'>
        <h1 className='xl'>My favorite work</h1>

        <div className={'projects grid'}>
            <Project img={weather} title={'Weather App'}/>
            <Project img={ecommerce} title={'E-commerce Product Page'}/>
        </div>
        <div className='projects_sectionButton'>
          <button className='button xs'>
            <a className='button_link flex jc-c ai-c' href="/portfolio">
              View more of my work
            </a>
          </button>
        </div>
    </div>
  )
}

export default ProjectsSection