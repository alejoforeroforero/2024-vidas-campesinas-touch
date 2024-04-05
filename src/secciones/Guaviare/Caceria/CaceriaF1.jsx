import { useDispatch } from 'react-redux';
import { establecerMostrarAbajo } from '../../../Redux/states/managerSlice';
import './CaceriaF1.css';
import hojaTop from '../../../assets/guaviare/caceria/hoja1.png';
import danta from '../../../assets/guaviare/caceria/jaguar2.png';
import hojaB from '../../../assets/guaviare/caceria/hoja2.png';
import { useEffect } from 'react';

const CaceriaF1 = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(establecerMostrarAbajo(false));
    }, [])

    return (
        <div className='caceria-f1'>
            <div className='caceria-f1-fondo'></div>
            <div className='mask-general'>                
                <div className='contenido-general'>
                    <div className='caceria-f1-top'>
                        <img src={hojaTop} alt="" />
                    </div>
                    <div className='caceria-f1-titulo'>
                        <h2>En los tiempos de la cacería</h2>
                        <hr />
                    </div>
                    <div className='caceria-f1-bottom'>
                        <img className='danta' src={danta} alt='danta' />
                        <img className='hoja-b' src={hojaB} alt='danta' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaceriaF1