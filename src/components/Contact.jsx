import React from 'react'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <span className='s' style={{color: '#31809D'}}>Want to hire me?</span>
        <h2 className='xl'>
          Let's get in contact!
        </h2>

        <form name="contact" method="POST" data-netlify="true">
          <div className='contact_inputs flex'>
            <div>
            <p>
              <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Subject: <input type="email" name="email" /></label>
            </p>
          </div>
          <div className='form_message'>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            </div>
          </div>
          <p>
          <button className='button xs' type='submit'>
            <a className='button_link flex jc-c ai-c' href="/">
              Submit
            </a>
          </button>
          </p>
        </form>
    </div>
  )
}

export default Contact