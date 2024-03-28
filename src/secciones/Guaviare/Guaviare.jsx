import { useState } from 'react'
import { useSelector } from 'react-redux';
import Cargando from '../../components/Cargando';

import JorgeBio from './Jorge/Bio';
import RelatosJorge from './Jorge/Relatos';
import YoutubeJorge from './Jorge/Youtube';
import Galeria from './Jorge/Galeria';
import './Guaviare.css';


const Guaviare = () => {
  let seccion = useSelector(state => state.managerReducer.seccionGuaviare);
  const [showPopup, setShowpopup] = useState(false);

  return (
    <div className='capitulo'>
      {seccion} {JSON.stringify(showPopup)}
      {showPopup && <Cargando />}
      {seccion == 1 && <JorgeBio />}
      {seccion == 2 && <RelatosJorge />}
      {seccion == 3 && <YoutubeJorge />}
      {seccion == 4 && <Galeria />}
    </div>
  )
}

export default Guaviare