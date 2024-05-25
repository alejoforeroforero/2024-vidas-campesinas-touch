import Audio from "../../../components/Audio";
import abajo from "../../../assets/generales/abajo.png";

import "./EstigmaF3.css";

const EstigmaF3 = () => {
  return (
    <>
      <div className="estigma-f3"></div>
      <div className="mask-general">
        <div className="contenido-general">
          <div className="estigma-f3-interior">
            <div className="estigma-f3-audio-contenedor">
              <Audio
                id="estigma-etnografia"
                titulo="En comunión con la hoja de coca"
                subTitulo="• Etnografía sonora •"
                autor=""
                popup={true}
              />
            </div>
            <p className="estigma-f3-p">
              En este fragmento de la etnografía sonora “Aquí me amaño, gracias
              a Dios”, Luis Hernando Perdomo nos comparte su visión sobre la
              coca y el conocimiento de los pueblos indígenas sobre esta planta.
            </p>
            <div className="canal-b-abajo">
              <img src={abajo} alt="abajo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EstigmaF3;
