import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import YT from '../../../components/YT';
import playImg from '../../../assets/generales/play_video.png';
import guayaberoThumbnail from '../../../assets/guaviare/guayabero/guayabero-fondo-video.jpg';
import './GuayaberoF2.css';

const GuayaberoF2 = () => {
    const dispatch = useDispatch();
    const [jorgeYoutubeRef, setJorgeYoutubeRef] = useState(null);
    const [mostrarPlay, setMostrarPlay] = useState(false);

    const refYoutubeJorge = (video) => {
        setJorgeYoutubeRef(video);
        dispatch(pararAudios());
        setTimeout(() => {
            setMostrarPlay(true);
        }, 1000);
    }

    const handleOnClick = () => {
        const div = document.getElementById('youtube-guayabero');
        div.style.visibility = 'visible';
        console.log(jorgeYoutubeRef);
        jorgeYoutubeRef?.playVideo();
      }

    const pintarVideo = () => {
        return (
            <div id='youtube-guayabero' className="youtube-video">
                <YT
                    refYoutubeFx={refYoutubeJorge}
                    youtubeVideoId="MN_RlCT-WFQ" //MN_RlCT-WFQ  -9AvYOpalrk
                    imgThumbnail={guayaberoThumbnail}
                    id='youtube-guayabero'
                    vertical={true}
                />
            </div>
        )
    }

    return (
        <>
            {pintarVideo()}
            <div className='guayabero-f2'>            
                <div className='mask-general'>
                    <div className='contenido-general'>
                        <div className='guayabero-f2-interior'>
                            {mostrarPlay && <img onClick={handleOnClick} src={playImg} alt="play" />}
                            {!mostrarPlay && <p>Espera un momento...</p>}
                            <div className='guayabero-f2-frase'>
                                <h3>“El río es fuente de vida”.</h3>
                                <p>- Antonio Molano</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default GuayaberoF2