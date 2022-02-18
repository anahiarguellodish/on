import React from 'react';
import { ScrollSpy, ScrollSpySection } from './generic/ScrollSpy';

const PrivacyIntegral = props => (
    <div id='privacy-integral' className='container p-4'>
        <ScrollSpy history={props.history}>
            <h4 className='font-bold text-dark text-uppercase'>TIPS ON</h4>

            <ScrollSpySection label='I. Identidad y domicilio del Responsable.' id='#i'>
                <p><b>I. Identidad y domicilio del Responsable.</b></p>
            </ScrollSpySection>

            <p>Comercializadora de Frecuencias Satelitales, S. de R. L. de C.V., (conocida comercialmente como ON INTERNET) con domicilio en Calzada de Tlalpan número 1924, Colonia Churubusco Country Club, Coyoacán, Ciudad de México, C.P. 04210, es el responsable del tratamiento y protección de sus datos personales en términos del presente aviso de privacidad (en lo sucesivo, el “Responsable”).</p>

            <ScrollSpySection label='II. Datos personales que serán tratados.' id='#ii'>
                <p><b>II. Datos personales que serán tratados.</b></p>
            </ScrollSpySection>

            <p>Para las finalidades especificadas en este aviso de privacidad, el responsable recaba de forma personal o directa de sus clientes potenciales y suscriptores, a través del  sitio de Internet www.oninternet.com.mx o indirectamente a través de una fuente de acceso público permitida por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (en lo sucesivo, la “Ley”) , los siguientes datos personales, mismos que son necesarios para el cumplimiento de las obligaciones derivadas de la relación comercial y prestación de servicios de internet inalámbrico, entre otros.</p>

            <p>Datos personales de identificación: nombre (s) y apellido (s), edad, estado civil, copia de identificación oficial vigente, fecha de nacimiento, Registro Federal de Contribuyentes (RFC), firma autógrafa y/o electrónica, nombre completo.</p>

           
            
        </ScrollSpy>
    </div>
);

export default PrivacyIntegral;