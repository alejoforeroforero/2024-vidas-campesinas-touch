import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  cambiarSeccion,
  cambiarTemaBActual,
} from "../../Redux/states/managerSlice";
import Cargando from "../../components/Cargando";

import IntroGuaviare from "./Intro/Intro";
import JorgeBio from "./Jorge/Bio";
import JorgeYoutube from "./Jorge/Youtube";
import JorgeRelatos from "./Jorge/Relatos";
import JorgeGaleria from "./Jorge/Galeria";

import CarlosBio from "./Carlos/Bio";
import CarlosYoutube from "./Carlos/Youtube";
import CarlosRelatos from "./Carlos/Relatos";
import CarlosGaleria from "./Carlos/Galeria";

import DayanaBio from "./Dayana/Bio";
import DayanaYoutube1 from "./Dayana/Youtube";
import DayanaYoutube2 from "./Dayana/Youtube2";
import DayanaGaleria from "./Dayana/Galeria";

import WilliamBio from "./William/Bio";
import WilliamYoutube from "./William/Youtube";
import WilliamRelatos from "./William/Relatos";
import WilliamGaleria from "./William/Galeria";

import MarisolBio from "./Marisol/Bio";
import MarisolYoutube from "./Marisol/Youtube";
import MarisolGaleria from "./Marisol/Galeria";

import EliasBio from "./Elias/Bio";
import EliasYoutube from "./Elias/Youtube";
import EliasRelatos from "./Elias/Relatos";

import RodriguezBio from "./Rodriguez/Bio";
import RodriguezYoutube from "./Rodriguez/Youtube";
import RodriguezRelatos from "./Rodriguez/Relatos";
import RodriguezYoutube2 from "./Rodriguez/Youtube2";

import CierreGaleria from "./Cierre/Galeria";
import CierreVideo from "./Cierre/Relatos";

import { Howl } from "howler";

import "./Guaviare.css";

const p1P2Src =
  "https://res.cloudinary.com/dvtbfxkn9/video/upload/v1717709241/Guaviare_Personaje_1_y_2_vfgizq.mp3";

const p3P4Src =
  "https://res.cloudinary.com/dvtbfxkn9/video/upload/v1717802753/PERSONAJE_3_y_4_wnllxl.mp3";

const p5P6Src =
  "https://res.cloudinary.com/dvtbfxkn9/video/upload/v1717802753/Personaje_5_y_6_lf8vav.mp3";

const p7P8Src =
  "https://res.cloudinary.com/dvtbfxkn9/video/upload/v1717802753/PErsonaje_7_y_8_tgmjds.mp3";

const videoCierre =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1713230501/assets/guaviare/cierre/video-cierre_tfdzvy.mp4";

const lineas = [
  {
    id: "linea-jorge",
    titulo: "Jorge Cano",
    navegacion: "guaviare-jorge-navegacion",
  },
  {
    id: "linea-carlos",
    titulo: "Carlos Mancera",
    navegacion: "guaviare-carlos-navegacion",
  },
  {
    id: "linea-dayana",
    titulo: "Dayana Novoa",
    navegacion: "guaviare-dayana-navegacion",
  },
  {
    id: "linea-william",
    titulo: "William Mora",
    navegacion: "guaviare-william-navegacion",
  },
  {
    id: "linea-marisol",
    titulo: "Marisol Montero",
    navegacion: "guaviare-marisol-navegacion",
  },
  {
    id: "linea-elias",
    titulo: "Elías Lozano",
    navegacion: "guaviare-elias-navegacion",
  },
  {
    id: "linea-rodriguez",
    titulo: "Familia Rodriguez",
    navegacion: "guaviare-rodriguez-navegacion",
  },
  {
    id: "linea-cierre",
    titulo: "Cierre",
    navegacion: "guaviare-cierre-navegacion",
  },
];

