import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import YT from '../../../components/YT';
import useDelta from '../../../hooks/useDelta';
import playImg from '../../../assets/generales/play_video.png';
import arbol from '../../../assets/caqueta/moyano/arbol.png';

const thumbnail = 'https://res.cloudinary.com/dhz9jfn78/image/upload/v1716267077/caqueta/moyano/moyano-youtube-2_bceog0.jpg';
import './Youtube2.css'

const Youtube = () => {
  const dispatch = useDispatch();

  const [youtubeRef, setYoutubeRef] = useState(null);
  const [mostrarPlay, setMostrarPlay] = useState(false);
  const elementRef = useRef(null);
  const { handleTouchStart, handleTouchEnd } = useDelta('moyano-relatos', 'caqueta-inserto1', elementRef);

  const refYoutube = (video) => {
    setYoutubeRef(video);
    dispatch(pararAudios());
    setTimeout(()=>{
      setMostrarPlay(true);
    }, 1000);    
  }

  const pintarVideo = () => {
    return (
      <div id='youtube-moyano-2' className="youtube-video">
        <YT
          refYoutubeFx={refYoutube}
          youtubeVideoId="wwMI3J7TmvQ"
          imgThumbnail={thumbnail}
          id='youtube-moyano-2'
        />
      </div>
    )
  }

  const handleOnClick = () => {
    const div = document.getElementById('youtube-moyano-2');
    div.style.visibility = 'visible';
    youtubeRef?.playVideo();
  }

  return (
    <>
      {pintarVideo()}
      <div ref={elementRef} className='seccion moyano-youtube-2' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
        <div className='mask-general'>
        <div className="moyano-youtube-2-planta">
              <img src={arbol} alt="planta" />
            </div>
          <div className="contenido-general">
            <div className='youtube-contenido'>
              <div>
                {mostrarPlay && <img onClick={handleOnClick} src={playImg} alt="play" />}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div>
                <h3>“La Amazonía la estamos destruyendo. La ganadería no es para que sea extensiva, sino poquita y bien tenida”</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Youtube