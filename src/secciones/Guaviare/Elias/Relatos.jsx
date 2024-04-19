import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios, establecerPersonaje } from '../../../Redux/states/managerSlice';
import useDelta from '../../../hooks/useDelta';
import Audio from '../../../components/Audio';

const relatosVideo = 'https://res.cloudinary.com/dbqfefibl/video/upload/v1713447136/assets/guaviare/elias/loop-elias_ndadb5.mp4';

import './Relatos.css';

const Relatos = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('elias-youtube', 'rodriguez-bio', elementRef);

  useEffect(() => {
    dispatch(establecerPersonaje('linea-elias'));
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
          <div className='elias-relatos-frase'>
            <h3>"Actualmente nuestro sustento depende de estas pinturas, si no las cuidamos, no vamos a tener de qué sobrevivir"</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Relatos