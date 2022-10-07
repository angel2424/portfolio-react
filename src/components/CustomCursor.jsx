import React, { useEffect, useRef, useState } from 'react'

const CustomCursor = () => {
    const cursorRef = useRef(null)

    const [isLink, setIsLink] = useState(false);
    const [isMobile, setIsMobile] = useState(false)

    React.useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            const {clientX, clientY} = e;
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;

            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        })

        if(window.innerWidth < 1100) {
          setIsMobile(true)
        } else {
          setIsMobile(false)
        }


        document.addEventListener('mouseover', (e) => {   
          if(
            e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.tagName === 'svg' || e.target.tagName === 'path' ||
            e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT'
            ) 
          {
            setIsLink(true)
          } 
          else if (e.target.classList.contains('cursor-link')) {
            setIsLink(true)
          }
          else {
            setIsLink(false)
          }
        })

    }, [])


  return (
    <>
    { isMobile ?
    
      <></>

      :

      <div className={` ${isLink ? 'app-cursor2' : 'app-cursor'}`} ref={cursorRef}></div>
    
    }
    </>
  )
}

export default CustomCursor