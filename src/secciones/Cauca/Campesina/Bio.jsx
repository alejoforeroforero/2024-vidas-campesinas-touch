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
import { Campesina } from '../../../data/Cauca';

import './Bio.css';

const Bio = () => {
  const dispatch = useDispatch();
  const elementRef = useRef();

  const [showingPopup, setShowingPopup] = useState(false);

  useEffect(() => {
    dispatch(cambiarDescargando(true));
    dispatch(establecerMostrarLineasA(true));
    dispatch(establecerMostrarFlechasCanales(true));
    dispatch(establecerMostrarAbajo(true));
    dispatch(establecerPersonaje('linea-campesina'));
    dispatch(pararAudios());
    const timer = setTimeout(() => {
      dispatch(cambiarDescargando(false));
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const { handleTouchStart, handleTouchEnd } = useDelta('guardia-relatos-3', 'campesina-relatos-1', elementRef);

  const handleClosePopup = () => {
    setShowingPopup(false)
  }

  return (
    <div ref={elementRef} className='seccion campesina-bio' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      <div className='mask-general'>
        <div className="contenido-general">
          <h2><pre>{Campesina.titulo}</pre></h2>
          <h3 className="h3-info-region"><pre>{Campesina.subTitulo}</pre></h3>
          <div className='info'>
            <img onClick={() => setShowingPopup(true)} src={infoImg} alt="info" />
          </div>
          <div className='campesina-bio-frase'>
            <h3><pre>{Campesina.frase}</pre></h3>
          </div>
        </div>
        {showingPopup && <InfoPopup biografia={Campesina.bio} handleClosePopup={handleClosePopup} />}
      </div>
    </div>
  )
}

export default Bio