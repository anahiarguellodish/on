import React from 'react';
import { Link } from 'react-router-dom';

import manual from '../../media/manual_de_usuario.pdf';
import manual1 from '../../media/manual1.pdf';
import manual2 from '../../media/manual2.pdf';
import manual3 from '../../media/manual3.pdf';

// import formato_satelital1 from '../../media/Venta Internet Satelital 1018 v9 Final.pdf';
// import formato_satelital2 from '../../media/Contrato de Adhesion.pdf';
// import formato_satelital3 from '../../media/Servicio Internet Satelital 1018 v11 Final.pdf';

import formato_satelital1 from '../../media/Venta Internet Satelital 1018 v9 Final.pdf';
import formato_satelital2 from '../../media/Contrato de Adhesion.pdf';
import formato_satelital3 from '../../media/Servicio Internet Satelital 1018 v11 Final.pdf';
import formato_satelital4 from '../../media/Solicitud de servicio DISH ON FP VF.pdf';
import formato_satelital5 from '../../media/Servicio Internet Satelital 1018 v11 Final.6f5b17d0.pdf';
import formato_satelital6 from '../../media/CONTRATO SATELITAL.pdf';
import formato_satelital7 from '../../media/CARATULA SATELITAL.pdf';
import garantiaina from '../../media/04 PÓLIZA DE GARANTÍA  VF.pdf';
import contrato_alambrico from '../../media/CONTRATO POSPAGO.pdf';

import contrato_prepago from '../../media/CONTRATOPREPAGO.pdf';
import caratula_prepago from '../../media/CARÁTULAPREPAGO.pdf';

import contrato_pospago from '../../media/CONTRATO POSPAGO(1).pdf';
import caratula_pospago from '../../media/CARÁTULA POSPAGO.pdf';


import manualDeUso from '../../media/manual_de_uso.pdf';
import formato_de_suscripcion from '../../media/formato_de_suscripcion.pdf';
import formato_universal_orden_de_trabajo from '../../media/formato_universal_orden_de_trabajo.pdf';
import contrato_registrado_ante_profeco from '../../media/contrato_registrado_ante_profeco.pdf';
import solicitud_arco from '../../media/solicitud_arco.6020ef28.pdf';


import b310 from '../../media/Manual Huawei B310.pdf';
import m4 from '../../media/Manual M4 WiLink 1simple.pdf';
import sky from '../../media/Manual Skyworth ON VF.pdf';
import tplink from '../../media/Manual TP-Link.pdf';
// import codigopracticas from '../../media/codigopracticas.pdf';
import codigopracticas from '../../media/practicascomerciales.pdf';
import codigogestiontrafico from '../../media/Código_gestión_tráfico y admin_oninternet.pdf';
import m45 from '../../media/Manual M4 WiLink 1.pdf';
import caratulapor from '../../media/para consulta_Caratula_DishONFP.pdf';

import tcon from '../../media//TC ON Alámbrico con Telefonía Fija.pdf';
import terminosycondicionestel from '../../media/Alámbricoift.pdf';
import avisoimport from '../../media/Aviso Importante 29jul21.pdf';






import $ from 'jquery';



