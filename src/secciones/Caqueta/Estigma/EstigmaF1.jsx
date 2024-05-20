import { useDispatch } from 'react-redux';
import { establecerMostrarAbajo } from '../../../Redux/states/managerSlice';
import './EstigmaF1.css';
import maiz from '../../../assets/caqueta/estigma/hoja-coca-1.png';
// import danta from '../../../assets/guaviare/estigma/jaguar2.png';
// import hojaB from '../../../assets/guaviare/estigma/hoja2.png';
import { useEffect } from 'react';

const EstigmaF1 = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(establecerMostrarAbajo(false));
    }, [])

    return (
        <div className='estigma-f1'>
            <div className='estigma-f1-fondo'></div>
            <div className='mask-general'>                
                <div className='contenido-general estigma-f1-contenedor'>
                    <div className='estigma-f1-titulo'>
                        <h2>El estigma <br></br>de la coca</h2>
                        <hr />
                    </div>
                    <div className='estigma-f1-bottom'>
                        <img className='estigma-f1-grafica' src={maiz} alt='danta' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EstigmaF1