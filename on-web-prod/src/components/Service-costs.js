 import React from 'react';
import TocPage from './generic/TocPage';
import getLegalLinks from './Legal/getLegalLinks';

const Service_costs = props =>
{
    return (
        <div id='service_costs' className='container p-4'>
            <TocPage history={props.history} links={getLegalLinks()}>
                <h4 className='mb-4'>ON INALÁMBRICO</h4>

                 <table className="table table-striped table-bordered">
                     <thead className="thead-dark"> 
                     <tr>
                            <th className=' text-light text-uppercase text-center p-4'  colSpan={3}>GASTOS DE ACTIVACIÓN $799</th>
                     </tr>
                        <tr>
                            <th className=' text-light text-uppercase text-center p-4'>VELOCIDAD</th>
                            <th className=' text-light text-uppercase text-center p-4'>CAPACIDAD</th>
                            <th className=' text-light text-uppercase text-center p-4'>MENSUALIDAD</th>
                        </tr>
                    </thead>
                     <tbody>
                        <tr>
                            <td>Internet 5</td>
                            <td>80 GB</td>
                            <td>$249</td>
                        </tr>
                        <tr>
                            <td>Internet 10</td>
                            <td>120 GB</td>
                            <td>$399</td>
                        </tr>
                        <tr>
                            <td>Internet 20</td>
                            <td>180 GB</td>
                            <td>$649</td>
                        </tr>

                    </tbody>
                </table>

                

                 <table className="table table-striped table-bordered">
                     <thead className="thead-dark">
                     <tr>
                            <th className=' text-light text-uppercase text-center p-4'  colSpan={2}>Paquetes GB adicionales</th>
                     </tr>
                        <tr>
                            <th className=' text-light text-uppercase text-center p-4'>CAPACIDAD</th>
                            <th className=' text-light text-uppercase text-center p-4'>PRECIO CON IVA</th>
                        </tr>
                    </thead>
                     <tbody>
                        <tr>
                            <td>5 GB</td>
                            <td>$40</td>
                        </tr>
                    </tbody>
                </table>

                <table className="table table-striped table-bordered">
                     <thead className="thead-dark">
                     <tr>
                            <th className=' text-light text-uppercase text-center p-4'  colSpan={2}>ON INTERNET + AMAZON PRIME	
</th>
                     </tr>
                        <tr>
                            <th className=' text-light text-uppercase text-center p-4'>PAQUETE</th>
                            <th className=' text-light text-uppercase text-center p-4'>PRECIO CON IVA</th>
                        </tr>
                    </thead>
                     <tbody>
                        <tr>
                            <td>Paquete ON Inalámbrico Internet 5 con servicio prestado por terceros</td>
                            <td>$319</td>
                        </tr>
                        <tr>
                            <td>Paquete ON Inalámbrico Internet 10 con servicio prestado por terceros</td>
                            <td>$475</td>
                        </tr>
                        <tr>
                            <td>Paquete ON Inalámbrico Internet 20 con servicio prestado por terceros</td>
                            <td>$715</td>
                        </tr>
                    </tbody>
                </table>

                      

   
                      <table className='table table-striped table-bordered'>
                             <thead className='thead-dark'>
                                  <tr>
                                     <th colspan={3}>RECARGAS PREPAGO</th>
                                 </tr>
                                
                             </thead>
                             <tbody>
                                 <tr>
                                     <td>Recarga semanal</td>
                                     <td> Internet 5 / 20 GB / 7 días</td>
                                     <td> $89</td>
                                 </tr>
                                 <tr>
                                     <td>Recarga mensual</td>
                                     <td> Internet 5 / 80 GB / 30 días</td>
                                     <td> $299</td>
                                 </tr>
                                 <tr>
                                     <td> Recarga mensual</td>
                                     <td> Internet 10 / 120 GB / 30 días</td>
                                     <td> $399</td>
                                 </tr>
                                 
                             </tbody>
                         </table>
         
         
         
                          <table className='table table-striped table-bordered'>
                             <thead className='thead-dark'>
                                  <tr>
                                     <th colspan={3}>GASTOS DE ACTIVACIÓN</th>
                                 </tr>
                                
                             </thead>
                             <tbody>
                                 <tr>
                                     <td>Gastos de activación</td>
                                     <td> Incluyen recarga semanal de Internet 5 /20 GB</td>
                                     <td> $1,089</td>
                                 </tr>
                                 <tr>
                                     <td>Gastos de activación</td>
                                     <td> Incluyen recarga mensual de Internet 5 /80 GB</td>
                                     <td> $1,299</td>
                                 </tr>
                                 <tr>
                                     <td> Gastos de activación</td>
                                     <td> Incluyen recarga mensual de Internet 10 /120 GB</td>
                                     <td> $1,399</td>
                                 </tr>
                                 
                             </tbody>
                         </table>

         
         


                <p>*Tarifas incluyen IVA</p>

                <h4 className='mb-4'>ON ALÁMBRICO</h4>

                 <table className="table table-striped table-bordered">
                     <thead className="thead-dark">
                     <tr>
                            <th className=' text-light text-uppercase text-center p-4'  colSpan={2}>GASTOS DE INSTALACIÓN $800</th>
                     </tr>
                        <tr>
                            <th className=' text-light text-uppercase text-center p-4'>VELOCIDAD</th>
                            <th className=' text-light text-uppercase text-center p-4'>MENSUALIDAD</th>
                        </tr>
                    </thead>
                     <tbody>
                        <tr>
                            <td>Internet 20</td>
                            <td>$349</td>
                        </tr>
                        <tr>
                            <td>Internet 30</td>
                            <td>$399</td>
                        </tr>
                        <tr>
                            <td>Internet 150</td>
                            <td>$549</td>
                        </tr>
                        <tr>
                            <td>Internet 200</td>
                            <td>$899</td>
                        </tr>
                    </tbody>
                </table>


                <p>*Tarifas incluyen IVA</p>

                 <h4 className='mb-4'>ON Alámbrico Internet + Telefonía Fija</h4>

                 <table className="table table-striped table-bordered">
                     <thead className="thead-dark">
                     <tr>
                            <th className=' text-light text-uppercase text-center p-4'  colSpan={2}>GASTOS DE INSTALACIÓN $800</th>
                     </tr>
                        <tr>
                            <th className=' text-light text-uppercase text-center p-4'>VELOCIDAD</th>
                            <th className=' text-light text-uppercase text-center p-4'>MENSUALIDAD</th>
                        </tr>
                    </thead>
                     <tbody>
                        <tr>
                            <td>Internet 20 + 1 línea ilimitada</td>
                            <td>$389</td>
                        </tr>
                        <tr>
                            <td>Internet 30  + 1 línea ilimitada</td>
                            <td>$435</td>
                        </tr>
                        <tr>
                            <td>Internet 40  + 1 línea ilimitada</td>
                            <td>$499</td>
                        </tr>
                        <tr>
                            <td>Internet 150  + 2 líneas ilimitadas</td>
                            <td>$599</td>
                        </tr>
                        <tr>
                            <td>Internet 200  + hasta 3 líneas ilimitadas</td>
                            <td>$999</td>
                        </tr>
                    </tbody>
                </table>


                <p>*Tarifas incluyen IVA</p>


                <p>El cobro del servicio será a partir de la instalación y activación del servicio, determinado de acuerdo al paquete contratado.</p>
               
                <h4 className='mb-4'>ON SATELITAL</h4>
                <table className='table table-striped table-bordered'>
                <thead className='thead-dark'>
                     <tr>
                        <th colspan={3}>Gastos de Instalación $4,000</th>
                    </tr>
                    <tr>
                        <th>PAQUETE</th>
                        <th>CAPACIDAD</th>
                        <th>MENSUALIDAD</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Internet 3 </td>
                        <td> 5 GB</td>
                        <td> $779</td>
                    </tr>
                    <tr>
                        <td>Internet 5 </td>
                        <td> 15 GB</td>
                        <td> $1,019</td>
                    </tr>
                    <tr>
                        <td>Internet 10 </td>
                        <td> 20 GB</td>
                        <td> $1,199</td>
                    </tr>
                    <tr>
                        <td>Internet 10 </td>
                        <td> 40 GB</td>
                        <td> $1,799</td>
                    </tr>
                    <tr>
                        <td>Internet 20 </td>
                        <td> 60 GB</td>
                        <td> $2,199</td>
                    </tr>
                    <tr>
                        <td>Internet 25 </td>
                        <td> 20 GB</td>
                        <td> $1,399</td>
                    </tr>

                     <tr>
                        <td>Internet 30 </td>
                        <td> 100 GB</td>
                        <td> $3,099</td>
                    </tr>

                     <tr>
                        <td>Internet 30 </td>
                        <td> 150 GB</td>
                        <td> $4,599</td>
                    </tr>
                    
                </tbody>
            </table>

            <p>*Tarifas incluyen IVA</p>
               
               
               
                {/*<table className="table table-striped table-bordered">
                     <thead className="thead-dark">
                     <tr>
                            <th className=' text-light text-uppercase text-center p-4'  colSpan={3}>GASTOS DE INSTALACIÓN $4000</th>
                     </tr>
                        <tr>
                            <th className=' text-light text-uppercase text-center p-4'>VELOCIDAD</th>
                            <th className=' text-light text-uppercase text-center p-4'>CAPACIDAD</th>   
                            <th className=' text-light text-uppercase text-center p-4'>MENSUALIDAD</th>
                        </tr>
                    </thead>
                     <tbody>
                        <tr>
                            <td>Hasta 2.5 megas</td>
                            <td>5 GB</td>
                            <td>$819</td>
                        </tr>
                        <tr>
                            <td>Hasta 5 megas</td>
                            <td>10 GB</td>
                            <td>$1,019</td>
                        </tr>
                        <tr>
                            <td>Hasta 10 megas</td>
                            <td>20 GB</td>
                            <td>$1,499</td>
                        </tr>
                        <tr>
                            <td>Hasta 20 megas</td>
                            <td>40 GB</td>
                            <td>$2,199</td>
                        </tr>
                        <tr>
                            <td>Hasta 30 megas</td>
                            <td>50 GB</td>
                            <td>$3,699</td>
                        </tr>
                        <tr>
                            <td>Hasta 30 megas</td>
                            <td>100 GB</td>
                            <td>$6,499</td>
                        </tr>

                    </tbody>
                                     </table> */}




               

               
                <p>Para consultar más información acerca del servicio, visita la página <a href="www.oninternet.com.mx">www.oninternet.com.mx</a></p>


               

                {/*

                 <table className='table table-striped table-bordered'>
                <thead className='thead-dark'>
                     <tr>
                        <th colspan={3}>Gastos de Instalación $4,000</th>
                    </tr>
                    <tr>
                        <th>VELOCIDAD</th>
                        <th>CAPACIDAD</th>
                        <th>MENSUALIDAD</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hasta 3 megas </td>
                        <td> 5 GB</td>
                        <td> $779</td>
                    </tr>
                    <tr>
                        <td>Hasta 5 megas </td>
                        <td> 15 GB</td>
                        <td> $999</td>
                    </tr>
                    <tr>
                        <td>Hasta 10 megas </td>
                        <td> 20 GB</td>
                        <td> $1,099</td>
                    </tr>
                    <tr>
                        <td>Hasta 10 megas </td>
                        <td> 40 GB</td>
                        <td> $1,799</td>
                    </tr>
                    <tr>
                        <td>Hasta 20 megas </td>
                        <td> 60 GB</td>
                        <td> $2,199</td>
                    </tr>
                    <tr>
                        <td>Hasta 25 megas </td>
                        <td> 20 GB</td>
                        <td> $1,179</td>
                    </tr>

                     <tr>
                        <td>Hasta 30 megas </td>
                        <td> 100 GB</td>
                        <td> $3,099</td>
                    </tr>

                     <tr>
                        <td>Hasta 30 megas </td>
                        <td> 150 GB</td>
                        <td> $4,599</td>
                    </tr>
                    
                </tbody>
            </table>


            <p>*Tarifas incluyen IVA</p>
            
            */}
            {/*

            <p>No disponibles para venta nueva:</p>

                  <table className='table table-striped table-bordered'>
                <thead className='thead-dark'>
                     <tr>
                        <th colspan={3}>Gastos de Instalación $4,000</th>
                    </tr>
                    <tr>
                        <th>VELOCIDAD</th>
                        <th>CAPACIDAD</th>
                        <th>MENSUALIDAD</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hasta 2.5 megas</td>
                        <td>5 GB</td>
                        <td> $819</td>
                    </tr>
                    <tr>
                        <td>Hasta 5 megas</td>
                        <td>10 GB</td>
                        <td> $1,019</td>
                    </tr>
                    <tr>
                        <td>Hasta 10 megas</td>
                        <td>20 GB</td>
                        <td> $1,499</td>
                    </tr>
                    <tr>
                        <td>Hasta 20 megas</td>
                        <td>40 GB</td>
                        <td> $2,199</td>
                    </tr>
                    <tr>
                        <td>Hasta 30 megas</td>
                        <td>50 GB</td>
                        <td> $3,699</td>
                    </tr>
                    <tr>
                        <td>Hasta 30 megas</td>
                        <td>100 GB</td>
                        <td> $6,499</td>
                    </tr>

                 
                    
                </tbody>
            </table>


            <p>*Tarifas incluyen IVA</p>*/}

        </TocPage>
        </div>
    );
}

export default Service_costs;