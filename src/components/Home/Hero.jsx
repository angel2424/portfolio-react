import React, { useRef} from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { gsap } from "gsap";
import SplitType from 'split-type'
import { useTranslation } from 'react-i18next';


const Hero = () => {

  const { t } = useTranslation();

  const handRef = useRef(null)

  React.useEffect(() => {
      document.addEventListener('mousemove', (e) => {
          const {clientX} = e;
          const mouseX = clientX - handRef.current.clientWidth / 2;

          if(mouseX < el.current.clientWidth / 2 ) {
            handRef.current.style.transform = `rotate(${mouseX / 80}deg)`
          } else if (mouseX > el.current.clientWidth / 2 ) {
            handRef.current.style.transform = `rotate(${mouseX / 80}deg)`
          }
          // handRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      })
  }, [])

  const el = useRef();
  const type = useRef();
  const herotl = useRef();

  React.useLayoutEffect(() => {

    // eslint-disable-next-line no-unused-vars
    const text = new SplitType('.type')

    // -- ANIMATION CODE HERE --

    let ctx = gsap.context(() => {
    
      // all our animations can use selector text like ".box" 
      // and it's properly scoped to our component
      
      herotl.current = gsap.timeline()
      .to(".char", {
        y: 0,
        stagger: 0.05,
        delay: .1,
        duration: .1
      })
      .to('.opacity-anim', {
        opacity: 1,
        duration: 1
      }, '-=.5')

    }, el); // <- IMPORTANT! Scopes selector text
    
    return () => ctx.revert(); // cleanup
    

  }, [])

  return (
    <div className='hero' ref={el}>
      <div className='hero_text flex direction-c jc-c ai-c'>
        <h2 className='m opacity-anim'>{t('hero.hello')}<span className='hand' ref={handRef}>👋</span></h2>
        <h1 className='xxxl type' ref={type}>{t('hero.role')}</h1> 
        <h2 className='m opacity-anim'>{t('hero.location')}</h2>
        
        <button className='button xs opacity-anim'>
          <a className='button_link flex jc-c ai-c' href="/">
            {t('hero.button')}
          </a>
        </button>
        
      </div>
      <div className='hero_mouse flex ai-c jc-c'>
        <FaArrowDown size={23}/>
      </div>
    </div>
  )
}

export default Hero