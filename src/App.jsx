import React, { useState, Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { pararAudios, establecerMostrarAbajo } from './Redux/states/managerSlice';
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

// import GuaviareB from './secciones/Guaviare/GuaviareB';
const GuaviareB = React.lazy(() => import('./secciones/Guaviare/GuaviareB'));

function App() {

  const departamento = useSelector(state => state.managerReducer.departamento);
  const mostrarAbajo = useSelector(state => state.managerReducer.mostrarAbajo);
  const dispatch = useDispatch();

  const [showingCanalB, setShowingCanalB] = useState(false);

  const showCanalB = () => {
    dispatch(pararAudios());
    dispatch(establecerMostrarAbajo(false));
    setShowingCanalB(true);
  }

  const hideCanalB = () => {
    dispatch(pararAudios());
    setShowingCanalB(false);
    dispatch(establecerMostrarAbajo(true));
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
          <img onClick={hideCanalB} src={ejeAImg} alt="ejeA" />
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

      {mostrarAbajo &&
        <div className='abajo'>
          <img src={abajo} alt="abajo" />
        </div>
      }
      <Suspense>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Guaviare' element={<Guaviare />} />
          <Route path='/Caqueta' element={<Caqueta />} />
          <Route path='/Cauca' element={<Cauca />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
