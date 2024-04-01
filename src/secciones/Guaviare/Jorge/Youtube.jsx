import { useEffect, useRef, useState } from 'react';
import YT from '../../../components/YT';
import useDelta from '../../../hooks/useDelta';
import playImg from '../../../assets/generales/play_video.png'

import jorgeThumbnail from '../../../assets/guaviare/jorge/fondo-video.jpg';
import './Youtube.css'

const Youtube = () => {

  const [jorgeYoutubeRef, setJorgeYoutubeRef] = useState(null);
  const [mostrarPlay, setMostrarPlay] = useState(false);
  const elementRef = useRef(null);
  const { handleTouchStart, handleTouchEnd } = useDelta('jorge-bio', 'jorge-relatos', elementRef);

  const refYoutubeJorge = (video) => {
    setJorgeYoutubeRef(video);
    setMostrarPlay(true);
  }

  const pintarVideo = () => {
    return (
      <div id='youtube-jorge' className="youtube-video">
        <YT
          refYoutubeFx={refYoutubeJorge}
          youtubeVideoId="-9AvYOpalrk"
          imgThumbnail={jorgeThumbnail}
          id='youtube-jorge'
        />
      </div>
    )
  }

  const handleOnClick = () => {
    const div = document.getElementById('youtube-jorge');
    div.style.visibility = 'visible';
    jorgeYoutubeRef.playVideo();
  }

  return (
    <div className='seccion jorge-youtube' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      {pintarVideo()}
      <div className='mask-general'>
        <div className="contenido-general">
          <div className='youtube-contenido'>
            <div>
              {mostrarPlay && <img onClick={handleOnClick} src={playImg} alt="play" /> }
              {!mostrarPlay && <p>Descargando...</p>} 
            </div>
            <div>
              <h3 ref={elementRef}>“Éramos aserradores y cazadores, pero ahora conservamos”</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Youtube