import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  changeVideo,
  establecerMostrarAbajo,
} from "../../../Redux/states/managerSlice";
import Audio from "../../../components/Audio";
import grafica from "../../../assets/caqueta/agroecologia/nino.png";
const videoSrc =
  "https://res.cloudinary.com/dhz9jfn78/video/upload/v1716267080/caqueta/agroecologia/loop-agroecologia_qgrkyi.mp4";

import "./AgroecologiaF5.css";

const AgroecologiaF5 = () => {
  const dispatch = useDispatch();

  const vId = "agroecologia-video";

  useEffect(() => {
    dispatch(changeVideo(vId));
    dispatch(establecerMostrarAbajo(true));
  }, []);

  return (
    <>
      <div className="agroecologia-f5">
        <div className="agroecologia-f5-video">
          <video id={vId} loop playsInline muted src={videoSrc} />
        </div>
      </div>
      <div className="mask-general">
        <div className="contenido-general">
          <div className="agroecologia-f5-interior">
            <div className="agroecologia-f5-ilustraciones">
              <img
                className="agroecologia-f5-grafica"
                src={grafica}
                alt="grafica"
              />
            </div>
            <div className="agroecologia-f5-audio-contenedor2">
              <Audio
                id="audio-guardianes-2"
                titulo="“Los jóvenes deben regresar al campo para seguir sacándolo adelante. Porque sin campo, no hay ciudad”."
                autor="- Yolanda Triana"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgroecologiaF5;
