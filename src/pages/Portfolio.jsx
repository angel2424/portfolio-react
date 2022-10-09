import React from 'react'
import Project from '../components/Project'
import projects from '../json/projects.json'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className='portfolio_hero'>
        <h1 className='xxl'>Portfolio</h1>
        <p className='xs'>Welcome! Here you can view all my projects from personal to more professional work.</p>
      </div>
      <div className='portfolio_projectsSection'>
      <div className={'projects grid'}>
          {projects.map(project => (
            <Project key={project.id} img={project.img} title={project.title} link={`/project/${project.slug}`}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio