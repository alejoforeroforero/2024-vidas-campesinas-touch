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
import { Cimarrona } from '../../../data/Cauca';

import './Bio.css';

const Bio = () => {
  const dispatch = useDispatch();
  const elementRef = useRef();

  const [showingPopup, setShowingPopup] = useState(false);

  useEffect(() => {
    dispatch(cambiarDescargando(true));
    dispatch(establecerMostrarLineasA(true));
    dispatch(establecerMostrarAbajo(true));
    dispatch(establecerPersonaje('linea-cimarrona'));
    dispatch(pararAudios());
    const timer = setTimeout(() => {
      dispatch(cambiarDescargando(false));
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const { handleTouchStart, handleTouchEnd } = useDelta('campesina-youtube-2', 'cimarrona-relatos-1', elementRef);

  const handleClosePopup = () => {
    setShowingPopup(false)
  }

  return (
    <div ref={elementRef} className='seccion cimarrona-bio' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      <div className='mask-general'>
        <div className="contenido-general">
          <h2><pre>{Cimarrona.titulo}</pre></h2>
          <h3 className="h3-info-region"><pre>{Cimarrona.subTitulo}</pre></h3>
          <div className='info'>
            <img onClick={() => setShowingPopup(true)} src={infoImg} alt="info" />
          </div>
          <div className='cimarrona-bio-frase'>
            <h3><pre>{Cimarrona.frase}</pre></h3>
          </div>
        </div>
        {showingPopup && <InfoPopup biografia={Cimarrona.bio} handleClosePopup={handleClosePopup} />}
      </div>
    </div>
  )
}

export default Bio