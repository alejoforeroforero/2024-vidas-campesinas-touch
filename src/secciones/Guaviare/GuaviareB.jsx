import React, { useEffect, useRef, useState } from 'react';
import Caceria from './Caceria/Caceria'
import Guayabero from './Guayabero/Guayabero'
import './GuaviareB.css'

const GuaviareB = () => {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {

      if (targetRef.current) {
        const { top, bottom } = targetRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight / 2 && bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    divRef.current.addEventListener('scroll', handleScroll);
    return () => divRef.current.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={divRef} className='guaviare-b'>
      <div>
        <Caceria />
      </div>
      <div ref={targetRef}>
        <p>{isVisible ? 'Visible' : 'Not visible'}</p>
        <Guayabero />
      </div>
    </div>
  )
}

export default GuaviareB