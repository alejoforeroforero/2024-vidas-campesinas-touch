import { useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import YT from "../../../components/YT";
import playImg from "../../../assets/generales/play_video.png";
const guayaberoThumbnail =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1718106745/cauca/mujer/Foto-Laura-Biscue%CC%81_cbv1tb.jpg";
import "./MujerF2.css";

const MujerF2 = ({ sound, audioFx }) => {
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
    const div = document.getElementById("youtube-mujer-1");
    div.style.visibility = "visible";

    jorgeYoutubeRef?.playVideo();
  };

  const pintarVideo = () => {
    return (
      <div id="youtube-mujer-1" className="youtube-video">
        <YT
          refYoutubeFx={refYoutubeJorge}
          youtubeVideoId="uOWY5AZHanc"
          imgThumbnail={guayaberoThumbnail}
          id="youtube-mujer-1"
        />
      </div>
    );
  };

  return (
    <>
      {pintarVideo()}
      <div className="mujer-f2">
        <div className="mask-general">
          <div className="contenido-general">
            <div className="mujer-f2-interior">
              {mostrarPlay && (
                <img onClick={handleOnClick} src={playImg} alt="play" />
              )}
              {!mostrarPlay && <p>Espera un momento...</p>}
              <div className="mujer-f2-frase">
                <h3>“Las mujeres también podemos liderar procesos o trabajar en la finca”</h3>
                <h4>· Laura Biscué.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MujerF2;
