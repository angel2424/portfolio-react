import React from 'react'
import { FaFacebookSquare, FaGithub, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <h1 className='l' style={{fontWeight: 500}}>ardzcodes</h1>
        <div className='footer_copySocial flex jc-sb'>
            <p className='xxs' style={{color: '#A1A1A1'}}>Copyright 2022 © ardzcodes. All rights reserved</p>
            <div className='nav_icons footer_icons flex'>
                  <a href="/"><FaInstagram size={23} /></a>
                  <a href="/"><FaFacebookSquare size={23} /></a>
                  <a href="/"><FaGithub size={23} /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer