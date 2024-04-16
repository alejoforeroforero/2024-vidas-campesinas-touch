import { useDispatch } from 'react-redux';
import { establecerMostrarAbajo } from '../../../Redux/states/managerSlice';
import './GuardianesF1.css';
import yurupari from '../../../assets/guaviare/guardianes/yurupari.png';
import { useEffect } from 'react';

const GuardianesF1 = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(establecerMostrarAbajo(false));
    }, [])

    return (
        <div className='guardianes-f1'>
            <div className='guardianes-f1-fondo'></div>
            <div className='mask-general'>                
                <div className='contenido-general'>                    
                    <div className='guardianes-f1-titulo'>
                        <h2>Somos Guardianes del Yuruparí</h2>
                        <hr />
                    </div>
                    <div className='guardianes-f1-bottom'>
                        <img className='guardianes-f1-yurupari' src={yurupari} alt='yurupari' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GuardianesF1