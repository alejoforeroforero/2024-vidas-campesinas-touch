import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import YT from "../../../components/YT";
import useDelta from "../../../hooks/useDelta";
import playImg from "../../../assets/generales/play_video.png";

const thumbnail =
  "https://res.cloudinary.com/dbqfefibl/image/upload/v1713230287/assets/guaviare/carlos/fondo-video_vvpvyc.jpg";
import "./Youtube.css";

const Youtube = ({ sound, audioFx }) => {
  const dispatch = useDispatch();

  const [carlosYoutubeRef, setCarlosYoutubeRef] = useState(null);
  const [mostrarPlay, setMostrarPlay] = useState(false);
  const elementRef = useRef(null);
  const { handleTouchStart, handleTouchEnd } = useDelta(
    "carlos-bio",
    "carlos-relatos",
    elementRef
  );

  const refYoutubeCarlos = (video) => {
    setCarlosYoutubeRef(video);
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

    const div = document.getElementById("youtube-carlos");
    div.style.visibility = "visible";
    carlosYoutubeRef?.playVideo();
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
      <div id="youtube-carlos" className="youtube-video">
        <YT
          refYoutubeFx={refYoutubeCarlos}
          youtubeVideoId="7FeSnVNixRg" //MN_RlCT-WFQ  -9AvYOpalrk
          imgThumbnail={thumbnail}
          id="youtube-carlos"
          alCerrarFx={alCerrarYoutubeFx}
        />
      </div>
    );
  };

  return (
    <>
      {pintarVideo()}
      <div
        ref={elementRef}
        className="seccion carlos-youtube"
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        <div className="mask-general">
          <div className="contenido-general">
            <div className="youtube-contenido">
              <div>
                {mostrarPlay && (
                  <img onClick={handleOnClick} src={playImg} alt="play" />
                )}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div>
                <h3>“En esta finca hay tierra buena y tierra mala”</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Youtube;
