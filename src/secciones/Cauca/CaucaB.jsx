import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  establecerMostrarAbajo,
  cambiarTemaBActual,
} from "../../Redux/states/managerSlice";
import Todos from "./Todos/Todos";
import Grima from "./Grima/Grima"
import Mujer from "./Mujer/Mujer";
import Vivir from "./Vivir/Vivir";


const caceriaSrc =
  "https://res.cloudinary.com/dvtbfxkn9/video/upload/v1717709248/Tiempos_caceria_MAY22_x0evfe.mp3";

const guayaberoSrc =
  "https://res.cloudinary.com/dvtbfxkn9/video/upload/v1717801226/RIO_GUAYABERO_MAY11_csdqlf.mp3";

const bonanzasSrc =
  "https://res.cloudinary.com/dvtbfxkn9/video/upload/v1717801226/Bonaza_vers_def_MAY_22_b06yvn.mp3";

const pazSrc =
  "https://res.cloudinary.com/dvtbfxkn9/video/upload/v1717801226/Despues_del_acuerdo_MAY14_cfn2t8.mp3";

const guardianesSrc =
  "https://res.cloudinary.com/dvtbfxkn9/video/upload/v1717801226/Guardianes_MAY22_eneh8c.mp3";

import "./CaucaB.css";

const lineasB = [
  {
    id: "linea-todos",
    titulo: "Todos",
    navegacion: "cauca-todos-navegacion",
  },
  {
    id: "linea-grima",
    titulo: "Grima",
    navegacion: "cauca-grima-navegacion",
  },
  {
    id: "linea-mujer",
    titulo: "Mujer",
    navegacion: "cauca-mujer-navegacion",
  },
  {
    id: "linea-vivir",
    titulo: "Vivir",
    navegacion: "cauca-vivir-navegacion",
  },
];

const CaucaB = () => {
 
  const canalBOn = useSelector((state) => state.managerReducer.canalBOn);
  const temaBActual = useSelector((state) => state.managerReducer.temaBActual);

  const dispatch = useDispatch();

  const audioCapB = useRef(null);
  const [audioSrc, setAudioSrc] = useState(caceriaSrc);

  const [lineaS, setLineaS] = useState("linea-todos");
  const divRef = useRef(null);
  const todosRef = useRef(null);
  const grimaRef = useRef(null);
  const mujerRef = useRef(null);
  const vivirRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const top1 = todosRef.current.getBoundingClientRect().top;
        const bottom1 = todosRef.current.getBoundingClientRect().bottom;

        const top2 = grimaRef.current.getBoundingClientRect().top;
        const bottom2 = grimaRef.current.getBoundingClientRect().bottom;

        const top3 = mujerRef.current.getBoundingClientRect().top;
        const bottom3 = mujerRef.current.getBoundingClientRect().bottom;

        const top4 = vivirRef.current.getBoundingClientRect().top;
        const bottom4 = vivirRef.current.getBoundingClientRect().bottom;


        const windowHeight = window.innerHeight;

        if (top1 < windowHeight / 2 && bottom1 >= 0) {
          dispatch(establecerMostrarAbajo(false));
          setLineaS("linea-todos");
          dispatch(cambiarTemaBActual("todos"));
          setAudioSrc(caceriaSrc);
        }

        if (top2 < windowHeight / 2 && bottom2 >= 0) {
          dispatch(establecerMostrarAbajo(false));
          setLineaS("linea-grima");
          dispatch(cambiarTemaBActual("grima"));
          setAudioSrc(guayaberoSrc);
        }

        if (top3 < windowHeight / 2 && bottom3 >= 0) {
          dispatch(establecerMostrarAbajo(false));
          setLineaS("linea-mujer");
          dispatch(cambiarTemaBActual("mujer"));
          setAudioSrc(bonanzasSrc);
        }

        if (top4 < windowHeight / 2 && bottom4 >= 0) {
          dispatch(establecerMostrarAbajo(false));
          setLineaS("linea-vivir");
          dispatch(cambiarTemaBActual("vivir"));
          setAudioSrc(pazSrc);
        }
      }
    };

    divRef.current.addEventListener("scroll", handleScroll);
    return () => {
      divRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {

    if (audioCapB.current) {
      audioCapB.current.unload();
    }

    audioCapB.current = new Howl({
      src: [audioSrc],
      loop: true,
      volume: 0,
    });

    return () => {
      audioCapB.current.unload();
    };
  }, [audioSrc]);

  useEffect(() => {
    if (canalBOn) {
      if (!audioCapB.current?.playing()) {
        audioCapB.current?.play();
      }
    } else {
      audioCapB.current?.pause();
    }
  }, [canalBOn]);

  useEffect(() => {
    if (canalBOn) {
      setTimeout(() => {
        audioCapB.current?.play();
      }, 400);
    }
  }, [temaBActual]);

  const audioFx = (acciones) => {
  
    if (acciones.tipo == "volumen") {
      //graduallyChangeVolume(acciones.valor, 3000);
      audioCapB.current.volume(acciones.valor);
      audioCapB.current.volume(0);
    }
  };

  const graduallyChangeVolume = (targetVolume, duration) => {
    const currentVolume = audioCapB.current.volume();
    const step = (targetVolume - currentVolume) / (duration / 100);
    let currentStep = 0;
    const intervalId = setInterval(() => {
      currentStep += 1;
      const newVolume = currentVolume + step * currentStep;
      audioCapB.current.volume(newVolume);
      if (
        (step > 0 && newVolume >= targetVolume) ||
        (step < 0 && newVolume <= targetVolume)
      ) {
        clearInterval(intervalId);
        audioCapB.current.volume(targetVolume); // Ensure exact target volume
      }
    }, 100);
  };

  return (
    <div ref={divRef} className="cauca-b">
      {canalBOn && (
        <div className="lineas-b">
          {lineasB.map((linea) => {
            return (
              <div
                key={linea.id}
                className={
                  lineaS === linea.id ? "linea linea-seleccionada" : "linea"
                }
              />
            );
          })}
        </div>
      )}
      <div ref={todosRef}>
        <Todos sound={audioCapB.current} audioFx={audioFx} /> 
      </div>
      <div ref={grimaRef}>
        <Grima sound={audioCapB.current} audioFx={audioFx} /> 
      </div>
      <div ref={mujerRef}>
        <Mujer sound={audioCapB.current} audioFx={audioFx} />
      </div>
      <div ref={vivirRef}>
        <Vivir sound={audioCapB.current} audioFx={audioFx} />
      </div>
    </div>
  );
};

export default CaucaB;
