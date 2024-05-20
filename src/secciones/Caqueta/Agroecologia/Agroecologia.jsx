import { useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import AgroecologiaF1 from "./AgroecologiaF1";
import AgroecologiaF2 from "./AgroecologiaF2";
import AgroecologiaF3 from "./AgroecologiaF3";
import AgroecologiaF4 from "./AgroecologiaF4";
import AgroecologiaF5 from "./AgroecologiaF5";
import flechaAdelante from "../../../assets/generales/flecha-adelante.png";
import flechaAtras from "../../../assets/generales/flecha-atras.png";

import "./Agroecologia.css";

const Agroecologia = () => {
  const dispatch = useDispatch();

  const secciones = ["intro", "video1", "audio1", "video2", "audio2"];

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
        {currentImage == 0 && <AgroecologiaF1 />}
        {currentImage == 1 && <AgroecologiaF2 />}
        {currentImage == 2 && <AgroecologiaF3 />}
        {currentImage == 3 && <AgroecologiaF4 />}
        {currentImage == 4 && <AgroecologiaF5 />}
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

export default Agroecologia;
