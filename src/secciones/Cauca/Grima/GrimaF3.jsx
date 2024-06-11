import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { establecerMostrarAbajo } from "../../../Redux/states/managerSlice";
import Audio from "../../../components/Audio";
import grafica from "../../../assets/guaviare/guardianes/grafica.png";

import "./GrimaF3.css";

const GrimaF3 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(establecerMostrarAbajo(false));
  }, []);

  return (
    <>
      <div className="grima-f3"></div>
      <div className="mask-general">
        <div className="contenido-general">
          <div className="grima-f3-interior">
            <div className="grima-f3-audio-contenedor1">
              <Audio
                id="audio-grima-1"
                titulo="“Somos agricultores, pero también trabajamos el arte de la Grima”"
              />
            </div>
            {/* <div className="grima-f3-ilustraciones">
              <img className="grima-f3-grafica" src={grafica} alt="grafica" />
            </div> */}
            <div className="grima-f3-audio-contenedor2">
              <Audio
                id="audio-grima-2"
                titulo="“Queremos continuar con el legado de nuestros ancestros” &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                autor="· Jacob Arboleda"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GrimaF3;
