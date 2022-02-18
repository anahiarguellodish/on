import React from 'react';
import TocPage from './generic/TocPage';
import getLegalLinks from './Legal/getLegalLinks';

const TermsAndConditions = props =>
{
    return (
        <div id='terms-and-conditions' className='container p-4'>
            <TocPage history={props.history} links={getLegalLinks()}>
                <h4>Términos y Condiciones ON Inalámbrico Prepago </h4>


                    <p><b>SERVICIO INTERNET INALÁMBRICO PREPAGO.</b></p>

                    <ul>
                    <li>1. Es un  servicio que mediante tecnologías móviles a través de un equipo terminal (módem) conecta al Suscriptor a Internet, previa activación de Cofresa con base al domicilio registrado y confirmado por el Suscriptor, mismo que puede otorgarse en comodato. El Suscriptor podrá conectar a internet sus dispositivos vía WIFI o o cable de red (Ethernet).</li>

                    <li>2. Las recargas ofertadas en esta modalidad se conforman de una velocidad, capacidad y vigencia.</li>

                    <li>3. Si el Suscriptor alcanza la capacidad máxima de su paquete o la vigencia expira, lo que ocurra primero, el servicio se corta.</li>

                    <li>4. El Suscriptor podrá comprar otra recarga para volver a activar su Internet. Dicha compra la podrá elegir libremente de acuerdo a sus necesidades y disponibilidad.</li>

                    <li>5. Las recargas de Prepago están sujetas a disponibilidad de cobertura, por lo que el Suscriptor, antes de adquirir alguna deberá validar disponibilidad a través de la APP ON Internet o llamando al Centro de Atención a Cliente al teléfono 55 9628 3474.</li>

                    <li>6. El equipo terminal (módem) deberá ser instalado en el domicilio del Suscriptor en un plazo máximo de 10 días hábiles.</li>

                    <li>7. El servicio de ON Inalámbrico Prepago no es móvil, por lo cual no permite desplazarlo fuera del domicilio registrado en la venta y/o instalación del módem.</li>

                    <li>8. Si el Suscriptor llega a conectar el equipo fuera del domicilio registrado, el servicio se suspenderá y se reactivará en automático cuando éste regrese y se encienda en el domicilio registrado, la reactivación se realizará en un periodo máximo de una hora.</li>

                    <li>9. A partir del segundo cambio de domicilio, se cobrará $100 por cada cambio que el Suscriptor solicite, mismo que podrá pagar con tarjeta de crédito o débito llamando a Atención a Clientes.</li>

                    <li>10. La velocidad puede variar dependiendo de la distancia a la que se encuentre el dispositivo a conectar del módem, los dispositivos conectados de manera simultánea, las interferencias por teléfonos y otras señales de Wi-Fi cercana. Los materiales de construcción de una casa influyen en la señal de recepción, ya que dependiendo el material es mayor o menor la intensidad de la señal.</li>

                    <li>11. Las velocidades de transferencia de Internet se ofrecen hasta la velocidad indicada y pueden variar debido al tráfico y transferencia de datos fuera de la red de ON. Las velocidades de carga varían en los planes debido a que el servicio de Internet es asimétrico.</li>

                    </ul>
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
                                    <td>Cantidad promedio de Datos descargada con respecto a 1 (un) segundo y que deberá ser de al menos 4 (cuatro) Megabits por segundo en el borde de Cobertura exterior (no en inmuebles) en Hora Pico de la Red Compartida.</td>
                                </tr>
                                <tr>
                                    <td> Transmisión de Datos de Carga</td>
                                    <td> Cantidad promedio de Datos enviada con respecto a 1 (un) segundo y que deberá ser de al menos 1 (un) Megabit por segundo en el borde de Cobertura exterior (no en inmuebles) en Hora Pico de la Red Compartida.</td>
                                </tr>
                                
                            </tbody>
                        </table>

                        <p>La velocidad contratada estará comprendida entre la unidad terminal de datos entregada a EL SUSCRIPTOR y hasta el primer punto de acceso a la red de EL PROVEEDOR, conforme a las velocidades registradas ante el IFT. EL SUSCRIPTOR acepta y reconoce que la velocidad contratada puede variar durante el día, dependiendo de sus hábitos de consulta de información en la red de Internet, el número de equipos conectados de manera simultanea a la red, los servicios donde consulta información y la capacidad de transmisión de los mismos. La velocidad contratada por EL SUSCRIPTOR puede ser mermada debido a que la información viaja por medios físicos expuestos a factores de temperatura, humedad, clima, calidad de instalación interior de EL SUSCRIPTOR, y que es responsabilidad de esté. EL PROVEEDOR prestara EL SERVICIO de acuerdo a los parámetros que establezca el IFT. EL SUSCRIPTOR está consiente y acepta que la velocidad puede ser afectada dependiendo de la localización de su domicilio.</p>
                        
                    <p><b>CANCELACIÓN.</b></p>

                    <p>Si el Suscriptor desea dar por terminado su  contrato, podrá realizarlo llamando al Centro de Atención a Clientes,  para solicitar la cancelación deberá poner a disposición del Proveedor el equipo terminal otorgado en comodato, en condiciones normales de uso, de lo contrario deberá pagar el monto del mismo, información que se encuentra disponible  en el apartado de costos por componentes dentro del sitio: <a href="https://oninternet.com.mx/pricesin">https://oninternet.com.mx/pricesin</a>.</p>

                    <p>Si el Suscriptor, en el lapso de 90 días no realiza ninguna recarga, el servicio quedará cancelado por lo que procederá la recuperación del equipo terminal (módem). Si el Suscriptor no entrega el equipo terminal (módem) deberá pagar el monto del mismo, información que se encuentra disponible  en el apartado de costos por componentes dentro del sitio: <a href="https://oninternet.com.mx/pricesin">https://oninternet.com.mx/pricesin</a>.</p>


                 

            { /*       <p><b>TARIFAS Y PRECIOS DE SERVICIOS.</b></p>
                      

   
             <table className='table table-striped table-bordered'>
                    <thead className='thead-dark'>
                         <tr>
                            <th colspan={3}>RECARGAS</th>
                        </tr>
                       
                    </thead>
                    <tbody>
                        <tr>
                            <td>Recarga semanal</td>
                            <td> Internet 5 / 20 GB / 7 días</td>
                            <td> $89</td>
                        </tr>
                        <tr>
                            <td>Recarga mensual</td>
                            <td> Internet 5 / 80 GB / 30 días</td>
                            <td> $299</td>
                        </tr>
                        <tr>
                            <td> Recarga mensual</td>
                            <td> Internet 10 / 120 GB / 30 días</td>
                            <td> $399</td>
                        </tr>
                        
                    </tbody>
                </table>



                 <table className='table table-striped table-bordered'>
                    <thead className='thead-dark'>
                         <tr>
                            <th colspan={3}>GASTOS DE ACTIVACIÓN</th>
                        </tr>
                       
                    </thead>
                    <tbody>
                        <tr>
                            <td>Gastos de activación</td>
                            <td> (incluyen recarga semanal de Internet 5 /20 GB</td>
                            <td> $1,089</td>
                        </tr>
                        <tr>
                            <td>Gastos de activación</td>
                            <td>(incluyen recarga mensual de Internet 5 /80 GB</td>
                            <td> $1,299</td>
                        </tr>
                        <tr>
                            <td> Gastos de activación</td>
                            <td> (incluyen recarga mensual de Internet 10 /120 GB</td>
                            <td> $1,399</td>
                        </tr>
                        
                    </tbody>
                </table>



                <p><b>Las Tarifas incluyen IVA.</b></p> */}

                <p><b>COBERTURA.</b></p>

                <p>Toda contratación deberá estar dentro de la zona de cobertura, cualquier solicitud que se encuentre fuera de ésta no podrá ser procesada. En caso de que existan restricciones que impidan la instalación, incluso dentro de la zona de cobertura se determinará como imposibilidad técnica (IT) y le será notificado oportunamente al Suscriptor: Consulta la cobertura en:<a href="https://oninternet.com.mx/cobertura"> https://oninternet.com.mx/cobertura</a>.</p>

                <p><b>REQUISITOS DE CONTRATACIÓN</b></p>
                <ul>
                <li>Identificación oficial vigente: INE, Pasaporte o Cédula Profesional (aplica para personas físicas). Acta Constitutiva, Identificación y Poder Notarial (en caso de persona moral).</li>
                <li>Comprobante de domicilio: Recibo de luz, predial, recibo telefónico, recibo de agua.</li>
                <li> Solicitud de servicios y/o Carátula (debidamente firmado): Completar con las firmas del Suscriptor y sin datos faltantes.</li>
                <li>Gastos de Activación: Al momento de la contratación, el Suscriptor pagará en su totalidad previo a la instalación en efectivo con el Vendedor o en alguno de los lugares autorizados de pago. </li>
                </ul>

                <p>En caso de haber adquirido una promoción de descuento en la contratación del servicio, este monto se descontará del total a pagar en la instalación.</p>


                <p><b>DETALLE DE CONSUMO.</b></p>

                <p>El Suscriptor podrá consultar en el momento que desee el detalle de consumo de GB, ingresando a la APP de ON internet.</p>

                <p><b>OPCIONES DE PAGO.</b></p>

                <p>El servicio Prepago, podrá realizarse en la modalidad de pago en efectivo, a la hora de adquirir una recarga. Para su compra, deberá ir a alguno de los lugares autorizados de pago que podrá consultar en: https://oninternet.com.mx/places-of-payment. Deberá llevar la referencia de pago de la recarga que desea adquirir, considerando previa validación de disponibilidad de cobertura. </p>

                <p><b>POLÍTICA DE USO JUSTO PARA INTERNET.</b></p>

                <p>Al utilizar los servicios de transmisión de datos de Cofresa, el Suscriptor acepta y está de acuerdo en cumplir los términos de esta política. El Servicio de Cofresa, es comercializado para el uso estrictamente personal de Internet y no puede ser utilizado con propósitos comerciales.</p>

                <p>Queda prohibido el cobro a terceros por el uso del servicio que el Suscriptor está contratando. Así mismo, acepta que no podrá operar o permitir que terceros operen servidores de cualquier tipo y/o conectar dispositivos, hardware o software que brinden la funcionalidad de servidor a través del servicio de Cofresa. En todo momento el Suscriptor será responsable del buen uso de la red y se compromete a utilizar el servicio de red de acuerdo con los términos y condiciones establecidos en el contrato de prestación de servicios conforme con el contratado. El Suscriptor se compromete a que las actividades que realice en el uso del servicio de Internet no limitarán, bloquearán o de cualquier forma afectarán la red. En caso de que Cofresa detecte que el servicio que el Suscriptor contrató infringe cualquiera de las políticas antes descritas, podrá cancelarle y/o suspenderle el servicio y cobrar los gastos adicionales que su actividad genere.</p>

                <p>La información aquí descrita o en la página de internet es información exclusiva de Comercializadora de Frecuencias Satelitales S. de R.L. de C.V., y/o sus socios comerciales para promoción de sus servicios. Derechos reservados. El material incluyendo imágenes, textos logos y cualquier otro elemento constituyen derechos de autor y propiedad intelectual usada bajo autorización, protegidos por leyes mexicanas e internacionales.</p>

                <p><b>ATENCION A CLIENTES.</b></p>

                <p>El Suscriptor podrá comunicarse a nuestro número de atención a Clientes al número: 55 9628 3474, el cual se encuentra disponible las 24 horas del día los 365 días de año.</p>



                                 


              

           

            </TocPage>
        </div>
    );
}

export default TermsAndConditions;