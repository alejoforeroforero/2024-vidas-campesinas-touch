import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import useDelta from "../../../hooks/useDelta";
import Audio from "../../../components/Audio";

const relatosVideo =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1713445813/assets/guaviare/carlos/loop-carlos_drsjvr.mp4";

import "./Relatos.css";

const Relatos = ({ sound, audioFx }) => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta(
    "carlos-youtube",
    "carlos-galeria",
    elementRef
  );

  useEffect(() => {
    dispatch(pararAudios());
    videoRef.current.play();
    const currentVolume = sound.volume();

    if (currentVolume < 0.1) {
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

  const pintarVideo = () => {
    return (
      <div className="guaviare-video">
        <video ref={videoRef} loop playsInline muted src={relatosVideo}></video>
      </div>
    );
  };

  return (
    <div
      ref={elementRef}
      className="seccion carlos-relatos"
      onTouchEnd={handleTouchEnd}
      onTouchStart={handleTouchStart}
    >
      {pintarVideo()}
      <div className="mask-general">
        <div className="contenido-general">
          <div className="carlos-relatos-audio">
            <Audio
              id="carlos"
              titulo="“Llegamos a este territorio porque era muy productivo en Cacao”"
              video={videoRef}
              audioGeneralFx={audioGeneralFx}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relatos;
