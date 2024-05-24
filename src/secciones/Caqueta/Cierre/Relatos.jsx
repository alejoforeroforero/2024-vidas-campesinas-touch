import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  pararAudios,
  establecerMostrarLineasA,
  establecerMostrarFlechasCanales,
} from "../../../Redux/states/managerSlice";
import YT from "../../../components/YT";
import useDelta from "../../../hooks/useDelta";

import logoCierre from "../../../assets/caqueta/cierre/logo-cierre.png";
import solLuna from "../../../assets/caqueta/cierre/sol-luna.png";
const relatosVideo =
  "https://res.cloudinary.com/dhz9jfn78/video/upload/v1716486447/caqueta/cierre/Video_cierre_Caqueta_ok_p_e68rvx.mp4";
const susurros =
  "https://res.cloudinary.com/dhz9jfn78/image/upload/v1716489016/caqueta/cierre/Fotograma_Susurros_del_Caqueta%CC%81_ok_qghois.jpg";
const zapatillas =
  "https://res.cloudinary.com/dhz9jfn78/image/upload/v1716489015/caqueta/cierre/Fotograma_Con_zapatillas_o_botas_recorte_a8xt6s.jpg";


import "./Relatos.css";

const Relatos = () => {
  const [youtubeRef1, setYoutubeRef1] = useState(null);
  const [youtubeRef2, setYoutubeRef2] = useState(null);
  const dispatch = useDispatch();
  const videoRef = useRef();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta(
    "caqueta-galeria",
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
          youtubeVideoId="HxFZx2CuNrs" //MN_RlCT-WFQ  -9AvYOpalrk
          imgThumbnail={susurros}
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
          imgThumbnail={zapatillas}
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
        className="seccion cierre-relatos"
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        {pintarYoutube1()}
        {pintarYoutube2()}
        {pintarVideo()}
        <div className="contenido-general">
          <div className="cierre-titulo-caqueta">
            <div className="cierre-logo-caqueta">
              <img src={logoCierre} alt="" />
            </div>
            <div>
              <h4>
                Transformando la relación de las campesinas y campesinos
                amazónicos con los ecosistemas que habitan.
              </h4>
            </div>
          </div>
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
          <div className="cierre-continuar">
            <p>Continuar con otras regiones</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Relatos;
