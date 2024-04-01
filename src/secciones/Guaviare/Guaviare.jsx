import { useSelector } from 'react-redux';
import Cargando from '../../components/Cargando';

import IntroGuaviare from './Intro/Intro';
import JorgeBio from './Jorge/Bio';
import RelatosJorge from './Jorge/Relatos';
import YoutubeJorge from './Jorge/Youtube';
import Galeria from './Jorge/Galeria';
import './Guaviare.css';


const Guaviare = () => {
  let seccion = useSelector(state => state.managerReducer.seccion);
  const descargando = useSelector(state => state.managerReducer.descargando);

  return (
    <div className='capitulo'>
      {descargando && <Cargando />}
      {seccion == 'guaviare-intro' && <IntroGuaviare />}
      {seccion == 'jorge-bio' && <JorgeBio />}
      {seccion == 'jorge-youtube' && <YoutubeJorge />}
      {seccion == 'jorge-relatos' && <RelatosJorge />}
      
      {seccion == 5 && <Galeria />}
    </div>
  )
}

export default Guaviare