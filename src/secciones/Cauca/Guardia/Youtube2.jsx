import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import YT from "../../../components/YT";
import useDelta from "../../../hooks/useDelta";
import playImg from "../../../assets/generales/play_video.png";
import arbol from "../../../assets/caqueta/moyano/arbol.png";

const thumbnail =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1716744106/cauca/guardia/Gobernadora-Laura-B_xx0lta.jpg";
import "./Youtube2.css";

const Youtube = () => {
  const dispatch = useDispatch();

  const [youtubeRef, setYoutubeRef] = useState(null);
  const [mostrarPlay, setMostrarPlay] = useState(false);
  const elementRef = useRef(null);
  const { handleTouchStart, handleTouchEnd } = useDelta(
    "guardia-relatos-2",
    "guardia-relatos-3",
    elementRef
  );

  const refYoutube = (video) => {
    setYoutubeRef(video);
    dispatch(pararAudios());
    setTimeout(() => {
      setMostrarPlay(true);
    }, 1000);
  };

  const pintarVideo = () => {
    return (
      <div id="youtube-guardia-2" className="youtube-video">
        <YT
          refYoutubeFx={refYoutube}
          youtubeVideoId="AiFZ2zUifjA"
          imgThumbnail={thumbnail}
          id="youtube-guardia-2"
        />
      </div>
    );
  };

  const handleOnClick = () => {
    const div = document.getElementById("youtube-guardia-2");
    div.style.visibility = "visible";
    youtubeRef?.playVideo();
  };

  return (
    <>
      {pintarVideo()}
      <div
        ref={elementRef}
        className="seccion guardia-youtube-2"
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        <div className="mask-general">
          <div className="contenido-general">
            <div className="youtube-contenido">
              <div>
                {mostrarPlay && (
                  <img onClick={handleOnClick} src={playImg} alt="play" />
                )}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div>
                <h3>
                  “Este es un territorio multicultural. Todos tenemos que vivir
                  en armonía y en equilibrio”
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Youtube;
