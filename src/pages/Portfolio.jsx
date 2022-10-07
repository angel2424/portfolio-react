import React from 'react'
import Project from '../components/Project'
import weather from '../images/weather_app.png'
import ecommerce from '../images/ecommerce_img.png'
import goodmemx from '../images/goodmemx.jpg'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className='portfolio_hero'>
        <h1 className='xxl'>Portfolio</h1>
        <p className='xs'>Welcome! Here you can view all my projects from personal to more professional work.</p>
      </div>
      <div className='portfolio_projectsSection'>
        <div className={'projects grid'}>
              <Project img={goodmemx} title={'Good Memories'}/>
              <Project img={weather} title={'Weather App'}/>
              <Project img={ecommerce} title={'E-commerce Product Page'}/>
          </div>
      </div>
    </div>
  )
}

export default Portfolio