import { useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import MujerF1 from "./MujerF1";
import MujerF2 from "./MujerF2";
import MujerF3 from "./MujerF3";
import MujerF4 from "./MujerF4";
import flechaAdelante from "../../../assets/generales/flecha-adelante.png";
import flechaAtras from "../../../assets/generales/flecha-atras.png";

import "./Mujer.css";

const Mujer = ({ sound, audioFx }) => {
  const dispatch = useDispatch();

  const secciones = ["intro", "mujer1", "mujer2", "mujer3"];

  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    dispatch(pararAudios());
    setCurrentImage((currentImage - 1 + secciones.length) % secciones.length);
  };

  const nextImage = () => {
    dispatch(pararAudios());
    setCurrentImage((currentImage + 1) % secciones.length);
  };

  return (
    <div className="cauca-mujer">
      <div className="cauca-mujer-contenido">
        {currentImage == 0 && <MujerF1 sound={sound} audioFx={audioFx} />}
        {currentImage == 1 && <MujerF2 sound={sound} audioFx={audioFx} />}
        {currentImage == 2 && <MujerF3 sound={sound} audioFx={audioFx} />}
        {currentImage == 3 && <MujerF4 sound={sound} audioFx={audioFx} />}
      </div>
      <div className="botones-flechas-b">
        <div>
          {currentImage != 0 && (
            <button className="flecha-atras" onClick={prevImage}>
              <img src={flechaAtras} alt="flecha"></img>
            </button>
          )}
          {currentImage != secciones.length - 1 && (
            <button
              className={
                currentImage == 0 ? "flecha-adelante-inicio" : "flecha-adelante"
              }
              onClick={nextImage}
            >
              <img src={flechaAdelante} alt="flecha"></img>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mujer;
