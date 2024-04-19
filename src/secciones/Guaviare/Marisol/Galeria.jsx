import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { establecerPersonaje, pararAudios } from '../../../Redux/states/managerSlice';
import useDelta from '../../../hooks/useDelta';
const img1 = 'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230363/assets/guaviare/marisol/foto1_euepkd.jpg';
const img2 = 'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230368/assets/guaviare/marisol/foto2_humocg.jpg';
const img3 = 'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230363/assets/guaviare/marisol/foto3_gz5rwr.jpg';
import flechaAdelante from '../../../assets/generales/flecha-adelante.png';
import flechaAtras from '../../../assets/generales/flecha-atras.png';

import './Galeria.css'

const Galeria = () => {

  const dispatch = useDispatch();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('marisol-youtube', 'elias-bio', elementRef);

  const images = [img1, img2, img3];

  const [currentImage, setCurrentImage] = useState(0);
  const [booleanImg, setBooleanImg] = useState(false);

  useEffect(() => {
    dispatch(establecerPersonaje('linea-marisol'));
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5800);
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
          <div className='galeria-marisol-frase'>
            <h3>“No todos los campesinos siembran comida. Yo soy campesina, pero en el momento no tenemos una tierra para cultivar”</h3>
          </div>

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