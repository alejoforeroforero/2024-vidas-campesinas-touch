import { useDispatch } from 'react-redux';
import { establecerMostrarAbajo } from '../../../Redux/states/managerSlice';
import './AgroecologiaF1.css';
import maiz from '../../../assets/caqueta/agroecologia/maiz.png';
import { useEffect } from 'react';

const AgroecologiaF1 = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(establecerMostrarAbajo(false));
    }, [])

    return (
        <div className='agroecologia-f1'>
            <div className='agroecologia-f1-fondo'></div>
            <div className='mask-general'>                
                <div className='contenido-general agroecologia-f1-contenedor'>
                    <div className='agroecologia-f1-titulo'>
                        <h2>Agroecología <br></br>productiva<br></br>y familiar</h2>
                        <hr />
                    </div>
                    <div className='agroecologia-f1-bottom'>
                        <img className='agroecologia-f1-maiz' src={maiz} alt='danta' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgroecologiaF1