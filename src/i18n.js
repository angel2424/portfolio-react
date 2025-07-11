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
                text: "Hi, I’m a front-end developer with over two years of professional experience building user interfaces that prioritize clarity, consistency, and usability. My focus lies in crafting intuitive UI and improving user experience, whether it’s designing from the ground up or refining existing platforms.\n\nAt my full-time role, I’ve worked on 10+ large-scale projects, collaborating closely with back-end developers and fellow front-end engineers to bring designs to life. I specialize in creating and implementing UI design, development, and ensuring that every interface not only looks great but feels effortless to use.\n\nOutside of my 9–5, I run a small business developing websites for small and medium-sized businesses. I’m passionate about helping clients solve real problems through strategic, well-thought-out design and development.\n\nI care deeply about delivering work that’s both functional and visually polished. Whether I’m working solo or with a team, I aim to make collaboration smooth, communication clear, and results impactful."
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
              text: 'Hola, soy desarrollador front-end con más de dos años de experiencia profesional creando interfaces que priorizan la claridad, la consistencia y la usabilidad. Me enfoco en diseñar interfaces intuitivas y mejorar la experiencia del usuario, ya sea construyendo desde cero o refinando plataformas existentes.\n\nEn mi trabajo de tiempo completo, he participado en más de 10 proyectos a gran escala, colaborando de cerca con desarrolladores back-end y otros front-end para dar vida a los diseños. Me especializo en diseñar e implementar interfaces, desarrollarlas, y asegurarme de que cada una no solo luzca bien, sino que se sienta natural de usar.\n\nFuera de mi horario laboral, dirijo un pequeño negocio desarrollando sitios web para pequeñas y medianas empresas. Me apasiona ayudar a mis clientes a resolver problemas reales a través de diseño y desarrollo estratégico y bien pensado.\n\nMe importa profundamente entregar un trabajo que sea funcional y visualmente pulido. Ya sea trabajando de manera individual o en equipo, siempre busco que la colaboración sea fluida, la comunicación clara y los resultados impactantes.'
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
