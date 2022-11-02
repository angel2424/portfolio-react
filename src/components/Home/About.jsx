import { useTranslation } from 'react-i18next';
import about from '../../images/about.jpg'

const About = () => {

  const { t } = useTranslation();

  return (
    <div className={'about flex'} id='about'>
        <img src={about} alt="" />
        <div className={`about_text flex direction-c jc-c`}>
            <h2 className='xl'>{t('about.title')}</h2>
            <p className='xs'>{t('about.text')}</p>
        </div>
    </div>
  )
}

export default About