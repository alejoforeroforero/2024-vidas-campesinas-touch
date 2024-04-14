import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import useDelta from '../../../hooks/useDelta';

import {
  cambiarDescargando,
  establecerMostrarLineasA,
  establecerPersonaje,
  pararAudios
} from '../../../Redux/states/managerSlice';
import InfoPopup from '../../../components/InfoPopup';

import infoImg from '../../../assets/generales/biografia.png';
import { Marisol } from '../../../data/Guaviare';

import './Bio.css';

const Bio = () => {
  const dispatch = useDispatch();
  const elementRef = useRef();

  const [showingPopup, setShowingPopup] = useState(false);

  useEffect(() => {
    dispatch(cambiarDescargando(true));
    dispatch(establecerMostrarLineasA(true));
    dispatch(establecerPersonaje('linea-marisol'));
    dispatch(pararAudios());
    const timer = setTimeout(() => {
      dispatch(cambiarDescargando(false));
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const { handleTouchStart, handleTouchEnd } = useDelta('william-galeria', 'marisol-youtube', elementRef);

  const handleClosePopup = () => {
    setShowingPopup(false)
  }

  return (
    <div ref={elementRef} className='seccion marisol-bio' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      <div className='mask-general'>
        <div className="contenido-general">
          <h2><pre>{Marisol.titulo}</pre></h2>
          <div className='info'>
            <img onClick={() => setShowingPopup(true)} src={infoImg} alt="info" />
          </div>
        </div>
        {showingPopup && <InfoPopup biografia={Marisol.bio} handleClosePopup={handleClosePopup} />}
      </div>
    </div>
  )
}

export default Bio