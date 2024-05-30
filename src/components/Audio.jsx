import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cambiarCancion,
  pararAudios,
  establecerDuracion,
} from "../Redux/states/managerSlice";
import audioOnImg from "../assets/generales/audio-on.png";
import audioImg from "../assets/generales/audio.png";
import salida from "../assets/generales/salida.png";

// import audioJorge1 from '../assets/guaviare/jorge/jorge1.mp3';
const audioJorge2 =
  "https://res.cloudinary.com/dfwhzadxa/video/upload/v1713054257/vidas-campesinas/jorge/jorge2_njk2y7.mp3";

// const audioJorge2 = 'https://alejoforero.com/vidascampesinas/jorge2.mp3';
//import audioJorge3 from '../assets/guaviare/jorge/jorge3.mp3';
const audioJorge3 =
  "https://res.cloudinary.com/dfwhzadxa/video/upload/v1713054261/vidas-campesinas/jorge/jorge3_mbvsln.mp3";
const audioCarlos =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1713230517/assets/guaviare/carlos/carlos1_ugfua3.mp3";
const audioWilliam1 =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1713230516/assets/guaviare/william/william2_mm4h0p.mp3";
const audioCaceria =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1713230572/assets/guaviare/caceria/audio-caceria_kvolpo.mp3";
const audioArteGuaviare =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1714315774/assets/guaviare/caceria/tecnologia-del-jaguar-final_zsbdtl.mp3";
const audioGuayabero1 =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1713230549/assets/guaviare/guayabero/audio-guayabero1_rdroio.mp3";
const audioGuayabero2 =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1713230494/assets/guaviare/guayabero/audio-guayabero2_ti3v4n.mp3";
const audioToninas =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1713230497/assets/guaviare/guayabero/audio-toninas_cpcqef.mp3";
const audioMarihuana =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1713230499/assets/guaviare/bonanzas/la-marihuana_tfod9z.mp3";
const audioCocaDisney =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1713230516/assets/guaviare/bonanzas/la-coca-disney_yqbsqe.mp3";
const audioCocaIvan =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1713230516/assets/guaviare/bonanzas/la-coca-ivan_odo4n4.mp3";
const audioLaMadera =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1713230505/assets/guaviare/bonanzas/la-madera_y6nnzb.mp3";
const audioPaz1 =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1713230500/assets/guaviare/paz/audio-paz-1_khfn0z.mp3";
const audioPaz2 =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1713230544/assets/guaviare/paz/audio-paz-2_bc2qo2.mp3";
const audioPaz3 =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1713230546/assets/guaviare/paz/audio-paz-3_ljbvx3.mp3";
const audioGuardianes1 =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1713242780/assets/guaviare/guardianes/audio-guardianes-1_gff7nx.mp3";
const audioGuardianes2 =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1713242768/assets/guaviare/guardianes/audio-guardianes-2_n2pq7c.mp3";
const audioGuardianes3 =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1713242785/assets/guaviare/guardianes/audio-guardianes-3_l2pfem.mp3";
const audioGuardianes4 =
  "https://res.cloudinary.com/dbqfefibl/video/upload/v1713242777/assets/guaviare/guardianes/audio-guardianes-4_k1sd2e.mp3";
const audioMoyano =
  "https://res.cloudinary.com/dhz9jfn78/video/upload/v1716267081/caqueta/moyano/moyano-santo-remedio_jwajco.mp3";
const audioCaquetaInserto1 =
  "https://res.cloudinary.com/dhz9jfn78/video/upload/v1716384843/caqueta/insertos/caqueta-inserto-1_ktdqsf.mp3";
const audioCaquetaInserto2 =
  "https://res.cloudinary.com/dhz9jfn78/video/upload/v1716392590/caqueta/insertos/caqueta-inserto-2_t3ncxr.mp3";
const audioCaquetaInserto3 =
  "https://res.cloudinary.com/dhz9jfn78/video/upload/v1716392590/caqueta/insertos/caqueta-inserto-3_vjiwal.mp3";
const audioBetancourt =
  "https://res.cloudinary.com/dhz9jfn78/video/upload/v1716505097/caqueta/betancourt/Audio_1_Flia_Betancourt_n5krvr.mp3";
const audioCaleno1 =
  "https://res.cloudinary.com/dhz9jfn78/video/upload/v1716393309/caqueta/caleno/audio-caleno-1_aldfq8.mp3";
