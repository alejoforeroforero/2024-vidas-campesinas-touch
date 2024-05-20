import { useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import YT from "../../../components/YT";
import playImg from "../../../assets/generales/play_video.png";
const ganaderiaThumbnail =
  "https://res.cloudinary.com/dbqfefibl/image/upload/v1713242761/assets/guaviare/guardianes/fondo-guardianes-f4_tphytr.jpg";
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
          imgThumbnail={ganaderiaThumbnail}
          id="youtube-alirio"
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
