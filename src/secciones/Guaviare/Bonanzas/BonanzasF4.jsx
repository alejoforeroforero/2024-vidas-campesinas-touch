import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeVideo } from "../../../Redux/states/managerSlice";
import Audio from "../../../components/Audio";

import hacha from "../../../assets/guaviare/bonanzas/hacha.png";
import abajo from "../../../assets/generales/abajo.png";

import "./BonanzasF4.css";

const BonanzasF4 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeVideo(null));
  }, []);

  return (
    <div className="bonanzas-f4">
      <div className="bonanzas-f4-fondo"></div>
      <div className="mask-general">
        <div className="contenido-general">
          <div className="bonanzas-f4-interior">
            <div className="bonanzas-f4-ilustraciones">
              <img src={hacha} alt="" />
            </div>
            <div className="bonanzas-audio-contenedor">
              <Audio
                id="audio-madera"
                titulo="“Luego se bajó el precio de la coca y ahí se forma la bonanza maderera. Comenzaron a entrar las motosierras...”"
                autor="· Antonio Molano"
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

export default BonanzasF4;
