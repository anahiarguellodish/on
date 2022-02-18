

import React from 'react';
import $ from 'jquery';


// import privacidad from '../media/privacidad.jpg';
import recibo from '../media/recibo.png';
//import buenfin from '../media/img-on-inalambrico/LogoBuen.svg';

import inalambrico from '../media/inalambrico-internet.png';

import Iconovelo from '../media/assets/iconovelo.png';
import IconoPila from '../media/assets/IconoPila.svg';
import IconoveloB from '../media/assets/iconovelob.png';
import IconoPila_mid from '../media/assets/IconoPila-mid.svg';
import IconoveloC from '../media/assets/iconoveloc.png';
import IconoPila_full from '../media/assets/IconoPila-full.svg';
import cable from '../media/assets/cable.svg';
import capacidad from '../media/assets/capacidad.svg';
import internet from '../media/assets/internet.svg';
import mexico from   '../media/assets/mexico.svg';
// import n10gb from '../media/assets/10gb.png';
// import n20gb from '../media/assets/20gb.png';
// import n30gb from '../media/assets/30gb.png';
// import n50gb from '../media/assets/50gb.png';
// import n60gb from '../media/assets/60gb.png';
// import n110gb from '../media/assets/110gb.png';
import iconSinAccesso from '../media/assets/iconSinAccesso.svg';
import iconNavegaIlimitado from '../media/assets/iconNavegaIlimitado.svg';
import icoFreezone from '../media/assets/icoFreezone.svg';
import iconwww from '../media/assets/iconwww.svg';
import Cap30Gb from '../media/assets/Cap30Gb.svg';
import Vel25Megas from '../media/assets/Vel25Megas.svg';




import signomorado from '../media/signomorado.png';
import signomoradogastos from '../media/signomorado gastos.png';



import promo from '../media/dishon_promo.png';
import alambrico from '../media/alambrico-internet.png';
import satelital from '../media/satelital-internet.png';
import satelital_v2 from '../media/onsatelital_v2.png';
import triangulo from '../media/triangulo.png';
import ZonaVerde from '../media/ZonaVerde.png';
import g10 from '../media/10gb.png';
import g20 from '../media/20gb.png';
import g30 from '../media/30gb.png';
import g50 from '../media/50gb.png';
import g60 from '../media/60gb.png';
import g110 from '../media/110gb.png';
import gb5 from '../media/img-on-satelital/5_gb.png';
import gb10 from '../media/img-on-satelital/10_gb.png';
import gbdiez from '../media/img-on-satelital/10gb.png';
// import gb20 from '../media/img-on-satelital/20_gb.png';
// import gb30 from '../media/img-on-satelital/30gb.png';
// import gb40 from '../media/img-on-satelital/40_gb.png';
// import gb50 from '../media/img-on-satelital/50gb.png';
// import gb60 from '../media/img-on-satelital/60gb.png';
// import gb50a from '../media/img-on-satelital/50gba.png';
// import gb110 from '../media/img-on-satelital/110gb.png';
// import gb100a from '../media/img-on-satelital/100gba.png';
import anua from '../media/img-on-satelital/anualidad-info.png';
import ct10 from '../media/img-on-satelital/ct-10.png';
import ct20 from '../media/img-on-satelital/ct-20.png';
import ct30 from '../media/img-on-satelital/ct-30.png';
import ct50 from '../media/img-on-satelital/ct-50.png';
import ct60 from '../media/img-on-satelital/ct-60.png';
import ct110 from '../media/img-on-satelital/ct-110.png';
import grupo02mg from '../media/img-on-satelital/Grupo2mg.png';
import grupo05mg from '../media/img-on-satelital/Grupo05mg.png';
import grupo10mg from '../media/img-on-satelital/Grupo10mg.png';
import grupo20mg from '../media/img-on-satelital/Grupo20mg.png';
import grupo30mg from '../media/img-on-satelital/Grupo30mg.png';
import grupo30mg01 from '../media/img-on-satelital/Grupo30mg01.png';
import antes10mg from '../media/img-on-alambrico/antes10mg.png';
import antes20mg from '../media/img-on-alambrico/antes20mg.png';
import antes50mg from '../media/img-on-alambrico/antes50mg.png';
import antes100mg from '../media/img-on-alambrico/antes100mg.png';
// import ahora20mg from '../media/img-on-alambrico/ahora20mg.png';
// import ahora30mg from '../media/img-on-alambrico/ahora30mg.png';
// import ahora50mg from '../media/img-on-alambrico/ahora50mg.png';
// import ahora100mg from '../media/img-on-alambrico/ahora100mg.png';
// import ahora200mg from '../media/img-on-alambrico/ahora200mg.png';
import signoblanco from '../media/signoblanco.png';

