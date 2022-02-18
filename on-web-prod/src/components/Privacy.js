import React from 'react';
import TocPage from './generic/TocPage';
import getLegalLinks from './Legal/getLegalLinks';

const Privacy = (props) => (
    <div id='privacy' className='container p-4'>
        <TocPage history={props.history} links={getLegalLinks()}>
            <h4>Aviso de Privacidad ON INTERNET</h4>

            <p>Los datos personales recabados por Comercializadora de Frecuencias Satelitales, S. de R. L. de C.V., conocida comercialmente como “ON INTERNET”, con domicilio en Calzada de Tlalpan, número 1924, Colonia Churubusco Country Club, Coyoacán, Ciudad de México., C.P. 04210, son necesarios para las siguientes finalidades primarias i) su registro como Suscriptor; ii) proveer el servicio de Internet Inalámbrico (en lo sucesivo, el Servicio); iii) informarle sobre cambios en el servicio contratado; iv)  realizar gestiones de cobranza del Servicio, a través de visitas presenciales, llamadas telefónicas, mensajes o cualquier otro medio de comunicación; v) realizar instalaciones, desinstalaciones y/o servicios técnicos, con familiares y/o personas relacionadas con el suscriptor cuando el mismo no se encuentre en su domicilio; vi) emisión de facturación electrónica relacionada con el Servicio, y vii) cumplir con las obligaciones legales que deriven de la relación comercial, y podrán utilizarse para las siguientes finalidades secundarias: i) llevar a cabo rifas, encuestas, sorteos, concursos, ofertas, programas, actividades publicitarias, promociones y otorgamiento de cortesías; ii) verificar la identidad de los participantes y ponerse en contacto por cualquier medio  con los ganadores; iii) evaluar la calidad del Servicio; iv) ofrecerle nuevas opciones de programación  (paquetes) y pago del Servicio; v) envío de promociones, newsletters o información de socios comerciales del Responsable y/o terceros que tengan alguna relación jurídica con el Responsable; vi) envío de productos promocionales, obsequios y/o premios, información y muestras; y vii) permitir el acceso, control y video-vigilancia/ grabación para la seguridad de las personas que visitan las instalaciones del Responsable.</p>

            <p>Además, su información podrá utilizarse para fines de mercadotecnia, publicidad y prospección comercial, específicamente para el ofrecimiento y la promoción de bienes, productos y servicios del responsable.</p>

            <p>Consiento el tratamiento de mis datos personales, para las finalidades secundarias antes descritas            Sí __ No __</p>

            <p>Se hace del conocimiento al titular de los datos personales, que cuenta con un plazo de 5 (cinco) días hábiles para manifestar su negativa al tratamiento de sus datos personales, para todas o algunas de las finalidades secundarias, sin que ello tenga como consecuencia la conclusión del tratamiento para las finalidades primarias, enviando un correo electrónico a datospersonales@oninternet.com.mx Para efecto de ofrecer al Suscriptor diferentes opciones de pago y/o instalación del servicio, la responsable puede recabar y tratar datos personales financieros y patrimoniales que incluyen datos de tarjeta de crédito o débito, situación en el buró de crédito, obligaciones susceptibles de valoración económica, tipo de vivienda (casa, local comercial o edificio), tipo de construcción (madera, adobe, concreto, lámina u otro).</p>

            <p>Consiento el tratamiento de mis datos financieros y patrimoniales, para las finalidades antes descritas    Sí __ No __</p>

            <p>Para conocer mayor información sobre los términos y condiciones en que serán tratados sus datos personales, puede consultar nuestro aviso de privacidad integral en la página de internet www.oninternet.com.mx en la sección Aviso de Privacidad.  Derivado de la relación jurídica que tengo con el responsable, doy mi consentimiento para el tratamiento de mis datos personales, incluyendo los patrimoniales y financieros, para las finalidades señaladas en el presente aviso de privacidad.</p>
        </TocPage>
    </div>
);

export default Privacy;