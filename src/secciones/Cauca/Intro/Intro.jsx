import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cambiarSeccion,
  sumar,
  cambiarDescargando,
  establecerMostrarAbajo,
  establecerMostrarLineasA,
  establecerMostrarFlechasCanales,
  pararAudios,
} from "../../../Redux/states/managerSlice";

const videoCaucaM =
  "https://res.cloudinary.com/dumlhmvts/video/upload/v1716738667/cauca/intro/Loop_INTRO_CAUCA_ok_mwysxc.mp4";
import sol from "../../../assets/caqueta/intro/sol.png";
import luna from "../../../assets/caqueta/intro/luna.png";
import scroll from "../../../assets/generales/scroll.png";

import { CaucaIntro } from "../../../data/Cauca";

import "./Intro.css";

const Intro = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const contenedorGRef = useRef();
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    dispatch(establecerMostrarLineasA(false));
    dispatch(establecerMostrarFlechasCanales(false));
    dispatch(establecerMostrarAbajo(false));
    dispatch(pararAudios());

    const timer = setTimeout(() => {
      dispatch(cambiarDescargando(false));
      setMostrar(true);
      videoRef.current.play();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  let contador = useSelector((state) => state.managerReducer.contador);
  const [startY, setStartY] = useState(null);
  const [desaparecer, setDesaparecer] = useState(false);

  useEffect(() => {
    let isScrolling;

    function handleScroll(event) {
      const direction = event.deltaY > 0 ? "down" : "up";

      if (contador >= 0 && direction == "down") {
        setDesaparecer(true);
      }

      clearInterval(isScrolling);

      isScrolling = setTimeout(function () {
        setDesaparecer(false);

        if (direction == "up") {
          contador--;
        } else {
          contador++;
        }

        if (contador < 0) {
          contador = 0;
        }

        if (contador > 1) {
          dispatch(sumar(0));
          dispatch(cambiarDescargando(true));
          dispatch(cambiarSeccion("cauca-guardia-bio"));
        } else {
          dispatch(sumar(contador));
        }
      }, 100);
    }
    contenedorGRef.current.addEventListener("wheel", handleScroll);

    return () => {
      if (contenedorGRef.current) {
        contenedorGRef.current.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  const handleTouchStart = (event) => {
    setStartY(event.touches[0].clientY);
  };

  const handleTouchEnd = (event) => {
    const endY = event.changedTouches[0].clientY;
    const deltaY = startY - endY;

    if (deltaY > 0) {
      contador++;
    } else if (deltaY < 0) {
      contador--;
    } else {
    }

    if (contador < 0) {
      contador = 0;
    }

    if (contador > 1) {
      dispatch(sumar(0));
      dispatch(cambiarDescargando(true));
      dispatch(cambiarSeccion("cauca-guardia-bio"));
    } else {
      dispatch(sumar(contador));
    }
  };

  const pintarVideo = () => {
    return (
      <div className="cauca-video">
        <video
          ref={videoRef}
          loop
          playsInline
          muted
          src={videoCaucaM}
        ></video>
      </div>
    );
  };

  return (
    <div
      ref={contenedorGRef}
      className="seccion cauca-intro"
      onTouchEnd={handleTouchEnd}
      onTouchStart={handleTouchStart}
    >
      {pintarVideo()}
      <div className="mask-general">
        {mostrar && (
          <div className="contenido-general">
            <div className="cauca-sol">
              <img src={sol} alt="" />
            </div>
            <div className="cauca-titulo">
              <h1 className="cauca-titulo-h1">{CaucaIntro.titulo}</h1>
            </div>
            <div className="cauca-descripcion">
              <img className="cauca-descripcion-luna" src={luna} alt="" />
              <h2 className="cauca-descripcion-h2">
                <pre>{CaucaIntro.desc}</pre>
              </h2>
              <hr className="cauca-descripcion-hr" />
              <div className="cauca-descripcion-p-contenedor">
                {contador == 0 && (
                  <p
                    className={
                      desaparecer ? "cauca-intro-p1-des" : "cauca-intro-p1"
                    }
                  >
                    {CaucaIntro.p1}
                  </p>
                )}
                {contador == 1 && (
                  <p
                    className={
                      desaparecer ? "cauca-intro-p1-des" : "cauca-intro-p1"
                    }
                  >
                    {CaucaIntro.p2}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="cauca-intro-scroll">
        <img src={scroll} alt="" />
      </div>
    </div>
  );
};

export default Intro;
