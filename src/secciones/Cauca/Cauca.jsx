import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  cambiarSeccion,
  cambiarTemaBActual,
} from "../../Redux/states/managerSlice";
import Cargando from "../../components/Cargando";

import IntroCauca from "./Intro/Intro";
import GuardiaBio from "./Guardia/Bio";
import GuardiaRelatos1 from "./Guardia/Relatos";
import GuardiaYoutube1 from "./Guardia/Youtube";
import GuardiaRelatos2 from "./Guardia/Relatos2";
import GuardiaYoutube2 from "./Guardia/Youtube2";
import GuardiaRelatos3 from "./Guardia/Relatos3";

import CampesinaBio from "./Campesina/Bio";
import CampesinaRelatos1 from "./Campesina/Relatos";
import CampesinaYoutube1 from "./Campesina/Youtube";
import CampesinaRelatos2 from "./Campesina/Relatos2";
import CampesinaYoutube2 from "./Campesina/Youtube2";

import CimarronaBio from "./Cimarrona/Bio";
import CimarronaRelatos1 from "./Cimarrona/Relatos";
import CimarronaRelatos2 from "./Cimarrona/Relatos2";
import CimarronaYoutube1 from "./Cimarrona/Youtube";
import CimarronaRelatos3 from "./Cimarrona/Relatos3";

import HermandadBio from "./Hermandad/Bio";
import HermandadYoutube1 from "./Hermandad/Youtube";
import HermandadRelatos1 from "./Hermandad/Relatos";
import HermandadRelatos2 from "./Hermandad/Relatos2";
import HermandadYoutube2 from "./Hermandad/Youtube2";

import CaucaGaleria from "./Cierre/Galeria";
import CaucaCierre from "./Cierre/Relatos";

import { Howl } from "howler";

const audioCaucaGaleria =
  "https://res.cloudinary.com/dumlhmvts/video/upload/v1717172151/cauca/cierre/Audio_Galeria_cierre_Cauca_g6ss2r.mp3";

import "./Cauca.css";

const p1P2Src =
  "https://res.cloudinary.com/dvtbfxkn9/video/upload/v1717709241/Guaviare_Personaje_1_y_2_vfgizq.mp3";

const p3P4Src =
  "https://res.cloudinary.com/dvtbfxkn9/video/upload/v1717802753/PERSONAJE_3_y_4_wnllxl.mp3";

const p5P6Src =
  "https://res.cloudinary.com/dvtbfxkn9/video/upload/v1717802753/Personaje_5_y_6_lf8vav.mp3";

const p7P8Src =
  "https://res.cloudinary.com/dvtbfxkn9/video/upload/v1717802753/PErsonaje_7_y_8_tgmjds.mp3";

// const videoCierre =
//   "https://res.cloudinary.com/dumlhmvts/video/upload/v1718575832/cauca/cierre/Video_cierre_Cauca_ok_con_sonido_AJUSTE_luz_p_iihnsf.mp4";

const videoCierre =
"https://res.cloudinary.com/dvtbfxkn9/video/upload/v1718712347/Video_cierre_Cauca_final_p_18_junio_jucbka.mp4"

const lineas = [
  {
    id: "linea-guardia",
    titulo: "Guardia Indigena",
    navegacion: "cauca-guardia-navegacion",
  },
  {
    id: "linea-campesina",
    titulo: "Guardia Campesina",
    navegacion: "cauca-campesina-navegacion",
  },
  {
    id: "linea-cimarrona",
    titulo: "Guardia Cimarrona",
    navegacion: "cauca-cimarrona-navegacion",
  },
  {
    id: "linea-hermandad",
    titulo: "Lazos de hermandad",
    navegacion: "cauca-hermandad-navegacion",
  },
  {
    id: "linea-galeria",
    titulo: "Cauca Galeria",
    navegacion: "cauca-galeria-navegacion",
  },
];

