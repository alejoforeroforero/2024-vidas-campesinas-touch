import { useDispatch } from 'react-redux';
import { establecerMostrarAbajo } from '../../../Redux/states/managerSlice';
import './BonanzasF1.css';
import planta from '../../../assets/guaviare/bonanzas/planta-coca.png';
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
                    <div className='bonanzas-f1-titulo'>
                        <h2>Entre bonanzas</h2>
                        <hr />
                    </div>
                    <div className='bonanzas-f1-bottom'>
                        <img className='bonanzas-f1-planta' src={planta} alt='danta' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BonanzasF1