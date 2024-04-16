import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import YT from '../../../components/YT';
import useDelta from '../../../hooks/useDelta';
import playImg from '../../../assets/generales/play_video.png'

import thumbnail from '../../../assets/guaviare/elias/fondo-video.jpg';
import './Youtube.css'

const Youtube = () => {
  const dispatch = useDispatch();

  const [youtubeRef, setYoutubeRef] = useState(null);
  const [mostrarPlay, setMostrarPlay] = useState(false);
  const elementRef = useRef(null);
  const { handleTouchStart, handleTouchEnd } = useDelta('elias-bio', 'elias-relatos', elementRef);

  const refYoutube = (video) => {
    setYoutubeRef(video);
    dispatch(pararAudios());
    setTimeout(()=>{
      setMostrarPlay(true);
    }, 1000);    
  }

  const pintarVideo = () => {
    return (
      <div id='youtube-elias' className="youtube-video">
        <YT
          refYoutubeFx={refYoutube}
          youtubeVideoId="xmIVSXpGNNI" 
          imgThumbnail={thumbnail}
          id='youtube-elias'
        />
      </div>
    )
  }

  const handleOnClick = () => {
    const div = document.getElementById('youtube-elias');
    div.style.visibility = 'visible';
    console.log(youtubeRef);
    youtubeRef?.playVideo();
  }

  return (
    <>
      {pintarVideo()}
      <div ref={elementRef} className='seccion elias-youtube' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
        <div className='mask-general'>
          <div className="contenido-general">
            <div className='youtube-contenido'>
              <div>
                {mostrarPlay && <img onClick={handleOnClick} src={playImg} alt="play" />}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div className='elias-youtube-frase'>
                <h3>“Estas pinturas significan una cultura muy valiosa, a la cual admiro y respeto. Nadie sabe exactamente cómo se hicieron”</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Youtube