import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import YT from "../../../components/YT";
import useDelta from "../../../hooks/useDelta";
import playImg from "../../../assets/generales/play_video.png";
import grafica from "../../../assets/cauca/campesina/maiz_1.png";

const thumbnail =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1717036350/cauca/campesina/Guardias_manguera_pk2jre.jpg";
import "./Youtube2.css";

const Youtube = () => {
  const dispatch = useDispatch();

  const [youtubeRef, setYoutubeRef] = useState(null);
  const [mostrarPlay, setMostrarPlay] = useState(false);
  const elementRef = useRef(null);
  const { handleTouchStart, handleTouchEnd } = useDelta(
    "campesina-relatos-2",
    "cimarrona-bio",
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
      <div id="youtube-campesina-2" className="youtube-video">
        <YT
          refYoutubeFx={refYoutube}
          youtubeVideoId="zhmSuVMsFII"
          imgThumbnail={thumbnail}
          id="youtube-campesina-2"
        />
      </div>
    );
  };

  const handleOnClick = () => {
    const div = document.getElementById("youtube-campesina-2");
    div.style.visibility = "visible";
    youtubeRef?.playVideo();
  };

  return (
    <>
      {pintarVideo()}
      <div
        ref={elementRef}
        className="seccion campesina-youtube-2"
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        <div className="mask-general">
          <div className="campesina-youtube-2-planta"></div>
          <div className="contenido-general">
            <div className="youtube-contenido">
              <div>
                {mostrarPlay && (
                  <img onClick={handleOnClick} src={playImg} alt="play" />
                )}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div className="campesina-youtube-2-grafica">
                <img src={grafica} alt="planta" />
              </div>
              <div className="campesina-youtube-2-frase">
                <h3>
                  “La idea es cambiar la historia, que sean campesinos con
                  tierra, productores de vida y bienestar”
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
