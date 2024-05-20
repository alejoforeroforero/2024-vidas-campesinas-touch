import { useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import GanaderiaF1 from "./GanaderiaF1";
import GanaderiaF2 from "./GanaderiaF2";
import GanaderiaF3 from "./GanaderiaF3";
import GanaderiaF4 from "./GanaderiaF4";

import flechaAdelante from "../../../assets/generales/flecha-adelante.png";
import flechaAtras from "../../../assets/generales/flecha-atras.png";

import "./Ganaderia.css";

const Ganaderia = () => {
  const dispatch = useDispatch();

  const secciones = ["intro", "video1", "audio1", "audio2"];

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
    <div className="caqueta-ganaderia">
      <div className="caqueta-ganaderia-contenido">
        {currentImage == 0 && <GanaderiaF1 />}
        {currentImage == 1 && <GanaderiaF2 />}
        {currentImage == 2 && <GanaderiaF3 />}
        {currentImage == 3 && <GanaderiaF4 />}
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

export default Ganaderia;
