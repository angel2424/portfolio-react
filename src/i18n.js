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
                about: 'About',
                portfolio: 'Portfolio',
                contact: 'Let\'s work together!'
            },
            hero: {
                hello: 'Hello World! I\'m Angel',
                role: 'Front-end Web Developer',
                location: 'Based in Piedras Negras, Coahuila, Mexico',
                button: 'About me'           
            },
            work: {
                title: 'My favorite work',
                button: 'View more of my work'     
            }
        }
      },
      es: {
        translation: {
            header: {
                about: 'Acerca de Mi',
                portfolio: 'Portfolio',
                contact: '¡Trabajemos juntos!'
            },
            hero: {
                hello: 'Hola Mundo! Soy Angel',
                role: 'Desarrollador Web',
                location: 'Ubicado en Piedras Negras, Coahuila, Mexico',
                button: 'Acerca de mi'
            },
            work: {
                title: 'Mi trabajo favorito',
                button: 'Conoce mas de mi trabajo'          
            }
        }
      }
    }
  });

export default i18n;