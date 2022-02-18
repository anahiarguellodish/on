    import React from 'react';
import TocPage from './generic/TocPage';
import getLegalLinks from './Legal/getLegalLinks';

import m302936 from '../media/ift/InternetATF/FormatoSimplificado_302936.pdf';
import m302939 from '../media/ift/InternetATF/FormatoSimplificado_302939.pdf';
import m302946 from '../media/ift/InternetATF/FormatoSimplificado_302946.pdf';
import m314635 from '../media/ift/InternetATF/FormatoSimplificado_314635.pdf';
import m302948 from '../media/ift/InternetATF/FormatoSimplificado_302948.pdf';
import m302958 from '../media/ift/InternetATF/FormatoSimplificado_302958.pdf';
import m302960 from '../media/ift/InternetATF/FormatoSimplificado_302960.pdf';
import m314639 from '../media/ift/InternetATF/FormatoSimplificado_314639.pdf';


import m305582 from '../media/ift/InternetAlTFF/FormatoSimplificado_305582.pdf';
import m305587 from '../media/ift/InternetAlTFF/FormatoSimplificado_305587.pdf';
import m305588 from '../media/ift/InternetAlTFF/FormatoSimplificado_305588.pdf';
import m316295 from '../media/ift/InternetAlTFF/FormatoSimplificado_316295.pdf';
import m305589 from '../media/ift/InternetAlTFF/FormatoSimplificado_305589.pdf';
import m305592 from '../media/ift/InternetAlTFF/FormatoSimplificado_305592.pdf';
import m305594 from '../media/ift/InternetAlTFF/FormatoSimplificado_305594.pdf';
import m316307 from '../media/ift/InternetAlTFF/FormatoSimplificado_316307.pdf';




const Rates = props =>
{
    return (
        <div id='rates' className='container p-4'>
            <TocPage history={props.history} links={getLegalLinks()}>
                <h4 className='mb-4'>REGISTRO DE TARIFAS ANTE IFT</h4>

                  <table className='table table-striped table-bordered'>
                    <thead className='thead-dark'>

                         <tr className='thead-dark'>
                             <th className='td-title' colspan="2">ON ALÁMBRICO INTERNET + TELEFONÍA FIJA</th>
                        </tr>
                        <tr>
                            <th>NOMBRE</th>
                            <th>TARIFA</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr>
                            <td>Paquete 1 ON Internet Alámbrico + TF 389</td>
                            <td><a href={m302936} target='_blank' rel='noopener noreferrer'>302936</a></td>
                        </tr>
                        <tr>
                            <td>Paquete 2 ON Internet Alámbrico + TF 435</td>
                            <td><a href={m302939} target='_blank' rel='noopener noreferrer'>302939</a></td>
                        </tr>
                        <tr>
                            <td>Paquete 3 ON Internet Alámbrico + TF 499</td>
                            <td><a href={m302946} target='_blank' rel='noopener noreferrer'>302946</a></td>
                        </tr>
                        <tr>
                            <td>Paquete 5 ON Internet Alámbrico + TF 599</td>
                            <td><a href={m314635} target='_blank' rel='noopener noreferrer'>314635</a></td>
                        </tr>
                        <tr>
                            <td>Paquete 4 ON Internet Alámbrico + TF 999</td>
                            <td><a href={m302948} target='_blank' rel='noopener noreferrer'>302948</a></td>
                        </tr>
                        <tr>
                            <td>Promoción para paquetes superiores Paquete 435</td>
                            <td><a href={m302958} target='_blank' rel='noopener noreferrer'>302958</a></td>
                        </tr>
                        <tr>
                            <td>Promoción para paquetes superiores Paquete 499</td>
                            <td><a href={m302960} target='_blank' rel='noopener noreferrer'>302960</a></td>
                        </tr>
                        <tr>
                            <td>Promoción para paquetes superiores Paquete 599</td>
                            <td><a href={m314639} target='_blank' rel='noopener noreferrer'>314639</a></td>
                        </tr>
                       
                       
                    </tbody>
                </table>


              

                  <table className='table table-striped table-bordered'>
                    <thead className='thead-dark'>

                         <tr className='thead-dark'>
                             <th className='td-title' colspan="2">ON ALÁMBRICO INTERNET + TELEFONÍA FIJA IVA FRONTERIZO</th>
                        </tr>
                        <tr>
                            <th>NOMBRE</th>
                            <th>TARIFA</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr>
                            <td>Paquete 1 ON Internet Alámbrico + TF 389</td>
                            <td><a href={m305582} target='_blank' rel='noopener noreferrer'>305582</a></td>
                        </tr>
                        <tr>
                            <td>Paquete 2 ON Internet Alámbrico + TF 435</td>
                            <td><a href={m305587} target='_blank' rel='noopener noreferrer'>305587</a></td>
                        </tr>
                        <tr>
                            <td>Paquete 3 ON Internet Alámbrico + TF 499</td>
                            <td><a href={m305588} target='_blank' rel='noopener noreferrer'>305588</a></td>
                        </tr>
                        <tr>
                            <td>Paquete 5 ON Internet Alámbrico + TF 599</td>
                            <td><a href={m316295} target='_blank' rel='noopener noreferrer'>316295</a></td>
                        </tr>
                        <tr>
                            <td>Paquete 4 ON Internet Alámbrico + TF 999</td>
                            <td><a href={m305589} target='_blank' rel='noopener noreferrer'>305589</a></td>
                        </tr>
                        <tr>
                            <td>Promoción para paquetes superiores Paquete 435</td>
                            <td><a href={m305592} target='_blank' rel='noopener noreferrer'>305592</a></td>
                        </tr>
                        <tr>
                            <td>Promoción para paquetes superiores Paquete 499</td>
                            <td><a href={m305594} target='_blank' rel='noopener noreferrer'>305594</a></td>
                        </tr>
                        <tr>
                            <td>Promoción para paquetes superiores Paquete 599</td>
                            <td><a href={m316307} target='_blank' rel='noopener noreferrer'>316307</a></td>
                        </tr>
                       
                       
                    </tbody>
                </table>


                <p>Las tarifas ante señaladas pueden consultarse en el Registro Público de Concesiones, publicado en la página electrónica del Instituto Federal de Telecomunicaciones</p>



            </TocPage>
        </div>
    );
}

export default Rates;
