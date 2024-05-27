import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { changeVideo } from "../../../Redux/states/managerSlice";
import Audio from "../../../components/Audio";
import grafica from "../../../assets/caqueta/ganaderia/arbol.png";
import abajo from "../../../assets/generales/abajo.png";
const videoSrc =
  "https://res.cloudinary.com/dhz9jfn78/video/upload/v1716267084/caqueta/ganaderia/Loop-ganaderia_hugy34.mp4";

import "./GanaderiaF4.css";

const GanaderiaF4 = () => {
  const dispatch = useDispatch();
  const videoRef = useRef(null);

  const vId = "ganaderia-video";

  useEffect(() => {
    dispatch(changeVideo(vId));
  }, []);

  return (
    <>
      <div className="ganaderia-f4">
        <div className="ganaderia-f4-video">
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
                id="audio-ganaderia-2"
                titulo="“Lo que se propone son sistemas agroforestales para regenerar los suelos degradados”."
                autor="· José Alejandro Bermeo"
                video={videoRef}
              />
            </div>
            <div className="canal-b-abajo">
              <img src={abajo} alt="abajo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GanaderiaF4;
