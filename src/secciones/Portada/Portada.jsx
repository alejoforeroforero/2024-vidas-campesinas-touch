import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activarYaEmpezo } from "../../Redux/states/managerSlice";
import logo from "../../assets/generales/logo.png";
import audifonos from "../../assets/generales/audifonos.png";

import "./Portada.css";

const Portada = ({ handleEmpezar }) => {
  const [empezo, setEmpezo] = useState(false);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    setEmpezo(true);
    dispatch(activarYaEmpezo(true));
    handleEmpezar();
  };

  return (
    <>
      <div className="portada">
        <div className="portada-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="portada-audifonos">
          <img
            className="portada-audifonos-img"
            src={audifonos}
            alt="audifonos"
          />
        </div>
        <div className="portada-texto">
          <p>Esta experiencia</p>
          <p>tiene sonido</p>
        </div>
        <div className="portada-entrar">
          {!empezo && (
            <button className="portada-entrar-btn" onClick={handleOnClick}>
              Click para entrar
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Portada;
