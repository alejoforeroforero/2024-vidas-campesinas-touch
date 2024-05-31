import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import useDelta from '../../../hooks/useDelta';
import Audio from '../../../components/Audio';
import grafica from '../../../assets/cauca/cimarrona/baston_3.png'

//const relatosVideo = 'https://res.cloudinary.com/dhz9jfn78/video/upload/v1716267084/caqueta/moyano/loop-moyano_z0pbba.mp4';

import './Relatos2.css';

const Relatos2 = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('cimarrona-relatos-1', 'cimarrona-youtube-1', elementRef);

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
    <div ref={elementRef} className='seccion cimarrona-relatos-2' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      {/* {pintarVideo()} */}
      <div className='mask-general'>
        <div className="contenido-general">
          <div className="cimarrona-relatos-2-grafica">
            <img src={grafica} alt="" />
          </div>
          <div onClick={handleOnClick} className='cimarrona-relatos-audio-2'>
            <Audio id='audio-cimarrona-2' titulo='“Hay que conocer el territorio para poderlo proteger”' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Relatos2