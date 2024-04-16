import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import GuardianesF1 from './GuardianesF1';
import GuardianesF2 from './GuardianesF2';
import GuardianesF3 from './GuardianesF3';
import GuardianesF4 from './GuardianesF4';
import flechaAdelante from '../../../assets/generales/flecha-adelante.png';
import flechaAtras from '../../../assets/generales/flecha-atras.png';


import './Guardianes.css'

const Guardianes = () => {
    const dispatch = useDispatch();

    const secciones = ['intro', 'audio', 'audio2', 'audio3']

    const [currentImage, setCurrentImage] = useState(0);

    const prevImage = () => {
        dispatch(pararAudios())
        setCurrentImage((currentImage - 1 + secciones.length) % secciones.length);
    };

    const nextImage = () => {
        dispatch(pararAudios())
        setCurrentImage((currentImage + 1) % secciones.length);
    };

    return (
        <div className='guaviare-guardianes'>
            <div className="guaviare-guardianes-contenido">
                {currentImage == 0 && <GuardianesF1 />}
                {currentImage == 1 && <GuardianesF2 />}
                {currentImage == 2 && <GuardianesF3 />}
                {currentImage == 3 && <GuardianesF4 />}
            </div>
            <div className='botones-flechas-b'>
                <div>
                    {currentImage != 0 &&
                        <button className='flecha-atras' onClick={prevImage}>
                            <img src={flechaAtras} alt='flecha'></img>
                        </button>
                    }
                    {currentImage != secciones.length - 1 &&
                        <button className={currentImage == 0 ? 'flecha-adelante-inicio' : 'flecha-adelante'} onClick={nextImage}>
                            <img src={flechaAdelante} alt='flecha'></img>
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Guardianes