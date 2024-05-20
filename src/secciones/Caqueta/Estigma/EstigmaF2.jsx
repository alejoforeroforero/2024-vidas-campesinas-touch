import { useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import YT from "../../../components/YT";
import siembra from "../../../assets/caqueta/estigma/hoja-coca-2.png";
import playImg from "../../../assets/generales/play_video.png";
const estigmaThumbnail =
  "https://res.cloudinary.com/dbqfefibl/image/upload/v1713242761/assets/guaviare/guardianes/fondo-guardianes-f4_tphytr.jpg";
import "./EstigmaF2.css";

const EstigmaF2 = () => {
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
    const div = document.getElementById("youtube-alirio");
    div.style.visibility = "visible";

    jorgeYoutubeRef?.playVideo();
  };

  const pintarVideo = () => {
    return (
      <div id="youtube-alirio" className="youtube-video">
        <YT
          refYoutubeFx={refYoutubeJorge}
          youtubeVideoId="NIgNlYvsf04"
          imgThumbnail={estigmaThumbnail}
          id="youtube-alirio"
        />
      </div>
    );
  };

  return (
    <>
      {pintarVideo()}
      <div className="estigma-f2">
        <div className="mask-general">
          <div className="contenido-general">
            <div className="estigma-f2-interior">
              <div className="estigma-f2-img">
                <img src={siembra} alt="siembra" />
              </div>
              <div className="estigma-f2-play">
                {mostrarPlay && (
                  <img onClick={handleOnClick} src={playImg} alt="play" />
                )}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div className="estigma-f2-frase">
                <h2>La mata no es quien mata</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EstigmaF2;