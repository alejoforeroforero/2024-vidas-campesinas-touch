import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import useDelta from "../../../hooks/useDelta";
import Audio from "../../../components/Audio";

const relatosVideo =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1713448720/assets/guaviare/jorge/loop-jorge_c77hks.mp4";

import "./Relatos.css";

const Relatos = ({ sound, audioFx }) => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta(
    "jorge-youtube",
    "jorge-galeria",
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

  const pintarVideo = () => {
    return (
      <div className="guaviare-video">
        <video ref={videoRef} loop playsInline muted src={relatosVideo}></video>
      </div>
    );
  };

  const audioGeneralFx = (bajarVolumen) => {
    const acciones = {
      tipo: "reducirVolumen",
      valor:bajarVolumen
    };

    audioFx(acciones);
  };

  return (
    <div
      ref={elementRef}
      className="seccion jorge-relatos"
      onTouchEnd={handleTouchEnd}
      onTouchStart={handleTouchStart}
    >
      {pintarVideo()}
      <div className="mask-general">
        <div className="contenido-general">
          <div className="jorge-relatos-audio">
            <div>
              <Audio
                id="jorge2"
                titulo='"Cuando llegué al Raudal"'
                video={videoRef}
                audioGeneralFx={audioGeneralFx}
              />
            </div>
            <div>
              <Audio
                id="jorge3"
                titulo='"Somos nuestras propias ambulancias"'
                video={videoRef}
                audioGeneralFx={audioGeneralFx}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relatos;
