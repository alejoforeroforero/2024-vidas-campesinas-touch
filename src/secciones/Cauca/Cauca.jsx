import { NavLink } from 'react-router-dom';
import regresar from '../../assets/generales/regresar.png'
import './Cauca.css';

const Cauca = () => {
  return (
    <div className='cauca'>
      <h2>PRÓXIMAMENTE</h2>
      <div className="regresar">
        <NavLink to='/menu'> <img src={regresar} alt="" /></NavLink>
      </div>
    </div>
  )
}

export default Cauca