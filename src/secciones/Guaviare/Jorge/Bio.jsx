import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cambiarDescargando } from '../../../Redux/states/managerSlice';
import InfoPopup from '../../../components/InfoPopup';

import infoImg from '../../../assets/generales/biografia.png';
import { Jorge } from '../../../data/Guaviare';

import './Bio.css';
import useDelta from '../../../hooks/useDelta';


const Bio = () => {

  const dispatch = useDispatch();

  const [showingPopup, setShowingPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(cambiarDescargando(false));
    }, 2000)

    return () => clearTimeout(timer)
  })

  const { handleTouchStart, handleTouchEnd } = useDelta('guaviare-intro', 'jorge-relatos');

  const handleClosePopup = () => {
    setShowingPopup(false)
  }

  return (
    <div className='seccion jorge-bio' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      <div className='mask-general'>
        <div className='bio-contenido'>
          <h1 className='jorge-titulo-h1'>Jorge <br />Luis Cano</h1>
          <div className='info jorge-info'>
            <img onClick={() => setShowingPopup(true)} src={infoImg} alt="info" />
          </div>
        </div>
      </div>
      {showingPopup && <InfoPopup biografia={Jorge.bio} handleClosePopup={handleClosePopup} />}
    </div>

  )
}

export default Bio