import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import YT from '../../../components/YT';
import playImg from '../../../assets/generales/play_video.png';
const guayaberoThumbnail = 'https://res.cloudinary.com/dbqfefibl/image/upload/v1713242761/assets/guaviare/guardianes/fondo-guardianes-f4_tphytr.jpg';
import './GuardianesF4.css';

const GuardianesF4 = () => {
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
        const div = document.getElementById('youtube-alirio');
        div.style.visibility = 'visible';

        jorgeYoutubeRef?.playVideo();
      }

    const pintarVideo = () => {
        return (
            <div id='youtube-alirio' className="youtube-video">
                <YT
                    refYoutubeFx={refYoutubeJorge}
                    youtubeVideoId="NIgNlYvsf04" 
                    imgThumbnail={guayaberoThumbnail}
                    id='youtube-alirio'
                />
            </div>
        )
    }

    return (
        <>
            {pintarVideo()}
            <div className='guardianes-f4'>            
                <div className='mask-general'>
                    <div className='contenido-general'>
                        <div className='guardianes-f4-interior'>
                            {mostrarPlay && <img onClick={handleOnClick} src={playImg} alt="play" />}
                            {!mostrarPlay && <p>Espera un momento...</p>}
                            <div className='guardianes-f4-frase'>
                                <h3>Raudal rupestre</h3>
                                <p>En este video, realizado en colaboración con niños y niñas del Raudal del Guayabero, María Fernanda y Juliana nos cuentan del legado que han recibido de sus antepasados, con las pinturas rupestres de su territorio.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default GuardianesF4