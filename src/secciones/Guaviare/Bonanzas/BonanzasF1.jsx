import { useDispatch } from 'react-redux';
import { establecerMostrarAbajo } from '../../../Redux/states/managerSlice';
import './BonanzasF1.css';
import hojaTop from '../../../assets/guaviare/bonanzas/hoja1.png';
import danta from '../../../assets/guaviare/bonanzas/jaguar2.png';
import hojaB from '../../../assets/guaviare/bonanzas/hoja2.png';
import { useEffect } from 'react';

const BonanzasF1 = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(establecerMostrarAbajo(false));
    }, [])

    return (
        <div className='bonanzas-f1'>
            <div className='bonanzas-f1-fondo'></div>
            <div className='mask-general'>                
                <div className='contenido-general'>
                    <div className='bonanzas-f1-top'>
                        <img src={hojaTop} alt="" />
                    </div>
                    <div className='bonanzas-f1-titulo'>
                        <h2>Entre bonanzas</h2>
                        <hr />
                    </div>
                    <div className='bonanzas-f1-bottom'>
                        <img className='danta' src={danta} alt='danta' />
                        <img className='hoja-b' src={hojaB} alt='danta' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BonanzasF1