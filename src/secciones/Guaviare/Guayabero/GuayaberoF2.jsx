import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import YT from "../../../components/YT";
import playImg from "../../../assets/generales/play_video.png";
const guayaberoThumbnail =
  "https://res.cloudinary.com/dbqfefibl/image/upload/v1713230403/assets/guaviare/guayabero/guayabero-fondo-video_pezpmb.jpg";
import "./GuayaberoF2.css";

const GuayaberoF2 = ({ sound, audioFx }) => {
  const dispatch = useDispatch();
  const [jorgeYoutubeRef, setJorgeYoutubeRef] = useState(null);
  const [mostrarPlay, setMostrarPlay] = useState(false);

  useEffect(() => {
    const currentVolume = sound?.volume();

    if (currentVolume < 0.4) {
      const acciones = {
        tipo: "volumen",
        valor: 1,
      };
      audioFx(acciones);
    }
  }, []);

  const refYoutubeJorge = (video) => {
    setJorgeYoutubeRef(video);
    dispatch(pararAudios());
    setTimeout(() => {
      setMostrarPlay(true);
    }, 1000);
  };

  const handleOnClick = () => {
    const acciones = {
      tipo: "volumen",
      valor: 0,
    };

    audioFx(acciones);
    const div = document.getElementById("youtube-guayabero");
    div.style.visibility = "visible";
    jorgeYoutubeRef?.playVideo();
  };

  const alCerrarYoutubeFx = () => {
    const acciones = {
      tipo: "volumen",
      valor: 1,
    };

    audioFx(acciones);
  };

  const pintarVideo = () => {
    return (
      <div id="youtube-guayabero" className="youtube-video">
        <YT
          refYoutubeFx={refYoutubeJorge}
          youtubeVideoId="MN_RlCT-WFQ" 
          imgThumbnail={guayaberoThumbnail}
          id="youtube-guayabero"
          vertical={true}
          alCerrarFx={alCerrarYoutubeFx}
        />
      </div>
    );
  };

  return (
    <>
      {pintarVideo()}
      <div className="guayabero-f2">
        <div className="mask-general">
          <div className="contenido-general">
            <div className="guayabero-f2-interior">
              <div className="guayabero-f2-play">
                {mostrarPlay && (
                  <img onClick={handleOnClick} src={playImg} alt="play" />
                )}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div className="guayabero-f2-frase">
                <h3>“El río es fuente de vida”.</h3>
                <h4>· Antonio Molano</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuayaberoF2;
