import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios, establecerMostrarFlechasCanales } from '../../../Redux/states/managerSlice';
import YT from '../../../components/YT';
import useDelta from '../../../hooks/useDelta';
import playImg from '../../../assets/generales/play_video.png';
import hojas from '../../../assets/cauca/guardia/hojas.png';

const thumbnail = 'https://res.cloudinary.com/dumlhmvts/image/upload/v1716743260/cauca/guardia/Armonizacio%CC%81n_guardia_indi%CC%81gena_ok_xcfawb.jpg';
import './Youtube.css'

const Youtube = () => {
  const dispatch = useDispatch();

  const [youtubeRef, setYoutubeRef] = useState(null);
  const [mostrarPlay, setMostrarPlay] = useState(false);
  const elementRef = useRef(null);
  const { handleTouchStart, handleTouchEnd } = useDelta('guardia-relatos-1', 'guardia-relatos-2', elementRef);

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
      <div id='youtube-guardia-1' className="youtube-video">
        <YT
          refYoutubeFx={refYoutubeCarlos}
          youtubeVideoId="vg-JDdYr7F4" //MN_RlCT-WFQ  -9AvYOpalrk
          imgThumbnail={thumbnail}
          id='youtube-guardia-1'
        />
      </div>
    )
  }

  const handleOnClick = () => {
    const div = document.getElementById('youtube-guardia-1');
    div.style.visibility = 'visible';
  
    youtubeRef?.playVideo();
  }

  return (
    <>
      {pintarVideo()}
      <div ref={elementRef} className='seccion guardia-youtube' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
        <div className='mask-general'>
          <div className="contenido-general">
            <div className="guardia-youtube-ave">
              <img src={hojas} alt="ave-mariposa" />
            </div>
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