import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import useDelta from '../../../hooks/useDelta';
import Audio from '../../../components/Audio';

const relatosVideo = 'https://res.cloudinary.com/dbqfefibl/video/upload/v1713840396/assets/caqueta/moyano/loop-moyano_ztoaun.mp4';

import './Relatos.css';

const Relatos = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('caleno-youtube-1', 'caleno-youtube-2', elementRef);

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
    <div ref={elementRef} className='seccion caleno-relatos' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      {pintarVideo()}
      <div className='mask-general'>
        <div className="contenido-general">
          <div onClick={handleOnClick} className='caleno-relatos-audio'>
            <Audio id='audio-moyano' titulo='“Gracias a Dios la guerra se calmó y volvimos a levantar cabeza”' />
            <Audio id='audio-moyano' titulo='“El reto como familia es aprovechar lo que producimos en la finca”' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Relatos