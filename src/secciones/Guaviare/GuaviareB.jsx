import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { establecerMostrarAbajo } from '../../Redux/states/managerSlice';
import Caceria from './Caceria/Caceria'
import Guayabero from './Guayabero/Guayabero'
import './GuaviareB.css'

const lineasB = [
  {
    id: 'linea-caceria',
    titulo: 'Caceria',
    navegacion: 'guaviare-caceria-navegacion'
  },
  {
    id: 'linea-guayabero',
    titulo: 'Guayabero',
    navegacion: 'guaviare-guyabero-navegacion'
  }
]

const GuaviareB = () => {
  const canalBOn = useSelector(state => state.managerReducer.canalBOn);

  const dispatch = useDispatch();

  const [lineaS, setLineaS] = useState('linea-caceria')
  const divRef = useRef(null);
  const guayaberoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {

      if (divRef.current) {
        const { top, bottom } = guayaberoRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight / 2 && bottom >= 0) {
          dispatch(establecerMostrarAbajo(false));
          setLineaS('linea-guayabero')
        } else {
          setLineaS('linea-caceria')
        }
      }
    };

    divRef.current.addEventListener('scroll', handleScroll);
    return () => divRef.current.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={divRef} className='guaviare-b'>
      {canalBOn &&
        <div className='lineas-b'>
          {lineasB.map(linea => {
            return <div
              key={linea.id}
              className={lineaS === linea.id ? 'linea linea-seleccionada' : 'linea'}
            />
          })}
        </div>
      }
      <div>
        <Caceria />
      </div>
      <div ref={guayaberoRef}>
        {/* <p>{isVisible ? 'Visible' : 'Not visible'}</p> */}
        <Guayabero />
      </div>
    </div>
  )
}

export default GuaviareB