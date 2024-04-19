import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeVideo, establecerMostrarAbajo } from '../../../Redux/states/managerSlice'
import Audio from '../../../components/Audio'
import planta from '../../../assets/guaviare/guardianes/planta.png';
const videoSrc = 'https://res.cloudinary.com/dbqfefibl/video/upload/v1713449485/assets/guaviare/guardianes/loop-guarianes_kq6tfo.mp4';

import './GuardianesF3.css';

const GuardianesF3 = () => {

    useEffect(() => {
        dispatch(changeVideo(vId))
    }, []);

    const dispatch = useDispatch();

    const vId = 'guyabero-video'

    useEffect(() => {
        dispatch(changeVideo(vId));
        dispatch(establecerMostrarAbajo(false));
    }, []);


    return (
        <>
            <div className='guardianes-f3'>
                <div className='guardianes-f3-video'>
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
                    <div className='guardianes-f3-interior'>
                        <div className='guardianes-f3-planta'>
                            <img src={planta} alt="planta" />
                        </div>
                        <div className='guardianes-f3-audio-contenedor1'>
                            <Audio
                                id='audio-guardianes-3'
                                titulo='“Después de creada la corporación, se empieza a fortalecer el turismo y comenzamos a ser visibles en el departamento”.'
                                autor='- Norbey Méndez'
                            />
                        </div>
                        <div className='guardianes-f3-audio-contenedor2'>
                            <Audio
                                id='audio-guardianes-4'
                                titulo='“Lo que hace que funcionen estos procesos, es la comunidad haciendo conciencia”.'
                                autor='- Andrés González'
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default GuardianesF3