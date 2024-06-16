import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  changeVideo,
  establecerMostrarAbajo,
} from "../../../Redux/states/managerSlice";
import Audio from "../../../components/Audio";
import grafica from "../../../assets/guaviare/guardianes/grafica.png";
const videoSrc =
  "https://res.cloudinary.com/dumlhmvts/video/upload/v1718073677/cauca/grima/Loop_Grima_p_apxt5z.mp4";

import "./GrimaF3.css";

const GrimaF3 = ({ sound, audioFx }) => {
  const dispatch = useDispatch();
  const videoRef = useRef(null);

  const vId = "grima-video";

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
    <>
      <div className="grima-f3">
        <div className="grima-f3-video-mask"></div>
        <div className="grima-f3-video">
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
          <div className="grima-f3-interior">
            <div className="grima-f3-audio-contenedor1">
              <Audio
                id="audio-grima-1"
                titulo="“Somos agricultores, pero también trabajamos el arte de la Grima”"
                video={videoRef}
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
                video={videoRef}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GrimaF3;
