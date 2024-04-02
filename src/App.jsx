import React, { useState, Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { pararAudios, establecerMostrarAbajo, establecerCanalBOn } from './Redux/states/managerSlice';
import Home from './secciones/Home/Home';
import Guaviare from './secciones/Guaviare/Guaviare';
import Caqueta from './secciones/Caqueta/Caqueta';
import Cauca from './secciones/Cauca/Cauca';
import NotFound from './components/NotFound';

import menu from './assets/generales/menu.png';
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
  const mostrarFlechasCanales = useSelector(state => state.managerReducer.mostrarFlechasCanales);
  const canalBOn = useSelector(state => state.managerReducer.canalBOn);
  const [showingMenu, setShowingMenu] = useState(false);

  const dispatch = useDispatch();

  const showCanalB = () => {
    dispatch(pararAudios());
    dispatch(establecerMostrarAbajo(false));
    dispatch(establecerCanalBOn(true))
  }

  const hideCanalB = () => {
    dispatch(pararAudios());
    dispatch(establecerMostrarAbajo(true));
    dispatch(establecerCanalBOn(false))
  }

  return (
    <>
      <div className='menu-hamburguesa'>
        <img onClick={() => { setShowingMenu(!showingMenu) }} src={menu} alt="menu" />
      </div>
      {showingMenu &&
        <nav className='menu'>
          <ul>
            <li><NavLink onClick={() => { setShowingMenu(false) }}  to='/'>Home</NavLink></li>
            <li><NavLink onClick={() => { setShowingMenu(false) }}  to='/Guaviare'>Guaviare</NavLink></li>
            <li><NavLink onClick={() => { setShowingMenu(false) }}  to='/Caqueta/'>Caqueta</NavLink></li>
            <li><NavLink onClick={() => { setShowingMenu(false) }}  to='/Cauca'>Cauca</NavLink></li>
          </ul>
        </nav>
      }
      {canalBOn &&
        <div className='ejeA'>
          <img onClick={hideCanalB} src={ejeAImg} alt="ejeA" />
        </div>
      }
      {!canalBOn && mostrarFlechasCanales &&
        <div className='ejeB'>
          <img onClick={showCanalB} src={ejeBImg} alt="ejeB" />
        </div>
      }

      <div className={canalBOn ? 'canal-b canal-b-on' : 'canal-b canal-b-off'}>
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