const audioCaleno2 =
  "https://res.cloudinary.com/dhz9jfn78/video/upload/v1716393309/caqueta/caleno/audio-caleno-2_fidkdf.mp3";
const estigmaEtnografia =
  "https://res.cloudinary.com/dhz9jfn78/video/upload/v1716267084/caqueta/estigma/estigma-etnografia-sonora_uwn4u7.mp3";
const audioCaquetaInsertoB1 =
  "https://res.cloudinary.com/dhz9jfn78/video/upload/v1716398151/caqueta/insertosB/caqueta-inserto-b-1_ubcwcp.mp3";
const audioCaquetaInsertoB3 =
  "https://res.cloudinary.com/dhz9jfn78/video/upload/v1716398149/caqueta/insertosB/caqueta-inserto-b-3_yb877p.mp3";
const audioGanaderia =
  "https://res.cloudinary.com/dhz9jfn78/video/upload/v1716267079/caqueta/ganaderia/ganaderia-audio_vxj0ks.mp3";
const audioGanaderia2 =
  "https://res.cloudinary.com/dhz9jfn78/video/upload/v1716399752/caqueta/ganaderia/audio-ganaderia-2_bvdcpt.mp3";
const audioAgroecologia1 =
  "https://res.cloudinary.com/dhz9jfn78/video/upload/v1716267080/caqueta/agroecologia/finca-guadalupe-1_iupg7u.mp3";
const audioAgroecologia2 =
  "https://res.cloudinary.com/dhz9jfn78/video/upload/v1716267082/caqueta/agroecologia/finca-guadalupe-2_l0t47y.mp3";
const audioAgroecologia3 =
  "https://res.cloudinary.com/dhz9jfn78/video/upload/v1716267083/caqueta/agroecologia/finca-guadalupe-3_lvzhhe.mp3";
import "./Audio.css";
const audioGuardia1 =
  "https://res.cloudinary.com/dumlhmvts/video/upload/v1716742662/cauca/guardia/Audio_1_Guardia_indi%CC%81gena_mwp6pf.mp3";
const audioGuardia2 =
  "https://res.cloudinary.com/dumlhmvts/video/upload/v1716743667/cauca/guardia/Audio_2_Guardia_indi%CC%81gena_bym5xt.mp3";
const audioGuardia3 =
  "https://res.cloudinary.com/dumlhmvts/video/upload/v1716766235/cauca/guardia/Audio_3_Guardia_indi%CC%81gena_ucbkbq.mp3";
const audioGuardia4 =
  "https://res.cloudinary.com/dumlhmvts/video/upload/v1716766235/cauca/guardia/Audio_4_Guardia_indi%CC%81gena_euwssk.mp3";
const audioCampesina1 =
  "https://res.cloudinary.com/dumlhmvts/video/upload/v1717034372/cauca/campesina/Audio_1_Guardia_campesina_f7zqn3.mp3";
const audioCampesina2 =
  "https://res.cloudinary.com/dumlhmvts/video/upload/v1717036014/cauca/campesina/Audio_2_Guardia_campesina_e287kb.mp3";
const audioCimarrona1 =
  "https://res.cloudinary.com/dumlhmvts/video/upload/v1717037177/cauca/cimarrona/Audio_1_Guardia_cimarrona_g3kd4t.mp3";
const audioCimarrona2 =
  "https://res.cloudinary.com/dumlhmvts/video/upload/v1717037491/cauca/cimarrona/Audio_2_Guardia_cimarrona_bj1g5v.mp3";
const audioCimarrona3 =
  "https://res.cloudinary.com/dumlhmvts/video/upload/v1717038186/cauca/cimarrona/Audio_3_Guardia_cimarrona_yycbsp.mp3";


