import React from 'react';
import TocPage from './generic/TocPage';
import getLegalLinks from './Legal/getLegalLinks';

import Formato_344762 from '../media/img_on_amazon/FormatoSimplificado_344762.pdf';
import Formato_344763 from '../media/img_on_amazon/FormatoSimplificado_344763.pdf';
import Formato_344764 from '../media/img_on_amazon/FormatoSimplificado_344764.pdf';

const Rates = props =>
{
    return (
        <div id='rates' className='container p-4'>
            <TocPage history={props.history} links={getLegalLinks()}>
                <h4 className='mb-4'>REGISTRO DE TARIFAS ANTE IFT</h4>

                <table className='table table-striped table-bordered'>
                    <thead className='thead-dark'>

                         <tr className='thead-dark'>
                             <th className='td-title' colspan="2">ON INALÁMBRICO</th>
                        </tr>
                        <tr className='thead-dark'>
                             <th className='td-title' colspan="2">ON INTERNET + AMAZON PRIME</th>
                        </tr>

                        <tr>
                            <th>NOMBRE</th>
                            <th>TARIFA</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr>
                            <td>Paquete ON Inalámbrico Internet 5 con servicio prestado por terceros</td>
                            <td><a href={Formato_344762} target='_blank'>344762</a></td>
                        </tr>
                        <tr>
                            <td>Paquete ON Inalámbrico Internet 10 con servicio prestado por terceros</td>
                            <td><a href={Formato_344763} target='_blank'>344763</a></td>
                        </tr>
                        <tr>
                            <td>Paquete ON Inalámbrico Internet 10 con servicio prestado por terceros</td>
                            <td><a href={Formato_344764} target='_blank'>344764</a></td>
                        </tr>
                        
                    </tbody>
                </table>




                <p>Las tarifas ante señaladas pueden consultarse en el Registro Público de Concesiones, publicado en la página electrónica del Instituto Federal de Telecomunicaciones</p>
            </TocPage>
        </div>
    );
}

export default Rates;
