import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { changeVideo, establecerMostrarAbajo } from '../../../Redux/states/managerSlice'
import Audio from '../../../components/Audio'
const videoSrc = 'https://res.cloudinary.com/dbqfefibl/video/upload/v1713444930/assets/guaviare/bonanzas/loop-bonanzas.mp4'
import hoja from '../../../assets/guaviare/bonanzas/hoja-coca.png';

import './BonanzasF2.css';

const BonanzasF2 = () => {

    const dispatch = useDispatch();
    const videoRef = useRef(null)

    const vId = 'bonanzas-video'

    useEffect(() => {
        dispatch(changeVideo(vId));
        dispatch(establecerMostrarAbajo(false));
    }, []);

    return (
        <>
            <div className='bonanzas-f2'>
                <div className='bonanzas-f2-video'>
                    <video
                        id={vId}
                        loop
                        playsInline
                        muted
                        src={videoSrc}
                        ref={videoRef}
                    />
                </div>
            </div>

            <div className='mask-general'>
                <div className="contenido-general">
                    <div className='bonanzas-f2-interior'>
                        <div className='bonanzas-f2-hoja'>
                            <img src={hoja} alt="hoja" />
                        </div>
                        <div className='bonanzas-audio-contenedor-f2'>
                            <Audio
                                id='audio-marihuana'
                                titulo='“El apogeo de la marihuana comenzó en el 79. Y ya en el 80 entró la coca”'
                                autor='· Carlos Mancera'
                                video={videoRef}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BonanzasF2