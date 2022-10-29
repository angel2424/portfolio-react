import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import CustomCursor from './components/CustomCursor';
import { useLayoutEffect, useState } from 'react';
import { useEffect } from 'react';
import Loader from './components/Loader';
import ProjectPage from './pages/ProjectPage';
import Footer from './components/Footer'
 
function App() {

  const [animation, setAnimation] = useState(true)

  useLayoutEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 2700)
  }, [])

  return (
    <> 
    { animation ? 
    <Loader />
    :
    <>
      <CustomCursor />
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/portfolio' element={<Portfolio />}/>
        <Route path='/project/:slug' element={<ProjectPage />}/>
      </Routes>
      <Footer />
    </>
  }
  </>
  );
}

export default App;
