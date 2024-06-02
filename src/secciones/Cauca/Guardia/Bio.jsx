import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import useDelta from '../../../hooks/useDelta';

import {
  cambiarDescargando,
  establecerMostrarLineasA,
  establecerPersonaje,
  establecerMostrarFlechasCanales,
  establecerMostrarAbajo,
  pararAudios
} from '../../../Redux/states/managerSlice';
import InfoPopup from '../../../components/InfoPopup';

import infoImg from '../../../assets/generales/biografia.png';
import { Guardia } from '../../../data/Cauca';

import './Bio.css';

const Bio = () => {
  const dispatch = useDispatch();
  const elementRef = useRef();

  const [showingPopup, setShowingPopup] = useState(false);

  useEffect(() => {
    dispatch(cambiarDescargando(true));
    dispatch(establecerMostrarLineasA(true));
    dispatch(establecerMostrarFlechasCanales(false));
    dispatch(establecerMostrarAbajo(true));
    dispatch(establecerPersonaje('linea-guardia'));
    dispatch(pararAudios());
    const timer = setTimeout(() => {
      dispatch(cambiarDescargando(false));
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const { handleTouchStart, handleTouchEnd } = useDelta('cauca-intro', 'guardia-relatos-1', elementRef);

  const handleClosePopup = () => {
    setShowingPopup(false)
  }

  return (
    <div ref={elementRef} className='seccion guardia-bio' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      <div className='mask-general'>
        <div className="contenido-general">
          <h2><pre>{Guardia.titulo}</pre></h2>
          <h3 className="h3-info-region"><pre>{Guardia.subTitulo}</pre></h3>
          <div className='info'>
            <img onClick={() => setShowingPopup(true)} src={infoImg} alt="info" />
          </div>
          <div className='guardia-bio-frase'>
            <h3><pre>{Guardia.frase}</pre></h3>
          </div>
        </div>
        {showingPopup && <InfoPopup biografia={Guardia.bio} handleClosePopup={handleClosePopup} />}
      </div>
    </div>
  )
}

export default Bio