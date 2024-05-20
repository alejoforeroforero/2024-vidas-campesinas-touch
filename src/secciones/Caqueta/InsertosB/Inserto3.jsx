import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import useDelta from "../../../hooks/useDelta";
import Audio from "../../../components/Audio";
import logo from "../../../assets/caqueta/insertos/logo-inserto.png";

import "./Inserto.css";

const Inserto3 = () => {
  const dispatch = useDispatch();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta(
    "caleno-youtube-2",
    "caqueta-intro",
    elementRef
  );

  useEffect(() => {
    dispatch(pararAudios());
  }, []);

  return (
    <div
      ref={elementRef}
      className="seccion insertoB3"
      onTouchEnd={handleTouchEnd}
      onTouchStart={handleTouchStart}
    >
      <div className="mask-general">
        <div className="contenido-general">
          <div className="insertoB-logo">
            <img src={logo} alt="" />
          </div>
          <div className="insertoB-audio">
            <Audio
              id="inserto3-audio"
              titulo="“Para que pueda ocurrir
              la restauración, la ciudad tiene que sanar con el campo. Estamos conectados””"
              autor="· Alejandra Benavides García"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inserto3;
