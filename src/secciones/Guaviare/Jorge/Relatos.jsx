import { useEffect, useRef } from 'react';
import useDelta from '../../../hooks/useDelta';
import Audio from '../../../components/Audio';

import relatosVideo from '../../../assets/guaviare/jorge/loop-jorge.mp4';

import './Relatos.css';

const Relatos = () => {

  const videoRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('jorge-bio', 'jorge-relatos');

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
          className="guaviare-video-video"
          src={relatosVideo}>
        </video>
      </div>
    )
  }

  return (
    <div className='seccion jorge-relatos' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      {pintarVideo()}
      <div className='mask-general'>
        <div className="contenido-general">
          <div className='jorge-relatos-audio'>
            <Audio id='jorge2' titulo='"Cuando llegué al Raudal"' />
            <Audio id='jorge3' titulo='Jorge 2' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Relatos