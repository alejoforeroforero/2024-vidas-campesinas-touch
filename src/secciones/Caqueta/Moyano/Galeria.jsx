import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { establecerPersonaje, pararAudios } from '../../../Redux/states/managerSlice';
import useDelta from '../../../hooks/useDelta';
const img1 = 'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230383/assets/guaviare/dayana/foto1_j9ij9d.jpg';
const img2 = 'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230387/assets/guaviare/dayana/foto2_n4kwob.jpg';
const img3 = 'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230386/assets/guaviare/dayana/foto3_ylqnko.jpg';
const img4 = 'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230389/assets/guaviare/dayana/foto4_qy9c3q.jpg';
import flechaAdelante from '../../../assets/generales/flecha-adelante.png';
import flechaAtras from '../../../assets/generales/flecha-atras.png';

import './Galeria.css'

const Galeria = () => {

  const dispatch = useDispatch();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('dayana-youtube-2', 'william-bio', elementRef);

  const images = [img1, img2, img3, img4];

  const [currentImage, setCurrentImage] = useState(0);
  const [booleanImg, setBooleanImg] = useState(false);

  useEffect(()=>{
    dispatch(establecerPersonaje('linea-dayana'));
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