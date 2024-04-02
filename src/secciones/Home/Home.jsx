import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cambiarSeccion } from '../../Redux/states/managerSlice';
import HomeIntro from './Intro/Intro';
import HomeMenu from './Menu/Menu';

const Home = () => {
  const seccion = useSelector(state => state.managerReducer.seccion);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(cambiarSeccion('home-intro'));
  }, []);

  return (
    <div className='capitulo'>
      {seccion == 'home-intro' && <HomeIntro />}
      {seccion == 'home-menu' && <HomeMenu />}
    </div>
  )
}

export default Home