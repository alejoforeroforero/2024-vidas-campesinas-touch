import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import YT from '../../../components/YT';
import useDelta from '../../../hooks/useDelta';
import playImg from '../../../assets/generales/play_video.png'

import thumbnail from '../../../assets/guaviare/carlos/fondo-video.jpg';
import './Youtube.css'

const Youtube = () => {
  const dispatch = useDispatch();

  const [youtubeRef, setYoutubeRef] = useState(null);
  const [mostrarPlay, setMostrarPlay] = useState(false);
  const elementRef = useRef(null);
  const { handleTouchStart, handleTouchEnd } = useDelta('marisol-bio', 'marisol-galeria', elementRef);

  const refYoutube = (video) => {
    setYoutubeRef(video);
    dispatch(pararAudios());
    setTimeout(()=>{
      setMostrarPlay(true);
    }, 1000);    
  }

  const pintarVideo = () => {
    return (
      <div id='youtube-marisol' className="youtube-video">
        <YT
          refYoutubeFx={refYoutube}
          youtubeVideoId="j8keRsr6QCw" 
          imgThumbnail={thumbnail}
          id='youtube-marisol'
        />
      </div>
    )
  }

  const handleOnClick = () => {
    const div = document.getElementById('youtube-william');
    div.style.visibility = 'visible';
    console.log(youtubeRef);
    youtubeRef?.playVideo();
  }

  return (
    <>
      {pintarVideo()}
      <div ref={elementRef} className='seccion marisol-youtube' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
        <div className='mask-general'>
          <div className="contenido-general">
            <div className='youtube-contenido'>
              <div>
                {mostrarPlay && <img onClick={handleOnClick} src={playImg} alt="play" />}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div>
                <h3>“Hay mucha mujer echada pa’lante. He tenido la oportunidad de trabajar en lo que toque”</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Youtube