import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import { cambiarSrc } from "../../../Redux/states/audioHowlerSlice";
import CaceriaF1 from "./CaceriaF1";
import CaceriaF2 from "./CaceriaF2";
import CaceriaF3 from "./CaceriaF3";
import flechaAdelante from "../../../assets/generales/flecha-adelante.png";
import flechaAtras from "../../../assets/generales/flecha-atras.png";
const caceriaSrc =
  "https://res.cloudinary.com/dvtbfxkn9/video/upload/v1717709248/Tiempos_caceria_MAY22_x0evfe.mp3";

import "./Caceria.css";

const Caceria = () => {
  const dispatch = useDispatch();

  const secciones = ["intro", "audio1", "audio2"];

  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    dispatch(pararAudios());
    setCurrentImage((currentImage - 1 + secciones.length) % secciones.length);
  };

  const nextImage = () => {
    dispatch(pararAudios());
    setCurrentImage((currentImage + 1) % secciones.length);
  };

  const handleOnClickPlayAudioTema = ()=>{
    dispatch(cambiarSrc(caceriaSrc))
  }

  return (
    <div className="guaviare-caceria">
      <div className="guaviare-caceria-contenido">
        {currentImage == 0 && <CaceriaF1 />}
        {currentImage == 1 && <CaceriaF2 />}
        {currentImage == 2 && <CaceriaF3 />}
      </div>
      <div className="audio-tema-b" onClick={handleOnClickPlayAudioTema}></div>
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

export default Caceria;