const Audio = ({
  titulo,
  id,
  subTitulo = "",
  autor = "",
  popup = false,
  video = null,
}) => {
  const cancionActual = useSelector(
    (state) => state.managerReducer.cancionActual
  );
  const duracion = useSelector((state) => state.managerReducer.duracion);
  const dispatch = useDispatch();

  const canvasRef = useRef();
  const audioRef = useRef();
  const frame1 = useRef(0);
  const progressBarRef = useRef();
  const progressLineRef = useRef();

  const [contadorReg, setContadorReg] = useState(0);
  const [audioPos, setAudioPos] = useState(0);

  let audioCtx = null;
  let analyser;
  let gainNode;
  let source;
  let bufferLength;
  let dataArray;
  let canvasCtx;

  const audioS = cancionActual == id ? true : false;

  const escogerCancion = () => {
    if (id == "jorge1") {
      return null;
    } else if (id == "jorge2") {
      return audioJorge2;
    } else if (id == "jorge3") {
      return audioJorge3;
    } else if (id == "carlos") {
      return audioCarlos;
    } else if (id == "william-1") {
      return audioWilliam1;
    } else if (id == "caceria") {
      return audioCaceria;
    } else if (id == "arte-guaviare") {
      return audioArteGuaviare;
    } else if (id == "audio-guayabero1") {
      return audioGuayabero1;
    } else if (id == "audio-guayabero2") {
      return audioGuayabero2;
    } else if (id == "audio-toninas") {
      return audioToninas;
    } else if (id == "audio-marihuana") {
      return audioMarihuana;
    } else if (id == "audio-coca-disney") {
      return audioCocaDisney;
    } else if (id == "audio-coca-ivan") {
      return audioCocaIvan;
    } else if (id == "audio-madera") {
      return audioLaMadera;
    } else if (id == "audio-paz-1") {
      return audioPaz1;
    } else if (id == "audio-paz-2") {
      return audioPaz2;
    } else if (id == "audio-paz-3") {
      return audioPaz3;
    } else if (id == "audio-guardianes-1") {
      return audioGuardianes1;
    } else if (id == "audio-guardianes-2") {
      return audioGuardianes2;
    } else if (id == "audio-guardianes-3") {
      return audioGuardianes3;
    } else if (id == "audio-guardianes-4") {
      return audioGuardianes4;
    } else if (id == "audio-moyano") {
      return audioMoyano;
    } else if (id == "caqueta-inserto-1-audio") {
      return audioCaquetaInserto1;
    } else if (id == "caqueta-inserto-2-audio") {
      return audioCaquetaInserto2;
    } else if (id == "caqueta-inserto-3-audio") {
      return audioCaquetaInserto3;
    } else if (id == "audio-caleno-1") {
      return audioCaleno1;
    } else if (id == "audio-betancourt") {
      return audioBetancourt;
    } else if (id == "audio-caleno-2") {
      return audioCaleno2;
    } else if (id == "estigma-etnografia") {
      return estigmaEtnografia;
    } else if (id == "insertoB-audio-1") {
      return audioCaquetaInsertoB1;
    } else if (id == "insertoB-audio-3") {
      return audioCaquetaInsertoB3;
    } else if (id == "audio-ganaderia-1") {
      return audioGanaderia;
    } else if (id == "audio-ganaderia-2") {
      return audioGanaderia2;
    } else if (id == "audio-agroecologia-1") {
      return audioAgroecologia1;
    } else if (id == "audio-agroecologia-2") {
      return audioAgroecologia2;
    } else if (id == "audio-agroecologia-3") {
      return audioAgroecologia3;
    } else if (id == "audio-guardia-1") {
      return audioGuardia1;
    } else if (id == "audio-guardia-2") {
      return audioGuardia2;
    } else if (id == "audio-guardia-3") {
      return audioGuardia3;
    } else if (id == "audio-guardia-4") {
      return audioGuardia4;
    } else if (id == "audio-campesina-1") {
      return audioCampesina1;
    } else if (id == "audio-campesina-2") {
      return audioCampesina2;
    } else if (id == "audio-cimarrona-1") {
      return audioCimarrona1;
    } else if (id == "audio-cimarrona-2") {
      return audioCimarrona2;
    } else if (id == "audio-cimarrona-3") {
      return audioCimarrona3;
    }
  };

  const formatTime = (seconds) => {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = Math.floor(seconds % 60);

    // Add leading zeros if necessary
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    remainingSeconds =
      remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

    return minutes + ":" + remainingSeconds;
  };

  const animate1 = () => {
    if (audioCtx == null) {
      const audioEl = document.createElement("audio");
      audioEl.crossOrigin = "anonymous";
      audioEl.id = "audio-el";
      audioEl.controls = true;
      audioEl.src = escogerCancion();
      document.body.appendChild(audioEl);
      audioEl.addEventListener("canplaythrough", () => {
        dispatch(establecerDuracion(audioEl.duration));
      });
      audioEl.play();

      audioRef.current = audioEl;

      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioCtx.createAnalyser();
      gainNode = audioCtx.createGain();
      analyser.fftSize = 2048;
      source = audioCtx.createMediaElementSource(audioEl);
      source.connect(analyser);
      analyser.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      bufferLength = analyser.frequencyBinCount;
      dataArray = new Uint8Array(bufferLength);
    }

    if (canvasCtx == null) {
      canvasCtx = canvasRef.current.getContext("2d");
    }

    analyser.getByteFrequencyData(dataArray);

    canvasCtx.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );

    var barWidth = (600 / bufferLength) * 22 - 1;
    var x = 0;

    for (var i = 0; i < bufferLength; i++) {
      const barHeight = dataArray[i];
      var color = "rgba(255, 255, 255, 0.4";
      canvasCtx.fillStyle = color;
      canvasCtx.fillRect(
        x,
        canvasRef.current.height - barHeight / 2,
        4,
        barHeight / 2
      );
      x += barWidth;
    }

    frame1.current = requestAnimationFrame(animate1);
  };

  useEffect(() => {
    if (audioS) {
      console.log("parar video");
      video?.current.pause();

      frame1.current = requestAnimationFrame(animate1);
    } else {
      cancelAnimationFrame(frame1.current);
    }

    return () => {
      cancelAnimationFrame(frame1.current);
    };
  }, [cancionActual]);

  useEffect(() => {
    if (duracion > 0 && audioRef.current) {
      const timer = setInterval(() => {
        setContadorReg(formatTime(duracion - audioRef.current.currentTime));

        if (popup) {
          const percentage = (audioRef.current.currentTime * 100) / duracion;
          const leftPosPx =
            (progressBarRef.current.offsetWidth * percentage) / 100;
          progressLineRef.current.style.width = leftPosPx + "px";
        }
      }, 200);

      return () => clearInterval(timer);
    }
  }, [audioRef.current?.currentTime]);

  const playAudio = () => {
    dispatch(pararAudios());
    dispatch(establecerDuracion(0));
    setContadorReg(0);

    console.log("poner video");
    video?.current.play();

    if (cancionActual == id) {
      dispatch(cambiarCancion(null));
    } else {
      dispatch(cambiarCancion(id));
    }
  };

  const handleOnClose = () => {
    audioRef.current = null;
    dispatch(pararAudios());
  };

  const handleBarraOnClick = (e) => {
    const posLeft = e.target.getBoundingClientRect().x;
    const width = e.target.getBoundingClientRect().width;
    let percentage = ((e.pageX - posLeft) * 100) / width;

    if (percentage < 1) {
      percentage = 0;
    }

    const finalPos = (percentage * duracion) / 100;
    audioRef.current.currentTime = finalPos;
  };

  const pintarMiniPlayer = () => {
    return (
      <div className={audioS ? "mini-player mostrar" : "mini-player esconder"}>
        <div className="mini-player-contenedor">
          <div className="mini-player-salida">
            <h3>{titulo}</h3>
            <img onClick={handleOnClose} src={salida} alt="salida" />
          </div>
          <div className="canvas-audio-container">
            <canvas ref={canvasRef}></canvas>
            <div>
              <span>{contadorReg}</span>
            </div>
          </div>
          <div className="mini-player-pregress-container">
            <div
              onClick={handleBarraOnClick}
              className="mini-player-pregress-bar"
            ></div>
            <div
              ref={progressBarRef}
              className="mini-player-pregress-bar-total"
            >
              <div
                ref={progressLineRef}
                className="mini-player-pregress-line"
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="audio-contenedor">
      <div className="audio-contenedor-interior">
        <div className="audio-contenedor-interior-icono">
          <img
            src={audioS ? audioOnImg : audioImg}
            onClick={() => {
              playAudio();
            }}
          ></img>
        </div>
        <div className="audio-contenedor-interior-info">
          <h3>{titulo}</h3>
          {subTitulo != "" && <p>{subTitulo}</p>}
        </div>
      </div>
      {autor != "" && <h4>{autor}</h4>}
      {popup && pintarMiniPlayer()}
      {!popup && (
        <div
          className={
            audioS
              ? "canvas-audio-container mostrar"
              : "canvas-audio-container esconder"
          }
        >
          <canvas ref={canvasRef}></canvas>
          <div>
            <span>{contadorReg}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Audio;
