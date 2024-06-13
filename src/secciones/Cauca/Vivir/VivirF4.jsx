import Audio from "../../../components/Audio";
import abajo from "../../../assets/generales/abajo.png";

import "./VivirF4.css";

const VivirF4 = () => {
  return (
    <>
      <div className="vivir-f4"></div>
      <div className="mask-general">
        <div className="contenido-general">
          <div className="vivir-f4-interior">
            <div className="vivir-f4-audio-contenedor">
              <Audio
                id="vivir-etnografia"
                titulo="Cultivo de alegría"
                subTitulo="• Etnografía sonora •"
                autor=""
                popup={true}
              />
            </div>
            <p className="vivir-f4-p">
            Fragmento de la etnografía sonora “Cultivo de alegría”. Entre risas y llamados, una polifonía de voces celebra el cuidado colectivo y la vida en comunidad.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VivirF4;
