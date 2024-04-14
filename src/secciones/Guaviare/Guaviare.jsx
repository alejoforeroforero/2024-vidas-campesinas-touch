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

import WilliamBio from './William/Bio';
import WilliamYoutube from './William/Youtube';
import WilliamRelatos from './William/Relatos';
import WilliamGaleria from './William/Galeria';

import MarisolBio from './Marisol/Bio';
import MarisolYoutube from './Marisol/Youtube';
import MarisolGaleria from './Marisol/Galeria';

import EliasBio from './Elias/Bio';
import EliasYoutube from './Elias/Youtube';
import EliasRelatos from './Elias/Relatos';

import RodriguezBio from './Rodriguez/Bio';
import RodriguezYoutube from './Rodriguez/Youtube';
import RodriguezRelatos from './Rodriguez/Relatos';
import RodriguezYoutube2 from './Rodriguez/Youtube2';

import CierreGaleria from './Cierre/Galeria';
import CierreVideo from './Cierre/Relatos';

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
  {
    id: 'linea-rodriguez',
    titulo: 'Familia Rodriguez',
    navegacion: 'guaviare-rodriguez-navegacion'
  },
  {
    id: 'linea-cierre',
    titulo: 'Cierre',
    navegacion: 'guaviare-cierre-navegacion'
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
    //dispatch(cambiarSeccion('guaviare-intro'));
    dispatch(cambiarSeccion('cierre-video'));
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
      {seccion == 'william-bio' && <WilliamBio />}
      {seccion == 'william-youtube' && <WilliamYoutube />}
      {seccion == 'william-relatos' && <WilliamRelatos />}
      {seccion == 'william-galeria' && <WilliamGaleria />}
      {seccion == 'marisol-bio' && <MarisolBio />}
      {seccion == 'marisol-youtube' && <MarisolYoutube />}
      {seccion == 'marisol-galeria' && <MarisolGaleria />}
      {seccion == 'elias-bio' && <EliasBio />}
      {seccion == 'elias-youtube' && <EliasYoutube />}
      {seccion == 'elias-relatos' && <EliasRelatos />}
      {seccion == 'rodriguez-bio' && <RodriguezBio />}
      {seccion == 'rodriguez-youtube' && <RodriguezYoutube />}
      {seccion == 'rodriguez-relatos' && <RodriguezRelatos />}
      {seccion == 'rodriguez-youtube-2' && <RodriguezYoutube2 />}
      {seccion == 'cierre-galeria' && <CierreGaleria />}
      {seccion == 'cierre-video' && <CierreVideo />}
      
    </div>
  )
}

export default Guaviare