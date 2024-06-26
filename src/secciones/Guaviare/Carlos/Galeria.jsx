import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  establecerPersonaje,
  pararAudios,
} from "../../../Redux/states/managerSlice";
import useDelta from "../../../hooks/useDelta";
const img1 =
  "https://res.cloudinary.com/dbqfefibl/image/upload/v1713230291/assets/guaviare/carlos/foto1_les8iu.jpg";
const img2 =
  "https://res.cloudinary.com/dbqfefibl/image/upload/v1713230298/assets/guaviare/carlos/foto2_pxvum2.jpg";
const img3 =
  "https://res.cloudinary.com/dbqfefibl/image/upload/v1713230292/assets/guaviare/carlos/foto3_qbqap1.jpg";
const img4 =
  "https://res.cloudinary.com/dbqfefibl/image/upload/v1713230299/assets/guaviare/carlos/foto4_iqw8ze.jpg";
const img5 =
  "https://res.cloudinary.com/dbqfefibl/image/upload/v1713230299/assets/guaviare/carlos/foto5_sdtawm.jpg";

// import img1 from '../../../assets/guaviare/carlos/foto1.jpg';
// import img2 from '../../../assets/guaviare/carlos/foto2.jpg';
// import img3 from '../../../assets/guaviare/carlos/foto3.jpg';
// import img4 from '../../../assets/guaviare/carlos/foto4.jpg';
// import img5 from '../../../assets/guaviare/carlos/foto5.jpg';
import flechaAdelante from "../../../assets/generales/flecha-adelante.png";
import flechaAtras from "../../../assets/generales/flecha-atras.png";

import "./Galeria.css";

const Galeria = ({ sound, audioFx }) => {
  const dispatch = useDispatch();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta(
    "carlos-relatos",
    "dayana-bio",
    elementRef
  );

  const images = [img1, img2, img3, img4, img5];

  const [currentImage, setCurrentImage] = useState(0);
  const [booleanImg, setBooleanImg] = useState(false);

  useEffect(() => {
    dispatch(establecerPersonaje("linea-carlos"));
    const currentVolume = sound?.volume();

    if (currentVolume < 0.4) {
      const acciones = {
        tipo: "volumen",
        valor: 1,
      };
      audioFx(acciones);
    }
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
