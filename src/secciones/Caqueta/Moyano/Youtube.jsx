import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios, establecerMostrarFlechasCanales } from '../../../Redux/states/managerSlice';
import YT from '../../../components/YT';
import useDelta from '../../../hooks/useDelta';
import playImg from '../../../assets/generales/play_video.png';
import aveMariposa from '../../../assets/caqueta/moyano/ave-mariposa.png';

const thumbnail = 'https://res.cloudinary.com/dhz9jfn78/image/upload/v1716267077/caqueta/moyano/moyano-youtube-1_fahdl2.jpg';
import './Youtube.css'

const Youtube = () => {
  const dispatch = useDispatch();

  const [youtubeRef, setYoutubeRef] = useState(null);
  const [mostrarPlay, setMostrarPlay] = useState(false);
  const elementRef = useRef(null);
  const { handleTouchStart, handleTouchEnd } = useDelta('moyano-bio', 'moyano-relatos', elementRef);

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
      <div id='youtube-moyano-1' className="youtube-video">
        <YT
          refYoutubeFx={refYoutubeCarlos}
          youtubeVideoId="ztPynuD720c" //MN_RlCT-WFQ  -9AvYOpalrk
          imgThumbnail={thumbnail}
          id='youtube-moyano-1'
        />
      </div>
    )
  }

  const handleOnClick = () => {
    const div = document.getElementById('youtube-moyano-1');
    div.style.visibility = 'visible';
  
    youtubeRef?.playVideo();
  }

  return (
    <>
      {pintarVideo()}
      <div ref={elementRef} className='seccion moyano-youtube' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
        <div className='mask-general'>
          <div className="contenido-general">
            <div className="moyano-youtube-ave">
              <img src={aveMariposa} alt="ave-mariposa" />
            </div>
            <div className='youtube-contenido'>
              <div>
                {mostrarPlay && <img onClick={handleOnClick} src={playImg} alt="play" />}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div>
                <h3>“Se luchó por la carretera, por la luz eléctrica, por la vida en paz. Eso nos hace permanecer acá”</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Youtube