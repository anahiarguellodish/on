import React from 'react';
import TocPage from './generic/TocPage';
import getLegalLinks from './Legal/getLegalLinks';

import m306099 from '../media/ift/InternetSat/FormatoSimplificado_306099.pdf';
import m306103 from '../media/ift/InternetSat/FormatoSimplificado_306103.pdf';
import m306350 from '../media/ift/InternetSat/FormatoSimplificado_306350.pdf';
import m306355 from '../media/ift/InternetSat/FormatoSimplificado_306355.pdf';
import m306359 from '../media/ift/InternetSat/FormatoSimplificado_306359.pdf';
import m306144 from '../media/ift/InternetSat/FormatoSimplificado_306144.pdf';
import m306361 from '../media/ift/InternetSat/FormatoSimplificado_306361.pdf';
import m306153 from '../media/ift/InternetSat/FormatoSimplificado_306153.pdf';

import m306225 from '../media/ift/InternetSatF/FormatoSimplificado_306225.pdf';
import m306227 from '../media/ift/InternetSatF/FormatoSimplificado_306227.pdf';
import m306230 from '../media/ift/InternetSatF/FormatoSimplificado_306230.pdf';
import m306233 from '../media/ift/InternetSatF/FormatoSimplificado_306233.pdf';
import m306234 from '../media/ift/InternetSatF/FormatoSimplificado_306234.pdf';
import m306235 from '../media/ift/InternetSatF/FormatoSimplificado_306235.pdf';
import m306237 from '../media/ift/InternetSatF/FormatoSimplificado_306237.pdf';
import m306238 from '../media/ift/InternetSatF/FormatoSimplificado_306238.pdf';

