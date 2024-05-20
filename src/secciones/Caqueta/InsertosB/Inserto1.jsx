import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { pararAudios } from '../../../Redux/states/managerSlice';
import useDelta from '../../../hooks/useDelta';
import Audio from '../../../components/Audio';
import logo from '../../../assets/caqueta/insertos/logo-inserto.png'

import './Inserto.css';

const Inserto1 = () => {
  const dispatch = useDispatch();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('moyano-youtube-2', 'betancourt-bio', elementRef);

  useEffect(()=>{
    dispatch(pararAudios());
  }, [])


  return (
    <div ref={elementRef} className='seccion insertoB1' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      <div className='mask-general'>
        <div className="contenido-general">  
          <div className='insertoB1-logo'>
            <img src={logo} alt="" />
          </div>      
          <div className='insertoB1-audio'>
            <Audio 
              id='insertoB1-audio' 
              titulo='“Para que una finca sea sostenible y permanezca en el tiempo es primordial conservar las fuentes hídricas”' 
              autor = '- Iván Vaquero'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inserto1