import { useEffect, useLayoutEffect, useRef} from 'react'
import projects from '../../json/projects.json'
import projectsEs from '../../json/projects_es.json'
import Project from '../Project'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { useTranslation } from 'react-i18next';
gsap.registerPlugin(ScrollTrigger);


const ProjectsSection = () => {

  const { t, i18n } = useTranslation();

  const boxRef = useRef();
  const sectionTl = useRef();

  useLayoutEffect(() => {

    // -- ANIMATION CODE HERE --

    let ctx = gsap.context(() => {
    
      // all our animations can use selector text like ".box" 
      // and it's properly scoped to our component

      sectionTl.current = gsap.timeline()
      .to(".title-anim", {
        y: 0,
        delay: .1,
        duration: .3,
        scrollTrigger: {
          trigger: '.projects',
          end: '200px'
        }
      })
      .to(".projects-anim", {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.projects-anim',  
        }
      })

    }, boxRef); // <- IMPORTANT! Scopes selector text
    
    return () => ctx.revert(); // cleanup
    

  }, [])
  


  return (
    <div className='projects_section' ref={boxRef}>
        <h1 className='xl title'><span className='title-anim'>{t('work.title')}</span></h1>

        <div className={'projects projects-anim flex'}>
          {
            i18n.language === 'es' ? projectsEs.map((project, index) => (
              index < 2 &&
                <Project key={project.id} img={project.img} title={project.title} link={`/project/${project.slug}`}/>
            )) 
          :
            projects.map((project, index) => (
              index < 2 &&
                <Project key={project.id} img={project.img} title={project.title} link={`/project/${project.slug}`}/>
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