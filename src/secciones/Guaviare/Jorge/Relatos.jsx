import { useEffect, useRef } from 'react';
import useDelta from '../../../hooks/useDelta';
import Audio from '../../../components/Audio';

import relatosVideo from '../../../assets/guaviare/jorge/loop-jorge.mp4';

import './Relatos.css';

const Relatos = () => {

  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('jorge-youtube', 'jorge-galeria', elementRef);

  useEffect(()=>{
    videoRef.current.play();
  }, [])

  const pintarVideo = () => {
    return (
      <div className="guaviare-video">
        <video
          ref={videoRef}
          loop
          playsInline
          muted
          src={relatosVideo}>
        </video>
      </div>
    )
  }

  return (
    <div ref={elementRef} className='seccion jorge-relatos' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      {pintarVideo()}
      <div className='mask-general'>
        <div className="contenido-general">
          <div className='jorge-relatos-audio'>
            <Audio id='jorge2' titulo='"Cuando llegué al Raudal"' />
            <Audio id='jorge3' titulo='"Somos nuestras propias ambulancias"' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Relatos