import React from 'react';
import TocPage from './generic/TocPage';
import soportelinks from './Legal/soportelinks';

const TermsAndConditions = props =>
{
    return (
        <div id='terms-and-conditions' className='container p-4'>
            <TocPage history={props.history} links={soportelinks()}>
                <h4>ON INALÁMBRICO</h4>
                <p>Te preparamos una guía rápida para que te vuelvas un expertON en tu servicio</p>
                <p>Da clic <a href="https://oninternet.s3.amazonaws.com/media/Guia+rapida+appstore.pdf"><strong>aquí</strong></a> para visualizarlo y si lo deseas, descargarla</p>
                
            </TocPage>
        </div>
    );
}

export default TermsAndConditions;