import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import useDelta from "../../../hooks/useDelta";
import Audio from "../../../components/Audio";
import planta from "../../../assets/caqueta/betancourt/mano-planta.png";

const relatosVideo =
  "https://res.cloudinary.com/dhz9jfn78/video/upload/v1716486016/caqueta/betancourt/Loop_bosque_Flia_Betancourt_p_xnhwbt.mp4";

import "./Relatos.css";

const Relatos = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta(
    "betancourt-youtube-1",
    "betancourt-youtube-2",
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
      className="seccion betancourt-relatos"
      onTouchEnd={handleTouchEnd}
      onTouchStart={handleTouchStart}
    >
      {pintarVideo()}
      <div className="mask-general">
        <div className="contenido-general">
          <div className="betancourt-relatos-audio">
            <Audio
              id="audio-betancourt"
              titulo="“Creo que hay nuevas oportunidades. Se puede producir de manera diferente y enamorarse del campo nuevamente”"
              video={videoRef}
            />
          </div>
          <div className="betancourt-relatos-img">
            <img src={planta} alt="planta" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relatos;
