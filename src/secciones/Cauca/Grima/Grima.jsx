import { useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import GrimaF1 from "./GrimaF1";
import GrimaF2 from "./GrimaF2";
import GrimaF3 from "./GrimaF3";
import GrimaF4 from "./GrimaF4";
import flechaAdelante from "../../../assets/generales/flecha-adelante.png";
import flechaAtras from "../../../assets/generales/flecha-atras.png";

import "./Grima.css";

const Grima = ({ sound, audioFx }) => {
  const dispatch = useDispatch();

  const secciones = ["intro", "grima1", "grima2", "grima3", "grima4"];

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
    <div className="cauca-todos">
      <div className="cauca-todos-contenido">
        {currentImage == 0 && <GrimaF1 sound={sound} audioFx={audioFx} />}
        {currentImage == 1 && <GrimaF2 sound={sound} audioFx={audioFx} />}
        {currentImage == 2 && <GrimaF3 sound={sound} audioFx={audioFx} />}
        {currentImage == 3 && <GrimaF4 sound={sound} audioFx={audioFx} />}
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

export default Grima;
