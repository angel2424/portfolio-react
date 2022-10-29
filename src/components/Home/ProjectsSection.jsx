import { useEffect, useRef} from 'react'
import projects from '../../json/projects.json'
import Project from '../Project'

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const ProjectsSection = () => {

  const boxRef = useRef();
  const tl = useRef();

  useEffect(() => {

    // -- ANIMATION CODE HERE --

    let ctx = gsap.context(() => {
    
      // all our animations can use selector text like ".box" 
      // and it's properly scoped to our component

      tl.current = gsap.timeline()
      .to(".box", {
        rotate: 360
      })
      .to(".circle", {
        x: 100
      });

    }, boxRef); // <- IMPORTANT! Scopes selector text
    
    return () => ctx.revert(); // cleanup
    

  }, [])
  


  return (
    <div className='projects_section' ref={boxRef}>
        <h1 className='xl'>My favorite work</h1>

        <div className={'projects flex'}>
          {projects.map((project, index) => (
            index < 2 &&
              <Project key={project.id} img={project.img} title={project.title} link={`/project/${project.slug}`}/>
          ))}
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