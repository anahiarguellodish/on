import React from 'react';

import TocPage from './generic/TocPage';
import getLegalLinks from './Legal/getLegalLinks';
import doc2 from '../media/CARTA DE DERCHOS MÍNIMOS DOF 06.07.2015 (1).pdf';


const MinRights = props =>
{
    return (
        <div id='min-rights' className='container p-4'>
            <TocPage history={props.history} links={getLegalLinks()}>
                <h4>CARTA DE DERECHOS MÍNIMOS</h4>

                <p>De conformidad con el ACUERDO mediante el cual la Procuraduría Federal del Consumidor y el Instituto Federal de Telecomunicaciones, determinan los derechos mínimos que deben incluirse en la carta a que hace referencia el artículo 191 de la Ley Federal de Telecomunicaciones y Radiodifusión, publicada en el Diario Oficial de la Federación (DOF) con fecha 06 de julio de 2015.</p>
		          
                <center><p className='suscribe-text  blanco'><a href={doc2} target='_blank'>Conócela aquí</a></p></center>

            </TocPage>
        </div>
    );
}

export default MinRights;
