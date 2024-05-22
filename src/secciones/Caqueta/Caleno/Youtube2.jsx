import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import YT from '../../../components/YT';
import useDelta from '../../../hooks/useDelta';
import playImg from '../../../assets/generales/play_video.png';
import planta from '../../../assets/caqueta/caleno/planta-2.png';

const thumbnail = 'https://res.cloudinary.com/dhz9jfn78/image/upload/v1716267076/caqueta/caleno/caleno-youtube-2_gchuqy.jpg';
import './Youtube2.css'

const Youtube = () => {
  const dispatch = useDispatch();

  const [youtubeRef, setYoutubeRef] = useState(null);
  const [mostrarPlay, setMostrarPlay] = useState(false);
  const elementRef = useRef(null);
  const { handleTouchStart, handleTouchEnd } = useDelta('caleno-relatos', 'caqueta-inserto3', elementRef);

  const refYoutube = (video) => {
    setYoutubeRef(video);
    dispatch(pararAudios());
    setTimeout(()=>{
      setMostrarPlay(true);
    }, 1000);    
  }

  const pintarVideo = () => {
    return (
      <div id='youtube-caleno-2' className="youtube-video">
        <YT
          refYoutubeFx={refYoutube}
          youtubeVideoId="a_nPXRlETmw" 
          imgThumbnail={thumbnail}
          id='youtube-caleno-2'
        />
      </div>
    )
  }

  const handleOnClick = () => {
    const div = document.getElementById('youtube-caleno-2');
    div.style.visibility = 'visible';
    youtubeRef?.playVideo();
  }

  return (
    <>
      {pintarVideo()}
      <div ref={elementRef} className='seccion caleno-youtube-2' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
        <div className='mask-general'>
        <div className="caleno-youtube-2-planta">
              <img src={planta} alt="planta" />
            </div>
          <div className="contenido-general">
            <div className='youtube-contenido'>
              <div>
                {mostrarPlay && <img onClick={handleOnClick} src={playImg} alt="play" />}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div>
                <h3>“Podemos sacar productos de ‘pancoger’, tener maderas, y a la vez comida para el ganado”</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Youtube