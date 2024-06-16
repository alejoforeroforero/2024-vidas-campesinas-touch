import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cambiarSeccion,
  cambiarDescargando,
  establecerMostrarAbajo,
  establecerMostrarLineasA,
  establecerMostrarFlechasCanales,
  pararAudios,
} from "../../../Redux/states/managerSlice";
import { CaucaIntro } from "../../../data/Cauca";
import { Howl } from "howler";

const videoCaucaM =
  "https://res.cloudinary.com/dumlhmvts/video/upload/v1718575228/cauca/intro/Video_OK_INTRO_Cauca_con_sonido_p_uebixx.mp4";
const audioAmbiente =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1717647113/assets/guaviare/audio/AMB_INTRO_GUAVIARE_15seg_MAY_24_waugc6.mp3";
import caucaLinea from "../../../assets/cauca/intro/linea-cauca.png";
import sol from "../../../assets/caqueta/intro/sol.png";
import luna from "../../../assets/caqueta/intro/luna.png";
import scroll from "../../../assets/generales/scroll.png";
import siguiente from "../../../assets/generales/flecha-adelante.png";
import iniciarCapBtn from "../../../assets/generales/iniciar-cap-btn.png";

import "./Intro.css";

const Intro = ({ videoCierre }) => {
  const dispatch = useDispatch();
  const yaEmpezo = useSelector((state) => state.managerReducer.yaEmpezo);
  const videoRef = useRef();
  const contenedorGRef = useRef();
  const [mostrar, setMostrar] = useState(false);
  const [contador, setContador] = useState(0);
  const [audioIntro, setAudioIntro] = useState(null);

  useEffect(() => {
    dispatch(establecerMostrarLineasA(false));
    dispatch(establecerMostrarFlechasCanales(false));
    dispatch(establecerMostrarAbajo(false));
    dispatch(cambiarDescargando(false));
    dispatch(pararAudios());

    if (yaEmpezo) {
      empezarCapitulo();
    }

    const sonido = new Howl({
      src: [audioAmbiente],
      loop: true,
    });
    setAudioIntro(sonido);

    return () => {
      sonido.unload();
    };
  }, []);

  useEffect(() => {
    if (contador > 1) {
      let isScrolling;

      function handleScroll(event) {
        const direction = event.deltaY > 0 ? "down" : "up";

        clearInterval(isScrolling);

        isScrolling = setTimeout(function () {
          if (direction == "down") {
            if (contador > 1) {
              dispatch(cambiarSeccion("cauca-guardia-bio"));
            } else {
              console.log(contador);
            }
          }
        }, 100);
      }
      contenedorGRef.current.addEventListener("wheel", handleScroll);

      return () => {
        if (contenedorGRef.current) {
          contenedorGRef.current.removeEventListener("wheel", handleScroll);
        }
      };
    }
  }, [contador]);

  useEffect(() => {
    if (yaEmpezo) {
      const timer = setTimeout(() => {
        empezarCapitulo();
      }, 3000);

      //audioIntro?.play();

      return () => clearTimeout(timer);
    }
  }, [yaEmpezo, audioIntro]);

  const empezarCapitulo = () => {
    setMostrar(true);
  };

  const handleOnVideoEnd = () => {
    dispatch(cambiarSeccion("cauca-guardia-bio"));
  };

  const handleOnClickFlecha = () => {
    setContador(contador + 1);
  };

  const handleOnClickStart = () => {
    audioIntro?.pause();
    setContador(contador + 1);
    videoRef.current.play();
    videoCierre.current.muted = false;
  };

  const handleTouchEnd = () => {
    if (contador > 1) {
      dispatch(cambiarSeccion("cauca-guardia-bio"));
    } else {
      console.log(contador);
    }
  };

  const handleTouchStart = () => {
    console.log("chao");
  };

  const pintarVideo = () => {
    return (
      <div className="cauca-video">
        <video
          playsInline
          onEnded={handleOnVideoEnd}
          ref={videoRef}
          src={videoCaucaM}
        ></video>
      </div>
    );
  };

  const pintarIntro = () => {
    return (
      <div className="mask-general">
        <div className="contenido-general">
          <div
            className={`${
              contador < 2
                ? "cauca-sol"
                : "cauca-sol cauca-sol-desaparecer"
            }`}
          >
            <img src={sol} alt="" />
          </div>
          <div
            className={`${
              contador < 2
                ? "cauca-titulo"
                : "cauca-titulo cauca-intro-p-desaparecer"
            }`}
          >
            <h1 className="cauca-titulo-h1">{CaucaIntro.titulo}</h1>
          </div>
          <div
            className={`${
              contador < 2
                ? "cauca-descripcion"
                : "cauca-descripcion cauca-intro-p-desaparecer"
            }`}
          >
            <img className="cauca-descripcion-luna" src={luna} alt="" />
            <h2 className="cauca-descripcion-h2">
              <pre>{CaucaIntro.desc}</pre>
            </h2>
            <img src={caucaLinea} alt="linea" />
            <div className="cauca-descripcion-p-contenedor">
              <p
                className={`${
                  contador == 0
                    ? "cauca-intro-p-aparecer"
                    : "cauca-intro-p-desaparecer"
                }`}
              >
                {CaucaIntro.p1}
              </p>
              <p
                className={`${
                  contador == 1
                    ? "cauca-intro-p-aparecer"
                    : "cauca-intro-p-desaparecer"
                }`}
              >
                {CaucaIntro.p2}
              </p>
            </div>
          </div>
          {contador == 0 && (
            <div className="cauca-intro-siguiente">
              <img src={siguiente} onClick={handleOnClickFlecha} alt="" />
            </div>
          )}
          {contador == 1 && (
            <div
              className={`${
                contador == 1
                  ? "cauca-intro-inciar cauca-inciar-aparecer"
                  : "cauca-intro-inciar cauca-intro-p-desaparecer"
              }`}
            >
              <img src={iniciarCapBtn} onClick={handleOnClickStart} alt="" />
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        ref={contenedorGRef}
        className={`seccion ${mostrar ? "cauca-intro" : ""}`}
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        {mostrar && pintarVideo()}
        {mostrar && pintarIntro()}
      </div>
      {contador > 1 && (
        <div className="cauca-intro-scroll">
          <img src={scroll} alt="" />
        </div>
      )}
    </>
  );
};

export default Intro;
