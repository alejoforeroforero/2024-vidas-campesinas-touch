import { useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import EstigmaF1 from "./EstigmaF1";
import EstigmaF2 from "./EstigmaF2";
import EstigmaF3 from "./EstigmaF3";
// import EstigmaF4 from "./EstigmaF4";
// import EstigmaF5 from "./EstigmaF5";
import flechaAdelante from "../../../assets/generales/flecha-adelante.png";
import flechaAtras from "../../../assets/generales/flecha-atras.png";

import "./Estigma.css";

const Estigma = () => {
  const dispatch = useDispatch();

  const secciones = ["intro", "video1", "audio"];

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
    <div className="caqueta-estigma">
      <div className="caqueta-estigma-contenido">
        {currentImage == 0 && <EstigmaF1 />}
        {currentImage == 1 && <EstigmaF2 />}
        {currentImage == 2 && <EstigmaF3 />}
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

export default Estigma;
