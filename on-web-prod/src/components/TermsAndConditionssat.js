import React from 'react';
import TocPage from './generic/TocPage';
import getLegalLinks from './Legal/getLegalLinks';

const TermsAndConditions = props =>
{
    return (
        <div id='terms-and-conditions' className='container p-4'>
            <TocPage history={props.history} links={getLegalLinks()}>
                <h4>TÉRMINOS Y CONDICIONES</h4>

            <p>SERVICIO ON SATELITAL</p>
            
            <p>1.   Es un servicio que mediante una antena colocada en el domicilio del Cliente, recibe la señal de internet del satélite y la transmite a través de un equipo terminal (Router) por el cual el Suscriptor se conecta a Internet vía WiFi o cable de red (Ethernet), previa activación de Cofresa, mismo que puede otorgarse en arrendamiento.</p>
            <p>2.   Los paquetes ofertados de ON Satelital cuentan con una capacidad definida en cada ciclo que al alcanzar la capacidad máxima del paquete, el Suscriptor podrá seguir navegando a una velocidad reducida de hasta 500 Kbps para el paquete Internet 3 con 5 GB y para todos los demás paquetes, la navegación reducida será de 1 Mega.</p>
            <p>3.   En caso de que el Suscriptor lo desee, podrá contratar un “Paquete GB adicional” para que vuelva a navegar a la velocidad contratada por lo que dure el “Paquete GB adicional” contratado.</p>
            <p>4.   Los “Paquetes GB adicionales” cuentan con una vigencia de 1 día posterior a la adquisición del mismo. El Suscriptor podrá contratar los “Paquetes GB adicionales” que desee durante su ciclo una vez que haya agotado la capacidad que su Paquete principal contratado incluye.</p>
            <p>5.   Los “Paquetes GB adicionales” los podrá contratar llamando a Atención al Cliente y podrá pagarlos con cargo a su estado de cuenta; sujeto a límite de crédito.</p>
            <p>6.   Al iniciar un nuevo ciclo, la capacidad del paquete contratado se reanudará en automático.</p>
            <p>7.   El consumo de la capacidad se da según las actividades que cada Suscriptor realice en Internet, desde enviar y recibir correos electrónicos, descargar y subir archivos, visualizar videos, películas, etc. en plataformas especiales y streaming. </p>
            <p>8.   El consumo de la capacidad varía según la cantidad de dispositivos que se conecten simultáneamente; entre más dispositivos haya conectados, el consumo de la misma será más rápido. </p>
            <p>9.   La velocidad puede variar dependiendo de la distancia a la que se encuentre el dispositivo a conectar del módem, los dispositivos conectados de manera simultánea, las interferencias por teléfonos y otras señales de Wi-Fi cercana. Los materiales de construcción de una casa influyen en la señal de recepción, ya que dependiendo el material es mayor o menor la intensidad de la señal. </p>
            <p>10.   El equipo terminal será instalado en el domicilio del Suscriptor en un plazo máximo de 10 días.</p>
            <p>11.   Los paquetes de ON Satelital cuentan con un plazo forzoso de 24 meses. </p>
            <p>12.   Si el Suscriptor desea terminar por anticipado el contrato, deberá pagar una penalización correspondiente al 20% del paquete contratado por los meses que le restan para concluir el plazo forzoso. </p>
            <p>13.  Para poder concluir el contrato, el Suscriptor podrá realizarlo llamando al Centro de Atención a Clientes para solicitar la cancelación y estar al día con sus pagos y pagar dicha penalización por cancelación anticipada. Para concluir el contrato, deberá entregar a Cofresa el equipo terminal otorgado para el uso del servicio o de lo contrario pagar el monto de la terminal, dicho costo se encuentra en el apartado de costos por componentes dentro del sitio de oninternet.com.mx.</p>
            <p>TÉRMINOS Y CONDICIONES DE LA PROMOCIÓN ACTIVA</p>
            <p>Precios de los paquetes señalados son informativos, Importes en moneda nacional e impuestos incluidos, sujetos a cambio previa autorización de la Autoridad competente. El beneficio de navegación ilimitada y el de los Gigabytes (GB) adicionales aplicarán por 2 y 12 meses contados a partir de la instalación respectivamente, y solo es aplicable si mantiene sus pagos puntuales y al corriente, a partir del mes 13 se reanudará en automático la capacidad inicial del paquete contratado. Los descuentos y beneficios referidos en los gastos de instalación son informativos. Los paquetes ofertados de ON Satelital cuentan con una capacidad definida en cada ciclo que al alcanzar la capacidad máxima del paquete, el Suscriptor podrá seguir navegando a una velocidad reducida de hasta 500 Kbps para el paquete Internet 3 con 5 GB y para todos los demás paquetes, la navegación reducida será de 1 Mega. El servicio está sujeto a disponibilidad de cobertura, condiciones y facilidades técnicas que pueden afectar la velocidad de navegación del servicio. Vigencia de la promoción y sus costos:  28 de febrero de 2022.</p>
            <p>TARIFAS Y PRECIOS DE SERVICIOS</p>
            <p>El cobro del servicio será a partir de la instalación y activación del servicio, determinado de acuerdo al paquete contratado.</p>


             <table className='table table-striped table-bordered'>
                <thead className='thead-dark'>
                     <tr>
                        <th colspan={3}>Gastos de Instalación $4,000</th>
                    </tr>
                    <tr>
                        <th>PAQUETE</th>
                        <th>CAPACIDAD</th>
                        <th>MENSUALIDAD</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Internet 3 </td>
                        <td> 5 GB</td>
                        <td> $779</td>
                    </tr>
                    <tr>
                        <td>Internet 5 </td>
                        <td> 15 GB</td>
                        <td> $1,019</td>
                    </tr>
                    <tr>
                        <td>Internet 10 </td>
                        <td> 20 GB</td>
                        <td> $1,199</td>
                    </tr>
                    <tr>
                        <td>Internet 10 </td>
                        <td> 40 GB</td>
                        <td> $1,799</td>
                    </tr>
                    <tr>
                        <td>Internet 20 </td>
                        <td> 60 GB</td>
                        <td> $2,199</td>
                    </tr>
                    <tr>
                        <td>Internet 25 </td>
                        <td> 20 GB</td>
                        <td> $1,399</td>
                    </tr>

                     <tr>
                        <td>Internet 30 </td>
                        <td> 100 GB</td>
                        <td> $3,099</td>
                    </tr>

                     <tr>
                        <td>Internet 30 </td>
                        <td> 150 GB</td>
                        <td> $4,599</td>
                    </tr>
                    
                </tbody>
            </table>

            <p>*Tarifas incluyen IVA</p>

            <p><b>INDICADORES DE CALIDAD:</b></p>

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
                                    <td>Cantidad promedio máxima de bits descargados con respecto a 1 (un) segundo, dentro de la cobertura del servicio ON Satelital y que varía según el producto contratado por el usuario final.</td>
                                </tr>
                                <tr>
                                    <td> Transmisión de Datos de Carga</td>
                                    <td> Cantidad promedio máxima de bits enviados con respecto a 1 (un) segundo, dentro de la cobertura del servicio ON Satelital y que varía según el producto contratado por el usuario final.</td>
                                </tr>
                                
                            </tbody>
                        </table>

                        <p>La velocidad contratada estará comprendida entre la unidad terminal de datos entregada a EL SUSCRIPTOR y hasta el primer punto de acceso a la red de EL PROVEEDOR, conforme a las velocidades registradas ante el IFT. EL SUSCRIPTOR acepta y reconoce que la velocidad contratada puede variar durante el día, dependiendo de sus hábitos de consulta de información en la red de Internet, el número de equipos conectados de manera simultanea a la red, los servicios donde consulta información y la capacidad de transmisión de los mismos. La velocidad contratada por EL SUSCRIPTOR puede ser mermada debido a que la información viaja por medios físicos expuestos a factores de temperatura, humedad, clima, calidad de instalación interior de EL SUSCRIPTOR, y que es responsabilidad de esté. EL PROVEEDOR prestara EL SERVICIO de acuerdo a los parámetros que establezca el IFT. EL SUSCRIPTOR está consiente y acepta que la velocidad puede ser afectada dependiendo de la localización de su domicilio.</p>
                           

            

            

            
            <p>COBERTURA</p>
            <p>Toda contratación deberá estar dentro de la zona de cobertura, cualquier solicitud que se encuentre fuera de la zona de cobertura no podrá ser procesada. En caso de que existan restricciones que impidan la instalación, incluso dentro de la zona de cobertura se determinará como imposibilidad técnica (IT) y le será notificado oportunamente al Cliente.</p>
            <p>REQUISITOS DE CONTRATACIÓN </p>
            <p>•    Identificación oficial vigente: INE, Pasaporte o Cédula Profesional, Acta Constitutiva y Poder (personas morales)</p>
            <p>•    Comprobante de domicilio: Recibo de luz, predial, recibo telefónico, recibo de agua.</p>
            <p>•    Carátula de servicios (debidamente firmado): Completar con las firmas del Suscriptor y sin datos faltantes.</p>
            <p>•    Para el registro de tarjeta con cargo recurrente: Se deberá especificar dentro de la carátula y el Suscriptor debe firmar de aceptación el apartado de cargo recurrente.</p>
            <p>•    Pago de gastos de instalación: Deberá estar cubierto previo a la instalación en efectivo o tarjeta de crédito/débito.</p>
            <p>En caso de haber adquirido una promoción de descuento en la contratación del servicio, este monto se descontará del total a pagar en la instalación.</p>
            <p>En  caso de haber adquirido una promoción de pago diferido, el monto correspondiente se verá reflejado en los estados de cuenta posteriores para pago del Suscriptor.</p>
            <p>ESTADO DE CUENTA </p>
            <p>Las rentas de los planes residenciales cuentan con una fecha límite de pago, misma que corresponde al precio de lista por el o los servicios contratados, en caso de que no se realice dentro de esa fecha establecida, se aplicará un gasto de cobranza y/o gasto de reconexión respectivamente en el siguiente estado de cuenta del cliente. </p>
            <p>El Suscriptor podrá solicitar el envío de su factura a su correo electrónico llamando a ATC; éste no será recurrente y aplicará cada que el Suscriptor haga la solicitud.  </p>
            <p>El cobro de las rentas de los paquetes y servicios adicionales se pagan a mes vencido.</p>
            <p>OPCIONES DE PAGO </p>
            <p>•    Con cargo recurrente a tu tarjeta de crédito llamando al número de Atención a Clientes al (55) 9628 3474 </p>
            <p>•    Con cargo en línea, a tarjeta de crédito o débito llamando al número de Atención a Clientes  (55) 9628 3474 </p>
            <p>•    En efectivo en los centros de pago designados por COFRESA, mismos que pueden ser consultados dentro del portal en la siguiente liga: https://oninternet.com.mx/places-of-payment</p>
            <p>CONTRACARGOS O CARGOS NO RECONOCIDOS EN SU TARJETA*</p>
            <p>En caso de que a Cofresa le sea notificado por parte del Banco emisor en más de dos ocasiones que la tarjeta de crédito y/o débito que proporcionó para realizar el pago de los Servicios ha sido reportada con un contracargo o reclamo de cargo no reconocido, Cofresa tendrá la facultad de no aceptar este método de pago, debiendo el Suscriptor de realizar todos los pagos de los servicios mediante una vía alterna. Lo anterior también aplicará cuando Cofresa detecte, en más de dos ocasiones, contracargos o reclamos de cargos no reconocidos en una misma cuenta que intenta ser pagada con diferentes tarjetas de crédito y/o débito. El servicio prestado por Cofresa no será reactivado hasta que se cubra el pago total del saldo total de la cuenta.</p>
            <p>SERVICIO TELEFONÍA. </p>
            <p>•    Servicio de Telefonía móvil operado por un OMV (operador móvil virtual),  el cual puede ser consultado en la página: https://www.dishcelular.com.mx/</p>
            <p>SERVICIO TELEVISIÓN DE PAGA </p>
            <p>•    Servicio de televisión restringida vía satélite, el cual consiste en llevar directo a casa programación con fines de entretenimiento y/o diversión en su contenido. Para mayor información ingresa a: https://dish.com.mx/</p>
            <p>POLÍTICA DE USO JUSTO PARA INTERNET </p>
            <p>Al utilizar los servicios de transmisión de datos de Cofresa, el Suscriptor acepta y está de acuerdo en cumplir los términos de esta política. El Servicio de Cofresa, es comercializado para el uso estrictamente personal de Internet y no puede ser utilizado con propósitos comerciales.</p>
            <p>Queda prohibido el cobro a terceros por el uso del servicio que el Suscriptor está contratando. Así mismo, acepta que no podrá operar o permitir que terceros operen servidores de cualquier tipo y/o conectar dispositivos, hardware o software que brinden la funcionalidad de servidor a través del servicio de Cofresa. En todo momento el Suscriptor será responsable del buen uso de la red y se compromete a utilizar el servicio de red de acuerdo con los términos y condiciones establecidos en el contrato de prestación de servicios conforme con el contratado. El Suscriptor se compromete a que las actividades que realice en el uso del servicio de Internet no limitarán, bloquearán o de cualquier forma afectarán la red. En caso de que Cofresa detecte que el servicio que el Suscriptor contrató infringe cualquiera de las políticas antes descritas, podrá cancelarle y/o suspenderle el servicio y cobrar los gastos adicionales que su actividad genere.</p>
            <p>La información aquí descrita o en la página de internet es información exclusiva de Comercializadora de Frecuencias Satelitales S. de R.L. de C.V., y/o sus socios comerciales para promoción de sus servicios. Derechos reservados. El material incluyendo imágenes, textos logos y cualquier otro elemento constituyen derechos de autor y propiedad intelectual usada bajo autorización, protegidos por leyes mexicanas e internacionales.</p>

            <p>PROMOCIÓN PARA CLIENTES EXISTENTES</p>
            <p>Del periodo que comprende del 23 de junio al 23 de julio, los suscriptores recibirán el doble de GB para ser consumidos durante ese mismo periodo sin importar su ciclo de facturación. </p>
            <p>No aplica con otras promociones. </p>
            <p>Al terminar el periodo de promoción, el cliente regresará a su capacidad original o promocional de acuerdo al periodo en el que se encuentre. </p>

          

            </TocPage>
        </div>
    );
}

export default TermsAndConditions;