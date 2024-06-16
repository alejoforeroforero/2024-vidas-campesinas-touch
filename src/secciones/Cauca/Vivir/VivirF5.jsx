import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  changeVideo,
  establecerMostrarAbajo,
} from "../../../Redux/states/managerSlice";
import Audio from "../../../components/Audio";

const grafica1 =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1718201532/cauca/vivir/naturaleza_gm7kvq.png";
const grafica2 =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1718201533/cauca/vivir/Mula_Carga_z4doau.png";
import abajo from "../../../assets/generales/abajo.png";
const videoSrc =
  "https://res.cloudinary.com/dumlhmvts/video/upload/v1718201918/cauca/vivir/Loop_montan%CC%83as_2_ok_p_jnkwls.mp4";

import "./VivirF5.css";

const VivirF5 = ({ sound, audioFx }) => {
  const dispatch = useDispatch();
  const videoRef = useRef(null);

  const vId = "vivir-f5-video";

  useEffect(() => {
    dispatch(changeVideo(vId));
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

  const audioGeneralFx = (bajarVolumen) => {
    const acciones = {
      tipo: "volumen",
      valor: bajarVolumen ? 0.2 : 1,
    };

    audioFx(acciones);
  };

  return (
    <div className="vivir-f5">
      <div className="vivir-f5-fondo">
        <div className="vivir-f5-video-mask"></div>
        <div className="vivir-f5-video">
          <video
            id={vId}
            loop
            playsInline
            muted
            src={videoSrc}
            ref={videoRef}
          />
        </div>
      </div>
      <div className="mask-general">
        <div className="contenido-general">
          <div className="vivir-f5-interior">
            <div className="vivir-f5-ilustracion-1">
              <img src={grafica1} alt="grafica1" />
            </div>
            <div className="vivir-f5-frase">
              <h3>“Sí podemos convivir y compartir territorios”.</h3>
              <h4>· Cesar Cañas</h4>
            </div>
            <div className="vivir-f5-ilustracion-2">
              <img src={grafica2} alt="grafica2" />
            </div>
            <div className="vivir-audio-contenedor">
              <Audio
                id="audio-vivir-f5"
                titulo="“La paz se logra dialogando, no con armas”"
                autor="· Leonardo Díaz"
                video={videoRef}
                audioGeneralFx={audioGeneralFx}
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

export default VivirF5;
