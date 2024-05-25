import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  pararAudios,
} from "../../../Redux/states/managerSlice";
import Audio from "../../../components/Audio";
import logo from "../../../assets/caqueta/insertos/logo-inserto.png";
import abajo from "../../../assets/generales/abajo.png";

import "./Inserto.css";

const Inserto1 = () => {
  const dispatch = useDispatch();
  const elementRef = useRef();

  useEffect(() => {
    dispatch(pararAudios());
  }, []);

  return (
    <div ref={elementRef} className="seccion insertoB1">
      <div className="mask-general">
        <div className="contenido-general">
          <div className="insertoB-interior">
            <div className="insertoB1-logo">
              <img src={logo} alt="" />
            </div>
            <div className="insertoB1-audio">
              <Audio
                id="insertoB-audio-1"
                titulo="“Para que una finca sea sostenible y permanezca en el tiempo es primordial conservar las fuentes hídricas”"
                autor="· Iván Vaquero"
              />
            </div>
            <div className="canal-b-abajo">
              <img src={abajo} alt="abajo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inserto1;
