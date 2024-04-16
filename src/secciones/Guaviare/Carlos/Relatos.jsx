import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import useDelta from '../../../hooks/useDelta';
import Audio from '../../../components/Audio';

const relatosVideo = 'https://res.cloudinary.com/dbqfefibl/video/upload/v1713230577/assets/guaviare/carlos/loop-carlos_fdlzk5.mp4';

import './Relatos.css';

const Relatos = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('carlos-youtube', 'carlos-galeria', elementRef);

  useEffect(()=>{
    dispatch(pararAudios());
    videoRef.current.play();
  }, [])

  const handleOnClick = ()=>{
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
    <div ref={elementRef} className='seccion carlos-relatos' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      {pintarVideo()}
      <div className='mask-general'>
        <div className="contenido-general">
          <div onClick={handleOnClick} className='carlos-relatos-audio'>
            <Audio id='carlos' titulo='“Llegamos a este territorio porque era muy productivo en Cacao”' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Relatos