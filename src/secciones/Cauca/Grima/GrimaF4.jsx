import { useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import YT from "../../../components/YT";
import playImg from "../../../assets/generales/play_video.png";
const grafica = 'https://res.cloudinary.com/dumlhmvts/image/upload/v1718074929/cauca/grima/mariposas_libelulas_vbjhbo.png'
const guayaberoThumbnail =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1718074819/cauca/grima/Grima-nin%CC%83as_dsir3s.jpg";
import "./GrimaF4.css";

const GrimaF4 = ({ sound, audioFx }) => {
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
    const div = document.getElementById("youtube-grima-2");
    div.style.visibility = "visible";

    jorgeYoutubeRef?.playVideo();
  };

  const pintarVideo = () => {
    return (
      <div id="youtube-grima-2" className="youtube-video">
        <YT
          refYoutubeFx={refYoutubeJorge}
          youtubeVideoId="dUYlDinYIq8"
          imgThumbnail={guayaberoThumbnail}
          id="youtube-grima-2"
        />
      </div>
    );
  };

  return (
    <>
      {pintarVideo()}
      <div className="grima-f4">
        <div className="mask-general">
          <div className="contenido-general">
          <div className="grima-f4-interior">
              <div className="grima-f4-grafica">
                <img src={grafica} alt="" />
              </div>
              <div className="grima-f4-play">
                {mostrarPlay && (
                  <img onClick={handleOnClick} src={playImg} alt="play" />
                )}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div className="grima-f4-frase">
                <h3>“Desde nuestro territorio estamos gestando paz, unidad, amistad y convivencia”</h3>
                <h4>· Jacob Arboleda</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GrimaF4;
