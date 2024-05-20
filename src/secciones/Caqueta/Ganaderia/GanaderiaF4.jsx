import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { establecerMostrarAbajo } from "../../../Redux/states/managerSlice";
import Audio from "../../../components/Audio";
import grafica from "../../../assets/caqueta/ganaderia/arbol.png";

import "./GanaderiaF4.css";

const GanaderiaF4 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(establecerMostrarAbajo(false));
  }, []);

  return (
    <>
      <div className="ganaderia-f4"></div>
      <div className="mask-general">
        <div className="contenido-general">
          <div className="ganaderia-f4-interior">
            <div className="ganaderia-f4-ilustraciones">
              <img
                className="ganaderia-f4-grafica"
                src={grafica}
                alt="grafica"
              />
            </div>
            <div className="ganaderia-f4-audio-contenedor2">
              <Audio
                id="audio-guardianes-2"
                titulo="“Lo que se propone son sistemas agroforestales para regenerar los suelos degradados”."
                autor="· José Alejandro Bermeo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GanaderiaF4;
