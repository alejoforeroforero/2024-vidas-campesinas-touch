import { useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import YT from "../../../components/YT";
import playImg from "../../../assets/generales/play_video.png";
const guayaberoThumbnail =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1718114954/cauca/mujer/Omaira-oro_piugm3.jpg";
import abajo from "../../../assets/generales/abajo.png";
import "./MujerF4.css";

const MujerF4 = ({ sound, audioFx }) => {
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
    const div = document.getElementById("youtube-mujer-2");
    div.style.visibility = "visible";

    jorgeYoutubeRef?.playVideo();
  };

  const pintarVideo = () => {
    return (
      <div id="youtube-mujer-2" className="youtube-video">
        <YT
          refYoutubeFx={refYoutubeJorge}
          youtubeVideoId="ubq-qKdxSrk"
          imgThumbnail={guayaberoThumbnail}
          id="youtube-mujer-2"
        />
      </div>
    );
  };

  return (
    <>
      {pintarVideo()}
      <div className="mujer-f4">
        <div className="mask-general">
          <div className="contenido-general">
            <div className="mujer-f4-interior">
              <div className="mujer-f4-play">
                {mostrarPlay && (
                  <img onClick={handleOnClick} src={playImg} alt="play" />
                )}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div className="mujer-f4-frase">
                <h3>“El oro solo se muestra a personas de buen corazón”</h3>
                <h4>· Omaira Chocó</h4>
              </div>
              <div className="canal-b-abajo">
                <img src={abajo} alt="abajo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MujerF4;
