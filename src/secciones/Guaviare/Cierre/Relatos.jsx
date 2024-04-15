import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import YT from '../../../components/YT';
import useDelta from '../../../hooks/useDelta';

import relatosVideo from '../../../assets/guaviare/cierre/video-cierre.mp4';
import animacion from '../../../assets/guaviare/cierre/animacion.jpg';
import playImg from '../../../assets/generales/play_video.png'
import salidaImg from '../../../assets/generales/salida.png';
const jorgeThumbnail = 'https://res.cloudinary.com/dfwhzadxa/image/upload/v1713054244/vidas-campesinas/jorge/fondo-video_gwhapf.jpg'

import './Relatos.css';

const Relatos = () => {
  const dispatch = useDispatch();
  const [mostrarPopup, setMostrarPopup] = useState(null);
  const [mostrarPlay, setMostrarPlay] = useState(null);
  const [youtubeRef, setYoutubeRef] = useState(null);
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('cierre-galeria', 'guaviare-menu', elementRef);

  useEffect(() => {
    dispatch(pararAudios());
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
      console.log('se puede dar play');
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
  }

  return (
    <div ref={elementRef} className='seccion cierre-relatos' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      {pintarVideo()}
      {pintarAnimacion()}
      <div className='mask-general'>
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
          {mostrarPopup &&
            <div className='youtube-animacion'>
              <div className='mask-general'>
                <div className='youtube-animacion-interior'>
                  <div>
                    <img onClick={handleOnClick} src={playImg} alt="play" />
                  </div>
                  <div>
                    <h3>“Evocación poética a Raudal del Guayabero a partir del movimiento, el color y las formas, mediante el uso de materiales propios del lugar como piedras y hojas, sumados a la arena.”</h3>
                  </div>
                </div>
                <img onClick={handleSalir} className='youtube-animacion-interior-salida' src={salidaImg} alt="" />
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Relatos