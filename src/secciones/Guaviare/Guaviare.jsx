import { useEffect, useState } from 'react';
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
import Menu from './Cierre/Menu';

import { Howl } from 'howler';

import './Guaviare.css';

const audioJorge1Howl = 'https://res.cloudinary.com/dfwhzadxa/video/upload/v1713054256/vidas-campesinas/jorge/jorge1_p3qcvt.mp3'

const audioWilliam1 = 'https://res.cloudinary.com/dbqfefibl/video/upload/v1713230488/assets/guaviare/william/william1_houzzx.mp3'


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

  const [sound, setSound] = useState(null);
  const [williamAudio1, setWilliamAudio1] = useState(null);

  const dispatch = useDispatch();

  const handleNavegacion = (id) => {

    if(id == 'guaviare-jorge-navegacion'){
      dispatch(cambiarSeccion('jorge-bio'));
    }else if(id == 'guaviare-carlos-navegacion'){
      dispatch(cambiarSeccion('carlos-bio'));
    }else if(id == 'guaviare-dayana-navegacion'){
      dispatch(cambiarSeccion('dayana-bio'));
    }else if(id == 'guaviare-william-navegacion'){
      dispatch(cambiarSeccion('william-bio'));
    }else if(id == 'guaviare-marisol-navegacion'){
      dispatch(cambiarSeccion('marisol-bio'));
    }else if(id == 'guaviare-elias-navegacion'){
      dispatch(cambiarSeccion('elias-bio'));
    }else if(id == 'guaviare-rodriguez-navegacion'){
      dispatch(cambiarSeccion('rodriguez-bio'));
    }else if(id == 'guaviare-cierre-navegacion'){
      dispatch(cambiarSeccion('cierre-galeria'));
    }    
  }

  useEffect(()=>{
    dispatch(cambiarSeccion('guaviare-intro'));
    const newSound = new Howl({
      src: [audioJorge1Howl], // Replace with your audio source
    });
    setSound(newSound);

    const newSound2 = new Howl({
      src: [audioWilliam1], // Replace with your audio source
    });
    setWilliamAudio1(newSound2);

    return () => {
      newSound.unload(); 
      newSound2.unload();
    }
  }, []);

  useEffect(()=>{
    sound?.pause();
    williamAudio1?.pause();
  }, [seccion])


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
      {seccion == 'jorge-bio' && <JorgeBio sound={sound} />}
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
      {seccion == 'william-bio' && <WilliamBio williamAudio1={williamAudio1} />}
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
      {seccion == 'guaviare-menu' && <Menu />}      
    </div>
  )
}

export default Guaviare