import React, { useRef} from 'react'
import { FaArrowDown } from 'react-icons/fa'

const Hero = () => {

  const handRef = useRef(null)
  const hero = useRef(null)

  React.useEffect(() => {
      document.addEventListener('mousemove', (e) => {
          const {clientX} = e;
          const mouseX = clientX - handRef.current.clientWidth / 2;

          if(mouseX < hero.current.clientWidth / 2 ) {
            handRef.current.style.transform = `rotate(${mouseX / 80}deg)`
          } else if (mouseX > hero.current.clientWidth / 2 ) {
            handRef.current.style.transform = `rotate(${mouseX / 80}deg)`
          }
          // handRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      })
  }, [])

  return (
    <div className='hero' ref={hero}>
      <div className='hero_text flex direction-c jc-c ai-c'>
        <h2 className='m'>Hello World! I'm Angel <span className='hand' ref={handRef}>👋</span></h2>
        <h1 className='xxxl'>Front-end Web Developer</h1> 
        <h2 className='m'>Based in Piedras Negras, Coahuila, Mexico</h2>
        
        <button className='button xs'>
          <a className='button_link flex jc-c ai-c' href="/">
            About me
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