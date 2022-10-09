import projects from '../../json/projects.json'
import Project from '../Project'

const ProjectsSection = () => {


  return (
    <div className='projects_section'>
        <h1 className='xl'>My favorite work</h1>

        <div className={'projects grid'}>
          {projects.map(project => (
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