import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios, establecerMostrarFlechasCanales } from '../../../Redux/states/managerSlice';
import YT from '../../../components/YT';
import useDelta from '../../../hooks/useDelta';
import playImg from '../../../assets/generales/play_video.png';
import aveMariposa from '../../../assets/caqueta/moyano/ave-mariposa.png';

const thumbnail = 'https://res.cloudinary.com/dumlhmvts/image/upload/v1717097633/cauca/hermandad/Mujer_Guardia_campesina_zgambt.jpg';
import './Youtube.css'

const Youtube = () => {
  const dispatch = useDispatch();

  const [youtubeRef, setYoutubeRef] = useState(null);
  const [mostrarPlay, setMostrarPlay] = useState(false);
  const elementRef = useRef(null);
  const { handleTouchStart, handleTouchEnd } = useDelta('hermandad-bio', 'hermandad-relatos-1', elementRef);

  const refYoutubeCarlos = (video) => {
    setYoutubeRef(video);
    dispatch(pararAudios());
    setTimeout(()=>{
      setMostrarPlay(true);
    }, 1000);    
  }

  const pintarVideo = () => {
    return (
      <div id='youtube-hermandad-1' className="youtube-video">
        <YT
          refYoutubeFx={refYoutubeCarlos}
          youtubeVideoId="uVBBXWjpbq8" 
          imgThumbnail={thumbnail}
          id='youtube-hermandad-1'
        />
      </div>
    )
  }

  const handleOnClick = () => {
    const div = document.getElementById('youtube-hermandad-1');
    div.style.visibility = 'visible';
  
    youtubeRef?.playVideo();
  }

  return (
    <>
      {pintarVideo()}
      <div ref={elementRef} className='seccion hermandad-youtube' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
        <div className='mask-general'>
          <div className="contenido-general">
            <div className='youtube-contenido'>
              <div>
                {mostrarPlay && <img onClick={handleOnClick} src={playImg} alt="play" />}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div>
                <h3>“Como seres humanos, como campesinos, deberíamos definirnos todos en la igualdad”</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Youtube