import React, { useLayoutEffect, useRef } from 'react'
import Project from '../components/Project'
import projects from '../json/projects.json'
import projectsEs from '../json/projects_es.json'
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';
import { gsap } from "gsap";
import Contact from '../components/Contact'


const Portfolio = () => {

  const { i18n, t } = useTranslation();

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
        scrollTrigger: {
          trigger: '.projects',
          end: '200px'
        }
      })
      gsap.to(".project", {
        opacity: 1,
        duration: .3,
        scrollTrigger: {
          trigger: '.project',
          end: 'bottom top'
        }
      })
      gsap.to(".projects_sectionButton .button", {
        opacity: 1,
        duration: .3,
        scrollTrigger: {
          trigger: '.projects_sectionButton .button'
        }
      })
      gsap.from('.project_textContainer h4', {
        opacity: 0,
        duration: .4,
        scrollTrigger: {
          trigger: '.project_textContainer h4'
        }
      })
      gsap.from('.project_tech', {
        opacity: 0,
        duration: .4,
        scrollTrigger: {
          trigger: '.project_tech'
        }
      })

    }, boxRef); // <- IMPORTANT! Scopes selector text
    
    return () => ctx.revert(); // cleanup
    

  }, [])

  return (
    <>
      <Helmet>
        <title>ardzcodes - Portfolio</title>
        <meta name="keywords" content="HTML,CSS,JavaScript" />
        <meta
          name="description"
          content="Ideas page using react helmet very easy to implement "
        />
      </Helmet>
      <div className='portfolio' ref={boxRef}>
        <div className='portfolio_hero'>
          <h1 className='xxl'>Portfolio</h1>
          <p className='xs'>{t('portfolio.text')}</p>
        </div>
        <div className='portfolio_projectsSection'>
        <div className={'projects grid'}>
            {
                i18n.language === 'es' ? projectsEs.map((project, index) => (
                    <Project key={project?.id} img={project?.img} title={project?.title} description={project?.description} tech={project?.tech} live={project?.live} github={project?.github}/>
                )) 
              :
                projects.map((project, index) => (
                    <Project key={project?.id} img={project?.img} title={project?.title} description={project?.description} tech={project?.tech} live={project?.live} github={project?.github}/>
                )) 
            } 
          </div>
        </div>
      </div>
      <Contact />
    </>
  )
}

export default Portfolio