import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  pararAudios,
  establecerMostrarLineasA,
  establecerMostrarFlechasCanales,
} from "../../../Redux/states/managerSlice";
import YT from "../../../components/YT";
import useDelta from "../../../hooks/useDelta";

const animacion =
  "https://res.cloudinary.com/dbqfefibl/image/upload/v1713230337/assets/guaviare/cierre/animacion_iwn7lp.jpg";
const jorgeThumbnail =
  "https://res.cloudinary.com/dbqfefibl/image/upload/v1713230337/assets/guaviare/cierre/animacion_iwn7lp.jpg";

import "./Relatos.css";

const Relatos = ({ videoCierre }) => {
  const dispatch = useDispatch();
  const [youtubeRef, setYoutubeRef] = useState(null);
  const elementRef = useRef();
  const [mostrarTitulo, setMostrarTitulo] = useState(false);
  const [mostrarThumbs, setMostrarThumbs] = useState(false);
  const textoTiempo = 3;
  const thumbsTiempo = 11;
  let mostrarTituloJs = false;
  let mostrarthumbsJs = false;


  const { handleTouchStart, handleTouchEnd } = useDelta(
    "cierre-galeria",
    "guaviare-menu",
    elementRef
  );

  const handleTimeUpdate = () => {
    console.log(videoCierre.current.currentTime);

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

  useEffect(() => {
    dispatch(pararAudios());
    dispatch(establecerMostrarLineasA(false));
    dispatch(establecerMostrarFlechasCanales(false));
    videoCierre.current.style.visibility = "visible";
    videoCierre.current.currentTime = 0;
    videoCierre.current.play();
    videoCierre.current.addEventListener("timeupdate", handleTimeUpdate);
  }, []);

  const refYoutube = (video) => {
    setYoutubeRef(video);
    dispatch(pararAudios());
    setTimeout(() => {}, 1000);
  };

  const pintarAnimacion = () => {
    return (
      <div id="youtube-animacion" className="youtube-video">
        <YT
          refYoutubeFx={refYoutube}
          youtubeVideoId="JOa_pbsklr8"
          imgThumbnail={jorgeThumbnail}
          id="youtube-animacion"
          mostrarFlechas={false}
          mostrarHamburguesa={true}
        />
      </div>
    );
  };

  const handleOnClick = () => {
    const div = document.getElementById("youtube-animacion");
    div.style.visibility = "visible";
    youtubeRef?.playVideo();
  };

  return (
    <>
      <div
        ref={elementRef}
        className="seccion cierre-relatos-guaviare"
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        {pintarAnimacion()}
        <div className="contenido-general">
          {mostrarTitulo && (
            <div className="cierre-titulo-guaviare">
              <h2>RAUDAL DEL GUAYABERO</h2>
              <h2>Territorio de paz</h2>
            </div>
          )}
          {mostrarThumbs && (
            <>
              <div className="cierre-extra-guaviare">
                <div>
                  <img onClick={handleOnClick} src={animacion} alt="" />
                </div>
                <h2>Evocaciones del Raudal</h2>
                <div className="cierre-animacion-frase-guaviare">
                  <p>
                    Evocación poética a Raudal del Guayabero a partir del
                    movimiento, el color y las formas, mediante el uso de
                    materiales propios del lugar como piedras y hojas, sumados a
                    la arena.
                  </p>
                </div>
              </div>
              <div className="cierre-continuar-guaviare">
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