const Cauca = () => {
  const seccion = useSelector((state) => state.managerReducer.seccion);
  const personaje = useSelector((state) => state.managerReducer.personaje);
  const descargando = useSelector((state) => state.managerReducer.descargando);
  const [sound, setSound] = useState(null);
  const mostrarLineasA = useSelector(
    (state) => state.managerReducer.mostrarLineasA
  );

  const canalBOn = useSelector((state) => state.managerReducer.canalBOn);

  const videoCierreRef = useRef(null);

  const audioCap = useRef(null);
  const [audioSrc, setAudioSrc] = useState(p1P2Src);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cambiarSeccion("cauca-intro"));
    //dispatch(cambiarSeccion("cauca-galeria"));
    dispatch(cambiarTemaBActual("todos"));

    const newSound = new Howl({
      src: [audioCaucaGaleria], // Replace with your audio source
    });
    setSound(newSound);

    return () => {
      newSound.unload();
    };
  }, []);

  useEffect(() => {
    if (canalBOn) {
      audioCap.current?.pause();
    }

    if (seccion == "cauca-intro") {
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
      sound?.pause();
      setAudioSrc("");
    }

    if (!canalBOn) {
      setTimeout(() => {
        if (!audioCap.current?.playing()) {
          //audioCap.current?.play();
        }
      }, 800);
    }

    if (seccion != "cauca-cierre") {
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
    if (id == "cauca-guardia-navegacion") {
      dispatch(cambiarSeccion("cauca-guardia-bio"));
    } else if (id == "cauca-campesina-navegacion") {
      dispatch(cambiarSeccion("campesina-bio"));
    } else if (id == "cauca-cimarrona-navegacion") {
      dispatch(cambiarSeccion("cimarrona-bio"));
    } else if (id == "cauca-hermandad-navegacion") {
      dispatch(cambiarSeccion("hermandad-bio"));
    } else if (id == "cauca-galeria-navegacion") {
      dispatch(cambiarSeccion("cauca-galeria"));
    }
  };

  return (
    <div className="capitulo">
      <div className="video-cauca-cierre">
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
      {seccion == "cauca-intro" && <IntroCauca videoCierre={videoCierreRef} />}
      {seccion == "cauca-guardia-bio" && <GuardiaBio />}
      {seccion == "guardia-relatos-1" && <GuardiaRelatos1 />}
      {seccion == "guardia-youtube-1" && <GuardiaYoutube1 />}
      {seccion == "guardia-relatos-2" && <GuardiaRelatos2 />}
      {seccion == "guardia-youtube-2" && <GuardiaYoutube2 />}
      {seccion == "guardia-relatos-3" && <GuardiaRelatos3 />}
      {seccion == "campesina-bio" && <CampesinaBio />}
      {seccion == "campesina-relatos-1" && <CampesinaRelatos1 />}
      {seccion == "campesina-youtube-1" && <CampesinaYoutube1 />}
      {seccion == "campesina-relatos-2" && <CampesinaRelatos2 />}
      {seccion == "campesina-youtube-2" && <CampesinaYoutube2 />}
      {seccion == "cimarrona-bio" && <CimarronaBio />}
      {seccion == "cimarrona-relatos-1" && <CimarronaRelatos1 />}
      {seccion == "cimarrona-relatos-2" && <CimarronaRelatos2 />}
      {seccion == "cimarrona-youtube-1" && <CimarronaYoutube1 />}
      {seccion == "cimarrona-relatos-3" && <CimarronaRelatos3 />}
      {seccion == "hermandad-bio" && <HermandadBio />}
      {seccion == "hermandad-youtube-1" && <HermandadYoutube1 />}
      {seccion == "hermandad-relatos-1" && <HermandadRelatos1 />}
      {seccion == "hermandad-relatos-2" && <HermandadRelatos2 />}
      {seccion == "hermandad-youtube-2" && <HermandadYoutube2 />}
      {seccion == "cauca-galeria" && <CaucaGaleria sound={sound} />}
      {seccion == "cauca-cierre" && (
        <CaucaCierre videoCierre={videoCierreRef} />
      )}
    </div>
  );
};

export default Cauca;
