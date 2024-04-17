import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/generales/logo-accionar.png';
import logo2 from '../../assets/generales/logo-culturas.png';
import logo3 from '../../assets/generales/logo-icanh.png';
import logo4 from '../../assets/generales/logo.png';
import './Creditos.css';

const Creditos = ({ handleShowingMenu }) => {

    const [showCreditos, setShowCreditos] = useState(false);

    return (
        <div className='creditos'>

            <div className='creditos-btn'>
                <button><NavLink onClick={() => handleShowingMenu()} to='/menu'>Home</NavLink></button>
            </div>
            <div className='creditos-btn'>
                <button onClick={() => setShowCreditos(!showCreditos)}>Vidas Campesinas</button>
            </div>
            {showCreditos &&

                <div className='creditos-interior'>
                    <div className='creditos-interior-contenido'>
                        <p>
                            Campesinos y campesinas se nombran por los distintos rincones y centros del país. Han puesto su atención sobre su vínculo directo con la tierra y la naturaleza, llamando la atención sobre sus formas de vivir mientras se hacen familia y comunidad, mientras estudian, trabajan e inventan opciones de vida.
                        </p>
                        <p>
                            Las vidas campesinas se desenvuelven en páramos y costas, valles y montañas, en la vera de los ríos, ciénagas y selvas. Se han ido haciendo a lo largo de la historia moviéndose de un lado a otro, permaneciendo en otros momentos, mientras vuelven la tierra finca y hacen del playón un lugar de pastoreo, un punto de pesca.

                        </p>
                        <p>
                            Las vidas campesinas habitan las veredas, los corregimientos, los pueblos, las ciudades. Están en los caminos, transitan corredores para llevar de un lado al otro lo que producen, y tejen compadrazgos entre calendarios festivos y visitas.

                        </p>
                        <p>
                            Las vidas campesinas son interculturales y resultan de procesos continuos de poblamiento, donde confluyen las trayectorias indígenas, con las de comunidades negras, con las de gentes que han hecho de los lugares su hogar.
                        </p>
                        <p>
                            Las campesinas y los campesinos cultivan, crían especies menores, ven por sus animales, pescan, recolectan frutos y moluscos, tejen, hacen canastos y bultos de distintas fibras, también trabajan en el turismo comunitario y transforman en pequeña escala algunos alimentos. Participan de los mercados y van por temporadas a las ciudades a vender sus productos, a ofrecer servicios.
                        </p>
                        <p>
                            Campesinos y campesinas se han organizado de muchas maneras, en juntas de acción comunal, en asociaciones y cooperativas, siendo partes activas de la vida política de la nación.
                        </p>

                        <div className='creditos-logos'>
                            <img src={logo2} alt="logo" />
                            <img src={logo4} alt="logo" />
                            <img src={logo} alt="logo" />
                            <img src={logo3} alt="logo" />

                        </div>
                    </div>

                </div>
            }
        </div>
    )
}

export default Creditos