import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import useDelta from '../../../hooks/useDelta';
import audioWilliam1 from '../../../assets/guaviare/william/william1.mp3';

import {
  cambiarDescargando,
  establecerMostrarLineasA,
  establecerPersonaje,
  pararAudios
} from '../../../Redux/states/managerSlice';
import InfoPopup from '../../../components/InfoPopup';

import infoImg from '../../../assets/generales/biografia.png';
import { William } from '../../../data/Guaviare';

import './Bio.css';

const Bio = () => {
  const dispatch = useDispatch();
  const elementRef = useRef();
  const audioRef = useRef(null);

  const [showingPopup, setShowingPopup] = useState(false);

  useEffect(() => {
    dispatch(cambiarDescargando(true));
    dispatch(establecerMostrarLineasA(true));
    dispatch(establecerPersonaje('linea-william'));
    dispatch(pararAudios());
    const timer = setTimeout(() => {
      dispatch(cambiarDescargando(false));
      audioRef.current.play();
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const { handleTouchStart, handleTouchEnd } = useDelta('dayana-galeria', 'william-youtube', elementRef);

  const handleClosePopup = () => {
    setShowingPopup(false)
  }

  return (
    <div ref={elementRef} className='seccion william-bio' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      <audio ref={audioRef} src={audioWilliam1} crossOrigin="anonymous"></audio>
      <div className='mask-general'>
        <div className="contenido-general">
          <h2><pre>{William.titulo}</pre></h2>
          <div className='info'>
            <img onClick={() => setShowingPopup(true)} src={infoImg} alt="info" />
          </div>
        </div>
        {showingPopup && <InfoPopup biografia={William.bio} handleClosePopup={handleClosePopup} />}
      </div>
    </div>
  )
}

export default Bio