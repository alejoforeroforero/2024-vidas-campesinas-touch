import { useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import YT from "../../../components/YT";
import playImg from "../../../assets/generales/play_video.png";
const ganaderiaThumbnail =
  "https://res.cloudinary.com/dhz9jfn78/image/upload/v1716267077/caqueta/ganaderia/ganaderia-youtube-1_xssz9y.jpg";
import "./GanaderiaF2.css";

const GanaderiaF2 = () => {
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
    const div = document.getElementById("youtube-ganaderia-1");
    div.style.visibility = "visible";

    jorgeYoutubeRef?.playVideo();
  };

  const pintarVideo = () => {
    return (
      <div id="youtube-ganaderia-1" className="youtube-video">
        <YT
          refYoutubeFx={refYoutubeJorge}
          youtubeVideoId="ZOWzhtGmD9w"
          imgThumbnail={ganaderiaThumbnail}
          id="youtube-ganaderia-1"
        />
      </div>
    );
  };

  return (
    <>
      {pintarVideo()}
      <div className="ganaderia-f2">
        <div className="mask-general">
          <div className="contenido-general">
            <div className="ganaderia-f2-interior">
              <div className="ganaderia-f2-play">
                {mostrarPlay && (
                  <img onClick={handleOnClick} src={playImg} alt="play" />
                )}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div className="ganaderia-f2-frase">
                <h3>“De una vaca vive mucha gente”</h3>
                <h4>· Giovanni Santamaría</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GanaderiaF2;
