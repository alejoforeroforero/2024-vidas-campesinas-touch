import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import YT from "../../../components/YT";
import useDelta from "../../../hooks/useDelta";
import playImg from "../../../assets/generales/play_video.png";


const jorgeThumbnail =
  "https://res.cloudinary.com/dbqfefibl/image/upload/v1713230303/assets/guaviare/jorge/fondo-video_gpfnkz.jpg";
import "./Youtube.css";

const Youtube = ({ sound, audioFx }) => {
  const dispatch = useDispatch();

  const [jorgeYoutubeRef, setJorgeYoutubeRef] = useState(null);
  const [mostrarPlay, setMostrarPlay] = useState(false);
  const elementRef = useRef(null);
  const { handleTouchStart, handleTouchEnd } = useDelta(
    "jorge-bio",
    "jorge-relatos",
    elementRef
  );

  useEffect(() => {
    const currentVolume = sound.volume();

    if (currentVolume < 0.3) {
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

    const div = document.getElementById("youtube-jorge");
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
      <div id="youtube-jorge" className="youtube-video">
        <YT
          refYoutubeFx={refYoutubeJorge}
          youtubeVideoId="-9AvYOpalrk" //MN_RlCT-WFQ  -9AvYOpalrk
          imgThumbnail={jorgeThumbnail}
          id="youtube-jorge"
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
        className="seccion jorge-youtube"
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
                <h3>
                  “Éramos aserradores y cazadores, pero ahora conservamos”
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Youtube;
