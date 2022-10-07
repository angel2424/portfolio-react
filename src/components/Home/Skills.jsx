import js from '../../images/js.png'
import react from '../../images/react.png'
import nextjs from '../../images/nextjs.png'
import sass from '../../images/sass.png'
import npm from '../../images/npm.png'
import github from '../../images/github.png'

const Skills = () => {

  return (
    <div className='skills'>
        
        <h2 className='xl'>Skills</h2>

        <div className={`skills_list flex flex-wrap ai-c jc-c`}>
            <div className='skill flex direction-c ai-c jc-c'>
                <img src={js} alt="" />
                <h4 className='xs'>Javascript</h4>
            </div>
            <div className='skill flex direction-c ai-c jc-c'>
                <img src={react} alt="" />
                <h4 className='xs'>React JS</h4>
            </div>
            <div className='skill flex direction-c ai-c jc-c'>
                <img src={nextjs} alt="" />
                <h4 className='xs'>Next JS</h4>
            </div>
            <div className='skill flex direction-c ai-c jc-c'>
                <img src={sass} alt="" />
                <h4 className='xs'>Sass</h4>
            </div>
            <div className='skill flex direction-c ai-c jc-c'>
                <img src={npm} alt="" />
                <h4 className='xs'>Npm</h4>
            </div>
            <div className='skill flex direction-c ai-c jc-c'>
                <img src={github} alt="" />
                <h4 className='xs'>Github</h4>
            </div>
        </div>

    </div>
  )
}

export default Skills