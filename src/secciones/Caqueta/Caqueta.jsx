import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  cambiarSeccion,
  cambiarTemaBActual,
} from "../../Redux/states/managerSlice";
import Cargando from "../../components/Cargando";

import IntroCaqueta from "./Intro/Intro";
import MoyanoBio from "./Moyano/Bio";
import MoyanoYoutube1 from "./Moyano/Youtube";
import MoyanoRelatos from "./Moyano/Relatos";
import MoyanoYoutube2 from "./Moyano/Youtube2";

import BetancourtBio from "./Betancourt/Bio";
import BetancourtYoutube1 from "./Betancourt/Youtube";
import BetancourtRelatos from "./Betancourt/Relatos";
import BetancourtYoutube2 from "./Betancourt/Youtube2";
import BetancourtYoutube3 from "./Betancourt/Youtube3";

import CalenoBio from "./Caleno/Bio";
import CalenoYoutube1 from "./Caleno/Youtube";
import CalenoRelatos from "./Caleno/Relatos";
import CalenoYoutube2 from "./Caleno/Youtube2";

import Inserto1 from "./Insertos/Inserto1";
import Inserto2 from "./Insertos/Inserto2";
import Inserto3 from "./Insertos/Inserto3";

import Galeria from "./Cierre/Galeria";
import CierreVideo from "./Cierre/Relatos";

import { Howl } from "howler";

import "./Caqueta.css";

const p1P2Src =
  "https://res.cloudinary.com/dvtbfxkn9/video/upload/v1717709241/Guaviare_Personaje_1_y_2_vfgizq.mp3";

const p3P4Src =
  "https://res.cloudinary.com/dvtbfxkn9/video/upload/v1717802753/PERSONAJE_3_y_4_wnllxl.mp3";

const p5P6Src =
  "https://res.cloudinary.com/dvtbfxkn9/video/upload/v1717802753/Personaje_5_y_6_lf8vav.mp3";

const p7P8Src =
  "https://res.cloudinary.com/dvtbfxkn9/video/upload/v1717802753/PErsonaje_7_y_8_tgmjds.mp3";

const videoCierre =
  "https://res.cloudinary.com/dhz9jfn78/video/upload/v1716486447/caqueta/cierre/Video_cierre_Caqueta_ok_p_e68rvx.mp4";

const lineas = [
  {
    id: "linea-moyano",
    titulo: "Familia Moyano",
    navegacion: "caqueta-moyano-navegacion",
  },
  {
    id: "linea-betancourt",
    titulo: "Familia Betancourt",
    navegacion: "caqueta-betancourt-navegacion",
  },
  {
    id: "linea-caleno",
    titulo: "Familia Caleno",
    navegacion: "caqueta-caleno-navegacion",
  },
  {
    id: "linea-cierre",
    titulo: "Caqueta Cierre",
    navegacion: "caqueta-cierre-navegacion",
  },
];

