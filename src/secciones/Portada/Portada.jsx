import { useState } from "react";
import logo from '../../assets/generales/logo.png';
import audifonos from '../../assets/generales/audifonos.png';

import './Portada.css'

const Portada = ({ handleEmpezar }) => {
    const [empezo, setEmpezo] = useState(false);

    const handleOnClick = () => {
        setEmpezo(true);
        handleEmpezar();
    }

    return (
        <>
            <div className="portada">
                <div className='portada-imgs'>
                    <img src={logo} alt="logo" />
                    <img className='portada-audifonos-img' src={audifonos} alt="audifonos" />
                    <p>Esta experiencia</p>
                    <p>tiene sonido</p>
                </div>
                <div className='portada-entrar'>
                    {!empezo && <button className='portada-entrar-btn' onClick={handleOnClick}>Click para entrar</button>}
                </div>
            </div>
        </>
    )
}

export default Portada