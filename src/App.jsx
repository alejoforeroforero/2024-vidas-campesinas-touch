import { NavLink, Link, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Home from './secciones/Home/Home';
import Guaviare from './secciones/Guaviare/Guaviare';
import Caqueta from './secciones/Caqueta/Caqueta';
import Cauca from './secciones/Cauca/Cauca';
import NotFound from './components/NotFound';

import abajo from './assets/generales/abajo.png';
import ejeAImg from './assets/generales/ejeA.png'
import ejeBImg from './assets/generales/ejeB.png'

import './App.css'
import './CanalA.css'
import './CanalB.css'
import { useState } from 'react';
import GuaviareB from './secciones/Guaviare/GuaviareB';

function App() {

  const departamento = useSelector(state => state.managerReducer.departamento);

  const [showingCanalB, setShowingCanalB] = useState(false);

  const showCanalB = () => {
    setShowingCanalB(true);
  }

  const hideCanalB = () => {
    setShowingCanalB(false);
  }

  return (
    <>
      <nav className='menu'>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/Guaviare'>Guaviare</NavLink></li>
          <li><NavLink to='/Caqueta/'>Caqueta</NavLink></li>
          <li><NavLink to='/Cauca'>Cauca</NavLink></li>
        </ul>
      </nav>
      {showingCanalB &&
        <div className='ejeA'>
          <img onClick={hideCanalB}  src={ejeAImg} alt="ejeA" />
        </div>
      }
      {!showingCanalB &&
        <div className='ejeB'>
          <img onClick={showCanalB} src={ejeBImg} alt="ejeB" />
        </div>
      }
  
      <div className={showingCanalB ? 'canal-b canal-b-on' : 'canal-b canal-b-off'}>
        {departamento == 'guaviare' &&
          <GuaviareB />
        }
      </div>

      <div className='abajo'>
        <img src={abajo} alt="abajo" />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Guaviare' element={<Guaviare />} />
        <Route path='/Caqueta' element={<Caqueta />} />
        <Route path='/Cauca' element={<Cauca />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
