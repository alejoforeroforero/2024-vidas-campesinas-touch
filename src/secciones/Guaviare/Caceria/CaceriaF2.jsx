import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Audio from '../../../components/Audio'
import videoSrc from '../../../assets/guaviare/caceria/loop-caceria.mp4';
import { changeVideo, pararAudios } from '../../../Redux/states/managerSlice';
import cocodriloImg from '../../../assets/guaviare/caceria/cocodrilo.png';

import './CaceriaF2.css';

const CaceriaF2 = () => {

    const [isPlaying, setIsPlaying] = useState(false);

    const dispatch = useDispatch();
    const audioRef = useRef(null);

    const vId = 'caceria-video'

    useEffect(() => {
        dispatch(changeVideo(vId))
        setIsPlaying(false);
    }, []);

    const handleOnClick = () => {
        dispatch(pararAudios())
        if (!isPlaying) {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying)
    }

    return (
        <>
            <div className='caceria-f2'>
                <div className='caceria-f2-video'>
                    <video
                        id={vId}
                        loop
                        src={videoSrc}
                    />
                </div>

                <div className='mask-general'>
                    <div className="contenido-general">
                        <div className='caceria-f2-cocodrilo'>
                            <img src={cocodriloImg} alt="cocodrilo" />
                        </div>
                        <div className='caceria-audio-contenedor'>
                            <Audio
                                id='caceria'
                                titulo='“En ese tiempo se trabajaba con las pieles del tigrillo y el cachirre”'
                                autor='- Carlos Mancera'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CaceriaF2