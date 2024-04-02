import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeVideo, establecerMostrarAbajo } from '../../../Redux/states/managerSlice'
import Audio from '../../../components/Audio'
import lanchaImg from '../../../assets/guaviare/guayabero/lancha.png';
import videoSrc from '../../../assets/guaviare/guayabero/guayabero-loop.mp4';

import './GuayaberoF3.css';

const GuayaberoF3 = () => {

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
        <div className='guayabero-f3'>
            <div className='guayabero-f3-video'>
                <video
                    id={vId}
                    loop
                    src={videoSrc}
                />
            </div>

            <div className='mask-general'>
                <div className="contenido-general">
                    <div className='guayabero-f3-audio-contenedor1'>
                        <Audio
                            id='audio-guayabero1'
                            titulo='“Yo me acuerdo que en verano se escuchaba la cantidad de pescado subiendo el río”.'
                            autor='- Disney Ardila'
                        />
                    </div>
                    <div className='guayabero-f3-lancha'>
                        <img src={lanchaImg} alt="cocodrilo" />
                    </div>
                    <div className='guayabero-f3-audio-contenedor2'>
                        <Audio
                            id='audio-guayabero2'
                            titulo='“Uno en la noche pescaba 20 o 30 arrobas en dos horas”.'
                            autor='- Carlos Mancera'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GuayaberoF3