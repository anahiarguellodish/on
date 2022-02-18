import React from 'react';
import TocPage from './generic/TocPage';
import getLegalLinks from './Legal/getLegalLinks';

import m382569 from '../media/ift/InternetAl/FormatoSimplificado_382569.pdf';
import m382570 from '../media/ift/InternetAl/FormatoSimplificado_382570.pdf';
import m382571 from '../media/ift/InternetAl/FormatoSimplificado_382571.pdf';
import m382572 from '../media/ift/InternetAl/FormatoSimplificado_382572.pdf';


import m381784 from '../media/ift/InternetAlF/FormatoSimplificado_381784.pdf';
import m381786 from '../media/ift/InternetAlF/FormatoSimplificado_381786.pdf';
import m381789 from '../media/ift/InternetAlF/FormatoSimplificado_381789.pdf';
import m381792 from '../media/ift/InternetAlF/FormatoSimplificado_381792.pdf';






const Rates = props =>
{
    return (
        <div id='rates' className='container p-4'>
            <TocPage history={props.history} links={getLegalLinks()}>
                <h4 className='mb-4'>REGISTRO DE TARIFAS ANTE IFT</h4>

              

                <table className='table table-striped table-bordered'>
                    <thead className='thead-dark'>
                        
                    </thead>
                    <tbody>
                         <tr className='thead-dark'>
                             <th className='td-title' colspan="2">ON ALÁMBRICO: INTERNET</th>
                        </tr> 
                        <tr className='thead-dark'>
                             <th className='td-title'>NOMBRE</th>
                            <th className='td-title'>TARIFA</th>
                        </tr>
                          <tr>
                            <td>ON Alámbrico Internet 20</td>
                            <td><a href={m382569} target='_blank' rel='noopener noreferrer'>382569</a></td>
                        </tr>
                        <tr>
                            <td>ON Alámbrico Internet 30</td>
                            <td><a href={m382570} target='_blank' rel='noopener noreferrer'>382570</a></td>
                        </tr>
                        <tr>
                            <td>ON Alámbrico Internet 150 </td>
                            <td><a href={m382571} target='_blank' rel='noopener noreferrer'>382571</a></td>
                        </tr>
                        <tr>
                            <td>ON Alámbrico Internet 200</td>
                            <td><a href={m382572} target='_blank' rel='noopener noreferrer'>382572</a></td>
                        </tr>
                        
                        

                    </tbody>
                </table>

                <table className='table table-striped table-bordered'>
                    <thead className='thead-dark'>
                        
                    </thead>
                    <tbody>
                        
                        <tr className='thead-dark'>
                             <th className='td-title' colspan="2">ON ALÁMBRICO: INTERNET IVA FRONTERIZO</th>
                        </tr>
                        <tr className='thead-dark'>
                           <th className='td-title'>NOMBRE</th>
                            <th className='td-title'>TARIFA</th>
                        </tr>
                          <tr>
                            <td>ON Alámbrico Internet 20</td>
                            <td><a href={m381784} target='_blank' rel='noopener noreferrer'>381784</a></td>
                        </tr>
                        <tr>
                            <td>ON Alámbrico Internet 30</td>
                            <td><a href={m381786} target='_blank' rel='noopener noreferrer'>381786</a></td>
                        </tr>
                        <tr>
                            <td>ON Alámbrico Internet 150 </td>
                            <td><a href={m381789} target='_blank' rel='noopener noreferrer'>381789</a></td>
                        </tr>
                        <tr>
                            <td>ON Alámbrico Internet 200</td>
                            <td><a href={m381792} target='_blank' rel='noopener noreferrer'>381792</a></td>
                        </tr>
                       


                    </tbody>
                </table>



                <p>Las tarifas ante señaladas pueden consultarse en el Registro Público de Concesiones, publicado en la página electrónica del Instituto Federal de Telecomunicaciones</p>
            </TocPage>
        </div>
    );
}

export default Rates;
