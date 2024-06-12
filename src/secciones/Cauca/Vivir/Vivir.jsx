import { useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import VivirF1 from "./VivirF1";
import VivirF2 from "./VivirF2";
import VivirF3 from "./VivirF3";
import VivirF4 from "./VivirF4";
import VivirF5 from "./VivirF5";
import flechaAdelante from "../../../assets/generales/flecha-adelante.png";
import flechaAtras from "../../../assets/generales/flecha-atras.png";

import "./Vivir.css";

const Vivir = ({ sound, audioFx }) => {
  const dispatch = useDispatch();

  const secciones = ["intro", "vivir1", "vivir2", "vivir3", "vivir4"];

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
        {currentImage == 0 && <VivirF1 sound={sound} audioFx={audioFx} />}
        {currentImage == 1 && <VivirF2 sound={sound} audioFx={audioFx} />}
        {currentImage == 2 && <VivirF3 sound={sound} audioFx={audioFx} />}
        {currentImage == 3 && <VivirF4 sound={sound} audioFx={audioFx} />}
        {currentImage == 4 && <VivirF5 sound={sound} audioFx={audioFx} />}
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

export default Vivir;
