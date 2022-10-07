import about from '../../images/about.jpg'

const About = () => {

  return (
    <div className={'about flex'}>
        <img src={about} alt="" />
        <div className={`about_text flex direction-c jc-c`}>
            <h2 className='xl'>About me</h2>
            <p className='xs'>Hello there, I'm Angel Rodriguez, an entry-level front-end developer with a background in customer service. I enjoyed solving problems for clients in all types of situations, that's why web development was a no-brainer for me. I want to work in a company where I can receive mentorship and grow professionally as a developer. Also meeting people that are as passionate as I am is a must 😊.
            </p>
            <button className='button xs'>
              <a className='button_link flex jc-c ai-c' href="/">
                Get to know me a bit more
              </a>
            </button>
        </div>
    </div>
  )
}

export default About