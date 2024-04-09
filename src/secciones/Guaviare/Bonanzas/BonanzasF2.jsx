import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeVideo, establecerMostrarAbajo } from '../../../Redux/states/managerSlice'
import Audio from '../../../components/Audio'
import videoSrc from '../../../assets/guaviare/bonanzas/loop-bonanzas-f2.mp4';
import cocodriloImg from '../../../assets/guaviare/caceria/cocodrilo.png';

import './BonanzasF2.css';

const BonanzasF2 = () => {

    const dispatch = useDispatch();

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
                    />
                </div>
            </div>

            <div className='mask-general'>
                <div className="contenido-general">
                    <div className='bonanzas-f2-interior'>
                        <div className='bonanzas-f2-cocodrilo'>
                            <img src={cocodriloImg} alt="cocodrilo" />
                        </div>
                        <div className='bonanzas-audio-contenedor'>
                            <Audio
                                id='audio-marihuana'
                                titulo='“El apogeo de la marihuana comenzó en el 79. Y ya en el 80 entró la coca”'
                                autor='- Carlos Mancera'
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BonanzasF2