const Guaviare = () => {
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
    dispatch(cambiarSeccion("guaviare-intro"));
    //dispatch(cambiarSeccion("jorge-bio"));
    dispatch(cambiarTemaBActual("caceria"));
  }, []);

  useEffect(() => {
    if (canalBOn) {
      audioCap.current?.pause();
    }

    if (seccion == "guaviare-intro") {
      setAudioSrc("");
    } else if (seccion == "jorge-bio") {
      setAudioSrc(p1P2Src);
    } else if (seccion == "jorge-youtube") {
      setAudioSrc(p1P2Src);
    } else if (seccion == "jorge-relatos") {
      setAudioSrc(p1P2Src);
    } else if (seccion == "jorge-galeria") {
      setAudioSrc(p1P2Src);
    } else if (seccion == "carlos-bio") {
      setAudioSrc(p1P2Src);
    } else if (seccion == "carlos-youtube") {
      setAudioSrc(p1P2Src);
    } else if (seccion == "carlos-relatos") {
      setAudioSrc(p1P2Src);
    } else if (seccion == "carlos-galeria") {
      setAudioSrc(p1P2Src);
    } else if (seccion == "dayana-bio") {
      setAudioSrc(p3P4Src);
    } else if (seccion == "dayana-youtube-1") {
      setAudioSrc(p3P4Src);
    } else if (seccion == "dayana-youtube-2") {
      setAudioSrc(p3P4Src);
    } else if (seccion == "dayana-galeria") {
      setAudioSrc(p3P4Src);
    } else {
      setAudioSrc("");
    }

    if (!canalBOn) {
      setTimeout(() => {
        if (!audioCap.current?.playing()) {
          audioCap.current?.play();
        }
      }, 800);
    }

    if (seccion != "cierre-video") {
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
    if (id == "guaviare-jorge-navegacion") {
      dispatch(cambiarSeccion("jorge-bio"));
    } else if (id == "guaviare-carlos-navegacion") {
      dispatch(cambiarSeccion("carlos-bio"));
    } else if (id == "guaviare-dayana-navegacion") {
      dispatch(cambiarSeccion("dayana-bio"));
    } else if (id == "guaviare-william-navegacion") {
      dispatch(cambiarSeccion("william-bio"));
    } else if (id == "guaviare-marisol-navegacion") {
      dispatch(cambiarSeccion("marisol-bio"));
    } else if (id == "guaviare-elias-navegacion") {
      dispatch(cambiarSeccion("elias-bio"));
    } else if (id == "guaviare-rodriguez-navegacion") {
      dispatch(cambiarSeccion("rodriguez-bio"));
    } else if (id == "guaviare-cierre-navegacion") {
      dispatch(cambiarSeccion("cierre-galeria"));
    }
  };

  const audioFx = (acciones) => {
    if (acciones.tipo == "volumen") {
      graduallyChangeVolume(acciones.valor, 3000);
    }
  };

  const graduallyChangeVolume = (targetVolume, duration) => {
    const currentVolume = audioCap.current.volume();
    const step = (targetVolume - currentVolume) / (duration / 100);
    let currentStep = 0;
    const intervalId = setInterval(() => {
      currentStep += 1;
      const newVolume = currentVolume + step * currentStep;
      audioCap.current.volume(newVolume);
      if (
        (step > 0 && newVolume >= targetVolume) ||
        (step < 0 && newVolume <= targetVolume)
      ) {
        clearInterval(intervalId);
        audioCap.current.volume(targetVolume); // Ensure exact target volume
      }
    }, 100);
  };

  return (
    <div className="capitulo">
      <div className="video-guaviare-cierre">
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
      {seccion == "guaviare-intro" && (
        <IntroGuaviare videoCierre={videoCierreRef} />
      )}
      {seccion == "jorge-bio" && (
        <JorgeBio sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "jorge-youtube" && (
        <JorgeYoutube sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "jorge-relatos" && (
        <JorgeRelatos sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "jorge-galeria" && (
        <JorgeGaleria sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "carlos-bio" && (
        <CarlosBio sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "carlos-youtube" && (
        <CarlosYoutube sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "carlos-relatos" && (
        <CarlosRelatos sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "carlos-galeria" && (
        <CarlosGaleria sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "dayana-bio" && (
        <DayanaBio sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "dayana-youtube-1" && (
        <DayanaYoutube1 sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "dayana-youtube-2" && (
        <DayanaYoutube2 sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "dayana-galeria" && (
        <DayanaGaleria sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "william-bio" && (
        <WilliamBio sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "william-youtube" && (
        <WilliamYoutube sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "william-relatos" && (
        <WilliamRelatos sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "william-galeria" && (
        <WilliamGaleria sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "marisol-bio" && (
        <MarisolBio sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "marisol-youtube" && (
        <MarisolYoutube sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "marisol-galeria" && (
        <MarisolGaleria sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "elias-bio" && (
        <EliasBio sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "elias-youtube" && (
        <EliasYoutube sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "elias-relatos" && (
        <EliasRelatos sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "rodriguez-bio" && (
        <RodriguezBio sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "rodriguez-youtube" && (
        <RodriguezYoutube sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "rodriguez-relatos" && (
        <RodriguezRelatos sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "rodriguez-youtube-2" && (
        <RodriguezYoutube2 sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "cierre-galeria" && (
        <CierreGaleria sound={audioCap.current} audioFx={audioFx} />
      )}
      {seccion == "cierre-video" && (
        <CierreVideo videoCierre={videoCierreRef} />
      )}
    </div>
  );
};

export default Guaviare;
