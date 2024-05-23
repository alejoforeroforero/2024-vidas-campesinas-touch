import { useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import YT from "../../../components/YT";
import logo from '../../../assets/caqueta/insertos/logo-inserto.png'
import playImg from "../../../assets/generales/play_video.png";
const ganaderiaThumbnail =
  "https://res.cloudinary.com/dbqfefibl/image/upload/v1713242761/assets/guaviare/guardianes/fondo-guardianes-f4_tphytr.jpg";
import "./Inserto.css";

const InsertoB2 = () => {
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
    const div = document.getElementById("youtube-cientifico");
    div.style.visibility = "visible";

    jorgeYoutubeRef?.playVideo();
  };

  const pintarVideo = () => {
    return (
      <div id="youtube-cientifico" className="youtube-video">
        <YT
          refYoutubeFx={refYoutubeJorge}
          youtubeVideoId="MoUVAJ9w2QY"
          imgThumbnail={ganaderiaThumbnail}
          id="youtube-cientifico"
        />
      </div>
    );
  };

  return (
    <>
      {pintarVideo()}
      <div className="insertoB2">
        <div className="mask-general">
          <div className="contenido-general">
            <div className="insertoB2-interior">
            <div className='insertoB2-logo'>
            <img src={logo} alt="" />
          </div> 
              <div className="insertoB2-play">
                {mostrarPlay && (
                  <img onClick={handleOnClick} src={playImg} alt="play" />
                )}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div className="insertoB2-frase">
                <h2>Campesino científico</h2>
                <h4>Bashar y sus compañeros de escuela en El Caraño, explican en dibujos qué hace un científico local, y demuestran la importancia de las aves semilleras en la restauración del bosque.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsertoB2;
