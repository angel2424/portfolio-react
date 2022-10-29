import React, { Suspense } from 'react'
import { useParams } from 'react-router-dom'
import project from '../json/projectContent.json'
import { FaGithub } from 'react-icons/fa'
import nextjs from '../images/nextjs.png'
import greensock from '../images/greensock.png'
import netlify from '../images/netlify.png'
import graph from '../images/graphql.png'

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const ProjectPage = () => {

    const { slug } = useParams();

  return (
    <div className='page'>
      <div className='page_hero'>
        <div className='page_heroContent'>
          <h1 className='xxl'>{project[slug].title}</h1>
          <h3 className='xxs'>Wedding video and photography business</h3>
          <button className='button xs' style={{marginRight: '25px'}}>
              <a className='button_link flex jc-c ai-c' href="/">
                Live website
              </a>
          </button>
          <button className='button xs'>
              <a className='button_link flex jc-c ai-c' href="/">
                <FaGithub className='page_icon'/> Github
              </a>
          </button>
        </div>
        <div className='spline_container'>
          <Suspense fallback={<div className='spline_loader'>Loading...</div>}>
            <Spline className='spline' scene="https://prod.spline.design/bqXvmCzxW1ubnq0B/scene.splinecode" />
            <span className='page_bgSpan'>Web <br /> Design </span>
          </Suspense>
        </div>
      </div>
      <div className='page_tech'>
        <h2 className='xl'>Built with</h2>
        <div className='page_logos'>

          <div className={`skills_list flex flex-wrap ai-c jc-c`}>
            <div className='skill flex direction-c ai-c jc-c'>
                <img src={nextjs} alt="" />
                <h4 className='xs'>Next JS</h4>
            </div>
            <div className='skill flex direction-c ai-c jc-c'>
                <img src={graph} alt="" />
                <h4 className='xs'>Graph CMS</h4>
            </div>
            <div className='skill flex direction-c ai-c jc-c'>
                <img src={netlify} alt="" />
                <h4 className='xs'>Netlify</h4>
            </div>
            <div className='skill flex direction-c ai-c jc-c'>
                <img src={greensock} alt="" />
                <h4 className='xs'>GSAP</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage