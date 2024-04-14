import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import useDelta from '../../../hooks/useDelta';
import Audio from '../../../components/Audio';

import relatosVideo from '../../../assets/guaviare/elias/loop-elias.mp4';

import './Relatos.css';

const Relatos = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('elias-youtube', 'rodriguez-bio', elementRef);

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
          loop
          playsInline
          muted
          src={relatosVideo}>
        </video>
      </div>
    )
  }

  return (
    <div ref={elementRef} className='seccion elias-relatos' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      {pintarVideo()}
      <div className='mask-general'>
        <div className="contenido-general">
          <h3>"Actualmente nuestro sustento depende de estas pinturas, si no las cuidamos, no vamos a tener de qué sobrevivir"</h3>
        </div>
      </div>
    </div>
  )
}

export default Relatos