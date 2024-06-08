import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  changeVideo,
  establecerMostrarAbajo,
} from "../../../Redux/states/managerSlice";
import Audio from "../../../components/Audio";
import lanchaImg from "../../../assets/guaviare/guayabero/lancha.png";
const videoSrc =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1713230574/assets/guaviare/guayabero/guayabero-loop_qpkx1v.mp4";

import "./GuayaberoF3.css";

const GuayaberoF3 = ({ sound, audioFx }) => {
  const dispatch = useDispatch();
  const videoRef = useRef(null);
  const vId = "guyabero-video";

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
      <div className="guayabero-f3">
        <div className="guayabero-f3-video">
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
          <div className="guayabero-f3-interior">
            <div className="guayabero-f3-audio-contenedor1">
              <Audio
                id="audio-guayabero1"
                titulo="“Yo me acuerdo que en verano se escuchaba la cantidad de pescado subiendo el río”."
                autor="· Disney Ardila"
                video={videoRef}
                audioGeneralFx={audioGeneralFx}
              />
            </div>
            <div className="guayabero-f3-lancha">
              <img src={lanchaImg} alt="cocodrilo" />
            </div>
            <div className="guayabero-f3-audio-contenedor2">
              <Audio
                id="audio-guayabero2"
                titulo="“Uno en la noche pescaba 20 o 30 arrobas en dos horas”."
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

export default GuayaberoF3;
