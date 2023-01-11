import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
            header: {
                home: 'Home',
                portfolio: 'Portfolio',
                contact: 'Let\'s work together!'
            },
            hero: {
                hello: 'Hello World! I\'m Angel',
                role: 'Front-end Web Developer',
                location: 'Based in Piedras Negras, Coahuila, Mexico',
                button: 'Let\'s work together!'        
            },
            work: {
                title: 'My favorite work',
                projectButton1: "Live Website",
                projectButton2: "Github",
                button: 'View more of my work'     
            },
            about: {
                title: 'About Me',
                text: 'Hello there, I\'m Angel Rodriguez, a front-end developer with a background in customer service. I enjoy solving problems, that\'s why I fell in love with web development. I have experience developing two freelance projects for a local business and several personal projects (You can check them out in the portfolio page). I am currently looking for a front-end developer position where I can expand my knowledge in development and meet people that are as passionate as I am in tech 😊. I am open to remote jobs and also relocating if needed.'     
            }, 
            contact : {
              title: 'Let\'s get in contact!',
              subTitle: 'Want to hire me?',
              name: 'Your Name',
              email: 'Your Email',
              subject: 'Subject',
              message: 'Message',
              btn: 'Submit'
            },
            portfolio: {
              text: 'Welcome! Here you can view all my projects from personal to more professional work.'
            }
        }
      },
      es: {
        translation: {
            header: {
                home: 'Inicio',
                portfolio: 'Portfolio',
                contact: '¡Trabajemos juntos!'
            },
            hero: {
                hello: '¡Hola Mundo! Soy Angel',
                role: 'Desarrollador Web',
                location: 'Ubicado en Piedras Negras, Coahuila, Mexico',
                button: '¡Trabajemos juntos!'
            },
            work: {
                title: 'Mi trabajo favorito',
                projectButton1: "Live Website",
                projectButton2: "Github",
                button: 'Conoce mas de mi trabajo'      
            },
            about: {
              title: 'Acerca de Mi',
              text: 'Hola, mi nombre es Angel Rodriguez, soy un desarrollador front-end con anterior experiencia en servicio al cliente. Disfruto resolver problemas, es por eso que me enamore del desarrollo web y también diversos proyectos personales (Los puedes encontrar en la sección portfolio). Actualmente estoy buscando una posición como front-end developer donde pueda expandir mi conocimiento en programación y donde pueda conocer a más personas que sean igual de apasionadas por el desarrollo web como yo 😊. Estoy abierto a trabajar remotamente o a reubicarme si es necesario.'     
          },
          contact : {
            title: '¡Comunicate conmigo!',
            subTitle: '¿Quieres contratarme?',
            name: 'Nombre',
            email: 'Correo Electrónico',
            subject: 'Asunto',
            message: 'Mensaje',
            btn: 'Enviar'
          },
          portfolio: {
            text: '¡Bienvenido! Aqui puedes encontrar la mayoria de mis proyectos, desde los personales a los mas profesionales'
          }
        }
      }
    }
  });

export default i18n;