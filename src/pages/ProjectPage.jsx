import React from 'react'
import { useParams } from 'react-router-dom'
import Spline from '@splinetool/react-spline';
import project from '../json/projectContent.json'

const ProjectPage = () => {

    const { slug } = useParams();

  return (
    <div className='page'>
      <div className='page_hero'>
        <div className='page_heroContent'>
          <h1 className='xxl'>{project[slug].title}</h1>
          <h3 className='xxs'>Wedding video and photography business</h3>
        </div>
          <Spline className='spline' scene="https://prod.spline.design/mxBEDA7fNDCREo0D/scene.splinecode" />
      </div>
    </div>
  )
}

export default ProjectPage