import { useDispatch } from 'react-redux';
import { establecerMostrarAbajo } from '../../../Redux/states/managerSlice';
import './PazF1.css';
import mariposa from '../../../assets/guaviare/paz/mariposa.png';
import ave1 from '../../../assets/guaviare/paz/ave-1.png';
import { useEffect } from 'react';

const PazF1 = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(establecerMostrarAbajo(false));
    }, [])

    return (
        <div className='paz-f1'>
            <div className='paz-f1-fondo'></div>
            <div className='mask-general'>                
                <div className='contenido-general'>
                    <div className='paz-f1-top'>
                        <img src={mariposa} alt="" />
                    </div>
                    <div className='paz-f1-titulo'>
                        <h2> Después del Acuerdo de Paz</h2>
                        <hr />
                    </div>
                    <div className='paz-f1-bottom'>
                        <img className='ave1' src={ave1} alt='ave1' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PazF1