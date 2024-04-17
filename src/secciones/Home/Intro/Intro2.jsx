import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { establecerMostrarAbajo } from '../../../Redux/states/managerSlice';
import useDelta from '../../../hooks/useDelta';
import logo from '../../../assets/generales/logo.png';
import libelula from '../../../assets/home/libelula.png';
import hoja from '../../../assets/home/hoja.png';
import scroll from '../../../assets/generales/scroll.png'


//import homeVideo from '../../../assets/home/guaviare3.mp4';
const homeVideo = 'https://res.cloudinary.com/dbqfefibl/video/upload/v1713230516/assets/home/guaviare3_whjehs.mp4';

import './Intro.css';

const Intro2 = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('home-intro', 'home-intro3', elementRef);

  useEffect(() => {
    dispatch(establecerMostrarAbajo(false));
  }, [])

  const pintarVideo = () => {
    return (
      <div className="video-bg-general">
        <video
          ref={videoRef}
          loop
          playsInline
          muted
          src={homeVideo}>
        </video>
      </div>
    )
  }

  return (
    <div ref={elementRef} className='seccion home-intro home-intro-2' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      {/* {pintarVideo()} */}
      <div className='mask-general'>
        <div className="contenido-general">
          <div className='home-intro-contenido'>
            <div className='home-intro-top'>
              <img src={logo} alt="" />
            </div>
            <div className='home-intro-textos'>
              <img src={hoja} alt="" />
              <img src={libelula} alt="" />
              <div className='home-intro-textos-p'>
                {/* <p>Campesinos y campesinas se nombran por los distintos rincones y centros del país. Han puesto su atención sobre su vínculo directo con la tierra y la naturaleza, llamando la atención sobre sus formas de vivir mientras se hacen familia y comunidad, mientras estudian, trabajan e inventan opciones de vida. </p> */}
                <p>Las vidas campesinas se desenvuelven en páramos y costas, valles y montañas, en la vera de los ríos, ciénagas y selvas. Se han ido haciendo a lo largo de la historia moviéndose de un lado a otro, permaneciendo en otros momentos, mientras vuelven la tierra finca y hacen del playón un lugar de pastoreo, un punto de pesca. </p>
                {/* <p>Las vidas campesinas habitan las veredas, los corregimientos, los pueblos, las ciudades. Están en los caminos, transitan corredores para llevar de un lado al otro lo que producen, y tejen compadrazgos entre calendarios festivos y visitas.</p>
                <p>Las vidas campesinas son interculturales y resultan de procesos continuos de poblamiento, donde confluyen las trayectorias indígenas, con las de comunidades negras, con las de gentes que han hecho de los lugares su hogar.</p>
                <p>Las campesinas y los campesinos cultivan, crían especies menores, ven por sus animales, pescan, recolectan frutos y moluscos, tejen, hacen canastos y bultos de distintas fibras, también trabajan en el turismo comunitario y transforman en pequeña escala algunos alimentos. Participan de los mercados y van por temporadas a las ciudades a vender sus productos, a ofrecer servicios. </p> 
                <p>Campesinos y campesinas se han organizado de muchas maneras, en juntas de acción comunal, en asociaciones y cooperativas, siendo partes activas de la vida política de la nación.</p> */}
              </div>
            </div>
            <div className='home-intro-bottom'>
              <img src={scroll} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro2