import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios, establecerMostrarFlechasCanales } from '../../../Redux/states/managerSlice';
import YT from '../../../components/YT';
import useDelta from '../../../hooks/useDelta';
import playImg from '../../../assets/generales/play_video.png';

const thumbnail = 'https://res.cloudinary.com/dumlhmvts/image/upload/v1717037743/cauca/cimarrona/Pintando_mural_sfnmux.jpg';
import './Youtube.css'

const Youtube = () => {
  const dispatch = useDispatch();

  const [youtubeRef, setYoutubeRef] = useState(null);
  const [mostrarPlay, setMostrarPlay] = useState(false);
  const elementRef = useRef(null);
  const { handleTouchStart, handleTouchEnd } = useDelta('cimarrona-relatos-2', 'cimarrona-relatos-3', elementRef);

  const refYoutubeCarlos = (video) => {
    setYoutubeRef(video);
    dispatch(pararAudios());
    dispatch(establecerMostrarFlechasCanales(true));
    setTimeout(()=>{
      setMostrarPlay(true);
    }, 1000);    
  }

  const pintarVideo = () => {
    return (
      <div id='youtube-cimarrona-1' className="youtube-video">
        <YT
          refYoutubeFx={refYoutubeCarlos}
          youtubeVideoId="_254oHhLO9s" //MN_RlCT-WFQ  -9AvYOpalrk
          imgThumbnail={thumbnail}
          id='youtube-cimarrona-1'
        />
      </div>
    )
  }

  const handleOnClick = () => {
    const div = document.getElementById('youtube-cimarrona-1');
    div.style.visibility = 'visible';
  
    youtubeRef?.playVideo();
  }

  return (
    <>
      {pintarVideo()}
      <div ref={elementRef} className='seccion cimarrona-youtube' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
        <div className='mask-general'>
          <div className="contenido-general">
            <div className='youtube-contenido'>
              <div>
                {mostrarPlay && <img onClick={handleOnClick} src={playImg} alt="play" />}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div>
                <h3>“Los guardias nos protegen y enfrentan peligros, por eso deben estar bien armonizados.”</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Youtube