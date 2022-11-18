import { useTranslation } from 'react-i18next';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Project = ( { title, img, alt, description, tech, live, github } ) => {

  const { t } = useTranslation();

  return (
    <div className='project' onLoad={ScrollTrigger.refresh()}>
      <div className='project_imgContainer cursor-link'>
          <span className='project_imgOverlay'>
            <button className='button xs'>
              <a target='_blank' rel="noreferrer" className='button_link flex jc-c ai-c' href={live}>
                {t('work.projectButton1')}
              </a>
            </button>              
            {
              github === "" ?
                null              
              : 
                <button className='button xs'>
                  <a target='_blank' rel="noreferrer" className='button_link flex jc-c ai-c' href={github}>
                    {t('work.projectButton2')}
                  </a>
                </button>                
            }
          </span>
          <img className='cursor-link' src={img} alt={alt}/>
      </div>
      <div className='project_textContainer'>
        <h4 className='xs'>{title}</h4>
        <p className='xs'>{description}</p>
        <div className='project_tech flex'>
          {
            tech?.map(skill => (
              <span>{skill}</span>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Project