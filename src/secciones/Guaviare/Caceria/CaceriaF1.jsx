import { useDispatch } from "react-redux";
import { establecerMostrarAbajo } from "../../../Redux/states/managerSlice";
import "./CaceriaF1.css";
import hojaTop from "../../../assets/guaviare/caceria/hoja1.png";
import danta from "../../../assets/guaviare/caceria/jaguar2.png";
import hojaB from "../../../assets/guaviare/caceria/hoja2.png";
import { useEffect } from "react";

const CaceriaF1 = ({ sound, audioFx }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(establecerMostrarAbajo(false));
    const currentVolume = sound?.volume();

    if (currentVolume < 0.4) {
      const acciones = {
        tipo: "volumen",
        valor: 1,
      };
      audioFx(acciones);
    }
  }, []);

  return (
    <div className="caceria-f1">
      <div className="caceria-f1-fondo"></div>
      <div className="mask-general">
        <div className="contenido-general caceria-f1-contenedor">
          <div className="caceria-f1-top">
            <img src={hojaTop} alt="" />
          </div>
          <div className="caceria-f1-titulo">
            <h2>
              En los tiempos <br></br>de la cacería
            </h2>
            <hr />
          </div>
          <div className="caceria-f1-bottom">
            <img className="danta" src={danta} alt="danta" />
            <img className="hoja-b" src={hojaB} alt="danta" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaceriaF1;
