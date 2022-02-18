import React from 'react';
import TocPage from './generic/TocPage';
import getLegalLinks from './Legal/getLegalLinks';

import Formato_344762 from '../media/img_on_amazon/FormatoSimplificado_344762.pdf';
import Formato_344763 from '../media/img_on_amazon/FormatoSimplificado_344763.pdf';
import Formato_344764 from '../media/img_on_amazon/FormatoSimplificado_344764.pdf';
import Formato_436794 from '../media/img_on_amazon/FormatoSimplificado_436794.pdf';
import Formato_407487 from '../media/img_on_amazon/FormatoSimplificado_407487.pdf';
import Formato_407492 from '../media/img_on_amazon/FormatoSimplificado_407492.pdf';
import Formato_436795 from '../media/img_on_amazon/FormatoSimplificado_436795.pdf';
import Formato_436763 from '../media/img_on_amazon/FormatoSimplificado_436763.pdf';
import Formato_433844 from '../media/img_on_amazon/FormatoSimplificado_433844.pdf';
import Formato_436764 from '../media/img_on_amazon/FormatoSimplificado_436764.pdf';
import Formato_436765 from '../media/img_on_amazon/FormatoSimplificado_436765.pdf';
import Formato_433914 from '../media/img_on_amazon/FormatoSimplificado_433914.pdf';
import Formato_436766 from '../media/img_on_amazon/FormatoSimplificado_436766.pdf';
import Formato_433947 from '../media/img_on_amazon/FormatoSimplificado_433947.pdf';
import Formato_436767 from '../media/img_on_amazon/FormatoSimplificado_436767.pdf';
import Formato_436768 from '../media/img_on_amazon/FormatoSimplificado_436768.pdf';
import Formato_433962 from '../media/img_on_amazon/FormatoSimplificado_433962.pdf';


