import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import useDelta from "../../../hooks/useDelta";
import Audio from "../../../components/Audio";

const relatosVideo =
  "https://res.cloudinary.com/dumlhmvts/video/upload/v1717034295/cauca/campesina/Loop_20_de_julio_p_fiwaf1.mp4";

import "./Relatos.css";

const Relatos = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta(
    "campesina-bio",
    "campesina-youtube-1",
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
      className="seccion campesina-relatos"
      onTouchEnd={handleTouchEnd}
      onTouchStart={handleTouchStart}
    >
      {pintarVideo()}
      <div className="mask-general">
        <div className="contenido-general">
          <div className="campesina-relatos-audio">
            <Audio
              id="audio-campesina-1"
              titulo="“Estamos aquí para defender los derechos humanos y los derechos del territorio”"
              video={videoRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relatos;
