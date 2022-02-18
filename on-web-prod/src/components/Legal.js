import React from 'react';

import TocPage from './generic/TocPage';
import getLegalLinks from './Legal/getLegalLinks';

import doc1 from '../media/Contrato de Adhesion.pdf';
import doc2 from '../media/Comercializadora de Frecuencias S.pdf';
import formato_satelital6 from '../media/CONTRATO SATELITAL.pdf';
import contrato_alambrico from '../media/CONTRATO POSPAGO.pdf';



import contrato_prepago from '../media/CONTRATOPREPAGO.pdf';
import caratula_prepago from '../media/CARÁTULAPREPAGO.pdf';

import contrato_pospago from '../media/CONTRATO POSPAGO(1).pdf';
import caratula_pospago from '../media/CARÁTULA POSPAGO.pdf';


import contrato233 from '../media/CONTRATO PROFECO 3 servicios 233-2020.pdf';
import contrato270 from '../media/CONTRATO PROFECO 3 servicios 270-2020.pdf';
import contrato2331 from '../media/CONTRATO PROFECO Satelital 234-2020.pdf';
import contrato2701 from '../media/CONTRATO PROFECO Satelital 269-2020.pdf';
import contrato233s from '../media/CONTRATO PROFECO prepago 223-2020.pdf';

import aviso29 from '../media/Aviso Importante 29jul21.pdf';

const MinRights = props =>
{
    return (
        <div id='min-rights' className='container p-4'>
            <TocPage history={props.history} links={getLegalLinks()}>
                <h4>CONTRATOS</h4>



              
                 
                 <p><a href={contrato233} target='_blank'> Contrato registrado ante PROFECO: 233-2020</a></p>
                 <p><a href={contrato270} target='_blank'>Contrato registrado ante PROFECO: 270-2020</a></p>
               
                 <p><a href={contrato2331} target='_blank'>Contrato registrado ante PROFECO: 234-2020</a></p>
                 <p><a href={contrato2701} target='_blank'>Contrato registrado ante PROFECO: 269-2020</a></p>

                 <p><a href={contrato233s} target='_blank'> Contrato registrado ante PROFECO: 223-2020</a></p>

                 <p><a href={aviso29} target='_blank'> Aviso Importante 29 Julio 2021</a></p>


            </TocPage>
        </div>
    );
}

export default MinRights;
