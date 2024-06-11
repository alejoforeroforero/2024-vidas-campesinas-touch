import { useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import TodosF1 from "./TodosF1";
import TodosF2 from "./TodosF2";
import TodosF3 from "./TodosF3";
import flechaAdelante from "../../../assets/generales/flecha-adelante.png";
import flechaAtras from "../../../assets/generales/flecha-atras.png";

import "./Todos.css";

const Todos = ({ sound, audioFx }) => {
  const dispatch = useDispatch();

  const secciones = ["intro", "video1", "video2"];

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
        {currentImage == 0 && <TodosF1 sound={sound} audioFx={audioFx} />}
        {currentImage == 1 && <TodosF2 sound={sound} audioFx={audioFx} />}
        {currentImage == 2 && <TodosF3 sound={sound} audioFx={audioFx} />}
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

export default Todos;
