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
    <div ref={elementRef} className='seccion inserto1' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      <div className='mask-general'>
        <div className="contenido-general">  
          <div className='inserto1-logo'>
            <img src={logo} alt="" />
          </div>        
          <div className='inserto1-frase'>
            <h3>
                “Es una escuela porque estamos permanentemente en formación y en investigación”.
            </h3>
            <h4>- Dora Libia Mosquera</h4>
          </div>
          <div className='inserto1-audio'>
            <Audio 
              id='inserto1-audio' 
              titulo='“Nosotras también somos científicas en nuestro territorio. Tenemos muchos saberes”' 
              autor = '- Nury Trujillo de Moyano'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inserto1