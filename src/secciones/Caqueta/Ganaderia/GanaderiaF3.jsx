import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { establecerMostrarAbajo } from "../../../Redux/states/managerSlice";
import Audio from "../../../components/Audio";
import grafica from "../../../assets/caqueta/ganaderia/ganado-2.png";

import "./GanaderiaF3.css";

const GanaderiaF3 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(establecerMostrarAbajo(false));
  }, []);

  return (
    <>
      <div className="ganaderia-f3"></div>
      <div className="mask-general">
        <div className="contenido-general">
          <div className="ganaderia-f3-interior">
            <div className="ganaderia-f3-ilustraciones">
              <img
                className="ganaderia-f3-grafica"
                src={grafica}
                alt="grafica"
              />
            </div>
            <div className="ganaderia-f3-audio-contenedor2">
              <Audio
                id="audio-guardianes-2"
                titulo="“Somos ganaderos tradicionales, pero le hemos dado mal uso al suelo”."
                autor="· Carlos Alfredo Moyano Trujillo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GanaderiaF3;
