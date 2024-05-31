import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  establecerPersonaje,
  establecerMostrarLineasA,
  establecerMostrarFlechasCanales,
  pararAudios,
} from "../../../Redux/states/managerSlice";
import useDelta from "../../../hooks/useDelta";

const img1 =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1717162605/cauca/cierre/1._Paisaje-Sua%CC%81rez_j1db6w.jpg";
const img2 =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1717162605/cauca/cierre/2_Mati%CC%81as-Ararat_felu2r.jpg";
const img3 =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1717162606/cauca/cierre/3_Mujer-sonriente-cultivo_ntdiw3.jpg";
const img4 =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1717162606/cauca/cierre/4_Hombres-en-cultivo_nw6vwj.jpg";
const img5 =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1717162607/cauca/cierre/5_Mayor-nasa-Otoniel-Pavi_plccvo.jpg";
const img6 =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1717162607/cauca/cierre/6_Guardia-camp-y-cima_zicdtl.jpg";
const img7 =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1717162606/cauca/cierre/7_Mujer-en-cafetal_swneus.jpg";
const img8 =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1717162609/cauca/cierre/8_Mujer-Guardia-Campesina_dsucup.jpg";
const img9 =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1717162609/cauca/cierre/9_Omaira-en-fogo%CC%81n_bhhwua.jpg";
const img10 =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1717162610/cauca/cierre/10_Mujer-cimarrona_xeawsn.jpg";
const img11 =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1717162609/cauca/cierre/11_Familia-Alegri%CC%81a_nix4eb.jpg";
const img12 =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1717162608/cauca/cierre/12_Grupo-Grima_mnzqjq.jpg";

import logoCierre from "../../../assets/cauca/cierre/bastonesX3.png";
import flechaAdelante from "../../../assets/generales/flecha-adelante.png";
import flechaAtras from "../../../assets/generales/flecha-atras.png";

import "./Galeria.css";

const Galeria = ({sound}) => {
  const dispatch = useDispatch();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta(
    "hermandad-youtube-2",
    "cauca-cierre",
    elementRef
  );

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

  const [currentImage, setCurrentImage] = useState(0);
  const [booleanImg, setBooleanImg] = useState(false);

  useEffect(() => {
    dispatch(establecerPersonaje("linea-galeria"));
    dispatch(establecerMostrarLineasA(true));
    dispatch(establecerMostrarFlechasCanales(true));

    sound?.play();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5800);
    return () => clearInterval(interval);
  }, [currentImage]);

  const prevImage = () => {
    setBooleanImg(!booleanImg);
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setBooleanImg(!booleanImg);
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handleOnClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div
      ref={elementRef}
      className="carousel-general"
      onTouchEnd={handleTouchEnd}
      onTouchStart={handleTouchStart}
    >
      <div className="cauca-galeria-logo">
        <img src={logoCierre} alt="" />
      </div>
      <div className="container">
        <div className="image-container">
          {booleanImg && (
            <img className="image-s" src={images[currentImage]} alt="images" />
          )}
          {!booleanImg && (
            <img className="image-n" src={images[currentImage]} alt="images" />
          )}
        </div>

        <div className="carousel-botones">
          <div>
            <button onClick={prevImage}>
              <img src={flechaAtras} alt="flecha"></img>
            </button>
            <button onClick={nextImage}>
              <img src={flechaAdelante} alt="flecha"></img>
            </button>
          </div>
        </div>

        <div className="carousel-navegacion">
          {images.map((img, index) => {
            return (
              <div
                onClick={() => {
                  handleOnClick(index);
                }}
                key={index}
                className={index == currentImage ? "galerias-s" : "galerias-n"}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Galeria;
