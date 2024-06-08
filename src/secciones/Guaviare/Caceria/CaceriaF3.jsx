import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeVideo } from "../../../Redux/states/managerSlice";
import Audio from "../../../components/Audio";

import hojaImg from "../../../assets/guaviare/caceria/hoja-arte.png";
import jaguarImg from "../../../assets/guaviare/caceria/jaguar.png";
import abajo from "../../../assets/generales/abajo.png";

import "./CaceriaF3.css";

const CaceriaF3 = ({ sound, audioFx }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeVideo(null));
    const currentVolume = sound?.volume();

    if (currentVolume < 0.4) {
      const acciones = {
        tipo: "volumen",
        valor: 1,
      };
      audioFx(acciones);
    }
  }, []);

  const audioGeneralFx = (bajarVolumen) => {
    const acciones = {
      tipo: "volumen",
      valor: bajarVolumen ? 0 : 1,
    };

    audioFx(acciones);
  };

  return (
    <div className="caceria-f3">
      <div className="caceria-f3-fondo"></div>
      <div className="mask-general">
        <div className="contenido-general">
          <div className="caceria-f3-interior">
            <div className="caceria-f3-ilustraciones">
              <img src={jaguarImg} alt="jaguar" />
              <img src={hojaImg} alt="hoja" />
            </div>
            <div className="caceria-f3-audio-contenedor">
              <Audio
                id="arte-guaviare"
                titulo="La tecnología del jaguar"
                subTitulo="· Etnografía sonora ·"
                autor=""
                popup={true}
                audioGeneralFx={audioGeneralFx}
              />
            </div>
            <p className="caceria-f3-p">
              Cae la noche en Raudal del Guayabero, misteriosa, imponente, y con
              ella, sus peligros. No se vale tener miedo, el jaguar sabe
              rastrearlo con su tecnología infalible, posando su pata sobre las
              huellas del caminante. Seguir el paso con valentía es la única
              defensa. Ciertamente, después de la noche vendrá el día y con él
              la luz del sol que todo ilumina.
            </p>
            <div className="canal-b-abajo">
              <img src={abajo} alt="abajo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaceriaF3;
