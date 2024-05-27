import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import useDelta from '../../../hooks/useDelta';
import Audio from '../../../components/Audio';

//const relatosVideo = 'https://res.cloudinary.com/dhz9jfn78/video/upload/v1716267084/caqueta/moyano/loop-moyano_z0pbba.mp4';

import './Relatos.css';

const Relatos = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('cauca-guardia-bio', 'guardia-youtube-1', elementRef);

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
    <div ref={elementRef} className='seccion guardia-relatos' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      {/* {pintarVideo()} */}
      <div className='mask-general'>
        <div className="contenido-general">
          <div onClick={handleOnClick} className='guardia-relatos-audio'>
            <Audio id='audio-guardia-1' titulo='“Trabajamos por defender nuestro territorio y la madre tierra. Velamos por la armonía de la comunidad”' />
          </div>
          {/* <div className='guardia-relatos-frase'>
            <h3>“Remedios con plantas naturales y de por aquí, de esta tierra…”</h3>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Relatos