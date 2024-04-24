import { NavLink } from 'react-router-dom';
import regresar from '../../assets/generales/regresar.png'
import './Caqueta.css';

const Cauca = () => {
  return (
    <div className='caqueta'>
      <h2>PRÓXIMAMENTE</h2>
      <div className="regresar">
        <NavLink to='/menu'> <img src={regresar} alt="" /></NavLink>
      </div>
    </div>
  )
}

export default Cauca
// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { cambiarSeccion } from '../../Redux/states/managerSlice';
// import Cargando from '../../components/Cargando';

// import IntroCaqueta from './Intro/Intro';
// import MoyanoBio from './Moyano/Bio';
// import MoyanoYoutube1 from './Moyano/Youtube';
// import MoyanoRelatos from './Moyano/Relatos';
// import MoyanoYoutube2 from './Moyano/Youtube2';

// const lineas = [
//   {
//     id: 'linea-moyano',
//     titulo: 'Familia Moyano',
//     navegacion: 'caqueta-moyano-navegacion'
//   },

// ]

// const Caqueta = () => {
//   const seccion = useSelector(state => state.managerReducer.seccion);
//   const personaje = useSelector(state => state.managerReducer.personaje);
//   const descargando = useSelector(state => state.managerReducer.descargando);
//   const mostrarLineasA = useSelector(state => state.managerReducer.mostrarLineasA);

//   console.log(seccion);

//   const dispatch = useDispatch();

//   const handleNavegacion = (id) => {
//     if (id == 'caqueta-moyano-navegacion') {
//       dispatch(cambiarSeccion('moyano-bio'));
//     }
//   }

//   useEffect(() => {
//     dispatch(cambiarSeccion('caqueta-intro'));
//   }, []);

//   return (
//     <div className='capitulo'>
//       {mostrarLineasA &&
//         <div className='lineas-a'>
//           {lineas.map(linea => {
//             return <div
//               onClick={() => { handleNavegacion(linea.navegacion) }}
//               key={linea.id}
//               className={personaje === linea.id ? 'linea linea-seleccionada' : 'linea'}
//             />
//           })}
//         </div>
//       }
//       {descargando && <Cargando />}
//       {seccion == 'caqueta-intro' && <IntroCaqueta />}
//       {seccion == 'moyano-bio' && <MoyanoBio />}
//       {seccion == 'moyano-youtube-1' && <MoyanoYoutube1 />}
//       {seccion == 'moyano-relatos' && <MoyanoRelatos />}
//       {seccion == 'moyano-youtube-2' && <MoyanoYoutube2 />}

      

//     </div>
//   )
// }

// export default Caqueta