import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import YT from "../../../components/YT";
import useDelta from "../../../hooks/useDelta";
import playImg from "../../../assets/generales/play_video.png";
import grafica from "../../../assets/cauca/hermandad/instrumentos.png";

const thumbnail =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1717102457/cauca/hermandad/Foto_1_mu%CC%81sicos_krw5xd.jpg";
import "./Youtube2.css";

const Youtube = () => {
  const dispatch = useDispatch();

  const [youtubeRef, setYoutubeRef] = useState(null);
  const [mostrarPlay, setMostrarPlay] = useState(false);
  const elementRef = useRef(null);
  const { handleTouchStart, handleTouchEnd } = useDelta(
    "hermandad-relatos-1",
    "cauca-galeria",
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
      <div id="youtube-hermandad-2" className="youtube-video">
        <YT
          refYoutubeFx={refYoutube}
          youtubeVideoId="rBxAMwaTV5Q"
          imgThumbnail={thumbnail}
          id="youtube-hermandad-2"
        />
      </div>
    );
  };

  const handleOnClick = () => {
    const div = document.getElementById("youtube-hermandad-2");
    div.style.visibility = "visible";
    youtubeRef?.playVideo();
  };

  return (
    <>
      {pintarVideo()}
      <div
        ref={elementRef}
        className="seccion hermandad-youtube-2"
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        <div className="mask-general">
          <div className="hermandad-youtube-2-grafica">
            <img src={grafica} alt="" />
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
                <h3>
                  “Negros, indios, campesinos en un solo corazón… Somos alegres,
                  esta es nuestra cultura”
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
