import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import useDelta from '../../../hooks/useDelta';
import { cambiarDescargando, establecerMostrarLineasA, establecerPersonaje } from '../../../Redux/states/managerSlice';
import InfoPopup from '../../../components/InfoPopup';

import infoImg from '../../../assets/generales/biografia.png';
import { Jorge } from '../../../data/Guaviare';

import './Bio.css';

const Bio = () => {

  const dispatch = useDispatch();
  const elementRef = useRef();


  const [showingPopup, setShowingPopup] = useState(false);

  useEffect(() => {
    dispatch(establecerMostrarLineasA(true));
    dispatch(establecerPersonaje('linea-jorge'));
    const timer = setTimeout(() => {
      dispatch(cambiarDescargando(false));
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const { handleTouchStart, handleTouchEnd } = useDelta('guaviare-intro', 'jorge-youtube', elementRef);

  const handleClosePopup = () => {
    setShowingPopup(false)
  }

  return (
    <div ref={elementRef} className='seccion jorge-bio' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      <div className='mask-general'>
        <div className="contenido-general">
          <h2 className='jorge-titulo-h1'><pre>{Jorge.titulo}</pre></h2>
          <div className='info jorge-info'>
            <img onClick={() => setShowingPopup(true)} src={infoImg} alt="info" />
          </div>
        </div>
        {showingPopup && <InfoPopup biografia={Jorge.bio} handleClosePopup={handleClosePopup} />}
      </div>
    </div>
  )
}

export default Bio