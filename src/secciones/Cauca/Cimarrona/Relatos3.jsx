import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import useDelta from '../../../hooks/useDelta';
import Audio from '../../../components/Audio';

//const relatosVideo = 'https://res.cloudinary.com/dhz9jfn78/video/upload/v1716267084/caqueta/moyano/loop-moyano_z0pbba.mp4';

import './Relatos3.css';

const Relatos3 = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('cimarrona-youtube-1', 'lazos-bio', elementRef);

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
    <div ref={elementRef} className='seccion cimarrona-relatos-3' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      {/* {pintarVideo()} */}
      <div className='mask-general'>
        <div className="contenido-general">
          <div onClick={handleOnClick} className='cimarrona-relatos-audio-3'>
            <Audio id='audio-cimarrona-3' titulo='“Siempre estamos buscando la unidad, estar en paz. Vivir con alegría y armonía”' />
          </div>
          {/* <div className='cimarrona-relatos-frase-3'>
            <h3>“Remedios con plantas naturales y de por aquí, de esta tierra…”</h3>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Relatos3