import velocidad from '../media/assets/velocidad.svg';
import mas from '../media/assets/mas.svg';
import Cap50Gb from '../media/assets/Cap50Gb.svg';
import max_speed from '../media/assets/max-speed.svg';

import number01 from '../media/assets/number01.svg';
import number02 from '../media/assets/number02.svg';
import number03 from '../media/assets/number03.svg';
import number04 from '../media/assets/number04.svg';

import portabilidad from '../media/Formato Portabilidad.pdf';





class  Portabilidad extends React.Component
{
   




  componentDidMount() {

  }


render()
    {
        return(
       
               <div className="">
        <div className="header-purple col-12">
            <h2>Cámbiate a ON <br/> ¡Te queremos en la familia!</h2>
        </div>
        <div className="title">
            <h4>Al contratar Internet de ON Alámbrico + telefonía fija,<br/> podrás <strong>CONSERVAR TU LÍNEA TELEFÓNICA,</strong>  además así <br/>podrás pagar todos tus servicios juntos.</h4>
            <h3 className="h-gray mt-4">SOLO SIGUE ESTOS <strong className="strong-t">PASOS SENCILLITOS:</strong> </h3>
        </div>
        <div className="gray-stripe" >
            <div className="row d-flex justify-content-center col-lg-8 col-md-8 offset-md-2 col-sm-12 col-12">
                <div className="col-2 step-container">
                    <img src={number01} className="steps"/>
                </div>
                <div className="col-9">
                <span className="step-text"><b>NO CANCELES LA LÍNEA CON TU COMPAÑÍA ACTUAL HASTA QUE SE REALICE EL CAMBIO DE COMPAÑÍA.</b></span> <br/><small className="small-text legales_portabilidad">Tranqui, nosotros te avisaremos.</small>
                </div>
            </div>
        </div>
        <div className="white-stripe">
            <div className="row d-flex justify-content-center col-lg-8 col-md-8 offset-md-2 col-sm-12 col-12">
                <div className="col-2 step-container">
                    <img src={number02} className="steps"/>
                </div>
                <div className="col-9">
                <span className="step-text"><b>LLENA LA SOLICITUD DE PORTABILIDAD Y FÍRMALO. </b></span> <br/><a className="formato-download" href={portabilidad} target='_blank'>DESCARGA AQUÍ EL FORMATO.</a>
                </div>
            </div>
        </div>
        <div className="gray-stripe">
            <div className="row d-flex justify-content-center col-lg-8 col-md-8 offset-md-2 col-sm-12 col-12">
                <div className="col-2 step-container">
                    <img src={number03} className="steps"/>
                </div>
                <div className="col-9">
                <span className="step-text"><b>COPIA DE UNA IDENTIFICACIÓN OFICIAL VIGENTE. </b></span> <br/><small className="small-text legales_portabilidad">IFE/INE, pasaporte o cédula profesional.</small>
                </div>
            </div>
        </div>
        <div className="white-stripe">
            <div className="row d-flex justify-content-center col-lg-8 col-md-8 offset-md-2 col-sm-12 col-12">
                <div className="col-2 step-container">
                    <img src={number04} className="steps"/>
                </div>
                <div className="col-9">
                <span className="step-text"><b>ENVÍANOS EL FORMATO FIRMADO, LA COPIA DE LA IDENTIFICACIÓN Y EL NIP A:  </b></span> <br/><small className="small-text legales_portabilidad"><a href="mailto:portabilidad@oninternet.com.mx">portabilidad@oninternet.com.mx</a> para comenzar con el proceso. <br/>El NIP lo obtendrás marcando al 051 
                    <br/><strong className="strong-small">(tiene vigencia de 5 días naturales y es indispensable que marques desde el número telefónico que tienes actualmente y quieres portar).</strong></small>
                </div>
            </div>
        </div>

        <div className="dudas">
            <h3>¿Dudas? Llámanos al <strong className="strong-dudas"><a href="tel:55 9628 3474">55 9628 3474</a></strong></h3>
        </div>
        <div className="terminos mt-3">
            <h6><a href="/terms-and-conditionspor">TÉRMINOS Y CONDICIONES</a></h6>
            <p>Vigencia al 30 de Septiembre de 2020. Aplica para Clientes que solicitan Portabilidad.</p>
        </div>
    </div>

              
        );
    }

}
export default Portabilidad;
