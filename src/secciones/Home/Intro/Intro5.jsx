import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import regresar from '../../../assets/generales/saltar-intro.png'
import { establecerMostrarAbajo } from '../../../Redux/states/managerSlice';
import useDelta from '../../../hooks/useDelta';
import logo from '../../../assets/generales/logo.png';
const libelula = 'https://res.cloudinary.com/dbqfefibl/image/upload/v1713229870/assets/home/libelula_mze5lz.png';
const hoja = 'https://res.cloudinary.com/dbqfefibl/image/upload/v1713229869/assets/home/hoja_x1tyai.png';
import scroll from '../../../assets/generales/abajo.png'


//import homeVideo from '../../../assets/home/guaviare3.mp4';
const homeVideo = 'https://res.cloudinary.com/dbqfefibl/video/upload/v1713230516/assets/home/guaviare3_whjehs.mp4';

import './Intro.css';

const Intro5 = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('home-intro4', 'home-intro6', elementRef);

  useEffect(() => {
    dispatch(establecerMostrarAbajo(false));
  }, [])

  return (
    <div ref={elementRef} className='seccion home-intro home-intro-5' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      <div className='mask-general'>
        <div className="contenido-general">
          <div className='home-intro-contenido'>
            <div className='home-intro-top'>
              <img src={logo} alt="" />
            </div>
            <div className='home-intro-textos'>
              <img src={hoja} alt="" />
              <img src={libelula} alt="" />
              <div className='home-intro-textos-p'>
                <p>Las campesinas y los campesinos cultivan, crían especies menores, ven por sus animales, pescan, recolectan frutos y moluscos, tejen, hacen canastos y bultos de distintas fibras, también trabajan en el turismo comunitario y transforman en pequeña escala algunos alimentos. Participan de los mercados y van por temporadas a las ciudades a vender sus productos, a ofrecer servicios. </p> 
              </div>
            </div>
            <div className='home-intro-bottom-2'>
              <img src={scroll} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="saltar">
        <NavLink to='/menu'> <img src={regresar} alt="" /></NavLink>
      </div>
    </div>
  )
}

export default Intro5