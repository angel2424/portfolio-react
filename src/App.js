import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import CustomCursor from './components/CustomCursor';
 
function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/portfolio' element={<Portfolio />}/>
      </Routes>
    </>
  );
}

export default App;
