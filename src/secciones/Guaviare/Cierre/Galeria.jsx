import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { establecerPersonaje, pararAudios } from '../../../Redux/states/managerSlice';
import useDelta from '../../../hooks/useDelta';
import img1 from '../../../assets/guaviare/cierre/foto1.jpg';
import img2 from '../../../assets/guaviare/cierre/foto2.jpg';
import img3 from '../../../assets/guaviare/cierre/foto3.jpg';
import img4 from '../../../assets/guaviare/cierre/foto4.jpg';
import img5 from '../../../assets/guaviare/cierre/foto5.jpg';
import img6 from '../../../assets/guaviare/cierre/foto6.jpg';
import img7 from '../../../assets/guaviare/cierre/foto7.jpg';
import img8 from '../../../assets/guaviare/cierre/foto8.jpg';
import img9 from '../../../assets/guaviare/cierre/foto9.jpg';
import img10 from '../../../assets/guaviare/cierre/foto10.jpg';
import img11 from '../../../assets/guaviare/cierre/foto11.jpg';
import img12 from '../../../assets/guaviare/cierre/foto12.jpg';
import img13 from '../../../assets/guaviare/cierre/foto13.jpg';
import img14 from '../../../assets/guaviare/cierre/foto14.jpg';
import img15 from '../../../assets/guaviare/cierre/foto15.jpg';
import img16 from '../../../assets/guaviare/cierre/foto16.jpg';
import img17 from '../../../assets/guaviare/cierre/foto17.jpg';
import flechaAdelante from '../../../assets/generales/flecha-adelante.png';
import flechaAtras from '../../../assets/generales/flecha-atras.png';

import './Galeria.css'

const Galeria = () => {

  const dispatch = useDispatch();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('rodriguez-youtube-2', 'cierre-video', elementRef);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17];

  const [currentImage, setCurrentImage] = useState(0);
  const [booleanImg, setBooleanImg] = useState(false);

  useEffect(()=>{
    dispatch(establecerPersonaje('linea-cierre'));
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