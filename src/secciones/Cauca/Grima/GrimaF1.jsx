import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { establecerMostrarAbajo } from "../../../Redux/states/managerSlice";

import "./GrimaF1.css";

const aves = "https://res.cloudinary.com/dumlhmvts/image/upload/v1718070097/cauca/grima/aves_planta_opwxbu.png" 


const GrimaF1 = ({ sound, audioFx }) => {
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
    <div className="grima-f1">
      <div className="grima-f1-fondo"></div>
      <div className="mask-general">
        <div className="contenido-general grima-f1-contenedor">
          <div className="grima-f1-titulo">
            <h2>
            Grima<br></br>para la paz
            </h2>
            <hr />
          </div>
          <div className="grima-f1-bottom">
            <img src={aves} alt="danta" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrimaF1;
