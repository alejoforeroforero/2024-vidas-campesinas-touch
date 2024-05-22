import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import useDelta from '../../../hooks/useDelta';
import Audio from '../../../components/Audio';
import logo from '../../../assets/caqueta/insertos/logo-inserto.png'

import './Inserto.css';

const Inserto2 = () => {
  const dispatch = useDispatch();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('betancourt-youtube-3', 'caleno-bio', elementRef);

  useEffect(()=>{
    dispatch(pararAudios());
  }, [])


  return (
    <div ref={elementRef} className='seccion inserto2' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      <div className='mask-general'>
        <div className="contenido-general">  
          <div className='inserto-logo'>
            <img src={logo} alt="" />
          </div> 
          <div className='inserto-audio'>
            <Audio 
              id='caqueta-inserto-2-audio' 
              titulo='“Visitamos las fincas para ver qué sistema  se está implementando y qué impacto positivo tiene. Todos aprendemos de todos”' 
              autor = '- José Alejandro Bermeo'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inserto2