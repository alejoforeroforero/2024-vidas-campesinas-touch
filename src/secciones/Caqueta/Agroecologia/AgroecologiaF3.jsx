import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { establecerMostrarAbajo } from "../../../Redux/states/managerSlice";
import Audio from "../../../components/Audio";
import grafica from "../../../assets/caqueta/agroecologia/cacao.png";

import "./AgroecologiaF3.css";

const AgroecologiaF3 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(establecerMostrarAbajo(false));
  }, []);

  return (
    <>
      <div className="agroecologia-f3"></div>
      <div className="mask-general">
        <div className="contenido-general">
          <div className="agroecologia-f3-interior">
            <div className="agroecologia-f3-audio-contenedor1">
              <Audio
                id="audio-agroecologia-1"
                titulo="“Somos una superfamilia porque todos trabajamos en la finca, apuntándole al mismo campo”."
                autor="- Yolanda Triana"
              />
            </div>
            <div className="agroecologia-f3-ilustraciones">
              <img className="agroecologia-f3-grafica" src={grafica} alt="grafica" />
            </div>
            <div className="agroecologia-f3-audio-contenedor2">
              <Audio
                id="audio-agroecologia-2"
                titulo="“En la finca tenemos diferentes unidades productivas que son microempresas”."
                autor="- Iván Vaquero"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgroecologiaF3;
