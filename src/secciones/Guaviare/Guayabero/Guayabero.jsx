import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import GuayaberoF1 from './GuayaberoF1';
import GuayaberoF2 from './GuayaberoF2';
import GuayaberoF3 from './GuayaberoF3';
import GuayaberoF4 from './GuayaberoF4';
import flechaAdelante from '../../../assets/generales/flecha-adelante.png';
import flechaAtras from '../../../assets/generales/flecha-atras.png';
import './Guayabero.css'

const Guayabero = () => {
  const dispatch = useDispatch();

  const secciones = ['intro', 'video', 'audio1', 'audio2']

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
            {currentImage == 0 && <GuayaberoF1 />}
            {currentImage == 1 && <GuayaberoF2 />}
            {currentImage == 2 && <GuayaberoF3 />}  
            {currentImage == 3 && <GuayaberoF4 />}
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

export default Guayabero