const getLegalLinkss = () =>
{
    const legalLinks = [
        // <Link to='/terms-and-conditions'>TÉRMINOS Y CONDICIONES</Link>,
        // <Link to='/privacy'>AVISO DE PRIVACIDAD</Link>,
        // <Link to='/'>AVISO LEGAL</Link>,
//         <Link to='/privacy-integral'>AVISO DE PRIVACIDAD INTEGRAL</Link>,

//         <h2>MANUAL DE USUARIOSO</h2>,
//         <a href={manualDeUso} target='_blank'>MANUAL DE USO M4</a>,
//         <a href={manual} target='_blank'>MANUAL DE USO HUAWEI</a>,

//         <Link to='/terms-of-use'>TÉRMINOS DE USO</Link>,
//         // <Link to='/customer-service'>ATENCIÓN A CLIENTES</Link>,
//         <Link to='/min-rights'>CARTA DE DERECHOS MÍNIMOS</Link>,
//         <Link to='/prices'>COSTOS POR LOS COMPONENTES</Link>,
//         <Link to='/address'>DOMICILIO DE LA EMPRESA</Link>,
//         // <Link to='/'>DERECHOS DE RÉPLICA DE LOS USUARIOS</Link>,

//         <h2>Documentacion de la empresa</h2>,
//             <a href={formato_satelital1} target='_blank'>Venta Internet Satelital v9</a>,
//             <a href={formato_satelital2} target='_blank'>Registro de Contrato</a>,
//             <a href={formato_satelital3} target='_blank'>Venta Internet Satelital v11</a>,

//         <a href={formato_de_suscripcion} target='_blank'>FORMATO DE VENTA / INSTALACIÓN / SERVICIO</a>,
//         // <Link to='/min-rights'>Carta de derechos mínimos</Link>,
//         <a href={formato_universal_orden_de_trabajo} target='_blank'>FORMATO DE ENTREGA DE SERVICIO INTERNET</a>,
//         <a href={solicitud_arco} target='_blank'>Solicitud Arco</a>,
//         <a href={contrato_registrado_ante_profeco} target='_blank'>Contrato Registrado ante PROFECO</a>,
// // <a href={manual1} target='_blank'>Solicitud de venta On Internet y Telefonía</a>,
// // <a href={manual2} target='_blank'>Orden de Servicio ON Internet y Telefonía</a>,
//  <a href={manual3} target='_blank'>Registro Oficio y contrato autorizado</a>,

//         <h2>Tarifas de servicio autorizadas por la autoridad</h2>,
//         <Link to='/rates'>REGISTRO DE TARIFA ANTE EL IFT</Link>,
//         // <Link to='/'>Consulta ante la autoridad</Link>,

//         <h2>Sitios de Interés</h2>,
//         <a href='http://www.ift.org.mx/' target='_blank' rel="noopener noreferrer">IFT</a>,
//         <a href='https://www.gob.mx/profeco/' target='_blank' rel="noopener noreferrer">PROFECO</a>



             <h2 id="internet_legal">ON INTERNET</h2>,
                 <Link to='/privacy' className="internet_">AVISO DE PRIVACIDAD</Link>,
                 <Link to='/privacy-integral' className="internet_">AVISO DE PRIVACIDAD INTEGRAL</Link>,
                 <Link to='/min-rights' className="internet_">CARTA DE DERECHOS MÍNIMOS</Link>,
                 <a href={solicitud_arco} target='_blank' className="internet_">Arco</a>,
                 <Link to='/terms-of-use' className="internet_">TÉRMINOS DE USO DEL SITIO ON</Link>,                          
                 <a href={codigopracticas} target='_blank' className="internet_">CÓDIGO DE PRÁCTICAS COMERCIALES</a>,
                 <a href={codigogestiontrafico} target='_blank' className="internet_">POLÍTICA DE GESTIÓN DE TRÁFICO Y ADMINISTRACIÓN DE RED</a>,
                 <Link to='/address' className="internet_">DOMICILIO DE LA EMPRESA</Link>,
                 <a href='http://www.ift.org.mx/' target='_blank' rel="noopener noreferrer" className="internet_ confirmacion">IFT</a>,
                 <a href='https://www.gob.mx/profeco/' target='_blank' rel="noopener noreferrer" className="internet_ confirmacion">PROFECO</a>,
                 <Link to='/polizagarantia' className="internet_">PÓLIZA DE GARANTÍA</Link>,
                  <a href='/Avisoimport' className="internet_">AVISOS</a>,

             <h2 id="inalambrico_legal">INALÁMBRICO</h2>,
             <Link to='/pricesin' className="inalambrico_">COSTOS POR LOS COMPONENTES</Link>,
            <h2 className="inalambrico_">MANUALES</h2>,
                 <a href={m4} target='_blank' className="inalambrico_">MANUAL DE USO MÓDEM M4</a>,
                 <a href={b310} target='_blank' className="inalambrico_">MANUAL DE USO MÓDEM HUAWEI B310</a>,
                 <a href={m45} target='_blank' className="inalambrico_">MANUAL DE USO DE MÓDEM M4 WLINK 5</a>,
                 

             <h2 className="inalambrico_">RECARGAS PREPAGO</h2>,
                 <Link to='/terms-and-conditionsin-prepago' className="inalambrico_">TÉRMINOS Y CONDICIONES</Link>,
                 <a href='/contratopre' className="inalambrico_">CONTRATO</a>,
                 <a  href='/solicitudpre' className="inalambrico_">Solicitud de servicios</a>,
                 <Link to='/cargosinprepago' className="inalambrico_">CARGOS ADICIONALES</Link>,
                 <Link to='/ratesinpre' className="inalambrico_ ">TARIFAS REGISTRADAS ANTE IFT</Link>,

             <h2 className="inalambrico_">PLANES POSTPAGO </h2>,
                 <Link to='/terms-and-conditionsin' className="inalambrico_">TÉRMINOS Y CONDICIONES</Link>,
                 <a href='/contratopostalfija' className="inalambrico_">CONTRATO</a>,
                 <a href='/solicitudpostalfija' className="inalambrico_">Solicitud de servicios y/o carátula</a>,
                 <Link to='/cargosin' className="inalambrico_">CARGOS ADICIONALES</Link>,
                 <Link to='/ratesin' className="inalambrico_ ">TARIFAS REGISTRADAS ANTE IFT</Link>,

             <h2 className="inalambrico_">ON Internet + AMAZON PRIME </h2>,
                 <Link to='/terms-and-conditionson' className="inalambrico_">TÉRMINOS Y CONDICIONES</Link>,
                 <a href='/contratopostalfija' className="inalambrico_">CONTRATO</a>,
                 <a href='/solicitudpostalfija' className="inalambrico_">Solicitud de servicios y/o carátula</a>,
                 <Link to='/cargoson' className="inalambrico_">CARGOS ADICIONALES</Link>,
                 <Link to='/rateson' className="inalambrico_ ">TARIFAS REGISTRADAS ANTE IFT</Link>,
                 
             <h2 id="alambrico_legal">ON ALÁMBRICO INTERNET</h2>,
                 <Link to='/terms-and-conditionsal' className="alambrico_">TÉRMINOS Y CONDICIONES</Link>,
                 <a href='/contratopostalfija'className="alambrico_">CONTRATO</a>,
                 <a  href='/solicitudpostalfija' className="alambrico_">Solicitud de servicios y/o carátula</a>,
                 <Link to='/pricesan' className="alambrico_">COSTOS POR LOS COMPONENTES</Link>,
                 <Link to='/cargosan' className="alambrico_">CARGOS ADICIONALES</Link>,
                 <Link to='/ratesan' className="alambrico_ ">TARIFAS REGISTRADAS ANTE IFT</Link>,


             <h2 id="alambricotel_legal">ON ALÁMBRICO INTERNET + TELEFONÍA FIJA</h2>,
                 <Link to='/terms-and-conditionstelfija' className="alambricotel_">TÉRMINOS Y CONDICIONES</Link>,
                 //<a href={terminosycondicionestel} target='_blank' className="alambricotel_">TÉRMINOS Y CONDICIONES</a>,
                 <a href='/contratopostalfija' className="alambricotel_">CONTRATO</a>,
                 <a href='/solicitudpostalfija' className="alambricotel_">Solicitud de servicios y/o carátula</a>,
                 <Link to='/pricesan' className="alambricotel_">COSTOS POR LOS COMPONENTES</Link>,
                 <Link to='/cargosan' className="alambricotel_">CARGOS ADICIONALES</Link>,
                 <Link to='/ratesanfija' className="alambricotel_ ">TARIFAS REGISTRADAS ANTE IFT</Link>,

                 
             <h2 id="satelital_legal">SATELITAL</h2>,
                 <Link to='/terms-and-conditionssat' className="satelital_">TÉRMINOS Y CONDICIONES</Link>,
                 <a href='/contratosat' className="satelital_">CONTRATO</a>,
                 <a href={sky} target='_blank' className="satelital_">MANUAL DE USO MÓDEM SKYWORTH</a>,
                 <a href={tplink} target='_blank' className="satelital_">MANUAL DE USO MÓDEM TP LINK</a>,
                 <a href='/solicitudsat' className="satelital_">Carátula de servicios</a>,
                 <Link to='/pricessat' className="satelital_">COSTOS POR LOS COMPONENTES</Link>,
                 <Link to='/cargossat' className="satelital_">CARGOS ADICIONALES</Link>,
                 <Link to='/ratessat' className="satelital_ ">TARIFAS REGISTRADAS ANTE IFT</Link>,
                 




    ];

    const hash = window.location.pathname;
    const isTermsPage = hash === '/terms-and-conditions' ? true : false;
    const isPrivacyPage = hash === '/privacy' ? true : false;
    const isOther = !isTermsPage && !isPrivacyPage;

    // if(isTermsPage || isOther)
    //     legalLinks.unshift(<Link to='/privacy'>AVISO DE PRIVACIDAD</Link>);
    // if(isPrivacyPage || isOther)
    //     legalLinks.unshift(<Link to='/terms-and-conditions'>TÉRMINOS Y CONDICIONES</Link>);




    return legalLinks;


}

