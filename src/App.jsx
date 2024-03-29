import { NavLink, Link, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Home from './secciones/Home/Home';
import Guaviare from './secciones/Guaviare/Guaviare';
import Caqueta from './secciones/Caqueta/Caqueta';
import Cauca from './secciones/Cauca/Cauca';
import NotFound from './components/NotFound';

import abajo from './assets/generales/abajo.png';

import './App.css'
import './CanalA.css'

function App() {

  const departamento = useSelector(state => state.managerReducer.departamento);

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
