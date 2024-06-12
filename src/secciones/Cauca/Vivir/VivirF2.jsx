import { useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import YT from "../../../components/YT";
import playImg from "../../../assets/generales/play_video.png";
const guayaberoThumbnail =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1718118208/cauca/vivir/Ci%CC%81rculo-de-mujeres_yj7ieb.jpg";
import "./VivirF2.css";

const VivirF2 = ({ sound, audioFx }) => {
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
    const div = document.getElementById("youtube-vivir-1");
    div.style.visibility = "visible";

    jorgeYoutubeRef?.playVideo();
  };

  const pintarVideo = () => {
    return (
      <div id="youtube-vivir-1" className="youtube-video">
        <YT
          refYoutubeFx={refYoutubeJorge}
          youtubeVideoId="lGAtrLA---E"
          imgThumbnail={guayaberoThumbnail}
          id="youtube-vivir-1"
        />
      </div>
    );
  };

  return (
    <>
      {pintarVideo()}
      <div className="vivir-f2">
        <div className="mask-general">
          <div className="contenido-general">
            <div className="vivir-f2-interior">
              {mostrarPlay && (
                <img onClick={handleOnClick} src={playImg} alt="play" />
              )}
              {!mostrarPlay && <p>Espera un momento...</p>}
              <div className="vivir-f2-frase">
                <h3>“Se necesita que haya paz en el territorio. Unión y comprensión entre todos”</h3>
                <h4>· Leonilde Ararat</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VivirF2;
