import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  establecerMostrarAbajo,
  cambiarTemaBActual,
} from "../../Redux/states/managerSlice";
import { cambiarSrc } from "../../Redux/states/audioHowlerSlice";
import Caceria from "./Caceria/Caceria";
import Guayabero from "./Guayabero/Guayabero";
import Bonanzas from "./Bonanzas/Bonanzas";
import Paz from "./Paz/Paz";
import Guardianes from "./Guardianes/Guardianes";

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
          dispatch(cambiarSrc(''));
        }

        if (top2 < windowHeight / 2 && bottom2 >= 0) {
          dispatch(establecerMostrarAbajo(false));
          setLineaS("linea-guayabero");
          dispatch(cambiarTemaBActual("guayabero"));
          dispatch(cambiarSrc(''));
        }

        if (top3 < windowHeight / 2 && bottom3 >= 0) {
          dispatch(establecerMostrarAbajo(false));
          setLineaS("linea-bonanzas");
          dispatch(cambiarTemaBActual("bonanzas"));
          dispatch(cambiarSrc(''));
        }

        if (top4 < windowHeight / 2 && bottom4 >= 0) {
          dispatch(establecerMostrarAbajo(false));
          setLineaS("linea-paz");
          dispatch(cambiarTemaBActual("paz"));
          dispatch(cambiarSrc(''));
        }

        if (top5 < windowHeight / 2 && bottom5 >= 0) {
          dispatch(establecerMostrarAbajo(false));
          setLineaS("linea-guardianes");
          dispatch(cambiarTemaBActual("guardianes"));
          dispatch(cambiarSrc(''));
        }
      }
    };

    divRef.current.addEventListener("scroll", handleScroll);

    return () => {
      divRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <Caceria />
      </div>
      <div ref={guayaberoRef}>
        <Guayabero />
      </div>
      <div ref={bonanzasRef}>
        <Bonanzas />
      </div>
      <div ref={pazRef}>
        <Paz />
      </div>
      <div ref={guardianesRef}>
        <Guardianes />
      </div>
    </div>
  );
};

export default GuaviareB;
