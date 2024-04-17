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

const Intro4 = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('home-intro3', 'home-intro5', elementRef);

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
    <div ref={elementRef} className='seccion home-intro home-intro-4' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
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
                <p>Las vidas campesinas son interculturales y resultan de procesos continuos de poblamiento, donde confluyen las trayectorias indígenas, con las de comunidades negras, con las de gentes que han hecho de los lugares su hogar.</p>
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

export default Intro4