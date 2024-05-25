import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import useDelta from "../../../hooks/useDelta";
import Audio from "../../../components/Audio";

//import relatosVideo from '../../../assets/guaviare/jorge/loop-jorge.mp4';
const relatosVideo =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1713448720/assets/guaviare/jorge/loop-jorge_c77hks.mp4";

import "./Relatos.css";

const Relatos = () => {
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
      className="seccion jorge-relatos"
      onTouchEnd={handleTouchEnd}
      onTouchStart={handleTouchStart}
    >
      {pintarVideo()}
      <div className="mask-general">
        <div className="contenido-general">
          <div onClick={handleOnClick} className="jorge-relatos-audio">
            <div>
              <Audio id="jorge2" titulo='"Cuando llegué al Raudal"' />
            </div>
            <div>
              <Audio
                id="jorge3"
                titulo='"Somos nuestras propias ambulancias"'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relatos;
