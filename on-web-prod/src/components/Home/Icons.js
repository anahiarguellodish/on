import React from 'react';

import rench from '../../media/rench.png';
import plug from '../../media/plug.png';
import houses from '../../media/houses.png';
import router from '../../media/router.png';
import logo from '../../media/dishon_logo_white_circle.png';

const styles = { marginTop: '-30px' }

const styles1 = { paddingBottom: '10px' }


class Icons extends React.Component
{
    render()
    {
        const colClasses = "col py-0 px-1";
        const imgClasses = "d-block mx-auto";
        return (
            <div id="icons" className="container-fluid triangle-after">
                <div className="row justify-content-center">
                    <div className={colClasses}>
                        <img src={rench} className={imgClasses} alt="rench"/>
                        <h6 className="text-center pt-3 text-light">Sin instalación*</h6>
                    </div>
                    <div className={colClasses}>
                        <img src={plug} className={imgClasses} alt="plug"/>
                        <h6 className="text-center pt-3 text-light">Conéctalo y navega de inmediato*</h6>
                    </div>
                    <div className={colClasses}>
                        <img src={houses} className={imgClasses} alt="houses"/>
                        <h6 className="text-center pt-3 text-light">Amplia cobertura</h6>
                    </div>
                    <div className={colClasses}>
                        <img src={router} className={imgClasses} alt="router"/>
                        <h6 className="text-center pt-3 text-light">Paquetes y ofertas justo a tu medida</h6>
                    </div>
                    <div className={colClasses}>
                        <img src={logo} className={imgClasses} alt="ponte on logo"/>
                        <h6 className="text-center pt-3 text-light">Conexión veloz y confiable</h6>
                    </div>
                </div>
                 <div style={styles1}><h6 className="text-center pt-3 text-light" style={styles}>*Disponibles en ON Inalámbrico.</h6></div>
            </div>

        );
    }
}

export default Icons;
