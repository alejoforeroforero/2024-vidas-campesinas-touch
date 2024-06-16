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

import logoCierre from "../../../assets/caqueta/cierre/logo-cierre.png";
import solLuna from "../../../assets/caqueta/cierre/sol-luna.png";

const susurros =
  "https://res.cloudinary.com/dhz9jfn78/image/upload/v1716608511/caqueta/cierre/susurros-play_tz37nk.jpg";
const zapatillas =
  "https://res.cloudinary.com/dhz9jfn78/image/upload/v1716608512/caqueta/cierre/zapatillas-play_hqhuyy.jpg";

const susurros2 =
  "https://res.cloudinary.com/dhz9jfn78/image/upload/v1716489016/caqueta/cierre/Fotograma_Susurros_del_Caqueta%CC%81_ok_qghois.jpg";
const zapatillas2 =
  "https://res.cloudinary.com/dhz9jfn78/image/upload/v1716489015/caqueta/cierre/Fotograma_Con_zapatillas_o_botas_recorte_a8xt6s.jpg";

const animacion =
  "https://res.cloudinary.com/dbqfefibl/image/upload/v1713230337/assets/guaviare/cierre/animacion_iwn7lp.jpg";
const jorgeThumbnail =
  "https://res.cloudinary.com/dbqfefibl/image/upload/v1713230337/assets/guaviare/cierre/animacion_iwn7lp.jpg";
const audioAmbiente =
  "https://res.cloudinary.com/dvtbfxkn9/video/upload/v1718572534/FINAL_CAQUETA_lu3r1s.mp3";

import "./Relatos.css";

const Relatos = ({ videoCierre }) => {
  const dispatch = useDispatch();
  const [youtubeRef1, setYoutubeRef1] = useState(null);
  const [youtubeRef2, setYoutubeRef2] = useState(null);
  const elementRef = useRef();
  const [mostrarTitulo, setMostrarTitulo] = useState(false);
  const [mostrarThumbs, setMostrarThumbs] = useState(false);
  const [audio, setAudio] = useState(null);
  const textoTiempo = 8;
  const thumbsTiempo = 30;
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

    const sonido = new Howl({
      src: [audioAmbiente],
      loop: false,
    });
    setAudio(sonido);

    return () => {
      sonido.unload();
    };
  }, []);

  useEffect(() => {
    audio?.play();
  }, [audio]);

  const { handleTouchStart, handleTouchEnd } = useDelta(
    "caqueta-galeria",
    "guaviare-menu",
    elementRef
  );

  const handleTimeUpdate = () => {
    if (videoCierre.current.currentTime > textoTiempo) {
      if (!mostrarTituloJs) {
        mostrarTituloJs = true;
        setMostrarTitulo(true);
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
          youtubeVideoId="HxFZx2CuNrs" //MN_RlCT-WFQ  -9AvYOpalrk
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
          youtubeVideoId="rsDjPFyNwd8" //MN_RlCT-WFQ  -9AvYOpalrk
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
        className="seccion cierre-relatos-caqueta"
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        {pintarYoutube1()}
        {pintarYoutube2()}
        <div className="contenido-general">
          {mostrarTitulo && (
            <div className="cierre-titulo-caqueta">
              <div className="cierre-logo-caqueta">
                <img src={logoCierre} alt="" />
              </div>
              <div>
                <p>
                  Transformando la relación de las campesinas y campesinos
                  amazónicos con los ecosistemas que habitan.
                </p>
              </div>
            </div>
          )}
          {mostrarThumbs && (
            <>
              <div className="cierre-extra-caqueta">
                <div className="cierre-extra-caqueta-grafica">
                  <img src={solLuna} alt="" />
                </div>
                <div className="cierre-extra-caqueta-thumbnail">
                  <div>
                    <img src={susurros} onClick={handleOnClickOn1} alt="" />
                  </div>
                  <div>
                    <h4>Susurros del Caquetá (Animación)</h4>
                  </div>
                </div>
                <div className="cierre-extra-caqueta-thumbnail">
                  <div>
                    <img src={zapatillas} onClick={handleOnClickOn2} alt="" />
                  </div>
                  <div>
                    <h4>Con zapatillas o botas. (Videoclip)</h4>
                  </div>
                </div>
              </div>
              <div className="cierre-continuar-caqueta">
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
