import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { establecerPersonaje, pararAudios } from '../../../Redux/states/managerSlice';
import useDelta from '../../../hooks/useDelta';

const img1 = 'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230310/assets/guaviare/cierre/foto1_qpm0m3.jpg'
const img2 =  'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230315/assets/guaviare/cierre/foto2_imxole.jpg';
const img3 =  'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230315/assets/guaviare/cierre/foto3_cqbwk1.jpg';
const img4 =  'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230323/assets/guaviare/cierre/foto4_hrgryh.jpg';
const img5 =  'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230322/assets/guaviare/cierre/foto5_clwkt2.jpg';
const img6 =  'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230318/assets/guaviare/cierre/foto6_da5g0z.jpg';
const img7 =  'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230319/assets/guaviare/cierre/foto7_p5jqej.jpg';
const img8 =  'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230327/assets/guaviare/cierre/foto8_goibwe.jpg';
const img9 =  'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230325/assets/guaviare/cierre/foto9_p6wfoc.jpg';
const img10 =  'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230338/assets/guaviare/cierre/foto10_u6hcj4.jpg';
const img11 =  'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230335/assets/guaviare/cierre/foto11_kcnvg7.jpg';
const img12 =  'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230332/assets/guaviare/cierre/foto12_kbk8qs.jpg';
const img13 =  'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230334/assets/guaviare/cierre/foto13_jbcpa2.jpg';
const img14 =  'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230324/assets/guaviare/cierre/foto14_pl9fsr.jpg';
const img15 =  'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230327/assets/guaviare/cierre/foto15_hhrwob.jpg';
const img16 =  'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230330/assets/guaviare/cierre/foto16_lgfhvt.jpg';
const img17 =  'https://res.cloudinary.com/dbqfefibl/image/upload/v1713230330/assets/guaviare/cierre/foto17_fxlvxl.jpg';
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