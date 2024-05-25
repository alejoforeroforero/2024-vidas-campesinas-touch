import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeVideo } from "../../../Redux/states/managerSlice";
import Audio from "../../../components/Audio";

import delfinImg from "../../../assets/guaviare/guayabero/delfin.png";
import abajo from "../../../assets/generales/abajo.png";

import "./GuayaberoF4.css";

const GuayaberoF4 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeVideo(null));
  }, []);

  return (
    <div className="guayabero-f4">
      <div className="guayabero-f4-fondo"></div>
      <div className="mask-general">
        <div className="contenido-general">
          <div className="guayabero-f4-interior">
            <div className="guayabero-f4-frase">
              <h3>
                “No se podía meter el remo porque se tropezaba con las Toninas”.
              </h3>
              <h4>· Carmen Montero</h4>
            </div>
            <div className="guayabero-f4-ilustraciones">
              <img src={delfinImg} alt="jaguar" />
            </div>
            <div className="guayabero-audio-contenedor">
              <Audio
                id="audio-toninas"
                titulo="“Las Toninas se dispersaron por los otros ríos, como son territoriales”."
                autor="· Jorge Cano"
              />
            </div>
            <div className="canal-b-abajo">
              <img src={abajo} alt="abajo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuayaberoF4;
