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
const videoGuaviareM =
  "https://res.cloudinary.com/dumlhmvts/video/upload/v1717466037/videos-musica/Video_Intro_Guaviare_OK_cambio_p_ckaqrx.mp4";
import guaviareGrafica from "../../../assets/guaviare/home/pictograma.png";
import guaviareLinea from "../../../assets/guaviare/home/linea-guaviare.png";
import scroll from "../../../assets/generales/scroll.png";
import siguiente from "../../../assets/generales/flecha-adelante.png";
import iniciarCapBtn from "../../../assets/generales/iniciar-cap-btn.png";

const audioAmbiente =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1717647113/assets/guaviare/audio/AMB_INTRO_GUAVIARE_15seg_MAY_24_waugc6.mp3";

import { GuaviareIntro } from "../../../data/Guaviare";
import "./Intro.css";

const Intro = ({ videoCierre }) => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const contenedorGRef = useRef();
  const [mostrar, setMostrar] = useState(false);
  const [contador, setContador] = useState(0);
  const [mostrarScroll, setMostrarScroll] = useState(false);
  const yaEmpezo = useSelector((state) => state.managerReducer.yaEmpezo);
  const [audioIntro, setAudioIntro] = useState(null);

  useEffect(() => {
    dispatch(establecerMostrarLineasA(false));
    dispatch(establecerMostrarFlechasCanales(false));
    dispatch(establecerMostrarAbajo(false));
    dispatch(cambiarDescargando(false));
    dispatch(pararAudios());

    const sonido = new Howl({
      src: [audioAmbiente],
      loop: true,
    });
    setAudioIntro(sonido);

    if (yaEmpezo) {
      empezarCapitulo();
    }

    return () => {
      sonido.unload();
    };
  }, []);

  useEffect(() => {
    let isScrolling;

    function handleScroll(event) {
      const direction = event.deltaY > 0 ? "down" : "up";

      clearInterval(isScrolling);

      isScrolling = setTimeout(function () {
        if (direction == "down") {
          if (contador > 1) {
            console.log("acaaaaaaa");
            dispatch(cambiarSeccion("jorge-bio"));
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
  }, [contador]);

  useEffect(() => {
    if (yaEmpezo) {
      const timer = setTimeout(() => {
        empezarCapitulo();
      }, 3000);

      audioIntro?.play();

      return () => clearTimeout(timer);
    }
  }, [yaEmpezo, audioIntro]);

  const empezarCapitulo = () => {
    setMostrar(true);
  };

  const handleOnVideoEnd = () => {
    dispatch(cambiarDescargando(true));
    dispatch(cambiarSeccion("jorge-bio"));
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
      console.log("acaaaaaaa");
      dispatch(cambiarSeccion("jorge-bio"));
    } else {
      console.log(contador);
    }
  };

  const handleTouchStart = () => {
    console.log("chao");
  };

  const pintarVideo = () => {
    return (
      <div className="guaviare-video">
        <video
          playsInline
          onEnded={handleOnVideoEnd}
          ref={videoRef}
          src={videoGuaviareM}
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
                ? "guaviare-titulo"
                : "guaviare-titulo guaviare-intro-p-desaparecer"
            }`}
          >
            <h1 className="guaviare-titulo-h1">{GuaviareIntro.titulo}</h1>
          </div>
          <div
            className={`${
              contador < 2
                ? "guaviare-descripcion"
                : "guaviare-descripcion guaviare-intro-p-desaparecer"
            }`}
          >
            <h2 className="guaviare-descripcion-h2">
              <pre>{GuaviareIntro.desc}</pre>
            </h2>
            <img src={guaviareLinea} alt="linea" />
            <div className="guaviare-descripcion-p-contenedor">
              <p
                className={`${
                  contador == 0
                    ? "guaviare-intro-p-aparecer"
                    : "guaviare-intro-p-desaparecer"
                }`}
              >
                {GuaviareIntro.p1}
              </p>
              <p
                className={`${
                  contador == 1
                    ? "guaviare-intro-p-aparecer"
                    : "guaviare-intro-p-desaparecer"
                }`}
              >
                {GuaviareIntro.p2}
              </p>
            </div>
          </div>
          {contador == 0 && (
            <div className="guaviare-intro-siguiente">
              <img src={siguiente} onClick={handleOnClickFlecha} alt="" />
            </div>
          )}
          {contador == 1 && (
            <div
              className={`${
                contador == 1
                  ? "guaviare-intro-inciar guaviare-inciar-aparecer"
                  : "guaviare-intro-inciar guaviare-intro-p-desaparecer"
              }`}
            >
              <img src={iniciarCapBtn} onClick={handleOnClickStart} alt="" />
            </div>
          )}
          {/* <div className="guaviare-descripcion-grafica">
            <div className="guaviare-descripcion-grafica-img">
              <img src={guaviareGrafica} alt="guaviare" />
            </div>            
          </div> */}
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        ref={contenedorGRef}
        className="{mostrar} ? 'seccion guaviare-intro' : ''"
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        {mostrar && pintarVideo()}
        {mostrar && pintarIntro()}
      </div>
      {contador > 1 && (
        <div className="guaviare-intro-scroll">
          <img src={scroll} alt="" />
        </div>
      )}
    </>
  );
};

export default Intro;
