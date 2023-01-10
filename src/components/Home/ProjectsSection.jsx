import { useLayoutEffect, useRef} from 'react'
import projects from '../../json/projects.json'
import projectsEs from '../../json/projects_es.json'
import Project from '../Project'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
gsap.registerPlugin(ScrollTrigger);


const ProjectsSection = () => {

  const { t, i18n } = useTranslation();

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
        stagger: .3,
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
    <div className='projects_section' ref={boxRef}>
        <h1 className='xl title'><span className='title-anim'>{t('work.title')}</span></h1>

        <div className={'projects flex'}>
          {
            i18n.language === 'es' ? projectsEs.map((project, index) => (
              index < 2 &&
                <Project index={index} img={project?.img} title={project?.title} description={project?.description} tech={project?.tech} live={project?.live} github={project?.github}/>
            )) 
          :
            projects.map((project, index) => (
              index < 2 &&
                <Project index={index} img={project?.img} title={project?.title} description={project?.description} tech={project?.tech} live={project?.live} github={project?.github}/>
            )) 
        }
        </div>
        <div className='projects_sectionButton'>
          <button className='button xs'>
            <a className='button_link flex jc-c ai-c' href="/portfolio">
              {t('work.button')}
            </a>
          </button>
        </div>
    </div>
  )
}

export default ProjectsSection