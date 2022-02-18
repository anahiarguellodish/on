import React from 'react';
import TocPage from './generic/TocPage';
import getLegalLinks from './Legal/getLegalLinks';


import m307285 from '../media/ift/InternetInRecargas/FormatoSimplificado_307285.pdf';
import m307286 from '../media/ift/InternetInRecargas/FormatoSimplificado_307286.pdf';
import m307287 from '../media/ift/InternetInRecargas/FormatoSimplificado_307287.pdf';





const Rates = props =>
{
    return (
        <div id='rates' className='container p-4'>
            <TocPage history={props.history} links={getLegalLinks()}>
                <h4 className='mb-4'>REGISTRO DE TARIFAS ANTE IFT</h4>

                  <table className='table table-striped table-bordered'>
                    <thead className='thead-dark'>

                         <tr className='thead-dark'>
                             <th className='td-title' colspan="2">ON Inalámbrico Recargas Prepago</th>
                        </tr>
                        <tr>
                            <th>ON INALÁMBRICO</th>
                            <th>FOLIO DE TARIFA</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr>
                            <td>ON Inalámbrico 5 / 20 GB / semanal</td>
                            <td><a href={m307285} target='_blank' rel='noopener noreferrer'>307285</a></td>
                        </tr>
                        <tr>
                            <td>ON Inalámbrico 5 / 80 GB / mensual</td>
                            <td><a href={m307286} target='_blank' rel='noopener noreferrer'>307286</a></td>
                        </tr>
                        <tr>
                            <td>ON Inalámbrico 10 / 120 GB / mensual</td>
                            <td><a href={m307287} target='_blank' rel='noopener noreferrer'>307287</a></td>
                        </tr>
                       
                        
                       
                      
                    </tbody>
                </table>


                <p>Las tarifas ante señaladas pueden consultarse en el Registro Público de Concesiones, publicado en la página electrónica del Instituto Federal de Telecomunicaciones</p>
            </TocPage>
        </div>
    );
}

export default Rates;
