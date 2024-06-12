import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  changeVideo,
  establecerMostrarAbajo,
} from "../../../Redux/states/managerSlice";
import Audio from "../../../components/Audio";
const videoSrc =
  "https://res.cloudinary.com/dumlhmvts/video/upload/v1718107871/cauca/mujer/Loop_cogiendo_cafe%CC%81_p_xiiuer.mp4";

import "./MujerF3.css";

const MujerF3 = ({ sound, audioFx }) => {
  const dispatch = useDispatch();
  const videoRef = useRef(null);

  const vId = "mujer-video";

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
      <div className="mujer-f3">
        <div className="mujer-f3-video">
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
          <div className="mujer-f3-interior">
            <div className="mujer-f3-audio-contenedor1">
              <Audio
                id="audio-mujer-1"
                titulo="“Hay dos trabajos que me encantan: coger café y ‘minear’”"
                autor="· Omaira Chocó."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MujerF3;
