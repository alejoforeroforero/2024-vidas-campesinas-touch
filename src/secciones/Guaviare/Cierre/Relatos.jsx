import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios, establecerMostrarLineasA, establecerMostrarFlechasCanales } from '../../../Redux/states/managerSlice';
import YT from '../../../components/YT';
import useDelta from '../../../hooks/useDelta';

const relatosVideo = 'https://res.cloudinary.com/dbqfefibl/video/upload/v1713230501/assets/guaviare/cierre/video-cierre_tfdzvy.mp4';
const animacion = 'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230337/assets/guaviare/cierre/animacion_iwn7lp.jpg';
import playImg from '../../../assets/generales/play_video.png'
import salidaImg from '../../../assets/generales/salida.png';
const jorgeThumbnail = 'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230337/assets/guaviare/cierre/animacion_iwn7lp.jpg'

import './Relatos.css';

const Relatos = () => {
  const dispatch = useDispatch();
  const [mostrarPopup, setMostrarPopup] = useState(null);
  const [youtubeRef, setYoutubeRef] = useState(null);
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('cierre-galeria', 'guaviare-menu', elementRef);

  useEffect(() => {
    dispatch(pararAudios());
    dispatch(establecerMostrarLineasA(false));
    dispatch(establecerMostrarFlechasCanales(false));
    videoRef.current.play();
  }, [])


  const pintarVideo = () => {
    return (
      <div className="guaviare-video">
        <video
          ref={videoRef}
          playsInline
          muted
          src={relatosVideo}>
        </video>
      </div>
    )
  }

  const refYoutube = (video) => {
    setYoutubeRef(video);
    dispatch(pararAudios());
    setTimeout(() => {

    }, 1000);
  }

  const pintarAnimacion = () => {
    return (
      <div id='youtube-animacion' className="youtube-video">
        <YT
          refYoutubeFx={refYoutube}
          youtubeVideoId="JOa_pbsklr8"
          imgThumbnail={jorgeThumbnail}
          id='youtube-animacion'
          mostrarFlechas={false}
        />
      </div>
    )
  }

  const handleOnClickPopup = () => {
    setMostrarPopup(true);
  }

  const handleOnClick = () => {
    const div = document.getElementById('youtube-animacion');
    div.style.visibility = 'visible';
    youtubeRef?.playVideo();
  }

  const handleSalir = () => {
    setMostrarPopup(false);
    dispatch(establecerMostrarFlechasCanales(false));
  }

  return (

    <>
      {mostrarPopup &&
        <div className='youtube-animacion'>
          {pintarAnimacion()}
          <div className='mask-general'>
            <div className='youtube-animacion-interior'>
              <div>
                <img onClick={handleOnClick} src={playImg} alt="play" />
              </div>
              <div className='cierre-animacion-frase'>
                <h3>“Evocación poética a Raudal del Guayabero a partir del movimiento, el color y las formas, mediante el uso de materiales propios del lugar como piedras y hojas, sumados a la arena.”</h3>
              </div>
            </div>
            <img onClick={handleSalir} className='youtube-animacion-interior-salida' src={salidaImg} alt="" />
          </div>
        </div>
      }
      <div ref={elementRef} className='seccion cierre-relatos' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
        {pintarVideo()}
        
        <div className="contenido-general">
          <div className='cierre-titulo'>
            <h2>RAUDAL DEL GUAYABERO</h2>
            <h2>Territorio de paz</h2>
          </div>
          <div className='cierre-extra'>
            <h2>[EXTRA]</h2>
            <h2>Evocaciones del Raudal</h2>
            <div>
              <img onClick={handleOnClickPopup} src={animacion} alt="" />
            </div>
          </div>
          <div className='cierre-continuar'>
            <p>Continuar con otras regiones</p>
          </div>
        </div>
      </div>
    </>

  )
}

export default Relatos