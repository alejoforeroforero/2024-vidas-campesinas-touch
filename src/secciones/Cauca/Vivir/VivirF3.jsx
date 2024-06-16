import { useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import YT from "../../../components/YT";
import playImg from "../../../assets/generales/play_video.png";
const guayaberoThumbnail =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1718118614/cauca/vivir/Fotograma-nin%CC%83as_pxlxyn.jpg";

const grafica = "https://res.cloudinary.com/dumlhmvts/image/upload/v1718118767/cauca/vivir/Mano_palma_hckt0p.png"
import "./VivirF3.css";

const VivirF3 = ({ sound, audioFx }) => {
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
    const div = document.getElementById("youtube-vivir-2");
    div.style.visibility = "visible";

    jorgeYoutubeRef?.playVideo();
  };

  const pintarVideo = () => {
    return (
      <div id="youtube-vivir-2" className="youtube-video">
        <YT
          refYoutubeFx={refYoutubeJorge}
          youtubeVideoId="JnKgfaXDsIE" 
          imgThumbnail={guayaberoThumbnail}
          id="youtube-vivir-2"
          vertical={true}          
        />
      </div>
    );
  };

  return (
    <>
      {pintarVideo()}
      <div className="vivir-f3">
        <div className="mask-general">
          <div className="contenido-general">
            <div className="vivir-f3-interior">
              <div className="vivir-f3-grafica">
                <img src={grafica} alt="grafica" />
              </div>
              <div className="vivir-f3-play">
                {mostrarPlay && (
                  <img onClick={handleOnClick} src={playImg} alt="play" />
                )}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div className="vivir-f3-frase">
                <h3>
                  “El cuidado es estar pendiente de que todos estemos bien, que
                  haya bienestar en la comunidad”
                </h3>
                <h4>· María Ocoró</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VivirF3;
