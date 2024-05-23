import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cambiarSeccion } from "../../Redux/states/managerSlice";
import Cargando from "../../components/Cargando";

import IntroCaqueta from "./Intro/Intro";
import MoyanoBio from "./Moyano/Bio";
import MoyanoYoutube1 from "./Moyano/Youtube";
import MoyanoRelatos from "./Moyano/Relatos";
import MoyanoYoutube2 from "./Moyano/Youtube2";

import BetancourtBio from "./Betancourt/Bio";
import BetancourtYoutube1 from "./Betancourt/Youtube";
import BetancourtRelatos from "./Betancourt/Relatos";
import BetancourtYoutube2 from "./Betancourt/Youtube2";
import BetancourtYoutube3 from "./Betancourt/Youtube3";

import CalenoBio from "./Caleno/Bio";
import CalenoYoutube1 from "./Caleno/Youtube";
import CalenoRelatos from "./Caleno/Relatos";
import CalenoYoutube2 from "./Caleno/Youtube2";

import Inserto1 from "./Insertos/Inserto1";
import Inserto2 from "./Insertos/Inserto2";
import Inserto3 from "./Insertos/Inserto3";

import Galeria from "./Cierre/Galeria";
import CierreVideo from './Cierre/Relatos'

const lineas = [
  {
    id: "linea-moyano",
    titulo: "Familia Moyano",
    navegacion: "caqueta-moyano-navegacion",
  },
  {
    id: "linea-betancourt",
    titulo: "Familia Betancourt",
    navegacion: "caqueta-betancourt-navegacion",
  },
  {
    id: "linea-caleno",
    titulo: "Familia Caleno",
    navegacion: "caqueta-caleno-navegacion",
  },
  {
    id: "linea-cierre",
    titulo: "Caqueta Cierre",
    navegacion: "caqueta-cierre-navegacion",
  },
];

const Caqueta = () => {
  const seccion = useSelector((state) => state.managerReducer.seccion);
  const personaje = useSelector((state) => state.managerReducer.personaje);
  const descargando = useSelector((state) => state.managerReducer.descargando);
  const mostrarLineasA = useSelector(
    (state) => state.managerReducer.mostrarLineasA
  );

  const dispatch = useDispatch();

  const handleNavegacion = (id) => {
    if (id == "caqueta-moyano-navegacion") {
      dispatch(cambiarSeccion("moyano-bio"));
    } else if (id == "caqueta-betancourt-navegacion") {
      dispatch(cambiarSeccion("betancourt-bio"));
    }else if (id == "caqueta-caleno-navegacion") {
      dispatch(cambiarSeccion("caleno-bio"));
    }else if (id == "caqueta-cierre-navegacion") {
      dispatch(cambiarSeccion("caqueta-galeria"));
    }
  };

  useEffect(() => {
    dispatch(cambiarSeccion("caqueta-intro"));
  }, []);

  return (
    <div className="capitulo">
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
      {seccion == "caqueta-intro" && <IntroCaqueta />}
      {seccion == "moyano-bio" && <MoyanoBio />}
      {seccion == "moyano-youtube-1" && <MoyanoYoutube1 />}
      {seccion == "moyano-relatos" && <MoyanoRelatos />}
      {seccion == "moyano-youtube-2" && <MoyanoYoutube2 />}
      {seccion == "caqueta-inserto1" && <Inserto1 />}
      {seccion == "betancourt-bio" && <BetancourtBio />}
      {seccion == "betancourt-youtube-1" && <BetancourtYoutube1 />}
      {seccion == "betancourt-relatos" && <BetancourtRelatos />}
      {seccion == "betancourt-youtube-2" && <BetancourtYoutube2 />}
      {seccion == "betancourt-youtube-3" && <BetancourtYoutube3 />}
      {seccion == "caqueta-inserto2" && <Inserto2 />}
      {seccion == "caleno-bio" && <CalenoBio />}
      {seccion == "caleno-youtube-1" && <CalenoYoutube1 />}
      {seccion == "caleno-relatos" && <CalenoRelatos />}
      {seccion == "caleno-youtube-2" && <CalenoYoutube2 />}
      {seccion == "caqueta-inserto3" && <Inserto3 />}
      {seccion == "caqueta-galeria" && <Galeria />}
      {seccion == 'caqueta-cierre' && <CierreVideo />}
    </div>
  );
};

export default Caqueta;
