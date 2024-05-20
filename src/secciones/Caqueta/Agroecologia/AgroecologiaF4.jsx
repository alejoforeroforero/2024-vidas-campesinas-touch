import { useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import YT from "../../../components/YT";
import cerdo from "../../../assets/caqueta/agroecologia/cerdo.png";
import playImg from "../../../assets/generales/play_video.png";
const agroecologiaThumbnail =
  "https://res.cloudinary.com/dbqfefibl/image/upload/v1713242761/assets/guaviare/guardianes/fondo-guardianes-f4_tphytr.jpg";
import "./AgroecologiaF4.css";

const AgroecologiaF4 = () => {
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
          imgThumbnail={agroecologiaThumbnail}
          id="youtube-alirio"
        />
      </div>
    );
  };

  return (
    <>
      {pintarVideo()}
      <div className="agroecologia-f4">
        <div className="mask-general">
          <div className="contenido-general">
            <div className="agroecologia-f4-interior">
              <div className="agroecologia-f4-img">
                <img src={cerdo} alt="cerdo" />
              </div>
              <div className="agroecologia-f4-play">
                {mostrarPlay && (
                  <img onClick={handleOnClick} src={playImg} alt="play" />
                )}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div className="agroecologia-f4-frase">
                <h2>La alternativa del biodigestor</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgroecologiaF4;
