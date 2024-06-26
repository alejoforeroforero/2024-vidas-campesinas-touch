import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import PazF1 from './PazF1';
import PazF2 from './PazF2';
import PazF3 from './PazF3';
import flechaAdelante from '../../../assets/generales/flecha-adelante.png';
import flechaAtras from '../../../assets/generales/flecha-atras.png';


import './Paz.css'

const Paz = () => {
    const dispatch = useDispatch();

    const secciones = ['intro', 'audios', 'audios2']

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
        <div className='guaviare-paz'>
            <div className="guaviare-paz-contenido">
                {currentImage == 0 && <PazF1 />}
                {currentImage == 1 && <PazF2 />}
                {currentImage == 2 && <PazF3 />}
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

export default Paz