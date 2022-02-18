import React from 'react';
import TocPage from './generic/TocPage';
import getLegalLinks from './Legal/getLegalLinks';

const TermsAndConditions = props =>
{
    return (
        <div id='terms-and-conditions' className='container p-4'>
            <TocPage history={props.history} links={getLegalLinks()}>
                <h4>TÉRMINOS Y CONDICIONES</h4>

            <p>SERVICIO ALÁMBRICO. </p>
            <p>1.   Servicio de internet mediante xDSL (cable) o FTTPH (fibra), a través de un Equipo terminal (módem), mismo que puede otorgarse en comodato el cual no cuenta con un límite de capacidad; la velocidad de navegación será con base al paquete contratado. </p>
            <p>2.   La velocidad puede variar dependiendo de la distancia a la que se encuentre el dispositivo a conectar del módem, los dispositivos conectados de manera simultánea, las interferencias por teléfonos y otras señales de Wi-Fi cercana. Los materiales de construcción de una casa influyen en la señal de recepción, ya que dependiendo el material es mayor o menor la intensidad de la señal. </p>
            <p>3.   El Suscriptor podrá conectar sus dispositivos a Internet a través de WIFI o mediante cable de red (Ethernet). </p>
            <p>4.   El equipo terminal será instalado en el domicilio del Suscriptor en un plazo máximo de 10 días.</p>
            <p>5.   Si el Suscriptor desea terminar el contrato con ON Alámbrico, podrá realizarlo llamando al Centro de Atención a Clientes para solicitar la cancelación estando al corriente en sus pagos y cubriendo el costo de los gastos de instalación en los que el proveedor incurre para brindar el servicio. Para concluir el contrato, deberá entregar a Cofresa el equipo terminal otorgado para el uso del servicio o de lo contrario pagar el monto de la terminal de acuerdo al tipo de servicio que se proporcionó, dicho costo se encuentra en el apartado de costos por componentes dentro del sitio de oninternet.com.mx</p>
            <p>Términos y condiciones de la promoción más velocidad.</p>
            <p>Los servicios están sujetos a disponibilidad de cobertura, condiciones, facilidades técnicas y diversos factores pueden afectar la velocidad de navegación del servicio. Vigencia al  28 de febrero de 2022 o hasta agotar existencias. Sujetos a cambio con previa autorización de la Autoridad competente.</p>
            <p>TARIFAS Y PRECIOS DE SERVICIOS.  </p>

            <table className='table table-striped table-bordered'>
                <thead className='thead-dark'>
                     <tr>
                        <th colspan={2}>GASTOS DE INSTALACIÓN $800</th>
                    </tr>
                    <tr>
                        <th>PAQUETE</th>
                        <th>MENSUALIDAD</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Internet 20 </td>
                        <td> $349</td>
                    </tr>
                    <tr>
                        <td>Internet 30 </td>
                        <td> $399</td>
                    </tr>
                    <tr>
                        <td>Internet 150 </td>
                        <td> $549</td>
                    </tr>
                    <tr>
                        <td>Internet 200 </td>
                        <td> $899</td>
                    </tr>
                </tbody>
            </table>

<p>La velocidad contratada estará comprendida entre la unidad terminal de datos entregada a EL SUSCRIPTOR y hasta el primer punto de acceso a la red de EL PROVEEDOR, conforme a las velocidades registradas ante el IFT. EL SUSCRIPTOR acepta y reconoce que la velocidad contratada puede variar durante el día, dependiendo de sus hábitos de consulta de información en la red de Internet, el número de equipos conectados de manera simultanea a la red, los servicios donde consulta información y la capacidad de transmisión de los mismos. La velocidad contratada por EL SUSCRIPTOR puede ser mermada debido a que la información viaja por medios físicos expuestos a factores de temperatura, humedad, clima, calidad de instalación interior de EL SUSCRIPTOR, y que es responsabilidad de esté. EL PROVEEDOR prestara EL SERVICIO de acuerdo a los parámetros que establezca el IFT. EL SUSCRIPTOR está consiente y acepta que la velocidad puede ser afectada dependiendo de la localización de su domicilio.</p>

            <p>*Tarifas incluyen IVA</p>
            <p>COBERTURA</p>
            <p>Toda contratación deberá estar dentro de la zona de cobertura, cualquier solicitud que se encuentre fuera de la zona de cobertura no podrá ser procesada. En caso de que existan restricciones que impidan la instalación, incluso dentro de la zona de cobertura se determinará como imposibilidad técnica (IT) y le será notificado oportunamente al Suscriptor.</p>
            <p>REQUISITOS DE CONTRATACIÓN </p>
            <p>•    Identificación oficial vigente: INE, Pasaporte o Cédula Profesional, Acta Constitutiva y Poder (personas morales)</p>
            <p>•    Comprobante de domicilio: Recibo de luz, predial, recibo telefónico, recibo de agua.</p>
            <p>•    Carátula de servicios (debidamente firmado): Completar con las firmas del Suscriptor y sin datos faltantes.</p>
            <p>•    Para el registro de tarjeta con cargo recurrente: Se deberá especificar dentro de la carátula y el Suscriptor debe firmar de aceptación el apartado de cargo recurrente.</p>
            <p>•    Gastos de Instalación: Deberá estar cubierto previo a la instalación en efectivo o con tarjeta de crédito o débito. </p>
            <p>En caso de haber adquirido una promoción de descuento en la contratación del servicio, este monto se descontará del total a pagar en la instalación.En  caso de haber adquirido una promoción de pago diferido, el monto correspondiente se verá reflejado en los estados de cuenta posteriores para pago del Suscriptor.</p>
            <p>ESTADO DE CUENTA </p>
            <p>Las rentas de los planes residenciales cuentan con una fecha límite de pago, misma que corresponde al precio de lista por el o los servicios contratados, en caso de que no se realice dentro de esa fecha establecida, se aplicará un gasto de cobranza y/o gasto de reconexión respectivamente en el siguiente estado de cuenta del cliente. </p>
            <p>El estado de cuenta mes con mes se podrá consultar al inciar sesión en el Portal ON en oninternet.com.mx. Si el Suscriptor lo desea,  se le enviará a la dirección de correo electrónico que se indicó al momento de la contratación del servicio. El envío del Estado de cuenta no estará programado y solo se enviará cuando el Suscriptor lo indique. El cobro de las rentas de los paquetes y servicios adicionales se pagan a mes vencido.</p>
            <p>OPCIONES DE PAGO </p>
            <p>•    Con cargo recurrente a tu tarjeta de crédito/débito llamando al número de Atención a Clientes al (55) 9628 3474 </p>
            <p>•    Con cargo en línea, a tarjeta de crédito/débito llamando al número de Atención a Clientes  (55) 9628 3474 </p>
            <p>•    En efectivo en los centros de pago designados por Cofresa, mismos que pueden ser consultados dentro del portal en la siguiente liga: https://oninternet.com.mx/places-of-payment</p>
            <p>CONTRACARGOS O CARGOS NO RECONOCIDOS EN SU TARJETA*</p>
            <p>En caso de que a Cofresa le sea notificado por parte del Banco emisor en más de dos ocasiones que la tarjeta de crédito y/o débito que proporcionó para realizar el pago de los Servicios ha sido reportada con un contracargo o reclamo de cargo no reconocido, Cofresa tendrá la facultad de no aceptar este método de pago, debiendo el Suscriptor de realizar todos los pagos de los servicios mediante una vía alterna. Lo anterior también aplicará cuando Cofresa detecte, en más de dos ocasiones, contracargos o reclamos de cargos no reconocidos en una misma cuenta que intenta ser pagada con diferentes tarjetas de crédito y/o débito. El servicio prestado por Cofresa no será reactivado hasta que se cubra el pago total del saldo total de la cuenta.</p>
            <p>SERVICIO TELEFONÍA.</p>
            <p>Servicio de Telefonía móvil operado por un OMV (operador móvil virtual),  el cual puede ser consultado en la página: https://www.dishcelular.com.mx/</p>
            <p>SERVICIO TELEVISIÓN DE PAGA </p>
            <p>Servicio de televisión restringida vía satélite, el cual consiste en llevar directo a casa programación con fines de entretenimiento y/o diversión en su contenido. Para mayor información ingresa a: https://dish.com.mx/</p>
            <p>POLÍTICA DE USO JUSTO PARA INTERNET </p>
            <p>Al utilizar los servicios de transmisión de datos de Cofresa, el Suscriptor acepta y está de acuerdo en cumplir los términos de esta política. El Servicio de Cofresa, es comercializado para el uso estrictamente personal de Internet y no puede ser utilizado con propósitos comerciales.</p>
            <p>Queda prohibido el cobro a terceros por el uso del servicio que el Suscriptor está contratando. Así mismo, acepta que no podrá operar o permitir que terceros operen servidores de cualquier tipo y/o conectar dispositivos, hardware o software que brinden la funcionalidad de servidor a través del servicio de Cofresa. En todo momento el Suscriptor será responsable del buen uso de la red y se compromete a utilizar el servicio de red de acuerdo con los términos y condiciones establecidos en el contrato de prestación de servicios conforme con el contratado. El Suscriptor se compromete a que las actividades que realice en el uso del servicio de Internet no limitarán, bloquearán o de cualquier forma afectarán la red. En caso de que Cofresa detecte que el servicio que el Suscriptor contrató infringe cualquiera de las políticas antes descritas, podrá cancelarle y/o suspenderle el servicio y cobrar los gastos adicionales que su actividad genere.</p>
            <p>La información aquí descrita o en la página de internet es información exclusiva de Comercializadora de Frecuencias Satelitales S. de R.L. de C.V., y/o sus socios comerciales para promoción de sus servicios. Derechos reservados. El material incluyendo imágenes, textos logos y cualquier otro elemento constituyen derechos de autor y propiedad intelectual usada bajo autorización, protegidos por leyes mexicanas e internacionales.</p>


            </TocPage>
        </div>
    );
}

export default TermsAndConditions;