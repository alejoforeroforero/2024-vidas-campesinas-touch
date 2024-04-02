import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeVideo, establecerMostrarAbajo } from '../../../Redux/states/managerSlice'
import Audio from '../../../components/Audio'
import videoSrc from '../../../assets/guaviare/caceria/loop-caceria.mp4';
import cocodriloImg from '../../../assets/guaviare/caceria/cocodrilo.png';

import './CaceriaF2.css';

const CaceriaF2 = () => {

    const dispatch = useDispatch();

    const vId = 'caceria-video'

    useEffect(() => {
        dispatch(changeVideo(vId));
        dispatch(establecerMostrarAbajo(false));
    }, []);

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