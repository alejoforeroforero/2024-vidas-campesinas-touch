import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cambiarSeccion } from "../../Redux/states/managerSlice";
import Cargando from "../../components/Cargando";

import IntroCauca from "./Intro/Intro";
import GuardiaBio from "./Guardia/Bio";
import GuardiaRelatos1 from "./Guardia/Relatos";
import GuardiaYoutube1 from "./Guardia/Youtube";
import GuardiaRelatos2 from "./Guardia/Relatos2";
import GuardiaYoutube2 from "./Guardia/Youtube2";
import GuardiaRelatos3 from "./Guardia/Relatos3";

import CampesinaBio from "./Campesina/Bio";
import CampesinaRelatos1 from "./Campesina/Relatos";
import CampesinaYoutube1 from "./Campesina/Youtube";
import CampesinaRelatos2 from "./Campesina/Relatos2";
import CampesinaYoutube2 from "./Campesina/Youtube2";

import CimarronaBio from "./Cimarrona/Bio";
import CimarronaRelatos1 from "./Cimarrona/Relatos";
import CimarronaRelatos2 from "./Cimarrona/Relatos2";
import CimarronaYoutube1 from "./Cimarrona/Youtube";
import CimarronaRelatos3 from "./Cimarrona/Relatos3";

const lineas = [
  {
    id: "linea-guardia",
    titulo: "Guardia Indigena",
    navegacion: "cauca-guardia-navegacion",
  },
  {
    id: "linea-campesina",
    titulo: "Guardia Campesina",
    navegacion: "cauca-campesina-navegacion",
  },
  {
    id: "linea-cimarrona",
    titulo: "Guardia Cimarrona",
    navegacion: "cauca-cimarrona-navegacion",
  },
];

const Cauca = () => {
  const seccion = useSelector((state) => state.managerReducer.seccion);
  const personaje = useSelector((state) => state.managerReducer.personaje);
  const descargando = useSelector((state) => state.managerReducer.descargando);
  const mostrarLineasA = useSelector(
    (state) => state.managerReducer.mostrarLineasA
  );

  const dispatch = useDispatch();

  const handleNavegacion = (id) => {
    if (id == "cauca-guardia-navegacion") {
      dispatch(cambiarSeccion("cauca-guardia-bio"));
    } else if (id == "cauca-campesina-navegacion") {
      dispatch(cambiarSeccion("campesina-bio"));
    } else if (id == "cauca-cimarrona-navegacion") {
      dispatch(cambiarSeccion("cimarrona-bio"));
    }
  };

  useEffect(() => {
    //dispatch(cambiarSeccion("cauca-intro"));
    dispatch(cambiarSeccion("campesina-youtube-2"));
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
      {seccion == "cauca-intro" && <IntroCauca />}
      {seccion == "cauca-guardia-bio" && <GuardiaBio />}
      {seccion == "guardia-relatos-1" && <GuardiaRelatos1 />}
      {seccion == "guardia-youtube-1" && <GuardiaYoutube1 />}
      {seccion == "guardia-relatos-2" && <GuardiaRelatos2 />}
      {seccion == "guardia-youtube-2" && <GuardiaYoutube2 />}
      {seccion == "guardia-relatos-3" && <GuardiaRelatos3 />}
      {seccion == "campesina-bio" && <CampesinaBio />}
      {seccion == "campesina-relatos-1" && <CampesinaRelatos1 />}
      {seccion == "campesina-youtube-1" && <CampesinaYoutube1 />}
      {seccion == "campesina-relatos-2" && <CampesinaRelatos2 />}
      {seccion == "campesina-youtube-2" && <CampesinaYoutube2 />}
      {seccion == "cimarrona-bio" && <CimarronaBio />}
      {seccion == "cimarrona-relatos-1" && <CimarronaRelatos1 />}
      {seccion == "cimarrona-relatos-2" && <CimarronaRelatos2 />}
      {seccion == "cimarrona-youtube-1" && <CimarronaYoutube1 />}
      {seccion == "cimarrona-relatos-3" && <CimarronaRelatos3 />}
    </div>
  );
};

export default Cauca;
