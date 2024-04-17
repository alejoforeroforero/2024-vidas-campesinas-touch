import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import YT from '../../../components/YT';
import useDelta from '../../../hooks/useDelta';
import playImg from '../../../assets/generales/play_video.png'

const thumbnail = 'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230391/assets/guaviare/dayana/fondo-video2_ckb7u8.jpg';
import './Youtube2.css'

const Youtube = () => {
  const dispatch = useDispatch();

  const [youtubeRef, setYoutubeRef] = useState(null);
  const [mostrarPlay, setMostrarPlay] = useState(false);
  const elementRef = useRef(null);
  const { handleTouchStart, handleTouchEnd } = useDelta('dayana-youtube-1', 'dayana-galeria', elementRef);

  const refYoutube = (video) => {
    setYoutubeRef(video);
    dispatch(pararAudios());
    setTimeout(()=>{
      setMostrarPlay(true);
    }, 1000);    
  }

  const pintarVideo = () => {
    return (
      <div id='youtube-dayana-2' className="youtube-video">
        <YT
          refYoutubeFx={refYoutube}
          youtubeVideoId="1922XFwLkcw"
          imgThumbnail={thumbnail}
          id='youtube-dayana-2'
        />
      </div>
    )
  }

  const handleOnClick = () => {
    const div = document.getElementById('youtube-dayana-2');
    div.style.visibility = 'visible';
    console.log(youtubeRef);
    youtubeRef?.playVideo();
  }

  return (
    <>
      {pintarVideo()}
      <div ref={elementRef} className='seccion dayana-youtube-2' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
        <div className='mask-general'>
          <div className="contenido-general">
            <div className='youtube-contenido'>
              <div>
                {mostrarPlay && <img onClick={handleOnClick} src={playImg} alt="play" />}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div>
                <h3>“Señor Pronto alivio”</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Youtube