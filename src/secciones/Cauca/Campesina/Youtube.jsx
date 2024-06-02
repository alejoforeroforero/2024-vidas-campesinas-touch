import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios, establecerMostrarFlechasCanales } from '../../../Redux/states/managerSlice';
import YT from '../../../components/YT';
import useDelta from '../../../hooks/useDelta';
import playImg from '../../../assets/generales/play_video.png';
import aveMariposa from '../../../assets/caqueta/moyano/ave-mariposa.png';

const thumbnail = 'https://res.cloudinary.com/dumlhmvts/image/upload/v1717034789/cauca/campesina/Guardia_regando_huerta_g5noz0.jpg';
import './Youtube.css'

const Youtube = () => {
  const dispatch = useDispatch();

  const [youtubeRef, setYoutubeRef] = useState(null);
  const [mostrarPlay, setMostrarPlay] = useState(false);
  const elementRef = useRef(null);
  const { handleTouchStart, handleTouchEnd } = useDelta('campesina-relatos-1', 'campesina-relatos-2', elementRef);

  const refYoutubeCarlos = (video) => {
    setYoutubeRef(video);
    dispatch(pararAudios());
    setTimeout(()=>{
      setMostrarPlay(true);
    }, 1000);    
  }

  const pintarVideo = () => {
    return (
      <div id='youtube-campesina-1' className="youtube-video">
        <YT
          refYoutubeFx={refYoutubeCarlos}
          youtubeVideoId="MHoUHwnbaUQ" //MN_RlCT-WFQ  -9AvYOpalrk
          imgThumbnail={thumbnail}
          id='youtube-campesina-1'
        />
      </div>
    )
  }

  const handleOnClick = () => {
    const div = document.getElementById('youtube-campesina-1');
    div.style.visibility = 'visible';
  
    youtubeRef?.playVideo();
  }

  return (
    <>
      {pintarVideo()}
      <div ref={elementRef} className='seccion campesina-youtube' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
        <div className='mask-general'>
          <div className="contenido-general">
            
            <div className='youtube-contenido'>
              <div>
                {mostrarPlay && <img onClick={handleOnClick} src={playImg} alt="play" />}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div>
                <h3>“El fin de recuperar la tierra es poder sembrar comida, y que le genere beneficios al campesino”</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Youtube