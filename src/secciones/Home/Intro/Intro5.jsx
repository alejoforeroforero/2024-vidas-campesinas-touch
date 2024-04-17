import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { establecerMostrarAbajo } from '../../../Redux/states/managerSlice';
import useDelta from '../../../hooks/useDelta';
import logo from '../../../assets/generales/logo.png';
import libelula from '../../../assets/home/libelula.png';
import hoja from '../../../assets/home/hoja.png';
import scroll from '../../../assets/generales/scroll.png'


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

  const pintarVideo = () => {
    return (
      <div className="video-bg-general">
        <video
          ref={videoRef}
          loop
          playsInline
          muted
          src={homeVideo}>
        </video>
      </div>
    )
  }

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
            <div className='home-intro-bottom'>
              <img src={scroll} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro5