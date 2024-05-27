import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cambiarSeccion } from '../../Redux/states/managerSlice';
import HomeIntro from './Intro/Intro';
import HomeIntro2 from './Intro/Intro2';
import HomeIntro3 from './Intro/Intro3';
import HomeIntro4 from './Intro/Intro4';
import HomeIntro5 from './Intro/Intro5';
import HomeIntro6 from './Intro/Intro6';
import HomeMenu from './Menu/Menu';

const audioIntroGeneralFile = 'https://res.cloudinary.com/dumlhmvts/video/upload/v1716767086/home-general/musicas-campesinas-intro_k4rwme.mp3'


const Home = () => {

  const [audioIntroGeneral, setAudioIntroGeneral] = useState(null);

  const seccion = useSelector(state => state.managerReducer.seccion);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(cambiarSeccion('home-intro'));

    const sonido = new Howl({
      src: [audioIntroGeneralFile], // Replace with your audio source
    });
    setAudioIntroGeneral(sonido);

    return () => {
      sonido.unload(); 
    }
  }, []);

  useEffect(()=>{
    audioIntroGeneral?.play();

  }, [audioIntroGeneral])

  return (
    <div className='capitulo'>
      {seccion == 'home-intro' && <HomeIntro />}
      {seccion == 'home-intro2' && <HomeIntro2 />}
      {seccion == 'home-intro3' && <HomeIntro3 />}
      {seccion == 'home-intro4' && <HomeIntro4 />}
      {seccion == 'home-intro5' && <HomeIntro5 />}
      {seccion == 'home-intro6' && <HomeIntro6 />}
      {seccion == 'home-menu' && <HomeMenu pintarIntro={false} />}
    </div>
  )
}

export default Home