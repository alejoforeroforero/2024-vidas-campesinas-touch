import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import useDelta from '../../../hooks/useDelta';
import Audio from '../../../components/Audio';
import logo from '../../../assets/caqueta/insertos/logo-inserto.png'

import './Inserto.css';

const Inserto3 = () => {
  const dispatch = useDispatch();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('caleno-youtube-2', 'caqueta-galeria', elementRef);

  useEffect(()=>{
    dispatch(pararAudios());
  }, [])


  return (
    <div ref={elementRef} className='seccion inserto3' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      <div className='mask-general'>
        <div className="contenido-general">  
          <div className='inserto3-logo'>
            <img src={logo} alt="" />
          </div> 
          <div className='inserto3-audio'>
            <Audio 
              id='caqueta-inserto-3-audio' 
              titulo='“Restaurar también las relaciones, la confianza, el amor propio y por el territorio”' 
              autor = '· Yesenia Cárdenas Hernández'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inserto3