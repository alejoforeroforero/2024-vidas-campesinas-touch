import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import useDelta from "../../../hooks/useDelta";
import Audio from "../../../components/Audio";

const relatosVideo =
  "https://res.cloudinary.com/dhz9jfn78/video/upload/v1716267084/caqueta/moyano/loop-moyano_z0pbba.mp4";

import "./Relatos.css";

const Relatos = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta(
    "moyano-youtube-1",
    "moyano-youtube-2",
    elementRef
  );

  useEffect(() => {
    dispatch(pararAudios());
    videoRef.current.play();
  }, []);

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
      className="seccion moyano-relatos"
      onTouchEnd={handleTouchEnd}
      onTouchStart={handleTouchStart}
    >
      {pintarVideo()}
      <div className="mask-general">
        <div className="contenido-general">
          <div className="moyano-relatos-audio">
            <Audio
              id="audio-moyano"
              titulo="“Un santo remedio es el que le aplaca el dolor al instante”"
              video={videoRef}
            />
          </div>
          <div className="moyano-relatos-frase">
            <h3>
              “Remedios con plantas naturales y de por aquí, de esta tierra…”
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relatos;
