import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { establecerPersonaje, establecerMostrarLineasA, establecerMostrarFlechasCanales, pararAudios } from '../../../Redux/states/managerSlice';
import useDelta from '../../../hooks/useDelta';

const img1 = 'https://res.cloudinary.com/dhz9jfn78/image/upload/v1716484587/caqueta/galeria/1._Galeria_ECLjpg_fgt1dl.jpg'
const img2 =  'https://res.cloudinary.com/dhz9jfn78/image/upload/v1716484588/caqueta/galeria/2._Galeria_ECL_mfqwix.jpg';
const img3 =  'https://res.cloudinary.com/dhz9jfn78/image/upload/v1716484588/caqueta/galeria/3._Galeria_ECL_ze2ftz.jpg';
const img4 =  'https://res.cloudinary.com/dhz9jfn78/image/upload/v1716484589/caqueta/galeria/4._Galeria_ECL_e9iiiq.jpg';
const img5 =  'https://res.cloudinary.com/dhz9jfn78/image/upload/v1716484590/caqueta/galeria/5._Galeria_ECL_h0r06e.jpg';
const img6 =  'https://res.cloudinary.com/dhz9jfn78/image/upload/v1716484591/caqueta/galeria/6._Galeria_ECL_f8cywa.jpg';
const img7 =  'https://res.cloudinary.com/dhz9jfn78/image/upload/v1716484591/caqueta/galeria/7._Galeria_ECL_ic9kvx.jpg';
const img8 =  'https://res.cloudinary.com/dhz9jfn78/image/upload/v1716484592/caqueta/galeria/8._Galeria_ECL_s6evhp.jpg';
const img9 =  'https://res.cloudinary.com/dhz9jfn78/image/upload/v1716484593/caqueta/galeria/9._Galeria_ECL_s8mgct.jpg';
const img10 =  'https://res.cloudinary.com/dhz9jfn78/image/upload/v1716484594/caqueta/galeria/10._Galeria_ECL_gdzmla.jpg';

import flechaAdelante from '../../../assets/generales/flecha-adelante.png';
import flechaAtras from '../../../assets/generales/flecha-atras.png';

import './Galeria.css'

const Galeria = () => {

  const dispatch = useDispatch();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('caqueta-inserto3', 'caqueta-cierre', elementRef);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  const [currentImage, setCurrentImage] = useState(0);
  const [booleanImg, setBooleanImg] = useState(false);

  useEffect(()=>{
    dispatch(establecerPersonaje('linea-cierre'));
    dispatch(establecerMostrarLineasA(true));
    dispatch(establecerMostrarFlechasCanales(true));
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    },5800);
    return () => clearInterval(interval);
  }, [currentImage])

  const prevImage = () => {
    setBooleanImg(!booleanImg)
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setBooleanImg(!booleanImg)
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handleOnClick = (index) => {
    setCurrentImage(index);
  }

  return (

    <div ref={elementRef} className="carousel-general" onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      <div className="container">
        <div className="image-container">
          {booleanImg && <img className='image-s' src={images[currentImage]} alt='images' />}
          {!booleanImg && <img className='image-n' src={images[currentImage]} alt='images' />}
        </div>
        <div className='carousel-botones'>
          <div>
            <button onClick={prevImage}>
              <img src={flechaAtras} alt='flecha'></img>
            </button>
            <button onClick={nextImage}>
              <img src={flechaAdelante} alt='flecha'></img>
            </button>
          </div>
        </div>

        <div className='carousel-navegacion'>
          {images.map((img, index) => {
            return (
              <div
                onClick={() => { handleOnClick(index) }}
                key={index}
                className={(index == currentImage) ? 'galerias-s' : 'galerias-n'}
              >
              </div>
            )
          })}
        </div>
      </div>
    </div>

  )
}

export default Galeria