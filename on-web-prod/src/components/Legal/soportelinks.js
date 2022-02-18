import React from 'react';
import { Link } from 'react-router-dom';

import b310 from '../../media/Manual Huawei B310.pdf';
import m45 from '../../media/Manual M4 WiLink 1.pdf';
import m4 from '../../media/Manual M4 WiLink 1simple.pdf';
import sky from '../../media/Manual Skyworth ON VF.pdf';
import manual3 from '../../media/Manual TP-Link.pdf';
import appstore from '../../media/Guia rapida con appstore.pdf';



import formato_satelital1 from '../../media/Venta Internet Satelital 1018 v9 Final.pdf';
import formato_satelital2 from '../../media/registro de contrato.pdf';
import formato_satelital3 from '../../media/Servicio Internet Satelital 1018 v11 Final.pdf';

import manualDeUso from '../../media/manual_de_uso.pdf';
import formato_de_suscripcion from '../../media/formato_de_suscripcion.pdf';
import formato_universal_orden_de_trabajo from '../../media/formato_universal_orden_de_trabajo.pdf';
import contrato_registrado_ante_profeco from '../../media/contrato_registrado_ante_profeco.pdf';
import solicitud_arco from '../../media/solicitud_arco.pdf';

import m41 from '../../media/WiLink_3.pdf';
import m455 from '../../media/Manual M4 WiLink 5.pdf';

import b12 from '../../media/Manual B612.pdf';

const getLegalLinks = () =>
{
    const legalLinks = [    


             <p><b>TIPS ON</b></p>,
             <p></p>,
             <p><b>INALÁMBRICO</b></p>,
             <a href={appstore} target='_blank'>Guía Rápida</a>,
             <Link to='/tutorialesin'>TUTORIALES ON INALÁMBRICO</Link>,
             <h2>MÓDEM M4 WiLink1</h2>,
             <a href={m4} target='_blank'>-MANUAL DE USO</a>,
             <Link to='/cambiowifim4'>-CAMBIO DE RED WIFI Y CONTRASEÑA</Link>,

             <h2>Módem M4 WiLink 3</h2>,
             <a href={m41} target='_blank'>-MANUAL DE USO</a>,
             <h2>Módem M4 WiLink 5</h2>,
             <a href={m455} target='_blank'>-MANUAL DE USO</a>,

             <h2>Módem Huawer B612</h2>,
             <a href={b12} target='_blank'>-MANUAL DE USO</a>,



             <h2>MÓDEM HUAWEI B310</h2>,
             <a href={b310} target='_blank'>-MANUAL DE USO</a>,
             <Link to='/cambiowifihuawei'>-CAMBIO DE RED WIFI Y CONTRASEÑA</Link>,

             <p><b>ALÁMBRICO</b></p>,
             <Link to='/tutorialesal'>TUTORIALES ON ALÁMBRICO</Link>,
             <p></p>,
             <p><b>SATELITAL</b></p>,
             <Link to='/tutorialessat'>TUTORIALES ON SATELITAL</Link>,
             <h2>SKYWORTH MODELO AC750 RN 310</h2>,
             <a href={sky} target='_blank'>-MANUAL DE USO</a>,
             <h2>TP LINKARCHER C20</h2>,
             <a href={manual3} target='_blank'>-MANUAL DE USO</a>,
          






    ];

    // const hash = window.location.pathname;
    // const isTermsPage = hash === '/terms-and-conditions' ? true : false;
    // const isPrivacyPage = hash === '/privacy' ? true : false;
    // const isOther = !isTermsPage && !isPrivacyPage;

    // if(isTermsPage || isOther)
    //     legalLinks.unshift(<Link to='/privacy'>AVISO DE PRIVACIDAD</Link>);
    // if(isPrivacyPage || isOther)
    //     legalLinks.unshift(<Link to='/terms-and-conditions'>TÉRMINOS Y CONDICIONES</Link>);




    return legalLinks;
}

export default getLegalLinks;
