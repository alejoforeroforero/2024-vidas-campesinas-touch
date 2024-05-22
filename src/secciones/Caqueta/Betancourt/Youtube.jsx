import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import YT from '../../../components/YT';
import useDelta from '../../../hooks/useDelta';
import playImg from '../../../assets/generales/play_video.png';
import aveMariposa from '../../../assets/caqueta/betancourt/ave.png';

const thumbnail = 'https://res.cloudinary.com/dhz9jfn78/image/upload/v1716267081/caqueta/betancourt/betancourt-youtube-1_csihap.jpg';
import './Youtube.css'

const Youtube = () => {
  const dispatch = useDispatch();

  const [youtubeRef, setYoutubeRef] = useState(null);
  const [mostrarPlay, setMostrarPlay] = useState(false);
  const elementRef = useRef(null);
  const { handleTouchStart, handleTouchEnd } = useDelta('betancourt-bio', 'betancourt-relatos', elementRef);

  const refYoutubeCarlos = (video) => {
    setYoutubeRef(video);
    dispatch(pararAudios());
    setTimeout(()=>{
      setMostrarPlay(true);
    }, 1000);    
  }

  const pintarVideo = () => {
    return (
      <div id='youtube-betancourt-1' className="youtube-video">
        <YT
          refYoutubeFx={refYoutubeCarlos}
          youtubeVideoId="1hMXAFPRB6k" //MN_RlCT-WFQ  -9AvYOpalrk
          imgThumbnail={thumbnail}
          id='youtube-betancourt-1'
        />
      </div>
    )
  }

  const handleOnClick = () => {
    const div = document.getElementById('youtube-betancourt-1');
    div.style.visibility = 'visible';
  
    youtubeRef?.playVideo();
  }

  return (
    <>
      {pintarVideo()}
      <div ref={elementRef} className='seccion betancourt-youtube' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
        <div className='mask-general'>
          <div className="contenido-general">
            <div className="betancourt-youtube-ave">
              <img src={aveMariposa} alt="ave-mariposa" />
            </div>
            <div className='youtube-contenido'>
              <div>
                {mostrarPlay && <img onClick={handleOnClick} src={playImg} alt="play" />}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div>
                <h3>“Me siento orgulloso de haber sembrado un bosque y haber recuperado esos terrenos”</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Youtube