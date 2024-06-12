import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { establecerMostrarAbajo } from "../../../Redux/states/managerSlice";

import "./MujerF1.css";

const cafe = "https://res.cloudinary.com/dumlhmvts/image/upload/v1718105923/cauca/mujer/cafe_xygghl.png"

const mejeres = "https://res.cloudinary.com/dumlhmvts/image/upload/v1718105924/cauca/mujer/mujeres_campo_jzv0vt.png" 


const MujerF1 = ({ sound, audioFx }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(establecerMostrarAbajo(false));
    const currentVolume = sound?.volume();

    if (currentVolume < 0.4) {
      const acciones = {
        tipo: "volumen",
        valor: 1,
      };
      audioFx(acciones);
    }
  }, []);

  return (
    <div className="mujer-f1">
      <div className="mujer-f1-fondo"></div>
      <div className="mask-general">
        <div className="contenido-general mujer-f1-contenedor">
          <div className="mujer-f1-titulo">
            <h2>
            Ser mujer<br></br>en el campo
            </h2>
            <hr />
          </div>
          <div className="mujer-f1-centro">
            <img src={cafe} alt="cafe" />
          </div>
          <div className="mujer-f1-bottom">
            <img src={mejeres} alt="mejeres" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MujerF1;
