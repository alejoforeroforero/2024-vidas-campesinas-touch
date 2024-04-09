import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { establecerMostrarAbajo } from '../../Redux/states/managerSlice';
import Caceria from './Caceria/Caceria'
import Guayabero from './Guayabero/Guayabero'
import Bonanzas from './Bonanzas/Bonanzas';
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
  },
  {
    id: 'linea-bonanzas',
    titulo: 'Bonanzas',
    navegacion: 'guaviare-bonanzas-navegacion'
  }
]

const GuaviareB = () => {
  const canalBOn = useSelector(state => state.managerReducer.canalBOn);

  const dispatch = useDispatch();

  const [lineaS, setLineaS] = useState('linea-caceria')
  const divRef = useRef(null);
  const caceriaRef = useRef(null);
  const guayaberoRef = useRef(null);
  const bonanzasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {

      if (divRef.current) {

        const top1 = caceriaRef.current.getBoundingClientRect().top;
        const bottom1 = caceriaRef.current.getBoundingClientRect().bottom;

        const top2 = guayaberoRef.current.getBoundingClientRect().top;
        const bottom2 = guayaberoRef.current.getBoundingClientRect().bottom;
      

        const top3 = bonanzasRef.current.getBoundingClientRect().top;
        const bottom3 = bonanzasRef.current.getBoundingClientRect().bottom;

        const windowHeight = window.innerHeight;

        if (top1 < windowHeight / 2 && bottom1 >= 0) {
          dispatch(establecerMostrarAbajo(false));
          setLineaS('linea-caceria')
        }
        
        if (top2 < windowHeight / 2 && bottom2 >= 0) {
          dispatch(establecerMostrarAbajo(false));
          setLineaS('linea-guayabero')
        }

        if(top3 < windowHeight / 2 && bottom3 >= 0){
          dispatch(establecerMostrarAbajo(false));
          setLineaS('linea-bonanzas')
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
      <div ref={caceriaRef}>
        <Caceria />
      </div>
      <div ref={guayaberoRef}>
        <Guayabero />
      </div>
      <div ref={bonanzasRef}>
        <Bonanzas />
      </div>
    </div>
  )
}

export default GuaviareB