const Rates = props => {
    return (
        <div id='rates' className='container p-4'>
            <TocPage history={props.history} links={getLegalLinks()}>
                <h4 className='mb-4'>REGISTRO DE TARIFAS ANTE IFT</h4>





                <table className='table table-striped table-bordered'>
                    <thead className='thead-dark'>

                    </thead>
                    <tbody>
                        <tr className='thead-dark'>
                            <th className='td-title' colspan="2">ON SATELITAL</th>
                        </tr>
                        <tr className='thead-dark'>
                            <th>NOMBRE</th>
                            <th>TARIFA</th>
                        </tr>

                        <tr><td>ON Satelital internet 3 con 5 GB </td>
                            <td><a href={m306099} target='_blank' rel='noopener noreferrer'>306099</a></td>
                        </tr>
                        <tr><td>ON Satelital internet 5 con 15 GB</td>
                            <td><a href={m306103} target='_blank' rel='noopener noreferrer'>306103</a></td>
                        </tr>
                        <tr><td>ON Satelital internet 10 con 20 GB   </td>
                            <td><a href={m306350} target='_blank' rel='noopener noreferrer'>306350</a></td>
                        </tr>
                        <tr><td>ON Satelital internet 10 con 40 GB   </td>
                            <td><a href={m306355} target='_blank' rel='noopener noreferrer'>306355</a></td>
                        </tr>
                        <tr><td>ON Satelital internet 20 con 60 GB   </td>
                            <td><a href={m306359} target='_blank' rel='noopener noreferrer'>306359</a></td>
                        </tr>
                        <tr><td>ON Satelital internet 30 con 100 GB  </td>
                            <td><a href={m306144} target='_blank' rel='noopener noreferrer'>306144</a></td>
                        </tr>
                        <tr><td>ON Satelital internet 30 con 150 GB </td>
                            <td><a href={m306361} target='_blank' rel='noopener noreferrer'>306361</a></td>
                        </tr>
                        <tr><td>ON Satelital internet 25 con 20 GB   </td>
                            <td><a href={m306153} target='_blank' rel='noopener noreferrer'>306153</a></td>
                        </tr>

                        <th className='td-title' colspan="2">Paquetes GB adicionales que aplican para todos los paquetes</th>

                        <tr><td>Paquete adicional 1 GB </td>
                            <td><a href="https://tarifas.ift.org.mx/ift_visor/" target='_blank' rel='noopener noreferrer'>359574</a></td>
                        </tr>
                        <tr><td>Paquete adicional 3 GB</td>
                            <td><a href="https://tarifas.ift.org.mx/ift_visor/" target='_blank' rel='noopener noreferrer'>359578</a></td>
                        </tr>
                        <tr><td>Paquete adicional 5 GB   </td>
                            <td><a href="https://tarifas.ift.org.mx/ift_visor/" target='_blank' rel='noopener noreferrer'>359582</a></td>
                        </tr>
                        <tr><td>Paquete adicional 10 GB   </td>
                            <td><a href="https://tarifas.ift.org.mx/ift_visor/" target='_blank' rel='noopener noreferrer'>359583</a></td>
                        </tr>

                    </tbody>
                </table>





                <table className='table table-striped table-bordered'>
                    <thead className='thead-dark'>

                    </thead>
                    <tbody>

                        <tr className='thead-dark'>
                            <th className='td-title' colspan="2">ON SATELITAL FRANJA FRONTERIZA</th>
                        </tr>
                        <tr className='thead-dark'>
                            <th>NOMBRE</th>
                            <th>TARIFA</th>
                        </tr>
                        <tr><td>ON Satelital internet 3 con 5 GB </td>
                            <td><a href={m306225} target='_blank' rel='noopener noreferrer'>306225</a></td>
                        </tr>
                        <tr><td>ON Satelital internet 5 con 15 GB</td>
                            <td><a href={m306227} target='_blank' rel='noopener noreferrer'>306227</a></td>
                        </tr>
                        <tr><td>ON Satelital internet 10 con 20 GB   </td>
                            <td><a href={m306230} target='_blank' rel='noopener noreferrer'>306230</a></td>
                        </tr>
                        <tr><td>ON Satelital internet 10 con 40 GB   </td>
                            <td><a href={m306233} target='_blank' rel='noopener noreferrer'>306233</a></td>
                        </tr>
                        <tr><td>ON Satelital internet 20 con 60 GB   </td>
                            <td><a href={m306234} target='_blank' rel='noopener noreferrer'>306234</a></td>
                        </tr>
                        <tr><td>ON Satelital internet 30 con 100 GB  </td>
                            <td><a href={m306235} target='_blank' rel='noopener noreferrer'>306235</a></td>
                        </tr>
                        <tr><td>ON Satelital internet 30 con 150 GB </td>
                            <td><a href={m306237} target='_blank' rel='noopener noreferrer'>306237</a></td>
                        </tr>
                        <tr><td>ON Satelital internet 25 con 20 GB   </td>
                            <td><a href={m306238} target='_blank' rel='noopener noreferrer'>306238</a></td>
                        </tr>

                        <th className='td-title' colspan="2">Paquetes GB adicionales que aplican para todos los paquetes</th>

                        <tr><td>Paquete adicional 1 GB </td>
                            <td><a href="https://tarifas.ift.org.mx/ift_visor/" target='_blank' rel='noopener noreferrer'>359587</a></td>
                        </tr>
                        <tr><td>Paquete adicional 3 GB</td>
                            <td><a href="https://tarifas.ift.org.mx/ift_visor/" target='_blank' rel='noopener noreferrer'>359590</a></td>
                        </tr>
                        <tr><td>Paquete adicional 5 GB   </td>
                            <td><a href="https://tarifas.ift.org.mx/ift_visor/" target='_blank' rel='noopener noreferrer'>359596</a></td>
                        </tr>
                        <tr><td>Paquete adicional 10 GB   </td>
                            <td><a href="https://tarifas.ift.org.mx/ift_visor/" target='_blank' rel='noopener noreferrer'>359603</a></td>
                        </tr>

                    </tbody>
                </table>



            </TocPage>
        </div>
    );
}

export default Rates;
