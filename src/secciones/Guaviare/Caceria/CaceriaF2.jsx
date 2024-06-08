import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  changeVideo,
  establecerMostrarAbajo,
} from "../../../Redux/states/managerSlice";
import Audio from "../../../components/Audio";
const videoSrc =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1713230519/assets/guaviare/caceria/loop-caceria_lqyp9g.mp4";
import cocodriloImg from "../../../assets/guaviare/caceria/cocodrilo.png";

import "./CaceriaF2.css";

const CaceriaF2 = ({ sound, audioFx }) => {
  const dispatch = useDispatch();
  const videoRef = useRef(null);

  const vId = "caceria-video";

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
      <div className="caceria-f2">
        <div className="caceria-f2-video">
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
          <div className="caceria-f2-interior">
            <div className="caceria-f2-cocodrilo">
              <img src={cocodriloImg} alt="cocodrilo" />
            </div>
            <div className="caceria-audio-contenedor">
              <Audio
                id="caceria"
                titulo="“En ese tiempo se trabajaba con las pieles del tigrillo y el cachirre”"
                autor="· Carlos Mancera"
                video={videoRef}
                audioGeneralFx={audioGeneralFx}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaceriaF2;
