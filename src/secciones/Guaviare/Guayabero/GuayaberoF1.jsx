import garzaImg from '../../../assets/guaviare/guayabero/garza.png';
import ramaImg from '../../../assets/guaviare/guayabero/rama.png';
import pezImg from '../../../assets/guaviare/guayabero/pez.png';
import './GuayaberoF1.css';


const GuayaberoF1 = () => {

    return (
        <div className='guayabero-f1'>
            <div className='guayabero-f1-fondo'></div>
            <div className='mask-general'>
                <div className='contenido-general'>
                    <div className='guayabero-f1-top'>
                        <img src={garzaImg} alt="Garza" />
                        <img src={ramaImg} alt="Rama" />
                    </div>
                    <div className='guayabero-f1-titulo'>
                        <h2>El río Guayabero</h2>
                        <hr />
                    </div>
                    <div className='guayabero-f1-bottom'>
                        <img className='pez' src={pezImg} alt='pez' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GuayaberoF1