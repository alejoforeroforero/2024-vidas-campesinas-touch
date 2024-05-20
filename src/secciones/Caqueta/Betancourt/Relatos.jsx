import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import useDelta from '../../../hooks/useDelta';
import Audio from '../../../components/Audio';
import planta from '../../../assets/caqueta/betancourt/mano-planta.png'

const relatosVideo = 'https://res.cloudinary.com/dbqfefibl/video/upload/v1713840396/assets/caqueta/moyano/loop-moyano_ztoaun.mp4';

import './Relatos.css';

const Relatos = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('betancourt-youtube-1', 'betancourt-youtube-2', elementRef);

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
    <div ref={elementRef} className='seccion betancourt-relatos' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      {pintarVideo()}
      <div className='mask-general'>
        <div className="contenido-general">
          <div onClick={handleOnClick} className='betancourt-relatos-audio'>
            <Audio id='audio-moyano' titulo='“Creo que hay nuevas oportunidades. Se puede producir de manera diferente y enamorarse del campo nuevamente”' />
          </div>
          <div className='betancourt-relatos-img'>
            <img src={planta} alt="planta" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Relatos