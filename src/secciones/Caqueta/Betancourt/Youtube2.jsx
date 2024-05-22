import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import YT from '../../../components/YT';
import useDelta from '../../../hooks/useDelta';
import playImg from '../../../assets/generales/play_video.png';
import manos from '../../../assets/caqueta/betancourt/manos-tierra.png';

const thumbnail = 'https://res.cloudinary.com/dhz9jfn78/image/upload/v1716267080/caqueta/betancourt/betancourt-youtube-2_nyjets.jpg';
import './Youtube2.css'

const Youtube = () => {
  const dispatch = useDispatch();

  const [youtubeRef, setYoutubeRef] = useState(null);
  const [mostrarPlay, setMostrarPlay] = useState(false);
  const elementRef = useRef(null);
  const { handleTouchStart, handleTouchEnd } = useDelta('betancourt-relatos', 'betancourt-youtube-3', elementRef);

  const refYoutube = (video) => {
    setYoutubeRef(video);
    dispatch(pararAudios());
    setTimeout(()=>{
      setMostrarPlay(true);
    }, 1000);    
  }

  const pintarVideo = () => {
    return (
      <div id='youtube-betancourt-2' className="youtube-video">
        <YT
          refYoutubeFx={refYoutube}
          youtubeVideoId="pitEysl9X3c"
          imgThumbnail={thumbnail}
          id='youtube-betancourt-2'
        />
      </div>
    )
  }

  const handleOnClick = () => {
    const div = document.getElementById('youtube-betancourt-2');
    div.style.visibility = 'visible';
    youtubeRef?.playVideo();
  }

  return (
    <>
      {pintarVideo()}
      <div ref={elementRef} className='seccion betancourt-youtube-2' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
        <div className='mask-general'>
        <div className="betancourt-youtube-2-manos">
              <img src={manos} alt="planta" />
            </div>
          <div className="contenido-general">
            <div className='youtube-contenido'>
              <div>
                {mostrarPlay && <img onClick={handleOnClick} src={playImg} alt="play" />}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div>
                <h3>“Crecí en el campo. Recuerdo que éramos inmensamente felices, por eso escogí venirme a trabajar acá”</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Youtube