const Caqueta = () => {
  const seccion = useSelector((state) => state.managerReducer.seccion);
  const personaje = useSelector((state) => state.managerReducer.personaje);
  const descargando = useSelector((state) => state.managerReducer.descargando);
  const mostrarLineasA = useSelector(
    (state) => state.managerReducer.mostrarLineasA
  );

  const canalBOn = useSelector((state) => state.managerReducer.canalBOn);

  const videoCierreRef = useRef(null);

  const audioCap = useRef(null);
  const [audioSrc, setAudioSrc] = useState(p1P2Src);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cambiarSeccion("caqueta-intro"));
    //dispatch(cambiarSeccion("caqueta-galeria"));
    dispatch(cambiarTemaBActual("estigma"));
  }, []);

  useEffect(() => {
    if (canalBOn) {
      audioCap.current?.pause();
    }

    if (seccion == "caqueta-intro") {
      setAudioSrc("");
      // } else if (seccion == "jorge-bio") {
      //   setAudioSrc(p1P2Src);
      // } else if (seccion == "jorge-youtube") {
      //   setAudioSrc(p1P2Src);
      // } else if (seccion == "jorge-relatos") {
      //   setAudioSrc(p1P2Src);
      // } else if (seccion == "jorge-galeria") {
      //   setAudioSrc(p1P2Src);
      // } else if (seccion == "carlos-bio") {
      //   setAudioSrc(p1P2Src);
      // } else if (seccion == "carlos-youtube") {
      //   setAudioSrc(p1P2Src);
      // } else if (seccion == "carlos-relatos") {
      //   setAudioSrc(p1P2Src);
      // } else if (seccion == "carlos-galeria") {
      //   setAudioSrc(p1P2Src);
      // } else if (seccion == "dayana-bio") {
      //   setAudioSrc(p3P4Src);
      // } else if (seccion == "dayana-youtube-1") {
      //   setAudioSrc(p3P4Src);
      // } else if (seccion == "dayana-youtube-2") {
      //   setAudioSrc(p3P4Src);
      // } else if (seccion == "dayana-galeria") {
      //   setAudioSrc(p3P4Src);
    } else {
      setAudioSrc("");
    }

    if (!canalBOn) {
      setTimeout(() => {
        if (!audioCap.current?.playing()) {
          //audioCap.current?.play();
        }
      }, 800);
    }

    if (seccion != "caqueta-cierre") {
      videoCierreRef.current.pause();
      videoCierreRef.current.style.visibility = "hidden";
    }
  }, [seccion, canalBOn]);

  useEffect(() => {
    audioCap.current = new Howl({
      src: [audioSrc],
      loop: true,
      volume: 1,
    });

    return () => {
      audioCap.current.unload();
    };
  }, [audioSrc]);

  const handleNavegacion = (id) => {
    if (id == "caqueta-moyano-navegacion") {
      dispatch(cambiarSeccion("moyano-bio"));
    } else if (id == "caqueta-betancourt-navegacion") {
      dispatch(cambiarSeccion("betancourt-bio"));
    } else if (id == "caqueta-caleno-navegacion") {
      dispatch(cambiarSeccion("caleno-bio"));
    } else if (id == "caqueta-cierre-navegacion") {
      dispatch(cambiarSeccion("caqueta-galeria"));
    }
  };

  return (
    <div className="capitulo">
      <div className="video-caqueta-cierre">
        <video ref={videoCierreRef} playsInline muted src={videoCierre}></video>
      </div>

      {mostrarLineasA && (
        <div className="lineas-a">
          {lineas.map((linea) => {
            return (
              <div
                onClick={() => {
                  handleNavegacion(linea.navegacion);
                }}
                key={linea.id}
                className={
                  personaje === linea.id ? "linea linea-seleccionada" : "linea"
                }
              />
            );
          })}
        </div>
      )}
      {descargando && <Cargando />}
      {seccion == "caqueta-intro" && (
        <IntroCaqueta videoCierre={videoCierreRef} />
      )}
      {seccion == "moyano-bio" && <MoyanoBio />}
      {seccion == "moyano-youtube-1" && <MoyanoYoutube1 />}
      {seccion == "moyano-relatos" && <MoyanoRelatos />}
      {seccion == "moyano-youtube-2" && <MoyanoYoutube2 />}
      {seccion == "caqueta-inserto1" && <Inserto1 />}
      {seccion == "betancourt-bio" && <BetancourtBio />}
      {seccion == "betancourt-youtube-1" && <BetancourtYoutube1 />}
      {seccion == "betancourt-relatos" && <BetancourtRelatos />}
      {seccion == "betancourt-youtube-2" && <BetancourtYoutube2 />}
      {seccion == "betancourt-youtube-3" && <BetancourtYoutube3 />}
      {seccion == "caqueta-inserto2" && <Inserto2 />}
      {seccion == "caleno-bio" && <CalenoBio />}
      {seccion == "caleno-youtube-1" && <CalenoYoutube1 />}
      {seccion == "caleno-relatos" && <CalenoRelatos />}
      {seccion == "caleno-youtube-2" && <CalenoYoutube2 />}
      {seccion == "caqueta-inserto3" && <Inserto3 />}
      {seccion == "caqueta-galeria" && <Galeria />}
      {seccion == "caqueta-cierre" && (
        <CierreVideo videoCierre={videoCierreRef} />
      )}
    </div>
  );
};

export default Caqueta;
