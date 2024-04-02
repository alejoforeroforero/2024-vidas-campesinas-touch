import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { establecerMostrarAbajo } from '../../../Redux/states/managerSlice';
import useDelta from '../../../hooks/useDelta';


import homeVideo from '../../../assets/home/guaviare3.mp4';

import './Intro.css';

const Intro = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('home-menu', 'home-menu', elementRef);

  useEffect(() => {
    dispatch(establecerMostrarAbajo(true));  
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
            <p>Vidas campesinas es un proyecto que busca reconocer y potenciar los procesos, las memorias y los aprendizajes de tres experiencias campesinas significativas, provenientes de tres departamentos: el Cauca, el Guaviare y el Caquetá.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro