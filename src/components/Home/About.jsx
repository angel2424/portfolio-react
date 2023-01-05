import { useTranslation } from 'react-i18next';
import about from '../../images/about_me_portrait.jpg'
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from 'react';

const About = () => {

  const { t } = useTranslation();

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
          trigger: '.about_text h2',
        }
      })
      gsap.from(".about_text p", {
        opacity: 0,
        duration: .3,
        scrollTrigger: {
          trigger: '.about_text p',
        }
      })
      gsap.from(".about_img", {
        opacity: 0,
        duration: .4,
        scrollTrigger: {
          trigger: '.about_img',
          start: '-50px bottom'
        }
      })

    }, boxRef); // <- IMPORTANT! Scopes selector text
    
    return () => ctx.revert(); // cleanup
    

  }, [])

  return (
    <div className={'about flex'} id='about' ref={boxRef}>
        <img className='about_img' src={about} alt="" />
        <div className={`about_text flex direction-c jc-c`}>
            <h2 className='xl title'><span className='title-anim'>{t('about.title')}</span></h2>
            <p className='xs'>{t('about.text')}</p>
        </div>
    </div>
  )
}

export default About