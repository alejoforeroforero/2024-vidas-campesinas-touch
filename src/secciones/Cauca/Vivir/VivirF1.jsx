import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { establecerMostrarAbajo } from "../../../Redux/states/managerSlice";

import "./VivirF1.css";

const aves = "https://res.cloudinary.com/dumlhmvts/image/upload/v1718117774/cauca/vivir/aves_1_mfibfd.png" 


const VivirF1 = ({ sound, audioFx }) => {
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
    <div className="vivir-f1">
      <div className="vivir-f1-fondo"></div>
      <div className="mask-general">
        <div className="contenido-general vivir-f1-contenedor">
          <div className="vivir-f1-titulo">
            <h2>
            Vivir<br></br>en armonía,<br></br>vivir en paz
            </h2>
            <hr />
          </div>
          <div className="vivir-f1-bottom">
            <img src={aves} alt="aves" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VivirF1;
