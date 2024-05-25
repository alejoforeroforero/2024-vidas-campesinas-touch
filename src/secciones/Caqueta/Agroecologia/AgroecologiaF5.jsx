import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeVideo } from "../../../Redux/states/managerSlice";
import Audio from "../../../components/Audio";
import grafica from "../../../assets/caqueta/agroecologia/nino.png";
import abajo from "../../../assets/generales/abajo.png";
const videoSrc =
  "https://res.cloudinary.com/dhz9jfn78/video/upload/v1716267080/caqueta/agroecologia/loop-agroecologia_qgrkyi.mp4";

import "./AgroecologiaF5.css";

const AgroecologiaF5 = () => {
  const dispatch = useDispatch();

  const vId = "agroecologia-video";

  useEffect(() => {
    dispatch(changeVideo(vId));
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
                id="audio-agroecologia-3"
                titulo="“Los jóvenes deben regresar al campo para seguir sacándolo adelante. Porque sin campo, no hay ciudad”."
                autor="· Yolanda Triana"
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

export default AgroecologiaF5;
