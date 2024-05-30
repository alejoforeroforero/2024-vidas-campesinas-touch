import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import useDelta from '../../../hooks/useDelta';
import Audio from '../../../components/Audio';

//const relatosVideo = 'https://res.cloudinary.com/dhz9jfn78/video/upload/v1716267084/caqueta/moyano/loop-moyano_z0pbba.mp4';

import './Relatos2.css';

const Relatos2 = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('campesina-youtube-1', 'campesina-youtube-2', elementRef);

  useEffect(()=>{
    dispatch(pararAudios());
    //videoRef.current.play();
  }, [])

  const handleOnClick = ()=>{
    //videoRef.current.pause();
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
    <div ref={elementRef} className='seccion campesina-relatos-2' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      {/* {pintarVideo()} */}
      <div className='mask-general'>
        <div className="contenido-general">
          <div onClick={handleOnClick} className='campesina-relatos-audio-2'>
            <Audio id='audio-campesina-2' titulo='“Siempre portamos nuestro radio, porque en cualquier momento se presenta alguna necesidad de la comunidad”' />
          </div>
          {/* <div className='campesina-relatos-frase-2'>
            <h3>“Remedios con plantas naturales y de por aquí, de esta tierra…”</h3>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Relatos2