const Rates = props =>
{
    return (
        <div id='rates' className='container p-4'>
            <TocPage history={props.history} links={getLegalLinks()}>
                <h4 className='mb-4'>REGISTRO DE TARIFAS ANTE IFT</h4>

                <table className='table table-striped table-bordered'>
                    <thead className='thead-dark'>

                         <tr className='thead-dark'>
                             <th className='td-title' colspan="2">ON INALÁMBRICO PLANES POSTPAGO</th>
                        </tr>
                        <tr className='thead-dark'>
                             <th className='td-title' colspan="2">Disponibles para venta nueva</th>
                        </tr>

                        <tr>
                            <th>NOMBRE</th>
                            <th>TARIFA</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr>
                            <td>ON Inalámbrico Internet 5 con renta de equipo</td>
                            <td><a href={Formato_436794} target='_blank' rel='noopener noreferrer'>436794</a></td>
                        </tr>
                        <tr>
                            <td>ON Inalámbrico Internet 10 con 120 GB con renta de equipo</td>
                            <td><a href={Formato_436763} target='_blank' rel='noopener noreferrer'>436763</a></td>
                        </tr>
                        <tr>
                            <td>ON Inalámbrico Internet 10 con 200 GB</td>
                            <td><a href={Formato_436764} target='_blank' rel='noopener noreferrer'>436764</a></td>
                        </tr>
                        <tr>
                            <td>ON Inalámbrico Internet 20 con renta de equipo</td>
                            <td><a href={Formato_436765} target='_blank' rel='noopener noreferrer'>436765</a></td>
                        </tr>
               
                        <tr>
                            <td className='td-title' colSpan='2'>Paquetes GB adicionales que aplican para todos los paquetes</td>
                        </tr>
                        <tr>
                            <td>Paquete adicional 5 GB Inalámbrico</td>
                            <td><a href='https://tarifas.ift.org.mx/ift_visor/assets/ratefiles/157323024420385gb.pdf' target='_blank' rel='noopener noreferrer'>254776</a></td>
                        </tr> 
                        
                    </tbody>
                </table>

              {/*  <table className='table table-striped table-bordered'>
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
                            <td>Paquete ON Inalámbrico Internet 10 con 120 GB con servicio prestado por terceros</td>
                            <td><a href={Formato_344763} target='_blank'></a></td>
                        </tr>
                        <tr>
                            <td>Paquete ON Inalámbrico Internet 10 con 200 GB con servicio prestado por terceros</td>
                            <td><a href={Formato_344764} target='_blank'></a></td>
                        </tr>
                        <tr>
                            <td>Paquete ON Inalámbrico Internet 20 con servicio prestado por terceros</td>
                            <td><a href={Formato_344764} target='_blank'></a></td>
                        </tr>
                        
                    </tbody>
                   </table>*/}


                



                   <table className='table table-striped table-bordered'>
                    <thead className='thead-dark'>

                         <tr className='thead-dark'>
                             <th className='td-title' colspan="2">ON INALÁMBRICO PLANES POSTPAGO FRANJA FRONTERIZA</th>
                        </tr>


                        <tr>
                            <th>NOMBRE</th>
                            <th>TARIFA</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr>
                            <td>ON Inalámbrico Internet 5 con renta de equipo</td>
                            <td><a href={Formato_436795} target='_blank' rel='noopener noreferrer'>436795</a></td>
                        </tr>
                        <tr>
                            <td>ON Inalámbrico Internet 10 con 120 GB con renta de equipo</td>
                            <td><a href={Formato_436766} target='_blank' rel='noopener noreferrer'>436766</a></td>
                        </tr>
                        <tr>
                            <td>ON Inalámbrico Internet 10 con 200 GB </td>
                            <td><a href={Formato_436767} target='_blank' rel='noopener noreferrer'>436767</a></td>
                        </tr>
                        <tr>
                            <td>ON Inalámbrico Internet 20 con renta de equipo</td>
                            <td><a href={Formato_436768} target='_blank' rel='noopener noreferrer'>436768</a></td>
                        </tr>
                       
                        <tr>
                            <td className='td-title' colSpan='2'>Paquetes GB adicionales que aplican para todos los paquetes</td>
                        </tr>
                        <tr>
                            <td>Paquete adicional 5 GB Inalámbrico</td>
                            <td><a href='https://tarifas.ift.org.mx/ift_visor/assets/ratefiles/15868235699810paqueteadicional.pdf' target='_blank' rel='noopener noreferrer'>298600</a></td>
                        </tr>
                        
                       
                      
                    </tbody>
                </table>






                   <table className='table table-striped table-bordered'>
                    <thead className='thead-dark'>

                         <tr className='thead-dark'>
                             <th className='td-title' colspan="2">NO disponibles para venta nueva </th>
                        </tr>
                          <tr className='thead-dark'>
                             <th className='td-title' colspan="2">ON INALÁMBRICO PLANES POSTPAGO  </th>
                        </tr>
                        <tr>
                            <th>NOMBRE</th>
                            <th>TARIFA</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr>
                            <td>ON Inalámbrico Internet 5 sin renta de equipo</td>
                            <td><a href={Formato_407487} target='_blank' rel='noopener noreferrer'>407487</a></td>
                        </tr>
                        <tr>
                            <td>ON Inalámbrico Internet 10 sin renta de equipo</td>
                            <td><a href={Formato_433844} target='_blank' rel='noopener noreferrer'>433844</a></td>
                        </tr>
                        <tr>
                            <td>ON Inalámbrico Internet 20 sin renta de equipo</td>
                            <td><a href={Formato_433914} target='_blank' rel='noopener noreferrer'>433914</a></td>
                        </tr>
                       
                    </tbody>
                </table>


                     <table className='table table-striped table-bordered'>
                    <thead className='thead-dark'>

                         <tr className='thead-dark'>
                             <th className='td-title' colspan="2">NO disponibles para venta nueva </th>
                        </tr>
                          <tr className='thead-dark'>
                             <th className='td-title' colspan="2">ON INALÁMBRICO PLANES POSTPAGO FRANJA FRONTERIZA </th>
                        </tr>
                        <tr>
                            <th>NOMBRE</th>
                            <th>TARIFA</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr>
                            <td>ON Inalámbrico Internet 5 sin renta de equipo</td>
                            <td><a href={Formato_407492} target='_blank' rel='noopener noreferrer'>407492</a></td>
                        </tr>
                        <tr>
                            <td>ON Inalámbrico Internet 10 sin renta de equipo</td>
                            <td><a href={Formato_433947} target='_blank' rel='noopener noreferrer'>433947</a></td>
                        </tr>
                        <tr>
                            <td>ON Inalámbrico Internet 20 sin renta de equipo</td>
                            <td><a href={Formato_433962} target='_blank' rel='noopener noreferrer'>433962</a></td>
                        </tr>
                       
                    </tbody>
                </table>




                <p>Las tarifas ante señaladas pueden consultarse en el Registro Público de Concesiones, publicado en la página electrónica del Instituto Federal de Telecomunicaciones</p>
            </TocPage>
        </div>
    );
}

export default Rates;
