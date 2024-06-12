import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  establecerMostrarAbajo,
  cambiarTemaBActual,
} from "../../Redux/states/managerSlice";
import Caceria from "./Caceria/Caceria";
import Guayabero from "./Guayabero/Guayabero";
import Bonanzas from "./Bonanzas/Bonanzas";
import Paz from "./Paz/Paz";
import Guardianes from "./Guardianes/Guardianes";

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

import "./GuaviareB.css";

const lineasB = [
  {
    id: "linea-caceria",
    titulo: "Caceria",
    navegacion: "guaviare-caceria-navegacion",
  },
  {
    id: "linea-guayabero",
    titulo: "Guayabero",
    navegacion: "guaviare-guyabero-navegacion",
  },
  {
    id: "linea-bonanzas",
    titulo: "Bonanzas",
    navegacion: "guaviare-bonanzas-navegacion",
  },
  {
    id: "linea-paz",
    titulo: "Paz",
    navegacion: "guaviare-paz-navegacion",
  },
  {
    id: "linea-guardianes",
    titulo: "Paz",
    navegacion: "guaviare-guardianes-navegacion",
  },
];

const GuaviareB = () => {
  const canalBOn = useSelector((state) => state.managerReducer.canalBOn);
  const temaBActual = useSelector((state) => state.managerReducer.temaBActual);

  const dispatch = useDispatch();

  const audioCapB = useRef(null);
  const [audioSrc, setAudioSrc] = useState(caceriaSrc);

  const [lineaS, setLineaS] = useState("linea-caceria");
  const divRef = useRef(null);
  const caceriaRef = useRef(null);
  const guayaberoRef = useRef(null);
  const bonanzasRef = useRef(null);
  const pazRef = useRef(null);
  const guardianesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const top1 = caceriaRef.current.getBoundingClientRect().top;
        const bottom1 = caceriaRef.current.getBoundingClientRect().bottom;

        const top2 = guayaberoRef.current.getBoundingClientRect().top;
        const bottom2 = guayaberoRef.current.getBoundingClientRect().bottom;

        const top3 = bonanzasRef.current.getBoundingClientRect().top;
        const bottom3 = bonanzasRef.current.getBoundingClientRect().bottom;

        const top4 = pazRef.current.getBoundingClientRect().top;
        const bottom4 = pazRef.current.getBoundingClientRect().bottom;

        const top5 = guardianesRef.current.getBoundingClientRect().top;
        const bottom5 = guardianesRef.current.getBoundingClientRect().bottom;

        const windowHeight = window.innerHeight;

        if (top1 < windowHeight / 2 && bottom1 >= 0) {
          dispatch(establecerMostrarAbajo(false));
          setLineaS("linea-caceria");
          dispatch(cambiarTemaBActual("caceria"));
          setAudioSrc(caceriaSrc);
        }

        if (top2 < windowHeight / 2 && bottom2 >= 0) {
          dispatch(establecerMostrarAbajo(false));
          setLineaS("linea-guayabero");
          dispatch(cambiarTemaBActual("guayabero"));
          setAudioSrc(guayaberoSrc);
        }

        if (top3 < windowHeight / 2 && bottom3 >= 0) {
          dispatch(establecerMostrarAbajo(false));
          setLineaS("linea-bonanzas");
          dispatch(cambiarTemaBActual("bonanzas"));
          setAudioSrc(bonanzasSrc);
        }

        if (top4 < windowHeight / 2 && bottom4 >= 0) {
          dispatch(establecerMostrarAbajo(false));
          setLineaS("linea-paz");
          dispatch(cambiarTemaBActual("paz"));
          setAudioSrc(pazSrc);
        }

        if (top5 < windowHeight / 2 && bottom5 >= 0) {
          dispatch(establecerMostrarAbajo(false));
          setLineaS("linea-guardianes");
          dispatch(cambiarTemaBActual("guardianes"));
          setAudioSrc(guardianesSrc);
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
      volume: 1,
    });

    return () => {
      audioCapB.current.unload();
    };
  }, [audioSrc]);

  useEffect(() => {
    if (canalBOn) {
      if (!audioCapB.current?.playing()) {
        //audioCapB.current?.play();
      }
    } else {
      audioCapB.current?.pause();
    }
  }, [canalBOn]);

  useEffect(() => {
    if (canalBOn) {
      setTimeout(() => {
        //audioCapB.current?.play();
      }, 400);
    }
  }, [temaBActual]);

  const audioFx = (acciones) => {
  
    if (acciones.tipo == "volumen") {
      //graduallyChangeVolume(acciones.valor, 3000);
      audioCapB.current.volume(acciones.valor);
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
    <div ref={divRef} className="guaviare-b">
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
      <div ref={caceriaRef}>
        <Caceria sound={audioCapB.current} audioFx={audioFx} />
      </div>
      <div ref={guayaberoRef}>
        <Guayabero sound={audioCapB.current} audioFx={audioFx} />
      </div>
      <div ref={bonanzasRef}>
        <Bonanzas sound={audioCapB.current} audioFx={audioFx} />
      </div>
      <div ref={pazRef}>
        <Paz sound={audioCapB.current} audioFx={audioFx} />
      </div>
      <div ref={guardianesRef}>
        <Guardianes sound={audioCapB.current} audioFx={audioFx} />
      </div>
    </div>
  );
};

export default GuaviareB;
