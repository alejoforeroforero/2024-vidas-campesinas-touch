import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import BonanzasF1 from './BonanzasF1';
import BonanzasF2 from './BonanzasF2';
import BonanzasF3 from './BonanzasF3';
import BonanzasF4 from './BonanzasF4';
import flechaAdelante from '../../../assets/generales/flecha-adelante.png';
import flechaAtras from '../../../assets/generales/flecha-atras.png';


import './Bonanzas.css'

const Bonanzas = () => {
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
        <div className='guaviare-bonanzas'>
            <div className="guaviare-bonanzas-contenido">
                {currentImage == 0 && <BonanzasF1 />}
                {currentImage == 1 && <BonanzasF2 />}
                {currentImage == 2 && <BonanzasF3 />}
                {currentImage == 3 && <BonanzasF4 />}
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

export default Bonanzas