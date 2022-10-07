import React from 'react'

const Project = ( { title, img, alt, link } ) => {
  return (
    <div className='project cursor-link'>
        <a href={link}>
            <div className='project_imgContainer cursor-link'>
                <img className='cursor-link' src={img} alt={alt}/>
            </div>
            <h4 className='xs cursor-link'>{title}</h4>
        </a>
    </div>
  )
}

export default Project