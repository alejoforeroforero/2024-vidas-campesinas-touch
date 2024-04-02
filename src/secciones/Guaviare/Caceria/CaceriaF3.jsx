import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../redux/states/managerSlice';

import audioOnImg from '../../../assets/generales/audio-on.png'
import audioImg from '../../../assets/generales/audio.png';
import audioArte from '../../../assets/guaviare/caceria/audio-arte-sonoro-guaviare.mp3';
import hojaImg from '../../../assets/guaviare/caceria/hoja-arte.png';
import jaguarImg from '../../../assets/guaviare/caceria/jaguar.png';
import abajoImg from '../../../assets/generales/abajo.png';

import './CaceriaF3.css';

const CaceriaF3 = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const dispatch = useDispatch();

    const audioRef = useRef(null);

    const handleOnClick = () => {
        dispatch(pararAudios())
        if(!isPlaying){
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying)
    }

    return (
        <div className='caceria-f3'>
            <div className='caceria-f3-interior'>

                <div className='caceria-f3-ilustraciones'>
                    <img src={jaguarImg} alt="jaguar" />
                    <img src={hojaImg} alt="hoja" />
                </div>
                <div className='caceria-audio-contenedor'>
                    <div className='relatos-audio-obj'>
                        <audio ref={audioRef} src={audioArte} controls></audio>
                        <div className='relatos-audio-obj-top'>
                            <img src={(isPlaying) ? audioOnImg : audioImg} onClick={handleOnClick}></img>
                            <h2>“La tecnología del jaguar”</h2>
                        </div>
                        <p></p>
                        {isPlaying &&
                            <div className='audio-visual'>
                                <iframe src="https://giphy.com/embed/2mnoi0YXJdi2um7FTs/video" frameBorder="0" ></iframe>
                            </div>
                        }
                    </div>
                    <p>Cae la noche en Raudal del Guayabero, misteriosa, imponente, y con ella, sus peligros.
                        No se vale tener miedo, el jaguar sabe rastrearlo con su tecnología infalible, posando su pata sobre las huellas del caminante. Seguir el paso con valentía es la única defensa.
                        Ciertamente, después de la noche vendrá el día y con él la luz del sol que todo ilumina.”</p>
                </div>

                <div className='seccion-b-abajo'>
                    <img src={abajoImg} alt="abajo" />
                </div>
            </div>
        </div>
    )
}

export default CaceriaF3