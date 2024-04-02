import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import CaceriaF1 from './CaceriaF1';
import CaceriaF2 from './CaceriaF2';
import CaceriaF3 from './CaceriaF3';
import flechaAdelante from '../../../assets/generales/flecha-adelante.png';
import flechaAtras from '../../../assets/generales/flecha-atras.png';


import './Caceria.css'

const Caceria = () => {
    const dispatch = useDispatch();

    const secciones = ['intro', 'audio1', 'audio2']

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
        <div className='guaviare-caceria'>
            <div className="guaviare-caceria-contenido">
                {currentImage == 0 && <CaceriaF1 />}
                {currentImage == 1 && <CaceriaF2 />}
                {currentImage == 2 && <CaceriaF3 />} 
            </div>
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
    )
}

export default Caceria