import React from 'react';

import TocPage from './generic/TocPage';
import getLegalLinks from './Legal/getLegalLinks';



const MinRights = props =>
{
    return (
        <div id='additional-costs' className='container p-4'>
            <TocPage history={props.history} links={getLegalLinks()}>
                <h4> Adicionales </h4>


                  <table className="table table-striped table-bordered">
                     <thead className='thead-dark'>
                        <tr>
                            <th className=' text-light text-uppercase text-center p-4'  colSpan={2}>ON INTERNET</th>
                        </tr>
                        <tr>
                            <th className=' text-light text-uppercase text-center p-4' colSpan={2}>ON Internet Inalámbrico Planes Postpago</th>
                        </tr>
                    </thead>
                     <tbody>
                        <tr className='thead-dark'>
                             <th className='td-title' colSpan={2}>CARGOS DE COBRANZA ON</th>
                        </tr>
                        <tr>
                            <td>Cargo por suspensión-reconexión</td>
                            <td>$50</td>
                        </tr>

                         <tr className='thead-dark'>
                             <th className='td-title' colSpan={2}>Cargos de cobranza On Internet + TV DISH</th>
                        </tr>
                        
                        <tr>
                            <td>Cargo por pago tardío</td>
                            <td>$39</td>
                        </tr>

                        <tr>
                            <td>Cargo por suspensión-reconexión</td>
                            <td>$56</td>
                        </tr>

                         <tr className='thead-dark'>
                             <th className='td-title' colSpan={2}>Cargos por servicio técnico</th>
                        </tr>

                        <tr>
                            <td>Segundo cambio de domicilio en adelante</td>
                            <td>$100</td>
                        </tr>

                        <tr>
                            <td>Visita en falso por servicio técnico solicitado </td>
                            <td>$100</td>
                        </tr>

                        <tr>
                            <td>Visita servicio técnico fuera de garantía </td>
                            <td>$100</td>
                        </tr>

                        <tr>
                            <td>*Visita para reposición de equipo terminal (Módem) por robo </td>
                            <td>$100</td>
                        </tr>

                        <tr className='thead-dark'>
                             <th className='td-title' colSpan={2}>Cargo de componentes por pérdida, daño y/o reparación (Fuera de garantía)</th>
                        </tr>

                         <tr>
                            <td>Equipo terminal (Modém) por pérdida / maltrato / falla </td>
                            <td>$2,230</td>
                        </tr>

                        <tr>
                            <td>Reposición de eliminador de corriente eléctrica por pérdida / maltrato / falla</td>
                            <td>$100</td>
                        </tr>
                       
                       

                    </tbody>
                </table>

                 <p>*Se requiere comprobante de denuncia correspondiente ante Ministerío Público.</p>


                   <table className="table table-striped table-bordered">
                     <thead className='thead-dark'>
                        <tr>
                            <th className='text-light text-uppercase text-center p-4'  colSpan={2}>ON INTERNET</th>
                        </tr>
                        <tr>
                            <th className='text-light text-uppercase text-center p-4' colSpan={2}>ON Internet Inalámbrico Recargas Prepago</th>
                        </tr>
                    </thead>
                     <tbody>
                      

                         <tr className='thead-dark'>
                             <th className='td-title' colSpan={2}>CARGOS CON SOPORTE TÉCNICO</th>
                        </tr>

                        <tr>
                            <td>Segundo cambio de domicilio en adelante</td>
                            <td>$100</td>
                        </tr>

                        <tr>
                            <td>Visita en falso por servicio técnico solicitado </td>
                            <td>$100</td>
                        </tr>

                        <tr>
                            <td>Visita servicio técnico fuera de garantía </td>
                            <td>$100</td>
                        </tr>

                        <tr>
                            <td>*Visita para reposición de equipo terminal (Módem) por robo </td>
                            <td>$100</td>
                        </tr>

                         <tr className='thead-dark'>
                             <th className='td-title' colSpan={2}>CARGOS DE COMPONENTES POR PÉRDIDA, DAÑO Y/O REPARACIÓN (FUERA DE GARANTÍA)</th>
                        </tr>

                         <tr>
                            <td>Equipo terminal (Modém) por pérdida / maltrato / falla </td>
                            <td>$2,230</td>
                        </tr>

                        <tr>
                            <td>Reposición de eliminador de corriente eléctrica por pérdida / maltrato / falla</td>
                            <td>$100</td>
                        </tr>
                       
                       

                       

                        

                    </tbody>
                </table>


                 
                   <table className="table table-striped table-bordered">
                     <thead className='thead-dark'>
                     <tr>
                            <th className=' text-light text-uppercase text-center p-4'  colSpan={2}>ON INTERNET</th>
                        </tr>
                        <tr>
                            <th className=' text-light text-uppercase text-center p-4' colSpan={2}>ON Alámbrico / ON Alámbrico Internet + Telefonía Fija.</th>
                        </tr>
                    </thead>
                     <tbody>
                         <tr className='thead-dark'>
                             <th className='td-title' colSpan={2}>CARGOS DE COBRANZA ON</th>
                        </tr>
                        <tr>
                            <td>Cargo por suspensión-reconexión</td>
                            <td>$100</td>
                        </tr>

                         <tr className='thead-dark'>
                             <th className='td-title' colSpan={2}>Cargos de cobranza On Internet + TV DISH</th>
                        </tr>
                        
                        <tr>
                            <td>Cargo por pago tardío</td>
                            <td>$39</td>
                        </tr>

                        <tr>
                            <td>Cargo por suspensión-reconexión</td>
                            <td>$100</td>
                        </tr>

                         <tr className='thead-dark'>
                             <th className='td-title' colSpan={2}>Cargos por servicio técnico</th>
                        </tr>

                        <tr>
                            <td>Cambio de domicilio (Gastos de reinstalación)</td>
                            <td>$600</td>
                        </tr>

                        <tr className='thead-dark'>
                             <th className='td-title' colSpan={2}>Cargo de componentes por pérdida, daño y/o reparación </th>
                        </tr>

                         <tr>
                            <td>Cambio de modém por pérdida o daño </td>
                            <td>$1,922</td>
                        </tr>

                    </tbody>
                </table>

                     <table className="table table-striped table-bordered">
                     <thead className='thead-dark'>
                        <tr>
                            <th className=' text-light text-uppercase text-center p-4'  colSpan={2}>ON INTERNET</th>
                        </tr>
                        <tr>
                            <th className=' text-light text-uppercase text-center p-4' colSpan={2}>ON SATELITAL</th>
                        </tr>
                    </thead>
                     <tbody>
                        <tr className='thead-dark'>
                             <th className='td-title' colSpan={2}>CARGOS DE COBRANZA ON</th>
                        </tr>
                        <tr>
                            <td>Cargo por suspensión-reconexión</td>
                            <td>$50</td>
                        </tr>

                         <tr className='thead-dark'>
                             <th className='td-title' colSpan={2}>Cargos de cobranza On Internet + TV DISH</th>
                        </tr>
                        
                        <tr>
                            <td>Cargo por pago tardío</td>
                            <td>$39</td>
                        </tr>

                        <tr>
                            <td>Cargo por suspensión-reconexión</td>
                            <td>$56</td>
                        </tr>

                         <tr className='thead-dark'>
                             <th className='td-title' colSpan={2}>Cargos por servicio técnico</th>
                        </tr>

                        <tr>
                            <td>Costo de visita por servicio técnico</td>
                            <td>$405</td>
                        </tr>

                        <tr>
                            <td>Costo por distancia y acceso: km recorrido a partir de la base de Dish al domicilio </td>
                            <td>$4</td>
                        </tr>

                        <tr>
                            <td>Cambio de lugar de módem</td>
                            <td>$324</td>
                        </tr>

                        <tr>
                            <td>Cambio de lugar de antena</td>
                            <td>$324</td>
                        </tr>

                        <tr>
                            <td>Reinstalación y/o reorientación de antena</td>
                            <td>$325</td>
                        </tr>

                        <tr>
                            <td>Reinstalación de sistema</td>
                            <td>$613</td>
                        </tr>
                        <tr>
                            <td>Cambio de domicilio</td>
                            <td>$317</td>
                        </tr>

                        <tr>
                            <td>*Reposición equipo terminal por robo</td>
                            <td>$357</td>
                        </tr>
                        <tr>
                            <td>Cambio de cableado (30m )</td>
                            <td>$338</td>
                        </tr>

                        <tr className='thead-dark'>
                             <th className='td-title' colSpan={2}>Cargo de componentes por pérdida, daño y/o reparación (Fuera de garantía)</th>
                        </tr>

                         <tr>
                            <td>Módem satelital</td>
                            <td>$5,085</td>
                        </tr>
                        <tr>
                            <td>Antena</td>
                            <td>$2,065</td>
                        </tr>
                        <tr>
                            <td>LNB/Transceiver</td>
                            <td>$1,600</td>
                        </tr>

                        <tr>
                            <td>Cableado por servicio técnico (hasta 30 metros)</td>
                            <td>$270</td>
                        </tr>
                         <tr>
                            <td>Metro adicional de cable</td>
                            <td>$18</td>
                        </tr>
                        <tr>
                            <td>Router Wifi</td>
                            <td>$400</td>
                        </tr>
                        <tr>
                            <td>Base antena</td>
                            <td>$350</td>
                        </tr>
                        

                    </tbody>
                </table>

                  <p>*Se requiere comprobante de denuncia correspondiente ante Ministerío Público.</p>


                 
            </TocPage>
        </div>
    );
}

export default MinRights;
