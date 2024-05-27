import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import useDelta from "../../../hooks/useDelta";
import Audio from "../../../components/Audio";

const relatosVideo =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1713449013/assets/guaviare/william/loop-william_bdbgyf.mp4";

import "./Relatos.css";

const Relatos = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta(
    "william-youtube",
    "william-galeria",
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
      className="seccion william-relatos"
      onTouchEnd={handleTouchEnd}
      onTouchStart={handleTouchStart}
    >
      {pintarVideo()}
      <div className="mask-general">
        <div className="contenido-general">
          <div className="william-relatos-audio">
            <Audio
              id="william-1"
              titulo='"Cuando me curaron de la picadura de raya"'
              video={videoRef}             
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relatos;
