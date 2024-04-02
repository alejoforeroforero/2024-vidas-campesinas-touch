import { useSelector } from 'react-redux';
import Cargando from '../../components/Cargando';

import IntroGuaviare from './Intro/Intro';
import JorgeBio from './Jorge/Bio';
import JorgeYoutube from './Jorge/Youtube';
import JorgeRelatos from './Jorge/Relatos';
import JorgeGaleria from './Jorge/Galeria';

import './Guaviare.css';


const Guaviare = () => {
  let seccion = useSelector(state => state.managerReducer.seccion);
  const descargando = useSelector(state => state.managerReducer.descargando);

  return (
    <div className='capitulo'>
      {descargando && <Cargando />}
      {seccion == 'guaviare-intro' && <IntroGuaviare />}
      {seccion == 'jorge-bio' && <JorgeBio />}
      {seccion == 'jorge-youtube' && <JorgeYoutube />}
      {seccion == 'jorge-relatos' && <JorgeRelatos />}
      {seccion == 'jorge-galeria' && <JorgeGaleria />}
    </div>
  )
}

export default Guaviare