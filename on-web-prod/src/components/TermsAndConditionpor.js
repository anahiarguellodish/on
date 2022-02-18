import React from 'react';
import TocPage from './generic/TocPage';
import getLegalLinks from './Legal/getLegalLinks';

const TermsAndConditions = props =>
{
    return (
        <div id='terms-and-conditions' className='container p-4'>
            <TocPage history={props.history} links={getLegalLinks()}>
                <h4>TÉRMINOS & CONDICIONES PARA REALIZAR LA PORTABILIDAD NUMÉRICA CON ON INTERNET</h4>

                <p><b>PORTABILIDAD NÚMERICA.</b>- Es un derecho que otorga el IFT a EL USUARIO DE TELEFONÍA, para poder conservar su mismo número telefónico cuando sea su decisión cambiar de proveedor de servicios de telecomunicación, dicho trámite no tiene costo para EL USUARIO. </p>
                <p><b>PROCESO PARA REALIZAR LA PORTABILIDAD NÚMERICA</b></p>

                <ul>
                	<li>1.	El Usuario no deberá cancelar su línea telefónica con su compañía actual hasta que se realice el cambio de proveedor. ON Internet informará al Cliente cuando esto suceda vía telefónica, mensaje de texto o correo electrónico, en el lapso señalado para ello. </li>
                	<li>2.	El Usuario deberá descargar y completar la solicitud de portabilidad, misma que puede descargar en:  en oninternet.com.mx. </li>
                	<li>3.	El Usuario marcará desde la línea telefónica que quiere portar al 051 (número indicado por la Autoridad para realizar la postabilidad numérica), en donde se le otorgará un NIP con una duración de 5 días hábiles.</li>
                	<li>4.	El Usuario deberá enviar vía correo electrónico a la dirección <a href="mailto:portabilidad@oninternet.com.mx">portabilidad@oninternet.com.mx</a>, la Solicitud de Portabilidad debidamente firmada y la copia de su Identificación Oficial, especificando en el cuerpo del correo el NIP que se le otorgó cuando llamó al 051.</li>
                	<li>5.	ON Internet gestionará la portabilidad en un lapso no mayor a 24 horas después de que el USUARIO haya realizado la solicitud con toda la documentación y requerimientos necesarios. ON Internet  confirmará al Usuario cuando se haya realizado la portabilidad con éxito. </li>
                </ul>

                <p><b>REQUISISTOS PARA REALIZAR LA PORTABILIDAD DE NUMERO </b></p>

                <p>Para que ON Internet pueda realizar la portabilidad del número telefónico, “EL SUSCRIPTOR” debe de tener liquidado el saldo y  no contar con ningún adeudo con su Proveedor de servicios de telecomunicaciones, en su caso, haya cumplido con el plazo forzoso (en caso de estar sujeto a uno), ya que que ON Internet no será responsable, de las obligaciones contraídas con otros operadores para que se lleve a cabo la portabilidad. </p>

                <p>Los requisitos son los siguientes: </p>

                <ul>
                	<li>Marcar desde la línea telefónica de tu proveedor anterior al 051 para solicitar el NIP de portabilidad, mismo que será enviado por un sistema automatico, que depende del Instituto Federal de Telecomunicaciones (IFT) y el cual es un requisito indispensable para iniciar el proceso de portabilidad.</li>
                	<li>Completar la Solicitud de Portabilidad con los datos certeros del Usuario y línea telefónica. </li>
                	<li>Copia de Identificación Oficial Vigente (IFE/INE, pasaporte o cédula profesional).</li>

                </ul>


                <p><b>FORMATO DE PORTABILIDAD</b></p>

                <p>El formato de portabilidad es un documento que debe de ser llenado, firmado y entregado a ON Internet. Si existen dudas, ON Internet pone a tu disposición la información en el portal web <a href="https://oninternet.com.mx/faq"> oninternet.com.mx/faq </a> o en el número de atención a clientes 55 56 10 10 10 / 55 9628 3474. </p>

                <p><b>PAQUETES ON ALÁMBRICO INTERNET + TELEFONÍA FIJA</b></p>

                <p>ON Internet pone a tu disposición sus paquetes, para que puedas disfrutar de nuestro servicio, de acuerdo a tus necesidades, los cuales son: </p>
                <ul>
                	<li>Hasta 20 megas + 1 línea con llamadas ilimitadas.</li>
                	<li>Hasta 30 megas + 1 línea con llamadas ilimitadas.</li>
                	<li>Hasta 40 megas + 1 línea con llamadas ilimitadas.</li>
                	<li>Hasta 200 megas + hasta 3 líneas con llamadas ilimitadas.</li>

                </ul>


                <p><b>INICIO DE PORTABILIDAD.</b></p>

                <ul>
                	<li>El proceso de portabilidad inicia cuando el servicio de ON Internet se encuentra instalado y funcionando.</li>
					<li>La generación del NIP de portabilidad es responsabilidad del Instituto Federal de Telecomunicaciones (IFT), y ON Internet es ajeno a ese proceso. </li>
					<li>El trámite se realiza a través del correo electrónico: portabilidad@oninternet.com.mx</li>
					<li>El Suscriptor acepta que al realizar el trámite de portabilidad y la firma del formato acepta que se adhiere a las condiciones del servicio de ON Internet y desde la activación e instalación del servicio con ON Internet queda sujeto al cumplimiento de estos. </li>
					<li>EL SUSCRIPTOR reconoce que el tiempo máximo para llevar a cabo la portabilidad es de 24 horas, contadas a partir del envío del NIP de portabilidad y documentos solicitados a ON Internet</li>


                </ul>

                <p><b>LAPSO DE ATENCIÓN. </b></p>

                <p>El horario para recibir las solicitudes de portabilidad será de 9:00 a 21:00 horas, de lunes a viernes, en caso de la solicitudes recibidas en sabado o domingo, así como las solicitudes que sen recibidas fuera de ese horario comenzarán su proceso formalmente al día hábil siguiente. </p>

                <p><b>ATENCIÓN DE DUDAS Y/O CONSULTAS </b></p>

                <p>Para mayor información sobre el trámite de portabilidad puedes ingresar a la página del Instituto Federal de Telecomunicaciones “IFT”<a href="www.if.org.com"> www.if.org.com</a> </p>


                <p>Puedes llamar al número de Atención al Cliente de ON Internet: 55 56 10 10 10 / 55 9628 3474 o consultar en <a href="https://oninternet.com.mx/faq"> oninternet.com.mx/faq </a> las Preguntas Frecuentes.</p>


            </TocPage>
        </div>
    );
}

export default TermsAndConditions;