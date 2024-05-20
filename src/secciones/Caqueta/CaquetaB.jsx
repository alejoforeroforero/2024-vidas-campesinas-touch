import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { establecerMostrarAbajo } from '../../Redux/states/managerSlice';
import Estigma from './Estigma/Estigma'
import Agroecologia from './Agroecologia/Agroecologia'
import Inserto1 from './InsertosB/Inserto1';
import Ganaderia from './Ganaderia/Ganaderia';
import Inserto2 from './InsertosB/Inserto2';
import Inserto3 from './InsertosB/Inserto3';
// import Guayabero from './Guayabero/Guayabero'
// import Bonanzas from './Bonanzas/Bonanzas';
// import Paz from './Paz/Paz';
// import Guardianes from './Guardianes/Guardianes';
import './CaquetaB.css'

const lineasB = [
  {
    id: 'linea-estigma',
    titulo: 'Estigma',
    navegacion: 'caqueta-estigma-navegacion'
  },
  {
    id: 'linea-ganaderia',
    titulo: 'El gandado y los suelos',
    navegacion: 'caqueta-ganaderia-navegacion'
  },
  {
    id: 'linea-agroecologia',
    titulo: 'Agroecología productiva y familiar',
    navegacion: 'caqueta-agroecologia-navegacion'
  },
]

const GuaviareB = () => {
  const canalBOn = useSelector(state => state.managerReducer.canalBOn);

  const dispatch = useDispatch();

  const [lineaS, setLineaS] = useState('linea-caceria')
  const divRef = useRef(null);
  const estigmaRef = useRef(null);
  const ganaderiaRef = useRef(null);
  const agroecologiaRef = useRef(null);
  

  useEffect(() => {
    const handleScroll = () => {

      if (divRef.current) {
        const top1 = estigmaRef.current.getBoundingClientRect().top;
        const bottom1 = estigmaRef.current.getBoundingClientRect().bottom;  

        const top3 = ganaderiaRef.current.getBoundingClientRect().top;
        const bottom3 = ganaderiaRef.current.getBoundingClientRect().bottom;

        const top5 = agroecologiaRef.current.getBoundingClientRect().top;
        const bottom5 = agroecologiaRef.current.getBoundingClientRect().bottom;

        const windowHeight = window.innerHeight;

        if (top1 < windowHeight / 2 && bottom1 >= 0) {
          dispatch(establecerMostrarAbajo(false));
          setLineaS('linea-estigma')
        }

        if(top3 < windowHeight / 2 && bottom3 >= 0){
          dispatch(establecerMostrarAbajo(false));
          setLineaS('linea-ganaderia')
        }

        if(top5 < windowHeight / 2 && bottom5 >= 0){
          dispatch(establecerMostrarAbajo(false));
          setLineaS('linea-agroecologia')
        }
      }      
    };

    divRef.current.addEventListener('scroll', handleScroll);
    return () => {
      divRef.current?.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div ref={divRef} className='caqueta-b'>
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
      <div ref={estigmaRef}>
        <Estigma />
      </div>
      <div>
        <Inserto1 />
      </div>
      <div ref={ganaderiaRef}>
        <Ganaderia />
      </div>
      <div>
        <Inserto2 />
      </div>
      <div ref={agroecologiaRef}>
        <Agroecologia />
      </div>
      <div>
        <Inserto3 />
      </div>
    </div>
  )
}

export default GuaviareB