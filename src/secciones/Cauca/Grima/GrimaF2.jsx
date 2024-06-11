import { useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import YT from "../../../components/YT";
import playImg from "../../../assets/generales/play_video.png";
const grafica = 'https://res.cloudinary.com/dumlhmvts/image/upload/v1718070589/cauca/grima/Grima_zfexbj.png'
const guayaberoThumbnail =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1718070704/cauca/grima/Fotograma-videoclip-Grima_ujr8tl.jpg";
import "./GrimaF2.css";

const GrimaF2 = ({ sound, audioFx }) => {
  const dispatch = useDispatch();
  const [jorgeYoutubeRef, setJorgeYoutubeRef] = useState(null);
  const [mostrarPlay, setMostrarPlay] = useState(false);

  const refYoutubeJorge = (video) => {
    setJorgeYoutubeRef(video);
    dispatch(pararAudios());
    setTimeout(() => {
      setMostrarPlay(true);
    }, 1000);
  };

  const handleOnClick = () => {
    const div = document.getElementById("youtube-grima-1");
    div.style.visibility = "visible";

    jorgeYoutubeRef?.playVideo();
  };

  const pintarVideo = () => {
    return (
      <div id="youtube-grima-1" className="youtube-video">
        <YT
          refYoutubeFx={refYoutubeJorge}
          youtubeVideoId="5ZQVLKP5zgc"
          imgThumbnail={guayaberoThumbnail}
          id="youtube-grima-1"
        />
      </div>
    );
  };

  return (
    <>
      {pintarVideo()}
      <div className="grima-f2">
        <div className="mask-general">
          <div className="contenido-general">
          <div className="grima-f2-interior">
              <div className="grima-f2-grafica">
                <img src={grafica} alt="" />
              </div>
              <div className="grima-f2-play">
                {mostrarPlay && (
                  <img onClick={handleOnClick} src={playImg} alt="play" />
                )}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div className="grima-f2-frase">
                <h3>El arte de la Grima</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GrimaF2;
