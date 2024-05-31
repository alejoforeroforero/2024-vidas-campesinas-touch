import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import useDelta from "../../../hooks/useDelta";
import Audio from "../../../components/Audio";
import grafica from "../../../assets/cauca/hermandad/bastones.png";

const relatosVideo =
  "https://res.cloudinary.com/dumlhmvts/video/upload/v1717157630/cauca/hermandad/Loop_danza_cimarrones_p_jkl96l.mp4";

import "./Relatos.css";

const Relatos = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta(
    "hermandad-youtube-1",
    "hermandad-relatos-2",
    elementRef
  );

  useEffect(() => {
    dispatch(pararAudios());
    videoRef.current.play();
  }, []);

  const handleOnClick = () => {
    videoRef.current.pause();
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
      className="seccion hermandad-relatos"
      onTouchEnd={handleTouchEnd}
      onTouchStart={handleTouchStart}
    >
      {pintarVideo()}
      <div className="mask-general">
        <div className="contenido-general">
          <div className="hermandad-relatos-grafica">
            <img src={grafica} alt="" />
          </div>
          <div onClick={handleOnClick} className="hermandad-relatos-audio">
            <Audio
              id="audio-hermandad-1"
              titulo="“Queremos mostrarle al mundo que sin armas se puede construir la paz”"
              video={videoRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relatos;