// class getLegalLinks extends React.Component
// {
//        constructor(props)
//     {
//         super(props);
//     }





//     componentDidMount() {

//         setTimeout(function(){

//           var r=false;

//                $("#internet_legal").on("click",function(){
//                   if(r){
//                       $(".internet_").slideUp("slow");
//                       r=false;
//                   }else{
//                       $(".internet_").slideDown("slow");
//                       r=true;
//                   }
//                });

//                 var s=false;
//                   $("#inalambrico_legal").on("click",function(){
//                   if(s){
//                       $(".inalambrico_").slideUp("slow");
//                       s=false;
//                   }else{
//                       $(".inalambrico_").slideDown("slow");
//                       s=true;
//                   }
//                });

//                  var t=false;
//                   $("#alambrico_legal").on("click",function(){
//                   if(t){
//                       $(".alambrico_").slideUp("slow");
//                       t=false;
//                   }else{
//                       $(".alambrico_").slideDown("slow");
//                       t=true;
//                   }
//                });

//                 var u=false;
//                   $("#satelital_legal").on("click",function(){
//                   if(u){
//                       $(".satelital_").slideUp("slow");
//                       u=false;
//                   }else{
//                       $(".satelital_").slideDown("slow");
//                       u=true;
//                   }
//                });

//                  $(".internet_").slideUp("slow");
//                   $(".inalambrico_").slideUp("slow");
//                   $(".alambrico_").slideUp("slow");
//                     $(".satelital_").slideUp("slow");

//             alert("se creo el Component");

//         },998);

//     }
//     render(){
//         return getLegalLinkss;
//     }

// }



export default getLegalLinkss;
