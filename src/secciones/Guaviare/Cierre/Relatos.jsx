import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import useDelta from '../../../hooks/useDelta';

import relatosVideo from '../../../assets/guaviare/cierre/video-cierre.mp4';
import animacion from '../../../assets/guaviare/cierre/animacion.jpg';

import './Relatos.css';

const Relatos = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('rodriguez-youtube', 'rodriguez-youtube-2', elementRef);

  useEffect(() => {
    dispatch(pararAudios());
    videoRef.current.play();
  }, [])

  const handleOnClick = () => {
    videoRef.current.pause();
  }

  const pintarVideo = () => {
    return (
      <div className="guaviare-video">
        <video
          ref={videoRef}
          playsInline
          muted
          src={relatosVideo}>
        </video>
      </div>
    )
  }

  return (
    <div ref={elementRef} className='seccion cierre-relatos' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      {pintarVideo()}
      <div className='mask-general'>
        <div className="contenido-general">
          <div className='cierre-titulo'>
            <h2>RAUDAL DEL GUAYABERO</h2>
            <h2>Territorio de paz</h2>
          </div>
          <div className='cierre-extra'>
            <h2>[EXTRA]</h2>
            <h2>Evocaciones del Raudal</h2>
            <div>
              <img src={animacion} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Relatos