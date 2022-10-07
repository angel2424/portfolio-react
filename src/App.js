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
        <Route path='/' element={<Home />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
      </Routes>
    </>
  );
}

export default App;
