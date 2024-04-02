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
    setTimeout(()=>{
      setMostrarPlay(true);
    }, 1000);    
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
    console.log(jorgeYoutubeRef);
    jorgeYoutubeRef?.playVideo();
  }

  return (
    <>
      {pintarVideo()}
      <div ref={elementRef} className='seccion jorge-youtube' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
        <div className='mask-general'>
          <div className="contenido-general">
            <div className='youtube-contenido'>
              <div>
                {mostrarPlay && <img onClick={handleOnClick} src={playImg} alt="play" />}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div>
                <h3>“Éramos aserradores y cazadores, pero ahora conservamos”</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Youtube