import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  pararAudios,
  establecerMostrarLineasA,
  establecerMostrarFlechasCanales,
} from "../../../Redux/states/managerSlice";
import YT from "../../../components/YT";
import useDelta from "../../../hooks/useDelta";


import solLuna from "../../../assets/caqueta/cierre/sol-luna.png";
const relatosVideo =
  "https://res.cloudinary.com/dumlhmvts/video/upload/v1717164441/cauca/cierre/Video_cierre_Cauca_p_ecdxsx.mp4";
const susurros =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1717165763/cauca/cierre/min_video_1_fdldgh.jpg";
const zapatillas =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1717165315/cauca/cierre/min_video2_apuygu.jpg";

const susurros2 =
"https://res.cloudinary.com/dumlhmvts/image/upload/v1717165447/cauca/cierre/Fotograma_2_Colores_de_sua%CC%81rez_pasv39.jpg";
const zapatillas2 =
"https://res.cloudinary.com/dumlhmvts/image/upload/v1717165448/cauca/cierre/Fotograma_Palito_de_borojo_yu8d80.jpg";


import "./Relatos.css";

const Relatos = () => {
  const [youtubeRef1, setYoutubeRef1] = useState(null);
  const [youtubeRef2, setYoutubeRef2] = useState(null);
  const dispatch = useDispatch();
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta(
    "cauca-galeria",
    "guaviare-menu",
    elementRef
  );

  useEffect(() => {
    dispatch(pararAudios());
    dispatch(establecerMostrarLineasA(false));
    dispatch(establecerMostrarFlechasCanales(false));
    videoRef.current.play();
  }, []);

  const pintarVideo = () => {
    return (
      <div className="guaviare-video">
        <video ref={videoRef} playsInline muted src={relatosVideo}></video>
      </div>
    );
  };

  const refYoutubeCarlos = (video) => {
    setYoutubeRef1(video);
    dispatch(pararAudios());
    setTimeout(() => {
      //setMostrarPlay(true);
    }, 1000);
  };

  const refYoutubeCarlos2 = (video) => {
    setYoutubeRef2(video);
    dispatch(pararAudios());
    setTimeout(() => {
      //setMostrarPlay(true);
    }, 1000);
  };

  const pintarYoutube1 = () => {
    return (
      <div id="youtube-suzurros" className="youtube-video">
        <YT
          refYoutubeFx={refYoutubeCarlos}
          youtubeVideoId="a6kFjRgdsMo"
          imgThumbnail={susurros2}
          id="youtube-suzurros"
        />
      </div>
    );
  };

  const pintarYoutube2 = () => {
    return (
      <div id="youtube-zapatillas" className="youtube-video">
        <YT
          refYoutubeFx={refYoutubeCarlos2}
          youtubeVideoId="YrRaYIrnUS0" 
          imgThumbnail={zapatillas2}
          id="youtube-zapatillas"
        />
      </div>
    );
  };

  const handleOnClickOn1 = () => {
    const div = document.getElementById("youtube-suzurros");
    div.style.visibility = "visible";

    youtubeRef1?.playVideo();
  };

  const handleOnClickOn2 = () => {
    const div = document.getElementById("youtube-zapatillas");
    div.style.visibility = "visible";

    youtubeRef2?.playVideo();
  };

  return (
    <>
      <div
        ref={elementRef}
        className="seccion cierre-relatos-cauca"
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        {pintarYoutube1()}
        {pintarYoutube2()}
        {pintarVideo()}
        <div className="contenido-general">
          <div className="cierre-titulo-cauca">
            <div className="cierre-extra-cauca-grafica">
              <img src={solLuna} alt="" />
            </div>
            <div>
              <p>
                Cuenten con nosotros para la paz, y nunca para la guerra
              </p>
            </div>
          </div>
          <div className="cierre-extra-cauca">
            <div className="cierre-extra-cauca-grafica">
              <img src={solLuna} alt="" />
            </div>
            <div className="cierre-extra-cauca-thumbnail">
              <div>
                <img src={susurros} onClick={handleOnClickOn1} alt="" />
              </div>
              <div>
                <h4>Colores de Suárez. (Animación)</h4>
              </div>
            </div>
            <div className="cierre-extra-cauca-thumbnail">
              <div>
                <img src={zapatillas} onClick={handleOnClickOn2} alt="" />
              </div>
              <div>
                <h4>El palito de Borojó. (Videoclip)</h4>
              </div>
            </div>
          </div>
          <div className="cierre-continuar">
            <p>Continuar con otras regiones</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Relatos;
