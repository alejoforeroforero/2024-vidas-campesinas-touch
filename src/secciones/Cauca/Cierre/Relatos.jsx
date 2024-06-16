import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  pararAudios,
  establecerMostrarLineasA,
  establecerMostrarFlechasCanales,
} from "../../../Redux/states/managerSlice";
import YT from "../../../components/YT";
import useDelta from "../../../hooks/useDelta";
import { Howl } from "howler";

import solLuna from "../../../assets/caqueta/cierre/sol-luna.png";

const susurros =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1717165763/cauca/cierre/min_video_1_fdldgh.jpg";
const zapatillas =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1717165315/cauca/cierre/min_video2_apuygu.jpg";

const susurros2 =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1717165447/cauca/cierre/Fotograma_2_Colores_de_sua%CC%81rez_pasv39.jpg";
const zapatillas2 =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1717165448/cauca/cierre/Fotograma_Palito_de_borojo_yu8d80.jpg";

import "./Relatos.css";

const Relatos = ({ videoCierre }) => {
  const dispatch = useDispatch();
  const [youtubeRef1, setYoutubeRef1] = useState(null);
  const [youtubeRef2, setYoutubeRef2] = useState(null);
  const elementRef = useRef();
  const [mostrarGrafica, setMostrarGrafica] = useState(false);
  const [mostrarTitulo, setMostrarTitulo] = useState(false);
  const [mostrarThumbs, setMostrarThumbs] = useState(false);
  const [audio, setAudio] = useState(null);
  const textoTiempo = 63;
  const thumbsTiempo = 71;
  let mostrarTituloJs = false;
  let mostrarthumbsJs = false;

  useEffect(() => {
    dispatch(pararAudios());
    dispatch(establecerMostrarLineasA(false));
    dispatch(establecerMostrarFlechasCanales(false));
    videoCierre.current.style.visibility = "visible";
    videoCierre.current.currentTime = 0;
    videoCierre.current.play();
    videoCierre.current.volume = 1;
    videoCierre.current.addEventListener("timeupdate", handleTimeUpdate);
  }, []);

  const { handleTouchStart, handleTouchEnd } = useDelta(
    "cauca-galeria",
    "guaviare-menu",
    elementRef
  );

  const handleTimeUpdate = () => {
    if (videoCierre.current.currentTime > textoTiempo) {
      if (!mostrarTituloJs) {
        mostrarTituloJs = true;
        setMostrarTitulo(true);
        setMostrarGrafica(true);
      }
    }

    if (videoCierre.current.currentTime > thumbsTiempo) {
      if (!mostrarthumbsJs) {
        mostrarthumbsJs = true;
        setMostrarThumbs(true);
      }
    }
  };

  const handleOnClickOn1 = () => {
    const div = document.getElementById("youtube-suzurros");
    div.style.visibility = "visible";

    youtubeRef1?.playVideo();
    audio?.pause();
  };

  const handleOnClickOn2 = () => {
    const div = document.getElementById("youtube-zapatillas");
    div.style.visibility = "visible";

    youtubeRef2?.playVideo();
    audio?.pause();
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
        <div className="contenido-general">
          {mostrarGrafica && (
            <div className="cierre-cauca-grafica">
              <img src={solLuna} alt="" />
            </div>
          )}
          {mostrarTitulo && (
            <div className="cierre-titulo-cauca">
              <div className="cierre-frase-cauca">
                <h4>
                  Cuenten con nosotros para la paz, y nunca para la guerra.
                </h4>
              </div>
            </div>
          )}
          {mostrarThumbs && (
            <>
              <div className="cierre-extra-cauca">
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
              <div className="cierre-continuar-cauca">
                <p>Continuar con otras regiones</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Relatos;
