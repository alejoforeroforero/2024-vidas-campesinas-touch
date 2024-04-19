import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { establecerMostrarAbajo } from '../../../Redux/states/managerSlice';
import useDelta from '../../../hooks/useDelta';
import introImg from '../../../assets/generales/intro.png'
import { NavLink } from 'react-router-dom';

import './Menu.css';

const menu = [
  {
    id: 'h-m1',
    titulo: 'GUAVIARE',
    color: '#d05137',
    ir: '/guaviare'
  },
  {
    id: 'h-m2',
    titulo: 'CAQUETÁ',
    color: '#d7de51',
    ir: '/caqueta'
  },
  {
    id: 'h-m3',
    titulo: 'CAUCA',
    color: '#00a89d',
    ir: '/cauca'
  }
]

const Menu = ({ pintarIntro = true }) => {
  const dispatch = useDispatch();
  const elementRef = useRef();

  const { handleTouchStart, handleTouchEnd } = useDelta('home-intro', null, elementRef);

  useEffect(() => {
    dispatch(establecerMostrarAbajo(false));
  }, [])

  return (
    <div ref={elementRef} className='seccion homev2' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      {pintarIntro &&
        <div className="homev2-intro">
          <NavLink to='/'><img src={introImg} alt="" /> </NavLink>
        </div>
      }
      <div className="homev2-menu">
        {menu.map(item => {
          return (
            <div key={item.id}>
              <NavLink
                id={item.id}
                style={{ color: item.color }}
                to={item.ir}
              >{item.titulo}
              </NavLink>
            </div>
          )
        })}
      </div>
    </div>

  )
}

export default Menu