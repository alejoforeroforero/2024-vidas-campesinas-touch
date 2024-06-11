import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { establecerMostrarAbajo } from "../../../Redux/states/managerSlice";

import "./TodosF1.css";

const aves = "https://res.cloudinary.com/dumlhmvts/image/upload/v1718062347/cauca/todos/Aves_1_vrwmoy.png" 


const TodosF1 = ({ sound, audioFx }) => {
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
    <div className="todos-f1">
      <div className="todos-f1-fondo"></div>
      <div className="mask-general">
        <div className="contenido-general todos-f1-contenedor">
          <div className="todos-f1-titulo">
            <h2>
            Todos somos<br></br>lo mismo
            </h2>
            <hr />
          </div>
          <div className="todos-f1-bottom">
            <img src={aves} alt="danta" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodosF1;
