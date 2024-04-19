import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { establecerMostrarAbajo } from '../../../Redux/states/managerSlice';
import useDelta from '../../../hooks/useDelta';
import logo from '../../../assets/generales/logo.png';
const libelula = 'https://res.cloudinary.com/dbqfefibl/image/upload/v1713229870/assets/home/libelula_mze5lz.png';
const hoja = 'https://res.cloudinary.com/dbqfefibl/image/upload/v1713229869/assets/home/hoja_x1tyai.png';
import scroll from '../../../assets/generales/scroll.png'


//import homeVideo from '../../../assets/home/guaviare3.mp4';
const homeVideo = 'https://res.cloudinary.com/dbqfefibl/video/upload/v1713449776/assets/home/loop-intro_afrfib.mp4';

import './Intro.css';

const Intro = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta(null, 'home-intro2', elementRef);

  useEffect(() => {
    dispatch(establecerMostrarAbajo(false));
    videoRef.current.play();
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
    <div ref={elementRef} className='seccion home-intro' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      {pintarVideo()}
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
                <p>Campesinos y campesinas se nombran por los distintos rincones y centros del país. Han puesto el foco sobre su vínculo directo con la tierra y la naturaleza, llamando la atención sobre sus formas de vivir mientras se hacen familia y comunidad, mientras estudian, trabajan e inventan opciones de vida.</p>
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

export default Intro