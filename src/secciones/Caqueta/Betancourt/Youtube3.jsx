import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import YT from "../../../components/YT";
import useDelta from "../../../hooks/useDelta";
import playImg from "../../../assets/generales/play_video.png";
import manos from "../../../assets/caqueta/betancourt/manos-tierra.png";

const thumbnail =
  "https://res.cloudinary.com/dbqfefibl/image/upload/v1713230391/assets/guaviare/dayana/fondo-video2_ckb7u8.jpg";
import "./Youtube3.css";

const Youtube = () => {
  const dispatch = useDispatch();

  const [youtubeRef, setYoutubeRef] = useState(null);
  const [mostrarPlay, setMostrarPlay] = useState(false);
  const elementRef = useRef(null);
  const { handleTouchStart, handleTouchEnd } = useDelta(
    "betancourt-youtube-2",
    "caqueta-inserto2",
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
      <div id="youtube-dayana-2" className="youtube-video">
        <YT
          refYoutubeFx={refYoutube}
          youtubeVideoId="wwMI3J7TmvQ"
          imgThumbnail={thumbnail}
          id="youtube-dayana-2"
        />
      </div>
    );
  };

  const handleOnClick = () => {
    const div = document.getElementById("youtube-dayana-2");
    div.style.visibility = "visible";
    youtubeRef?.playVideo();
  };

  return (
    <>
      {pintarVideo()}
      <div
        ref={elementRef}
        className="seccion betancourt-youtube-3"
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        <div className="mask-general">
          <div className="betancourt-youtube-3-titulo">
            <h2>Retrato de La Paz</h2>
          </div>
          <div className="contenido-general">
            <div className="youtube-contenido">
              <div>
                {mostrarPlay && (
                  <img onClick={handleOnClick} src={playImg} alt="play" />
                )}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div>
                <h4>
                  Video realizado en colaboración con niñas y niños de la vereda La Paz. Un recorrido en el que nos muestran las bondades de su vereda, hablan de sus miedos y propuestas de solución.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Youtube;
