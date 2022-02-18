import React from 'react';
import TocPage from './generic/TocPage';
import getLegalLinks from './Legal/getLegalLinks';

const TermsAndConditions = props =>
{
    return (
        <div id='terms-and-conditions' className='container p-4'>
            <TocPage history={props.history} links={getLegalLinks()}>
                <h4>TÉRMINOS Y CONDICIONES</h4>

            <p>TÉRMINOS Y CONDICIONES PARA SERVICIOS RESIDENCIALES TELEFONÍA MOVIL OPERADA A TRAVÉS DE UN OMV (OPERADOR MÓVIL VIRTUAL) , INTERNET Y TELEVISIÓN DE PAGA DE COMERCIALIZADORA DE FRECUENCIAS SATELITALES S. DE R.L. DE C.V. EN ADELANTE <b>“Cofresa”</b>.</p>   
            <p>SERVICIO INALÁMBRICO</p>
            <p>1.   Es un servicio que mediante tecnologías móviles a través de un equipo terminal (módem) conecta al Suscriptor a Internet, previa activación de Cofresa con base al domicilio registrado y  confirmado por el Suscriptor, mismo que puede otorgarse en arrendamiento y/o comodato. El suscriptor podrá conectar a internet sus dispositivos vía WIFI o o cable de red (Ethernet). </p>
            <p>2.   Los paquetes ofertados de ON Inalámbrico cuentan con una capacidad definida en cada ciclo que al alcanzar su límite, el Suscriptor podrá seguir navegando a una velocidad reducida de 512 Kbps por 60 GB de capacidad. </p>
            <p>3.   En caso de que el Suscriptor lo desee, podrá contratar un “Paquete  GB adicional” para que vuelva a navegar a la velocidad contratada por lo que dure el “Paquete GB adicional” contratado. </p>
            <p>4.   Los “Paquetes GB adicionales”cuentan con una vigencia de 1 día posterior a la adquisición del mismo. El Suscriptor podrá contratar los “Paquetes GB adicionales” que desee durante su ciclo una vez que haya agotado la capacidad que su Paquete principal contratado incluye.</p>
            <p>5.   Los “Paquetes GB adicionales” los podrá contratar llamándo a Atención al Cliente y podrá pagarlos con tarjeta de crédito/débito o con cargo a su estado de cuenta. </p>
            <p>6.   Al iniciar un nuevo ciclo, la capacidad del paquete contratado se reanudará en automático. </p>
            <p>7.   El consumo de la capacidad se da según las actividades que cada Suscriptor realice en Internet, desde enviar y recibir correos electrónicos, descargar y subir archivos, visualizar videos, películas, etc. en plataformas especiales y streaming. </p>  
            <p>8.   El consumo de la capacidad varía según la cantidad de dispositivos que se conecten simultáneamente; entre más dispositivos haya conectados, el consumo de la misma será más rápido.</p>
            <p>9.   El equipo terminal será entregado en el domicilio del Suscriptor en un plazo máximo de 10 días.</p>
            <p>10.  El servicio de ON Inalámbrico no es móvil, por lo cual no permite desplazarlo fuera del domicilio registrado en la venta y/o instalación del módem. </p>
            <p>11.  Si el Suscriptor llega a conectar el equipo fuera del domicilio registrado, el servicio se suspenderá y se reactivará en automático cuando éste regrese y se encienda en el domicilio registrado, la reactivación se realizará en un periodo máximo de una hora.</p>
            <p>12.  Si el Suscriptor desea realizar un cambio de domicilio, con el fin de utilizar el Servicio de Internet en una domicilio diferente al registrado, deberá llamar al Centro de Atención al Cliente (55) 9628 3474 para poder verificar disponibilidad de cobertura en el nuevo domicilio y proceder con dicho cambio. </p>
            <p>13.  A partir del segundo cambio de domicilio, se cobrará $100 por cada cambio que el Suscriptor solicite, mismo que podrá pagar con tarjeta de crédito o débito llamando a Atención a Clientes o cargo a su estado de cuenta ON.</p>
            <p>14.  La velocidad puede variar dependiendo de la distancia a la que se encuentre el dispositivo a conectar del módem, los dispositivos conectados de manera simultánea, las interferencias por teléfonos y otras señales de Wi-Fi cercana. Los materiales de construcción de una casa influyen en la señal de recepción, ya que dependiendo el material es mayor o menor la intensidad de la señal. </p>
            <p>15.  Las velocidades de transferencia de Internet se ofrecen hasta la velocidad indicada y pueden variar debido al tráfico y transferencia de datos fuera de la red de ON. Las velocidades de carga varían en los planes debido a que el servicio de Internet es asimétrico.</p>
            <p>16.  Si el Suscriptor desea terminar el contrato con ON Inalámbrico, podrá realizarlo llamando al Centro de Atención a Clientes para solicitar la cancelación y deberá estar al día con sus pagos. Para concluir el contrato, deberá entregar a Cofresa el equipo terminal otorgado para el uso del servicio o de lo contrario pagar el monto de la terminal, dicho costo se encuentra en el apartado de costos por componentes dentro del sitio de oninternet.com.mx. </p>
            <p>INDICADORES DE CALIDAD:</p>

            <table className='table table-striped table-bordered'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>INDICADOR</th>
                            <th>MEDICIÓN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Transmisión de Datos de Descarga</td>
                            <td>Cantidad promedio de Datos descargada con respecto a 1 (un) segundo y que deberá ser de al menos 4 (cuatro) Megabits por segundo en el borde de Cobertura exterior (no en inmuebles) en Hora Pico de la Red Compartida.</td>
                        </tr>
                        <tr>
                            <td> Transmisión de Datos de Carga</td>
                            <td> Cantidad promedio de Datos enviada con respecto a 1 (un) segundo y que deberá ser de al menos 1 (un) Megabit por segundo en el borde de Cobertura exterior (no en inmuebles) en Hora Pico de la Red Compartida.</td>
                        </tr>
                        
                    </tbody>
                </table>
                <p>La velocidad contratada estará comprendida entre la unidad terminal de datos entregada a EL SUSCRIPTOR y hasta el primer punto de acceso a la red de EL PROVEEDOR, conforme a las velocidades registradas ante el IFT. EL SUSCRIPTOR acepta y reconoce que la velocidad contratada puede variar durante el día, dependiendo de sus hábitos de consulta de información en la red de Internet, el número de equipos conectados de manera simultanea a la red, los servicios donde consulta información y la capacidad de transmisión de los mismos. La velocidad contratada por EL SUSCRIPTOR puede ser mermada debido a que la información viaja por medios físicos expuestos a factores de temperatura, humedad, clima, calidad de instalación interior de EL SUSCRIPTOR, y que es responsabilidad de esté. EL PROVEEDOR prestara EL SERVICIO de acuerdo a los parámetros que establezca el IFT. EL SUSCRIPTOR está consiente y acepta que la velocidad puede ser afectada dependiendo de la localización de su domicilio.</p>
            <p>TARIFAS Y PRECIOS DE SERVICIOS. </p>
            <p>El cobro del servicio será a partir de la instalación y activación del servicio, determinado de acuerdo al paquete contratado.</p>

             <table className='table table-striped table-bordered'>
                    <thead className='thead-dark'>
                         <tr>
                            <th colspan={3}>Gastos de Activación $799</th>
                        </tr>
                        <tr>
                            <th>PAQUETE</th>
                            <th>CAPACIDAD</th>
                            <th>MENSUALIDAD</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> Internet 5 </td>
                            <td> 80 GB</td>
                            <td> $249</td>
                        </tr>
                        <tr>
                            <td> Internet 10  </td>
                            <td> 120 GB</td>
                            <td> $419</td>
                        </tr>
                        <tr>
                            <td> Internet 10 </td>
                            <td> 200 GB</td>
                            <td> $649</td>
                        </tr>
                        <tr>
                            <td> Internet 20 </td>
                            <td> 180 GB</td>
                            <td> $759</td>
                        </tr>
                        
                    </tbody>
                </table>

                 <table className='table table-striped table-bordered'>
                    <thead className='thead-dark'>
                         <tr>
                            <th colspan={2}>Paquetes GB adicionales</th>
                        </tr>
                        <tr>
                            <th>CAPACIDAD</th>
                            <th>PRECIO CON IVA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>5 GB</td>
                            <td>$40</td>
                        </tr>
                        
                        
                    </tbody>
                </table>

            <p>No disponibles para venta nueva</p>
            <table className='table table-striped table-bordered table-disabled'>
                    <thead className=''>
                         <tr>
                            <th colspan={3}>Gastos de Activación $2,000</th>
                        </tr>
                        <tr>
                            <th>PAQUETE</th>
                            <th>CAPACIDAD</th>
                            <th>MENSUALIDAD</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> Internet 5 </td>
                            <td> 80 GB</td>
                            <td> $199</td>
                        </tr>
                        <tr>
                            <td> Internet 10 </td>
                            <td> 120 GB</td>
                            <td> $369</td>
                        </tr>
                        <tr>
                            <td> Internet 20 </td>
                            <td> 180 GB</td>
                            <td> $709</td>
                        </tr>
                        
                    </tbody>
                </table>



                 


              

            <p>*Tarifas incluyen IVA</p>
            <p>COBERTURA</p>
            <p>Toda contratación deberá estar dentro de la zona de cobertura, cualquier solicitud que se encuentre fuera de la zona de cobertura no podrá ser procesada. En caso de que existan restricciones que impidan la instalación, incluso dentro de la zona de cobertura se determinará como imposibilidad técnica (IT) y le será notificado oportunamente al Cliente.</p>
            <p>EQUIPOS TERMINALES (MÓDEMS) Y TARJETA SIM</p>
            <p>El Servicio provisto sólo será prestado en el Equipo Terminal Asignado al Suscriptor, éste será determinado exclusivamente por Cofresa. </p>
            <p>La tarjeta SIM no podrá ser utilizada y no funcionará en otros equipos terminales, equipos móviles o módem diferentes al registrado y homologado por el prestador de servicio, de lo contrario, Cofresa no será responsable y no podrá garantizar la calidad del servicio.</p>
            <p>En Caso de robo o extravío el módem, el Suscriptor deberá llamar al Centro de Atención a Clientes para poder con el bloqueo de IMEI. </p>
            <p>REQUISITOS DE CONTRATACIÓN </p>
            <p>•    Identificación oficial vigente: INE , Pasaporte o Cédula Profesional, Acta Constitutiva y Poder (personas morales).</p>
            <p>•    Comprobante de domicilio: Recibo de luz, predial, recibo telefónico, recibo de agua.</p>
            <p>•    Carátula de servicios (debidamente firmado): Completar con las firmas del Suscriptor y sin datos faltantes.</p>
            <p>•    Para el registro de tarjeta con cargo recurrente: Se deberá especificar dentro de la carátula y el Suscriptor debe firmar de aceptación el apartado de cargo recurrente.</p>
            <p>•    Pago de gastos de activación: Deberá estar cubierto previo a la instalación en efectivo o tarjeta de crédito/débito.</p>
            <p>En caso de haber adquirido una promoción de descuento en la contratación del servicio, este monto se descontará del total a pagar en la instalación.En  caso de haber adquirido una promoción de pago diferido, el monto correspondiente se verá reflejado en los estados de cuenta posteriores para pago del Suscriptor.</p>
            <p>ESTADO DE CUENTA </p>
            <p>Las rentas de los planes residenciales cuentan con una fecha límite de pago, misma que corresponde al precio de lista por el o los servicios contratados; en caso de que no se realice dentro de esa fecha establecida, se aplicará un gasto de cobranza y/o gasto de reconexión respectivamente en el siguiente estado de cuenta del Suscriptor. </p>
            <p>El estado de cuenta mes con mes se podrá consultar al inciar sesión en el Portal ON en oninternet.com.mx o en la Aplicación de ON Internet que podrá descargar de forma gratuita (la aplicación está disponible únicamente para Suscriptores que solo tengan contratado ON Inalámbrico y no tengan ningún otro servicio de Cofresa). Si el Suscriptor lo desea,  se le enviará a la dirección de correo electrónico que se indicó al momento de la contratación del servicio. El envío del Estado de cuenta no estará programado y solo se enviará cuando el Suscriptor lo indique. El cobro de las rentas de los paquetes y servicios adicionales se pagan a mes vencido.</p>
            <p>OPCIONES DE PAGO </p>
            <p>•    Con cargo recurrente a tu tarjeta de crédito/débito llamando al número de Atención a Clientes al (55) 9628 3474 </p>
            <p>•    Con cargo en línea, a tarjeta de crédito/débito llamando al número de Atención a Clientes  (55) 9628 3474 </p>
            <p>•    En efectivo directo en los centros de pago designados por Cofresa, mismos que pueden ser consultados dentro del portal en la siguiente liga: https://oninternet.com.mx/places-of-payment</p>
            <p>SUSPENSIÓN DEL SERVICIO</p>
            <p>El servicio podrá ser suspendido si sucede cualquiera de las siguientes condiciones:</p>
            <p>-    El Suscriptor no realizó el pago de su servicio en el periodo determinado por lo que incurrió en morosidad, el servicio será reactivado una vez liquidado el adeudo generado.</p>
            <p>-    El Suscriptor movió su equipo a una ubicación o domicilio diferente al registrado en la contratación, el servicio será reactivado una vez que el Suscriptor conecte y encienda el módem en el domicilio registrado, el cual se reactivará en un periodo máximo de una hora.</p>
            <p>CONTRACARGOS O CARGOS NO RECONOCIDOS EN SU TARJETA*</p>
            <p>En caso de que a Cofresa le sea notificado por parte del Banco emisor en más de dos ocasiones que la tarjeta de crédito y/o débito que proporcionó para realizar el pago de los Servicios ha sido reportada con un contracargo o reclamo de cargo no reconocido, Cofresa tendrá la facultad de no aceptar este método de pago, debiendo el Suscriptor de realizar todos los pagos de los servicios mediante una vía alterna. Lo anterior también aplicará cuando Cofresa detecte, en más de dos ocasiones, contracargos o reclamos de cargos no reconocidos en una misma cuenta que intenta ser pagada con diferentes tarjetas de crédito y/o débito. El servicio prestado por Cofresa no será reactivado hasta que se cubra el pago total del saldo total de la cuenta.</p>
            <p>SERVICIO TELEFONÍA. </p>
            <p>Servicio de Telefonía móvil operado por un OMV (operador móvil virtual),  el cual puede ser consultado en la página: https://www.dishcelular.com.mx/</p>
            <p>SERVICIO TELEVISIÓN DE PAGA </p>
            <p>Servicio de televisión restringida vía satélite, el cual consiste en llevar directo a casa programación con fines de entretenimiento y/o diversión en su contenido. Para mayor información ingresa a: https://dish.com.mx/</p>
            <p>POLÍTICA DE USO JUSTO PARA INTERNET </p>
            <p>Al utilizar los servicios de transmisión de datos de Cofresa, el Suscriptor acepta y está de acuerdo en cumplir los términos de esta política. El Servicio de Cofresa, es comercializado para el uso estrictamente personal de Internet y no puede ser utilizado con propósitos comerciales.</p>
            <p>Queda prohibido el cobro a terceros por el uso del servicio que el Suscriptor está contratando. Así mismo, acepta que no podrá operar o permitir que terceros operen servidores de cualquier tipo y/o conectar dispositivos, hardware o software que brinden la funcionalidad de servidor a través del servicio de Cofresa. En todo momento el Suscriptor será responsable del buen uso de la red y se compromete a utilizar el servicio de red de acuerdo con los términos y condiciones establecidos en el contrato de prestación de servicios conforme con el contratado. El Suscriptor se compromete a que las actividades que realice en el uso del servicio de Internet no limitarán, bloquearán o de cualquier forma afectarán la red. En caso de que Cofresa detecte que el servicio que el Suscriptor contrató infringe cualquiera de las políticas antes descritas, podrá cancelarle y/o suspenderle el servicio y cobrar los gastos adicionales que su actividad genere.</p>
            <p>La información aquí descrita o en la página de internet es información exclusiva de Comercializadora de Frecuencias Satelitales S. de R.L. de C.V., y/o sus socios comerciales para promoción de sus servicios. Derechos reservados. El material incluyendo imágenes, textos logos y cualquier otro elemento constituyen derechos de autor y propiedad intelectual usada bajo autorización, protegidos por leyes mexicanas e internacionales.</p><br></br>
            <p><strong>PAGO DE GASTOS DE ACTIVACIÓN A MESES SIN INTERESES:</strong></p>
            <p>El pago de los gastos de activación a 3 meses sin intereses aplica con Tarjeta de Crédito HSBC y BBVA. Todos los paquetes están sujetos a condiciones técnicas y disponibilidad de cobertura. *Precios señalados son de carácter informativo, en moneda nacional e impuestos incluidos del 16%, sujetos a cambio previa autorización de la Autoridad competente. Si quieres conocer más consulta términos y condiciones en oninternet.com.mx. La información aquí presentada (imágenes, textos, logos y cualquier elemento), constituye derechos de autor y propiedad intelectual usada con autorización de su titular, protegidos por las leyes aplicables. Vigencia válida al  28 de febrero de 2022.</p>

            <p><strong>PROMOCIÓN DOBLE DE GB</strong></p>
            <p>Promoción válida a partir del 17 de mayo al 15 de junio de 2021 o agotar quinientas contrataciones de algún plan postpago de ON Inalámbrico. La promoción solo será aplicable a clientes que contraten dentro de la vigencia de la promoción y que llamen al teléfono 5527342222 para activarla. Sujeto a condiciones técnicas y disponibilidad de cobertura.</p>
          
           
          

            </TocPage>
        </div>
    );
}

export default TermsAndConditions;