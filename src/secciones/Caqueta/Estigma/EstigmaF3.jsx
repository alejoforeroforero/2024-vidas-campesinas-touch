import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { establecerMostrarAbajo } from "../../../Redux/states/managerSlice";
import Audio from "../../../components/Audio";

import "./EstigmaF3.css";

const EstigmaF3 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(establecerMostrarAbajo(true));
  }, []);

  return (
    <>
      <div className="estigma-f3"></div>
      <div className="mask-general">
        <div className="contenido-general">
          <div className="estigma-f3-interior">
            <div className="estigma-f3-audio-contenedor">
              <Audio
                id="estigma-etnografia"
                titulo="En comunión con la hoja de coca"
                subTitulo="• Etnografía sonora •"
                autor=""
                popup={true}
              />
            </div>
            <p className="estigma-f3-p">
            En este fragmento de la etnografía sonora “Aquí me amaño, gracias a Dios”, Luis Hernando Perdomo nos comparte su visión sobre la coca y el conocimiento
            de los pueblos indígenas sobre esta planta.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EstigmaF3;
