import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import useDelta from '../../../hooks/useDelta';

const relatosVideo = 'https://res.cloudinary.com/dbqfefibl/video/upload/v1713230577/assets/guaviare/rodriguez/loop-rodriguez_muhcv8.mp4';

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
          loop
          playsInline
          muted
          src={relatosVideo}>
        </video>
      </div>
    )
  }

  return (
    <div ref={elementRef} className='seccion rodriguez-relatos' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      {pintarVideo()}
      <div className='mask-general'>
        <div className="contenido-general">
          <h3>"Que la gente siempre mire la vida de otra manera. La violencia no es todo, la plata no es todo"</h3>
        </div>
      </div>
    </div>
  )
}

export default Relatos