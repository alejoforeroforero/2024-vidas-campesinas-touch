import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cambiarSeccion } from '../../Redux/states/managerSlice';
import Cargando from '../../components/Cargando';

import IntroGuaviare from './Intro/Intro';
import JorgeBio from './Jorge/Bio';
import JorgeYoutube from './Jorge/Youtube';
import JorgeRelatos from './Jorge/Relatos';
import JorgeGaleria from './Jorge/Galeria';

import CarlosBio from './Carlos/Bio';
import CarlosYoutube from './Carlos/Youtube';
import CarlosRelatos from './Carlos/Relatos';
import CarlosGaleria from './Carlos/Galeria';

import DayanaBio from './Dayana/Bio';
import DayanaYoutube1 from './Dayana/Youtube';
import DayanaYoutube2 from './Dayana/Youtube2';
import DayanaGaleria from './Dayana/Galeria';


import './Guaviare.css';

const lineas = [
  {
    id: 'linea-jorge',
    titulo: 'Jorge Cano',
    navegacion: 'guaviare-jorge-navegacion'
  },
  {
    id: 'linea-carlos',
    titulo: 'Carlos Mancera',
    navegacion: 'guaviare-carlos-navegacion'
  },
  {
    id: 'linea-dayana',
    titulo: 'Dayana Novoa',
    navegacion: 'guaviare-dayana-navegacion'
  },
  {
    id: 'linea-william',
    titulo: 'William Mora',
    navegacion: 'guaviare-william-navegacion'
  },
  {
    id: 'linea-marisol',
    titulo: 'Marisol Montero',
    navegacion: 'guaviare-marisol-navegacion'
  },
  {
    id: 'linea-elias',
    titulo: 'Elías Lozano',
    navegacion: 'guaviare-elias-navegacion'
  },
]


const Guaviare = () => {
  const seccion = useSelector(state => state.managerReducer.seccion);
  const personaje = useSelector(state => state.managerReducer.personaje);
  const descargando = useSelector(state => state.managerReducer.descargando);
  const mostrarLineasA = useSelector(state => state.managerReducer.mostrarLineasA);

  const dispatch = useDispatch();

  const handleNavegacion = (id) => {
    //window.scrollTo({ top: 7000, behavior: 'auto' });
  }

  useEffect(()=>{
    dispatch(cambiarSeccion('guaviare-intro'));
    //dispatch(cambiarSeccion('dayana-bio'));
  }, []);

  console.log(seccion);

  return (
    <div className='capitulo'>
      {mostrarLineasA &&
        <div className='lineas-a'>
          {lineas.map(linea => {
            return <div
              onClick={() => { handleNavegacion(linea.navegacion) }}
              key={linea.id}
              className={personaje === linea.id ? 'linea linea-seleccionada' : 'linea'}
            />
          })}
        </div>
      }
      {descargando && <Cargando />}
      {seccion == 'guaviare-intro' && <IntroGuaviare />}
      {seccion == 'jorge-bio' && <JorgeBio />}
      {seccion == 'jorge-youtube' && <JorgeYoutube />}
      {seccion == 'jorge-relatos' && <JorgeRelatos />}
      {seccion == 'jorge-galeria' && <JorgeGaleria />}
      {seccion == 'carlos-bio' && <CarlosBio />}
      {seccion == 'carlos-youtube' && <CarlosYoutube />}
      {seccion == 'carlos-relatos' && <CarlosRelatos />}
      {seccion == 'carlos-galeria' && <CarlosGaleria />}
      {seccion == 'dayana-bio' && <DayanaBio />}
      {seccion == 'dayana-youtube-1' && <DayanaYoutube1 />}
      {seccion == 'dayana-youtube-2' && <DayanaYoutube2 />}
      {seccion == 'dayana-galeria' && <DayanaGaleria />}
    </div>
  )
}

export default Guaviare