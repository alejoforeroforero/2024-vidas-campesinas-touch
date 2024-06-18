import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import YT from '../../../components/YT';
import useDelta from '../../../hooks/useDelta';
import playImg from '../../../assets/generales/play_video.png'

const thumbnail = 'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230281/assets/guaviare/rodriguez/youtube2_b6wtse.jpg';
import './Youtube2.css'

const Youtube = () => {
  const dispatch = useDispatch();

  const [youtubeRef, setYoutubeRef] = useState(null);
  const [mostrarPlay, setMostrarPlay] = useState(false);
  const elementRef = useRef(null);
  const { handleTouchStart, handleTouchEnd } = useDelta('rodriguez-relatos', 'cierre-galeria', elementRef);

  const refYoutube = (video) => {
    setYoutubeRef(video);
    dispatch(pararAudios());
    setTimeout(()=>{
      setMostrarPlay(true);
    }, 1000);    
  }

  const pintarVideo = () => {
    return (
      <div id='youtube-rodriguez-2' className="youtube-video">
        <YT
          refYoutubeFx={refYoutube}
          youtubeVideoId="5l4O5I07yEw" 
          imgThumbnail={thumbnail}
          id='youtube-rodriguez-2'
          vertical='true'
        />
      </div>
    )
  }

  const handleOnClick = () => {
    const div = document.getElementById('youtube-rodriguez-2');
    div.style.visibility = 'visible';
    youtubeRef?.playVideo();
  }

  return (
    <>
      {pintarVideo()}
      <div ref={elementRef} className='seccion rodriguez-youtube-2' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
        <div className='mask-general'>
          <div className="contenido-general">
            <div className='youtube-contenido'>
              <div>
                {mostrarPlay && <img onClick={handleOnClick} src={playImg} alt="play" />}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div className='rodriguez-youtube-2-frase'>
                <h3>Yo quisiera vivir en el paraíso</h3>
                <p>Canción creada e interpretada por Licher Rodríguez.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Youtube