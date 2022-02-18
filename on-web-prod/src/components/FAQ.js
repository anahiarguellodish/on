import React from 'react';

import { Accordion, AccordionItem } from './generic/Accordion';

class FAQ extends React.Component
{
    render()
    {
        return (
            <div id='faq' className='container-fluid bg-secondary p-5'>
                <div className='container bg-light p-0'>
                    <h1 className='bg-primary text-light text-uppercase text-center p-4'>PREGUNTAS FRECUENTES</h1>
                    <Accordion>

                          <h1 className='bg-primary text-light text-uppercase text-center p-4'>On</h1>


                        <AccordionItem title='¿Qué es ON y qué tiene que ver con Dish?'>
                            <p>ON es la nueva marca creada en alianza con Dish para ofrecer los servicios de Internet Alámbrico, Inalámbrico y Satelital en México.</p>
                        </AccordionItem>


                           <AccordionItem title='¿Tengo que ser cliente Dish para poder contratar ON internet?'>
                            <p>No, puedes contratar ON independiente o puedes contratarlo en conjunto con Dish y/o con telefonía celular FreedomPop, siempre y cuando haya disponibilidad.</p>
                        </AccordionItem>


                        <h1 className='bg-primary text-light text-uppercase text-center p-4'>ON INALÁMBRICO</h1>

                    {/*

                        <AccordionItem title='¿Los Paquetes tienen límite de Capacidad de GB?'>
                            <p>Sí, y va de la mano con la Política de Uso Justo que depende del paquete que tengas contratado:</p>
                            <ul>
                                <li>Plan de 5 Mbps tiene una capacidad de 80 GB</li>
                                <li>Plan de 10 Mbps tiene una capacidad de 120 GB</li>
                                <li>Plan de 20 Mbps tiene una capacidad de 180 GB</li>
                            </ul>
                        </AccordionItem>

                        <AccordionItem title='¿Qué puedo hacer en Internet con el paquete que contraté?'>
                            <p>Puedes realizar la actividad que desees, desde visitar páginas web, consultar tu correo hasta ver películas. Ten en cuenta que todos los paquetes tienen un límite y hay algunos servicios que consumen más capacidad que otros, por ejemplo las plataformas de videos y de streaming. Te recomendamos estar al tanto de tu consumo. En ON tenemos una app que te ayuda a monitorear tu servicio, si eres cliente ON Inalámbrico, descárgala en Google Play o App Store y ¡ten el control de tu servicio desde tu celular! </p>
                        </AccordionItem>

                        <AccordionItem title='¿En dónde puedo consultar mi capacidad de GB disponible?'>
                            <p>Tenemos tres opciones para ti:</p>
                            <ul>
                                <li>Llámanos al Centro de Atención a Clientes al número 55 96 28 34 74 y con gusto te daremos la información.</li>
                                <li>Desde esta página, ve a Mi Cuenta ON, un portal diseñado para ti. Sino estás registrado, solo necesitarás tu número de cliente y teléfono registrado.</li>
                                <li>Descarga la app ON en tu celular. Está disponible en Google Play y App Store. Si ya te habías registrado en Mi Cuenta ON, no necesitas volver a hacerlo.</li>
                            </ul>
                        </AccordionItem>

                        <AccordionItem title='¿Qué pasa cuando alcanzo el límite de capacidad de mi paquete contratado?'>
                            <p>Podrás seguir navegando pero a una velocidad de 512 Kbps por 60 GB de capacidad. Si quieres volver a navegar a la velocidad contratada durante el resto del ciclo, podrás comprar algún paquete GB adicionales. Te sugerimos ver el siguiente video acerca de la capacidad de tu paquete ON Inalámbrico: <a target="_blank" href="https://www.youtube.com/watch?v=lIBuCC7gIHo">Ver Video</a></p>
                        </AccordionItem>

                         <AccordionItem title='¿Cómo puedo comprar paquetes GB adicionales?'>
                            <p>Llámanos al Centro de Atención ON Internet al 55 9628 3474 para que un asesor pueda atenderte. Una vez pagado el paquete GB adicionales, tu velocidad regresará a la contratada de forma automática.</p>
                        </AccordionItem>


                       
                        <AccordionItem title='¿Puedo cambiar la ubicación de mi dispositivo dentro de mi casa?'>
                            <p>Si, puedes utilizar el equipo en distintos lugares dentro de tu casa para que aproveches al máximo tu internet. Procura no colocar el módem cerca de microondas, teléfonos inalámbricos, ni motores electromagnéticos. También es recomendable que se ubique cerca de una ventana. </p>
                        </AccordionItem>

                        <AccordionItem title='¿El módem funciona si lo llevo a otro domicilio diferente al que registré?'>
                            <p>No, el servicio solo puede ser utilizado únicamente dentro de tu domicilio; si lo llevas a otro domicilio el servicio será suspendido y se reanudará automáticamente al conectarse nuevamente en el domicilio registrado. </p>
                        </AccordionItem>

                        <AccordionItem title='¿Qué pasa si me cambio de domicilio?'>
                            <p>Debes llamarnos a Atención a Clientes al 55 9628 3474 para que un Asesor pueda corroborar disponibilidad en el nuevo domicilio y registre el cambio. Podrás aplicar un cambio de domicilio sin costo, a partir del segundo se te cobrará $100 por cada cambio que solicites.</p>
                        </AccordionItem>

                        <AccordionItem title='¿Qué pasa si no tengo luz en mi casa?'>
                            <p>El módem no funcionará ya que necesita conectarse a la corriente eléctrica para encenderse.</p>
                        </AccordionItem>

                        <AccordionItem title='¿Cómo puedo conectarme a internet desde mi computadora o celular?'>
                            <p>Lo puedes realizar de dos maneras:</p>
                            <ul>
                                <li>Tomando el cable LAN que viene dentro de la caja del equipo y conectar un extremo del cable a tu computadora en la ranura que dice LAN y el otro extremo al dispositivo On Internet en la ranura que dice LAN/WAN que se encuentra en la parte posterior. </li>
                                <li>A través de conexión inalámbrica (WiFi) para lo cual deberás localizar en la parte inferior de tu dispositivo On Internet la palabra “SSID”, ésta es el nombre de la red inalámbrica que deberás seleccionar en tu equipo de cómputo o dispositivo móvil y posteriormente la contraseña de la red será la que tiene la etiqueta “WIFI KEY” que tendrás que escribir en tu computadora o dispositivo móvil una vez que hayas iniciado la conexión a tu red inalámbrica. </li>
                            </ul>
                        </AccordionItem>


                        <AccordionItem title='¿Dónde puedo ver la red inalámbrica de mi servicio?'>
                              <p>En la parte inferior del Módem se encuentra una etiqueta, debes identificar dos elementos:</p>
                            <ul>
                                <li>SSID que es el nombre de la red.</li>
                                <li>WIFI KEY que es la contraseña de la red.</li>
                                <li>En caso de que utilices conexión WPS  debes ubicar el número que se encuentra con el nombre WPS KEY. </li>
                            </ul>
                        </AccordionItem>


                        <AccordionItem title='Mi equipo no enciende, ¿Qué debo hacer?'>
                            <ul>
                                <li>Verifica que está conectado el cable de corriente en el lugar correcto.</li>
                                <li>Si está conectado correctamente prueba en otro contacto dentro del domicilio. </li>
                                <li>Si aún con lo anterior sigue sin encender, repórtalo en nuestro Centro de Atención a Clientes al 55 96 28 34 74 para que un Agente te pueda apoyar. </li>
                            </ul>
                        </AccordionItem>


                        <AccordionItem title='Percibo muy lento mi servicio, ¿qué debo hacer?'>
                            <p>Si sientes que navegas a una velocidad más lenta y las páginas se tardan más de lo normal en cargar, es posible que hayas agotado la capacidad de GB de tu paquete. Puedes confirmar esto descargando la app ON Internet, está disponible en Google Play y en App Store. Para registrarte necesitarás tu número de cliente y teléfono registrado. O también puedes llamarnos al 55 9628 3474 y te indicaremos si acabaste la capacidad de tu paquete.</p>
                            <p>Si tu velocidad se redujo porque acabaste tu capacidad, puedes comprar un paquete GB adicionales y volver a navegar a la velocidad contratada.</p>
                            <p>Caso contrario, podemos ayudarte a revisar cuál es el problema y buscar una solución.</p>
                        </AccordionItem>

                         <AccordionItem title='¿Qué pasa si retiro el SIM del módem?'>
                            <p>Se perderá la funcionalidad de tu servicio ON Internet y para que funcione nuevamente, deberás desconectar el equipo de la corriente eléctrica. Insertar el SIM y encenderlo nuevamente.</p>
                        </AccordionItem>


                         <AccordionItem title='¿Puedo utilizar el SIM en otro dispositivo?'>
                            <p>No, el SIM está limitado al uso con el módem asignado para disfrutar del servicio ON Internet.</p>
                        </AccordionItem>

                        <AccordionItem title='¿Qué tengo que hacer en caso de que me roben el módem?'>
                            <p>Debes llamar a nuestro Centro de Atención a Clientes al 55 96 28 34 74 para bloquear el equipo y que no pueda ser utilizado en ningún otro proveedor de servicios, nuestro personal te dará los siguientes pasos para el seguimiento.</p>
                        </AccordionItem>

                        <AccordionItem title='¿Dónde y cómo puedo pagar mi servicio?'>
                            <p>Tienes dos opciones:</p>
                             <ul>
                                <li>Con tarjeta de crédito o débito: Llámanos a nuestro Centro de Atención a Clientes al 55 9628 3474 y con gusto te ayudamos a procesar tu pago.</li>
                                <li>En lugares autorizados. Puedes visitar la sección “Lugares de pago”. Tenemos para ti un gran listado de lugares autorizados. Por favor no olvides tu referencia de pago al momento de realizar tu pago. Sino la tienes, te damos tres opciones:
                                    <ul>
                                        <li>Descárgala en Mi cuenta ON dando <a href=" https://micuentaon.oninternet.com.mx/index.php">clic aquí</a></li>
                                        <li>Consúltala en la app ON Internet y desde tu celular muestra el código de barras al operador</li>
                                        <li>Llámanos al Centro de Atención a Clientes al 55 9628 3474 y te la mandaremos</li>
                                    </ul>
                                </li>
                                
                            </ul>
                        </AccordionItem>


                         <AccordionItem title='¿Cómo puedo hacer válida mi garantía?'>
                            
                            <ul>
                                <li>Contacta al Centro de Atención a Clientes en 55 96 28 34 74 y proporciona la información del servicio ON Inalámbrico contratado y del que se requiera la atención a tu solicitud, por ejemplo: a) folio del Contrato, b) número de identificación del Suscriptor, c) domicilio, d) teléfono, e) e-mail etc.</li>
                                <li>Permite y apoya al agente de Atención a Clientes, mismo que a partir de un proceso de verificación previo, evaluará la falla, posible solución remota y de requerirlo la visita técnica para reemplazo del decodificador y/o equipo terminal, así como alguno de los accesorios que lo complementan.</li>
                                <li>En caso de requerirse el reemplazo del equipo terminal, así como alguno de los accesorios que lo complementan, se programará una visita técnica para dicho reemplazo en un lapso no mayor a 30 días, para lo cual se realizará el ajuste correspondiente en su facturación por el tiempo sin servicio o falla a solicitud del Suscriptor.</li>
                            </ul>
                        </AccordionItem>

                        <AccordionItem title='¿Qué vigencia tiene la garantía?'>
                            <p>La vigencia de la garantía será por el tiempo que dure la relación contractual, siempre y cuando no se incumpla ninguna de las razones de NULIDAD que se enlistan en la misma.</p>
                        </AccordionItem>

                        <AccordionItem title='¿Cuáles son los supuestos en los que mi póliza de garantía entra en la nulidad?'>
                            <p>Cuando el equipo terminal, así como alguno de los accesorios que lo complementan, sean utilizados en condiciones distintas a las normales, tales como:</p>
                            <ul>
                               <li>Verter algún líquido sobre el equipo terminal, así como alguno de los accesorios que lo complementan.</li>
                               <li>Por romper, extraviar y/o retirar la tarjeta inteligente y/o (SIM), insertada en el equipo terminal.</li>
                               <li>Daño físico-estético que no derive por el desgaste natural ocasionado por su uso.</li>
                               <li>Infestación de alguna plaga.</li>
                               <li>Variación de voltaje dentro de la instalación eléctrica.</li>
                            </ul>

                            <p>Cuando el equipo terminal, así como alguno de los accesorios que lo complementan no sea operado conforme al manual de uso de cada servicio, mismo que está disponible en la página de internet.</p>
                            <p>Cuando se detecte que el equipo terminal, así como alguno de los accesorios que lo complementan, han sido reparados o manipulados por personal externo al Proveedor.</p>
                            <p>Cuando el equipo terminal sea movido del lugar donde se instaló por primera vez, en caso de que este haya requerido de instalación sin previa notificación y/autorización del Proveedor.</p>
                        </AccordionItem>

                        

                        <AccordionItem title='¿Si la garantía ya no aplica por alguna de las razones de NULIDAD, cuál el costo de reparación o reposición?'>
                            <p>Puedes consultar los costos adicionales por reparación o remplazo del equipo terminal, así como alguno de los accesorios que lo complementan en <a target="_blank" href="oninternet.com.mx/pricesin"> http://oninternet.com.mx/pricesin </a></p>
                            <p>Si tienes alguna otra duda, puedes llamarnos al Centro de Atención a Clientes al teléfono 55 9628 3474, disponible las 24 horas.</p>
                        </AccordionItem>


                        */}



































                        <h1 className='bg-primary text-light text-uppercase text-center p-4 color_verde_titulo'>Planes Postpago </h1>


                        <AccordionItem title='¿Qué puedo hacer en Internet con el paquete que contraté?'>
                            <p>Puedes realizar la actividad que desees, desde visitar páginas web, consultar tu correo hasta ver películas. Ten en cuenta que todos los paquetes tienen un límite y hay algunos servicios que consumen más capacidad que otros, por ejemplo las plataformas de videos y de streaming. Te recomendamos estar al tanto de tu consumo desde la APP ON Internet.</p>
                        </AccordionItem>


                        <AccordionItem title='¿Cómo puedo saber cuántos GB he consumido?'>
                            <p>Descargando la APP ON Internet en Play Store o APP Store. Regístrate con tu mail, número de Cliente y teléfono registrado a 10 dígitos. Dentro de la APP, ve a la sección de Consumo de GB.  </p>
                        </AccordionItem>

                         <AccordionItem title=' ¿Qué puedo hacer si tengo fallas con mi internet?'>
                            <p>-Conéctalo en otro enchufe.</p>
                            <p>-Resetea tu equipo y vuélvelo a prender </p>
                            <p>-Muévelo en un lugar de tu casa donde tenga más líneas de señal y enchúfalo ahí. </p>
                            <p>Si aún no tienes buena señal, llámanos al Centro de Atención a Clientes al <a href="tel:5596283474">55 9628 3474</a> y te ayudaremos. Aquí te dejamos un video donde lo explicamos mejor: <a target="_blank" href="https://www.youtube.com/watch?v=XbXMEHSRRIg"> video </a> </p>
                        </AccordionItem>

                        <AccordionItem title='¿Cuáles son los lugares autorizados de pago? '>
                            <p>Hay muchos como supermercados, bancos, tiendas de autoservicio, etc. Consúltalos aquí:  <a target="_blank" href="https://oninternet.com.mx/places-of-payment"> https://oninternet.com.mx/places-of-payment</a></p>
                        </AccordionItem>


                        <AccordionItem title='¿Puedo cambiar la ubicación de mi dispositivo dentro de mi casa?'>
                            <p>Si, puedes utilizar el equipo en distintos lugares dentro de tu casa. Procura no colocar el módem cerca de microondas, teléfonos inalámbricos, ni motores electromagnéticos. También es recomendable que se ubique cerca de una ventana.</p>
                        </AccordionItem>


                        <AccordionItem title='¿Es un servicio móvil?'>
                            <p>No, el servicio de ON Inalámbrico lo puedes enchufar en cualquier parte de tu casa. Sin embargo, no puedes sacar el módem del domicilio registrado porque el servicio se desactivará y solo se reactivará cuando lo regreses.</p>
                        </AccordionItem>


                        <AccordionItem title='¿El módem es mío?'>
                            <p>No, el módem y el cable de carga del módem son propiedad de ON Internet. </p>
                        </AccordionItem>


                        <AccordionItem title='Yo tengo un módem parecido, ¿puedo usarlo?'>
                            <p>No, el servicio de ON Internet solo funciona con el módem que te proporcionamos en ON Internet. </p>
                        </AccordionItem>


                        <AccordionItem title='¿Qué pasa si retiro el SIM del módem?'>
                            <p>Se perderá la funcionalidad de tu servicio ON Internet y para que funcione nuevamente, deberás desconectar el equipo de la corriente eléctrica. Insertar el SIM y encenderlo nuevamente.</p>
                        </AccordionItem>


                        <AccordionItem title='¿Puedo usar mi SIM en otro módem?'>
                            <p>No, el SIM está limitado al uso con el módem asignado para disfrutar del servicio ON Internet.</p>
                        </AccordionItem>


                        <AccordionItem title='¿Qué pasa si me cambio de domicilio?'>
                            <p>Debes llamarnos a Atención a Clientes al 55 9628 3474 para corroborar disponibilidad en el nuevo domicilio y registrar el cambio. Podrás aplicar un cambio de domicilio sin costo, a partir del segundo se te cobrará $100 por cada cambio que solicites.</p>
                        </AccordionItem>


                        <AccordionItem title='¿Qué pasa si no tengo luz en mi casa?'>
                            <p>El módem no funcionará ya que necesita conectarse a la corriente eléctrica para encenderse.</p>
                        </AccordionItem>


                        <AccordionItem title='¿Cómo puedo conectarme a internet desde mi computadora o celular?'>
                            <p>Lo puedes realizar de dos maneras:</p>
                            <ul>
                                <li>Tomando el cable LAN que viene dentro de la caja del equipo y conectar un extremo del cable a tu computadora en la ranura que dice LAN y el otro extremo al módem en la ranura que dice LAN/WAN.</li>
                                <li>A través de conexión inalámbrica (WiFi): Localiza en la etiqueta del módem el nombre de la red (“SSID”) y la contraseña (“WIFI KEY”).  Escríbelo en tu dispositivo para conectarte.</li>
                            </ul>
                        </AccordionItem>


                        <AccordionItem title='¿Qué puedo hacer si me falla internet?'>
                            <p>Sigue estos sencillos pasos:</p>

                            <ul>
                                <li>Intenta conectarlo en otro enchufe.</li>
                                <li>Resetea tu equipo y vuélvelo a prender.</li>
                                <li>Busca dentro de tu casa un lugar donde tenga más señal y conéctalo.</li>
                            </ul>
                            <p>Si después de intentar esto sigues sin conexión, llámanos al 55 56 101010 y con gusto te apoyaremos.</p>
                        </AccordionItem>


                        <AccordionItem title='¿Cómo cambio de contraseña?'>
                            <p>Si tu módem es marca M4:</p>
                            <ul>
                                <li>Conéctate a tu módem.</li>
                                <li>Desde tu navegador, ingresa a la dirección que está en la etiqueta de tu módem.</li>
                                <li>Accede escribiendo en usuario y contraseña: admin</li>
                                <li>Dentro del menú, da clic en Inalámbrico -> Ajustes WLAN.</li>
                                <li>Cambia el nombre de la reden “Nombre Wifi (SSID)”.</li>
                                <li>Escribe la nueva contraseña en el campo correspondiente y da clic en aplicar (te sugerimos anotarlas para que no se te olviden 😊 )</li>
                                <li>Acepta que se desconecte la red Wifi.</li>
                                <li>Conéctate de nuevo a Internet con el nuevo nombre y contraseña.</li>
                                <li>Da clic en cancelar en la venta “Establecer ubicación de red”.</li>
                            </ul>

                            <p>Si tu módem es marca Huawei:</p>

                            <ul>
                                <li>Conéctate a tu módem.</li>
                                <li>Descarga la app HiLink Huawei con tu celular, ábrela y acepta los permisos de configuración.</li>
                                <li>Entra a configuración, verás que la opción “Mi Wifi” no estará habilitada.</li>
                                <li>Entra a “cuenta” y conéctate (la contraseña la encuentras en la etiqueta del módem al lado de la palabra password). Da clic en conexión.</li>
                                <li>Entra a “Mi Wifi” y cambia el nombre de la red y contraseña (acuérdate de ellas). Da clic en la palomita.</li>
                                <li>Reinicia la red Wifi.</li>
                                <li>Conéctate de nuevo con el nombre y contraseña.</li>
                            </ul>
                        </AccordionItem>


                        <AccordionItem title='¿Dónde está el nombre de red y contraseña del equipo?'>
                            <p>El nombre de red y contraseña las encontrarás en la etiqueta pegada a tu equipo.</p>
                        </AccordionItem>



                        <AccordionItem title='¿Qué hago si me roban el módem?'>
                            <p>Llama al Centro de Atención a Clientes al 55 96 28 34 74 para bloquear el equipo y que no pueda ser utilizado en ningún otro proveedor de servicios, nuestro personal te dará los siguientes pasos para el seguimiento.</p>
                        </AccordionItem>


                        <AccordionItem title='¿Cómo puedo hacer válida mi garantía?'>
                            <ul>
                                <li>Contacta al Centro de Atención a Clientes en 55 9628 3474 y proporciona la información del servicio ON Inalámbrico contratado y del que se requiera la atención a tu solicitud, por ejemplo: a) folio del Contrato, b) número de identificación del Suscriptor, c) domicilio, d) teléfono, e) e-mail etc.</li>
                                <li>Permite y apoya al agente de Atención a Clientes, mismo que a partir de un proceso de verificación previo, evaluará la falla, posible solución remota y de requerirlo la visita técnica para reemplazo del decodificador y/o equipo terminal, así como alguno de los accesorios que lo complementan.</li>
                                <li>En caso de requerirse el reemplazo del equipo terminal, así como alguno de los accesorios que lo complementan, se programará una visita técnica para dicho reemplazo en un lapso no mayor a 30 días, para lo cual se realizará el ajuste correspondiente en su facturación por el tiempo sin servicio o falla a solicitud del Suscriptor.</li>
                            </ul>
                        </AccordionItem>


                        <AccordionItem title='¿Qué vigencia tiene la garantía?'>
                            <p>La vigencia de la garantía será por el tiempo que dure la relación contractual, siempre y cuando no se incumpla ninguna de las razones de NULIDAD que se enlistan en la misma. Para conocerla da clic <a target="_blank" href="https://oninternet.com.mx/polizagarantia">aquí</a></p>
                        </AccordionItem>


                        <AccordionItem title='¿Cuáles son los supuestos en los que mi póliza de garantía entra en la nulidad?'>
                            <p>Cuando el equipo terminal, así como alguno de los accesorios que lo complementan, sean utilizados en condiciones distintas a las normales, tales como:</p>
                            <ul>
                                <li>Verter algún líquido sobre el equipo terminal, así como alguno de los accesorios que lo complementan.</li>
                                <li>Por romper, extraviar y/o retirar la tarjeta inteligente y/o (SIM), insertada en el equipo terminal.</li>
                                <li>Daño físico-estético que no derive por el desgaste natural ocasionado por su uso.</li>
                                <li>Infestación de alguna plaga.</li>
                                <li>Variación de voltaje dentro de la instalación eléctrica.</li>
                            </ul>

                            <p>Cuando el equipo terminal, así como alguno de los accesorios que lo complementan no sea operado conforme al manual de uso de cada servicio, mismo que está disponible en la página de internet.</p>
                            <p>Cuando se detecte que el equipo terminal, así como alguno de los accesorios que lo complementan, han sido reparados o manipulados por personal externo al Proveedor.</p>
                            <p>Cuando el equipo terminal sea movido del lugar donde se instaló por primera vez, en caso de que este haya requerido de instalación sin previa notificación y/autorización del Proveedor.</p>
                            
                        </AccordionItem>


                        <AccordionItem title='¿Si la garantía ya no aplica por alguna de las razones de NULIDAD, cuál el costo de reparación o reposición?'>
                            <p>Puedes consultar los costos adicionales por reparación o remplazo del equipo terminal, así como alguno de los accesorios que lo complementan en <a target="_blank" href="http://oninternet.com.mx/pricesin">http://oninternet.com.mx/pricesin </a></p>
                            <p>Si tienes alguna otra duda, puedes llamarnos al Centro de Atención a Clientes al teléfono 55 16 101010, disponible las 24 horas.</p>
                        </AccordionItem>


                        <AccordionItem title='¿Los Paquetes tienen límite de Capacidad de GB? '>
                            <p>Sí, y va de la mano con la Política de Uso Justo que depende del paquete que tengas contratado:</p>
                            <ul>
                                <li>Internet de 5 tiene una capacidad de 80 GB</li>
                                <li>Internet de 10 tiene una capacidad de 120 GB</li>
                                <li>Internet de 10 tiene una capacidad de 200 GB</li>
                                <li>Internet de 20 tiene una capacidad de 180 GB</li>
                            </ul>
                        </AccordionItem>

                        <AccordionItem title='¿Qué pasa si alcanzo la máxima capacidad de mi paquete?'>
                            <p>Podrás seguir navegando a una velocidad reducida de 512 Kbps por 60 GB de capacidad. Si quieres volver a navegar a la velocidad contratada, puedes comprar algún de paquete GB adicionales. Chécate este video acerca de la capacidad de tu paquete ON Inalámbrico: <a target="_blank" href="https://www.youtube.com/watch?v=lIBuCC7gIHo">ver video</a></p>
                        </AccordionItem>

                        <AccordionItem title='¿Cómo puedo comprar paquetes GB adicionales?'>
                            <p>Llámanos al Centro de Atención ON Internet al 55 9628 3474 para que un asesor pueda atenderte. Una vez pagado el paquete GB adicionales, tu velocidad regresará a la contratada de forma automática.</p>
                        </AccordionItem>

































                         <h1 className='bg-primary text-light text-uppercase text-center p-4 color_verde_titulo'>Recargas Prepago</h1>

                                                 <AccordionItem title='¿Qué puedo hacer en Internet con el paquete que contraté?'>
                            <p>Puedes realizar la actividad que desees, desde visitar páginas web, consultar tu correo hasta ver películas. Ten en cuenta que todos los paquetes tienen un límite y hay algunos servicios que consumen más capacidad que otros, por ejemplo las plataformas de videos y de streaming. Te recomendamos estar al tanto de tu consumo desde la APP ON Internet.</p>
                        </AccordionItem>


                        <AccordionItem title='¿Cómo puedo saber cuántos GB he consumido?'>
                            <p>Descargando la APP ON Internet en Play Store o APP Store. Regístrate con tu mail, número de Cliente y teléfono registrado a 10 dígitos. Dentro de la APP, ve a la sección de Consumo de GB.  </p>
                        </AccordionItem>

                        <AccordionItem title=' ¿Qué puedo hacer si tengo fallas con mi internet?'>
                            <p>-Conéctalo en otro enchufe.</p>
                            <p>-Resetea tu equipo y vuélvelo a prender </p>
                            <p>-Muévelo en un lugar de tu casa donde tenga más líneas de señal y enchúfalo ahí. </p>
                            <p>Si aún no tienes buena señal, llámanos al Centro de Atención a Clientes al <a href="tel:5596283474">55 9628 3474</a> y te ayudaremos. Aquí te dejamos un video donde lo explicamos mejor: <a target="_blank" href="https://www.youtube.com/watch?v=XbXMEHSRRIg"> video </a> </p>
                        </AccordionItem>


                        <AccordionItem title='¿Cuáles son los lugares autorizados de pago? '>
                            <p>Hay muchos como supermercados, bancos, tiendas de autoservicio, etc. Consúltalos aquí:  <a target="_blank" href="https://oninternet.com.mx/places-of-payment"> https://oninternet.com.mx/places-of-payment</a></p>
                        </AccordionItem>


                        <AccordionItem title='¿Puedo cambiar la ubicación de mi dispositivo dentro de mi casa?'>
                            <p>Si, puedes utilizar el equipo en distintos lugares dentro de tu casa. Procura no colocar el módem cerca de microondas, teléfonos inalámbricos, ni motores electromagnéticos. También es recomendable que se ubique cerca de una ventana.</p>
                        </AccordionItem>


                        <AccordionItem title='¿Es un servicio móvil?'>
                            <p>No, el servicio de ON Inalámbrico lo puedes enchufar en cualquier parte de tu casa. Sin embargo, no puedes sacar el módem del domicilio registrado porque el servicio se desactivará y solo se reactivará cuando lo regreses.</p>
                        </AccordionItem>


                        <AccordionItem title='¿El módem es mío?'>
                            <p>No, el módem y el cable de carga del módem son propiedad de ON Internet. </p>
                        </AccordionItem>


                        <AccordionItem title='Yo tengo un módem parecido, ¿puedo usarlo?'>
                            <p>No, el servicio de ON Internet solo funciona con el módem que te proporcionamos en ON Internet. </p>
                        </AccordionItem>


                        <AccordionItem title='¿Qué pasa si retiro el SIM del módem?'>
                            <p>Se perderá la funcionalidad de tu servicio ON Internet y para que funcione nuevamente, deberás desconectar el equipo de la corriente eléctrica. Insertar el SIM y encenderlo nuevamente.</p>
                        </AccordionItem>


                        <AccordionItem title='¿Puedo usar mi SIM en otro módem?'>
                            <p>No, el SIM está limitado al uso con el módem asignado para disfrutar del servicio ON Internet.</p>
                        </AccordionItem>


                        <AccordionItem title='¿Qué pasa si me cambio de domicilio?'>
                            <p>Debes llamarnos a Atención a Clientes al 55 9628 3474 para corroborar disponibilidad en el nuevo domicilio y registrar el cambio. Podrás aplicar un cambio de domicilio sin costo, a partir del segundo se te cobrará $100 por cada cambio que solicites.</p>
                        </AccordionItem>


                        <AccordionItem title='¿Qué pasa si no tengo luz en mi casa?'>
                            <p>El módem no funcionará ya que necesita conectarse a la corriente eléctrica para encenderse.</p>
                        </AccordionItem>


                        <AccordionItem title='¿Cómo puedo conectarme a internet desde mi computadora o celular?'>
                            <p>Lo puedes realizar de dos maneras:</p>
                            <ul>
                                <li>Tomando el cable LAN que viene dentro de la caja del equipo y conectar un extremo del cable a tu computadora en la ranura que dice LAN y el otro extremo al módem en la ranura que dice LAN/WAN.</li>
                                <li>A través de conexión inalámbrica (WiFi): Localiza en la etiqueta del módem el nombre de la red (“SSID”) y la contraseña (“WIFI KEY”).  Escríbelo en tu dispositivo para conectarte.</li>
                            </ul>
                        </AccordionItem>


                        <AccordionItem title='¿Qué puedo hacer si me falla internet?'>
                            <p>Sigue estos sencillos pasos:</p>

                            <ul>
                                <li>Intenta conectarlo en otro enchufe.</li>
                                <li>Resetea tu equipo y vuélvelo a prender.</li>
                                <li>Busca dentro de tu casa un lugar donde tenga más señal y conéctalo.</li>
                            </ul>
                            <p>Si después de intentar esto sigues sin conexión, llámanos al 55 56 101010 y con gusto te apoyaremos.</p>
                        </AccordionItem>


                        <AccordionItem title='¿Cómo cambio de contraseña?'>
                            <p>Si tu módem es marca M4:</p>
                            <ul>
                                <li>Conéctate a tu módem.</li>
                                <li>Desde tu navegador, ingresa a la dirección que está en la etiqueta de tu módem.</li>
                                <li>Accede escribiendo en usuario y contraseña: admin</li>
                                <li>Dentro del menú, da clic en Inalámbrico -> Ajustes WLAN.</li>
                                <li>Cambia el nombre de la reden “Nombre Wifi (SSID)”.</li>
                                <li>Escribe la nueva contraseña en el campo correspondiente y da clic en aplicar (te sugerimos anotarlas para que no se te olviden 😊 )</li>
                                <li>Acepta que se desconecte la red Wifi.</li>
                                <li>Conéctate de nuevo a Internet con el nuevo nombre y contraseña.</li>
                                <li>Da clic en cancelar en la venta “Establecer ubicación de red”.</li>
                            </ul>

                            <p>Si tu módem es marca Huawei:</p>

                            <ul>
                                <li>Conéctate a tu módem.</li>
                                <li>Descarga la app HiLink Huawei con tu celular, ábrela y acepta los permisos de configuración.</li>
                                <li>Entra a configuración, verás que la opción “Mi Wifi” no estará habilitada.</li>
                                <li>Entra a “cuenta” y conéctate (la contraseña la encuentras en la etiqueta del módem al lado de la palabra password). Da clic en conexión.</li>
                                <li>Entra a “Mi Wifi” y cambia el nombre de la red y contraseña (acuérdate de ellas). Da clic en la palomita.</li>
                                <li>Reinicia la red Wifi.</li>
                                <li>Conéctate de nuevo con el nombre y contraseña.</li>
                            </ul>
                        </AccordionItem>


                        <AccordionItem title='¿Dónde está el nombre de red y contraseña del equipo?'>
                            <p>El nombre de red y contraseña las encontrarás en la etiqueta pegada a tu equipo.</p>
                        </AccordionItem>



                        <AccordionItem title='¿Qué hago si me roban el módem?'>
                            <p>Llama al Centro de Atención a Clientes al 55 96 28 34 74 para bloquear el equipo y que no pueda ser utilizado en ningún otro proveedor de servicios, nuestro personal te dará los siguientes pasos para el seguimiento.</p>
                        </AccordionItem>


                        <AccordionItem title='¿Cómo puedo hacer válida mi garantía?'>
                            <ul>
                                <li>Contacta al Centro de Atención a Clientes en 55 9628 3474 y proporciona la información del servicio ON Inalámbrico contratado y del que se requiera la atención a tu solicitud, por ejemplo: a) folio del Contrato, b) número de identificación del Suscriptor, c) domicilio, d) teléfono, e) e-mail etc.</li>
                                <li>Permite y apoya al agente de Atención a Clientes, mismo que a partir de un proceso de verificación previo, evaluará la falla, posible solución remota y de requerirlo la visita técnica para reemplazo del decodificador y/o equipo terminal, así como alguno de los accesorios que lo complementan.</li>
                                <li>En caso de requerirse el reemplazo del equipo terminal, así como alguno de los accesorios que lo complementan, se programará una visita técnica para dicho reemplazo en un lapso no mayor a 30 días, para lo cual se realizará el ajuste correspondiente en su facturación por el tiempo sin servicio o falla a solicitud del Suscriptor.</li>
                            </ul>
                        </AccordionItem>


                        <AccordionItem title='¿Qué vigencia tiene la garantía?'>
                            <p>La vigencia de la garantía será por el tiempo que dure la relación contractual, siempre y cuando no se incumpla ninguna de las razones de NULIDAD que se enlistan en la misma. Para conocerla da clic <a target="_blank" href="https://oninternet.com.mx/polizagarantia">aquí</a></p>
                        </AccordionItem>


                        <AccordionItem title='¿Cuáles son los supuestos en los que mi póliza de garantía entra en la nulidad?'>
                            <p>Cuando el equipo terminal, así como alguno de los accesorios que lo complementan, sean utilizados en condiciones distintas a las normales, tales como:</p>
                            <ul>
                                <li>Verter algún líquido sobre el equipo terminal, así como alguno de los accesorios que lo complementan.</li>
                                <li>Por romper, extraviar y/o retirar la tarjeta inteligente y/o (SIM), insertada en el equipo terminal.</li>
                                <li>Daño físico-estético que no derive por el desgaste natural ocasionado por su uso.</li>
                                <li>Infestación de alguna plaga.</li>
                                <li>Variación de voltaje dentro de la instalación eléctrica.</li>
                            </ul>

                            <p>Cuando el equipo terminal, así como alguno de los accesorios que lo complementan no sea operado conforme al manual de uso de cada servicio, mismo que está disponible en la página de internet.</p>
                            <p>Cuando se detecte que el equipo terminal, así como alguno de los accesorios que lo complementan, han sido reparados o manipulados por personal externo al Proveedor.</p>
                            <p>Cuando el equipo terminal sea movido del lugar donde se instaló por primera vez, en caso de que este haya requerido de instalación sin previa notificación y/autorización del Proveedor.</p>
                            
                        </AccordionItem>


                        <AccordionItem title='¿Si la garantía ya no aplica por alguna de las razones de NULIDAD, cuál el costo de reparación o reposición?'>
                            <p>Puedes consultar los costos adicionales por reparación o remplazo del equipo terminal, así como alguno de los accesorios que lo complementan en <a target="_blank" href="http://oninternet.com.mx/pricesin">http://oninternet.com.mx/pricesin </a></p>
                            <p>Si tienes alguna otra duda, puedes llamarnos al Centro de Atención a Clientes al teléfono 55 16 101010, disponible las 24 horas.</p>
                        </AccordionItem>


                        <AccordionItem title='¿Qué es ON Inalámbrico Prepago?'>
                            <p>Es un servicio nuevo de ON Internet Inalámbrico que se adapta a tus necesidades: puedes recargar cuando quieras, lo que quieras. No hay plazos forzosos y el servicio NO se reinicia automáticamente.</p>
                        </AccordionItem>


                        <AccordionItem title='¿Cuánto dura la recarga?'>
                            <p>Depende de tus hábitos de consumo y recarga que hayas adquirido, tenemos de hasta 7 o 30 días. </p>
                            <p>Cada recarga cuenta con una capacidad (GB) y una vigencia, al consumir el máximo de capacidad o cuando la vigencia expire (lo que ocurra primero), el servicio concluye y podrás adquirir otra recarga si lo deseas.</p>
                        </AccordionItem>


                        <AccordionItem title='¿Tendré internet ilimitado durante el periodo que dure mi recarga?'>
                            <p>No, cada recarga tiene una capacidad (GB), que se va consumiendo con las actividades que realices, al alcanzar el máximo de GB o cuando la vigencia expire (lo que ocurra primero), tu servicio finaliza y necesitarás realizar otra recarga para volver a tener internet.</p>
                        </AccordionItem>



                        <AccordionItem title='¿Dónde puedo recargar?'>
                            <p>En los lugares autorizados de pago. Deberás tener a la mano la referencia de pago de la recarga que quieras comprar y que esté disponible. Cada recarga tiene un código identificador diferente. Pon mucha atención.Para obtener las referencias de pago entra a la APP ON Internet > Sección Recargas. </p>
                            <p>O llámanos al Centro de Atención a Clientes al 55 56 101010.  </p>
                        </AccordionItem>


                        <AccordionItem title='¿Cada cuánto debo comprar recargas?'>
                            <p>Cuando quieras. Una vez que la recarga anterior expire, podrás adquirir una nueva si lo deseas. Se recomienda no dejar pasar más de 90 días sin recargar, se considera que ya no requieres el servicio y se tomará por cancelado.  ¡No te vayas!  </p>
                        </AccordionItem>


                        <AccordionItem title='¿Qué tipo de recarga puedo comprar? '>
                            <p>La que quieras de las 3 opciones, siempre y cuando haya disponibilidad de cobertura. Por eso te recomendamos ingresar a la APP para saber cuáles tenemos disponibles para ti. </p>
                        </AccordionItem>




































                       

                        <h1 className='bg-primary text-light text-uppercase text-center p-4'>ON ALÁMBRICO</h1>



                        <AccordionItem title='¿Cuál es la cobertura?'>
                            <p>La cobertura es a nivel nacional y está sujeta a disponibilidad y facilidades técnicas en tu zona y domicilio, las cuales serán revisadas al momento de tu solicitud de contratación por parte de un asesor de ventas. </p>
                        </AccordionItem>

                        <AccordionItem title='¿Hay algún límite de transmisión de datos en los paquetes?'>
                            <p>No, si tus ganas de navegar son ilimitadas, ON Alámbrico es una gran opción porque podrás realizar tus actividades favoritas en internet, como navegar, ver películas en streaming, plataformas de  video, etc. a la velocidad contratada sin preocuparte de tu capacidad de Gigabytes.</p>
                        </AccordionItem>

                        <AccordionItem title='¿El servicio requiere de instalación?'>
                            <p>Sí, este servicio de internet corre por la red de Telmex de última generación que en alianza con Dish, ON ofrece sus nuevos paquetes a los usuarios, ya sea por cable de cobre o fibra óptica, siendo la fibra óptica una gran opción para experimentar una mayor velocidad de navegación, requiriendo de una fácil instalación por parte de un técnico que acudirá a tu domicilio.</p>
                        </AccordionItem>

                        <AccordionItem title='¿En qué tiempo me instalarán el servicio?'>
                            <p>El plazo promedio es de 7 días hábiles, un técnico calificado de Telmex u otras empresas autorizadas acudirán a realizar tu instalación, la cual está sujeta a contar con las facilidades técnicas necesarias en tu domicilio. Te instalarán un equipo (Módem/ ONT) según la tecnología disponible para ofrecer tu servicio, con la marca Infinitum o marca ON, esto es porque al usar la red o infraestructura Telmex, los equipos están previamente certificados por ellos. </p>
                        </AccordionItem>

                        <AccordionItem title='Entonces si contrato, ¿seré cliente de ON o de Telmex? '>
                            <p>Serás un cliente ON, nosotros estaremos a cargo de la contratación del servicio, atención a clientes para resolver tus dudas sobre pagos y cualquier otro tema relacionado con tu servicio. </p>
                        </AccordionItem>

                        <AccordionItem title='¿El servicio tiene suscripción o requiere un plazo forzoso de contratación?'>
                            <p>Consulta con tu asesor de ventas nuestros planes y promociones vigentes.</p>
                        </AccordionItem>

                        <AccordionItem title='El servicio requiere de recargas y pagos adicionales a mi renta mensual?'>
                            <p>No, solo pagarás la renta mensual de tu paquete contratado. En caso de pago tardío del servicio, se generarán cargos adicionales por suspensión y reconexión y otras penalizaciones fuera de tus pagos regulares.</p>
                        </AccordionItem>

                        <AccordionItem title='¿Cómo y dónde puedo pagar mi servicio?'>
                            <p>Tienes dos opciones:</p>
                             <ul>
                                <li>Con tarjeta de crédito o débito: Llámanos a nuestro Centro de Atención a Clientes al 55 9628 3474 y con gusto te ayudamos a procesar tu pago.</li>
                                <li>En lugares autorizados. Puedes visitar la sección “Lugares de pago”. Tenemos para ti un gran listado de lugares autorizados. Por favor no olvides tu referencia de pago al momento de realizar tu pago. Sino la tienes, te damos tres opciones:
                                    <ul>
                                        <li>Descárgala en Mi cuenta ON dando <a target="_blank" href=" https://micuentaon.oninternet.com.mx/index.php">clic aquí</a></li>
                                        <li>Consúltala en la app ON Internet y desde tu celular muestra el código de barras al operador</li>
                                        <li>Llámanos al Centro de Atención a Clientes al 55 9628 3474 y te la mandaremos</li>
                                    </ul>
                                </li>
                                
                            </ul>
                            
                        </AccordionItem>

                        <AccordionItem title='¿Qué pasa si no tengo luz en mi casa?'>
                            <p>El módem cobre / ONT fibra óptica no funcionará ya que necesita conectarse a la corriente eléctrica para encenderse.</p>
                        </AccordionItem>

                        <AccordionItem title='¿Cómo puedo conectarme a internet desde mi computadora?'>
                            <p>A través de conexión WiFi, para lo cual deberás identificar el nombre de tu red y contraseña que están escritos en las etiqueta o sección que dice SSID en tu equipo (Módem / ONT).</p>
                            <p>Verifica que tu equipo (Teléfono celular, computadora, Laptop,  Tablet, etc.) tenga activado el WiFi.</p>
                            <p>Abre las redes inalámbricas disponibles y selecciona la que corresponde previamente identificada en equipo (Módem / ONT)  e ingresar la contraseña de la red.</p>
                        </AccordionItem>                        

                        <AccordionItem title='¿Qué tengo que hacer en caso de que mi servicio presente fallas?'>
                            <ul>
                                <li>Revisa que tu equipo (módem / ONT) esté conectado a la corriente de energía eléctrica. Verifica que la luz de Encendido o POWER esté en verde.</li>
                                <li>Verifica que el cable de red de tu instalación esté conectado al equipo (Módem/ONT).</li>
                                <li>Apaga y prende el equipo (módem / ONT). </li>
                                <li>Si la falla persiste, llámanos al Centro de Atención a Clientes al 55 96283474 y con gusto te ayudaremos.</li>
                            </ul>

                        </AccordionItem>


                           <AccordionItem title='¿Cómo puedo hacer válida mi garantía?'>
                            <p>Contacta al Centro de Atención a Clientes en el teléfono 55 9628 3474 o bien, envía un correo electrónico a <a href="atencionaclientes@oninternet.com.mx"> atencionaclientes@oninternet.com.mx </a></p>
                            <p>Para el servicio de Internet Alámbrico el Proveedor se compromete a realizar el cambio físico en todos los casos en los que el equipo terminal presente una falla en un lapso no mayor a 30 días.</p>
                        </AccordionItem>

                        <AccordionItem title='¿Cuáles son los supuestos en los que mi póliza de garantía entra en la nulidad?'>
                            <p>Cuando el equipo terminal así como alguno de los accesorios que lo complementan, sean utilizados en condiciones distintas a las normales, tales como:</p>
                            <ul>
                                <li>Verter algún líquido sobre el equipo terminal, así como alguno de los accesorios que lo complementan.</li>
                                <li>Daño físico-estético que no derive por el desgaste natural ocasionado por su uso.</li>
                                <li>Infestación de alguna plaga.</li>
                                <li>Cuando se detecte que el equipo terminal, así como alguno de los accesorios que lo complementan, han sido reparados o manipulados por personal externo al Proveedor.</li>
                                <li>Variación de voltaje dentro de la instalación eléctrica.</li>
                            </ul>
                        </AccordionItem>

                         <AccordionItem title='¿Si la garantía ya no aplica por alguna de las razones de NULIDAD, cuál el costo de reparación o reposición?'>
                            <p>Puedes consultar los costos adicionales por reparación o remplazo del equipo terminal, así como alguno de los accesorios que lo complementan en <a target="_blank" href="oninternet.com.mx/pricesan"> http://oninternet.com.mx/pricesan </a></p>
                            <p>Si tienes alguna otra duda, puedes llamarnos al Centro de Atención a Clientes al teléfono 55 9628 3474, disponible las 24 horas.</p>
                        </AccordionItem>





                         <h1 className='bg-primary text-light text-uppercase text-center p-4'>Portabilidad de número telefónico fijo</h1>


                        <AccordionItem title='¿Qué es portabilidad numérica?'>
                            <p>Se refiere al derecho que tienen todos los usuarios a cambiar de proveedor de servicio de telecomunicaciones conservando su mismo número telefónico. </p>
                        </AccordionItem>

                        <AccordionItem title='¿Puedo cambiar mi línea celular a línea fija?'>
                            <p>No es posible ya que solo aplica para cambio de números del mismo tipo, es decir, telefonía fija a telefonía fija y telefonía móvil por telefonía móvil.</p>
                        </AccordionItem>

                        <AccordionItem title='¿Qué es el NIP de portabilidad?'>
                            <p>El NIP o número de identificación personal es un número de 4 dígitos que debes obtener marcando al 051 desde el número que tienes y que deseas portar.</p>
                        </AccordionItem>

                      
                        <AccordionItem title='¿El 051 es un servicio que depende de ON Internet?'>
                            <p>No, es un servicio que depende del Instituto Federal de telecomunicaciones y es totalmente ajeno a ON Internet.</p>
                        </AccordionItem>

                        <AccordionItem title='¿Qué pasa si no puedo obtener mi NIP?'>
                            <ul> 
                                <li>Asegúrate de marcar el 051 desde el número telefónico que tienes y deseas portar.</li>
                                <li>Verifica que tu número no sea privado, de ser así, debes dar de baja el servicio de número privado con tu compañía actual para que el 051 identifique el teléfono del que proviene la solicitud y pueda proporcionar el NIP.</li>
                                <li>Verifica que tu número telefónico no esté enruteado para contestarse a otro teléfono ni tenga bloqueos y configuraciones especiales.</li>
                                <li>Realiza por 3 intentos al menos. </li>
                                <li>Si sigues sin poder obtener tu NIP, llámanos para asesorarte 55 56 10 10 10 / 55 9628 3474</li>
                            </ul>
                        </AccordionItem>


                        <AccordionItem title='¿Qué pasa si olvide mi NIP?'>
                            <p> ¡No te preocupes! lo puedes recuperar fácilmente: </p>
                            <ul> 
                                <li>Marca nuevamente al 051 desde el número que tienes y desees portar y el sistema te devolverá la llamada proporcionando el mismo NIP si s que aún está vigente,es decir, que no han pasado 5 días de que lo generaste.  </li>
                                <li>Si tu NIP ya no está vigente, el sistema te proporcionará uno nuevo.</li>
                               
                            </ul>
                        </AccordionItem>


                         <AccordionItem title='¿Puedo dar de baja el servicio con mi proveedor actual antes o durante el trámite de portabilidad?'>
                            <p>No puedes dar de baja tu servicio actual pues si tu cambio es rechazado, no se podrá generar uno nuevo. </p>
                        </AccordionItem>

                        
                         <AccordionItem title='¿Qué puedo hacer si cancelé mi línea y no generé el NIP, o éste caducó sin terminar el proceso?'>
                            <p>Deberás tramitar una carta de baja del servicio con tu proveedor anterior que ampare el número que desees portar y entregarla a ON Internet para iniciar el trámite de Portabilidad. Debes anexar también el formato de solicitud de portabilidad y tú copia de identificación oficial vigente.</p>
                        </AccordionItem>


                        <AccordionItem title='¿El NIP aplica para personas físicas y morales?'>
                            <p>No,  sólo aplica para personas físicas.</p>
                        </AccordionItem>

                        <AccordionItem title='¿En dónde puedo entregar mis documentos para iniciar el trámite de portabilidad?'>
                            <p>Deberás enviarlos por correo electrónico a la dirección: <a href="mailto:portabilidad@oninternet.com.mx<">portabilidad@oninternet.com.mx</a></p>
                        </AccordionItem>    











                        <h1 className='bg-primary text-light text-uppercase text-center p-4'>ON SATELITAL</h1>


                         <AccordionItem title='¿Los Paquetes tienen límite de Capacidad de GB?'>
                            <p>Si, y va de la mano con la Política de Uso Justo que depende del paquete que tengas contratado:</p>
                            <ul>
                                <li>Internet de 3 tiene una capacidad de 5 GB</li>
                                <li>Internet de 5 tiene una capacidad de 15 GB</li>
                                <li>Internet de 10 tiene una capacidad de 20 GB</li>
                                <li>Internet de 10 tiene una capacidad de 40 GB</li>
                                <li>Internet de 20 tiene una capacidad de 60 GB</li>
                                <li>Internet de 25 tiene una capacidad de 20 GB</li>
                                <li>Internet de 30 tiene una capacidad de 100 GB</li>
                                <li>Internet de 30 tiene una capacidad de 150 GB</li>
                            </ul>
                        </AccordionItem>

                        <AccordionItem title='¿Qué puedo hacer en Internet con el paquete que contraté?'>
                            <p>Puedes realizar la actividad que desees, desde visitar páginas web, consultar tu correo hasta ver películas. Ten en cuenta que todos los paquetes tiene un límite y hay algunos servicios que consumen más capacidad que otras, por ejemplo las plataformas de videos y de streaming. Te recomendamos estar al tanto de tu consumo. </p>
                        </AccordionItem>

                      <AccordionItem title='¿Qué pasa cuando alcanzo el límite de capacidad de mi paquete contratado?'>
                            <p>Podrás seguir navegando pero a una velocidad de 0.5 Megas o 1 Mega dependiendo del paquete contratado. Los paquetes con capacidad original de hasta 20 GB navegarán a velocidad reducida de 0.5 Megas, y los paquetes con capacidad original superior a 40 GB, navegarán a 1 Mega.</p>
                        </AccordionItem>



                        <AccordionItem title='¿Cómo me puedo conectar a Internet?'>
                            <ul>
                                <li> Tomando el cable LAN que viene dentro de la caja del equipo y conectar un extremo del cable a tu computadora en la ranura que dice LAN y el otro extremo al dispositivo On Internet en alguna de los puertos de conexión que diga LAN o LAN/WAN que se encuentra en la parte posterior. </li>
                                <li> A través de conexión inalámbrica (WiFi) para lo cual deberás localizar en la etiqueta  del módem la palabra “SSID”, ésta es el nombre de la red inalámbrica que deberás seleccionar en tu equipo de cómputo o dispositivo móvil y posteriormente la contraseña de la red será la que tiene la etiqueta “WIFI PASSWORD o WIFI KEY” que tendrás que escribir en tu computadora o dispositivo móvil una vez que hayas iniciado la conexión a tu red inalámbrica.</li>

                            </ul>
                        </AccordionItem>
                        <AccordionItem title='¿Qué pasa si se mueve accidentalmente la antena?'>
                            <p>Es muy probable que la señal se pierda, pero ¡No te preocupes! Llámanos al Centro de Atención a Clientes al 55 9628 3474 y programaremos la visita de un técnico para que pueda orientar nuevamente la antena.</p>
                        </AccordionItem>
                        <AccordionItem title='¿Qué pasa si no tengo luz en mi casa?'>
                            <p>El módem no funcionará, ya que necesita conectarse a la corriente eléctrica para encenderse.</p>
                            <p>Te recomendamos conectarlos a un UPS, que además de funcionar como regulador (que evitará que el equipo se dañe por descargas eléctricas); te servirá como batería por un tiempo determinado, dependiendo de su capacidad.</p>
                        </AccordionItem>
                        <AccordionItem title='¿Qué tengo que hacer en caso de que mi servicio presente fallas?'>
                            <ul>
                                <li>   Revisa que tu equipo (módem y router) estén contactados a la corriente de energía eléctrica. Verificado que la luz de Encendido o POWER este en verde.</li>
                                <li>   Verifica que ningún cable de la instalación se encuentre desconectado.  </li>
                                <li>   Apaga y prende el router y el módem.</li>
                            </ul>
                            <p>Resetea el router WiFi</p>
                            <ul>
                                    <li>   Desconéctalo de la corriente eléctrica y conéctalo de nuevo.</li>
                                    <li>    Enciéndelo y verifica que puedes ver la red desde cualquier dispositivo con WiFi. </li>

                            </ul>
                        </AccordionItem>        

                        <AccordionItem title='Mi servicio lo percibo muy lento, ¿qué debo hacer?'>
                            <p>Si sientes que navegas a una velocidad más lenta y las páginas se tardan más de lo normal en cargar es posible que hayas agotado tu capacidad de Gigabytes (GB). </p>
                        </AccordionItem>



                       

                        
                        

                        <h1 className='bg-primary text-light text-uppercase text-center p-4'>PAGOS</h1>

                      

                        <AccordionItem title='¿Qué es el pagaré que viene en mi solicitud de servicios y/o carátula?'>
                            <p>Es el medio por el cual el proveedor solicita al suscriptor que garantice el cumplimiento de las obligaciones de devolución del decodificador y accesorios otorgados al momento de la prestación del servicio.</p>
                        </AccordionItem>

                        <AccordionItem title='¿Cómo se hace efectivo el mismo?'>
                            <p>Si el suscriptor no hace entrega del decodificador o no lo devuelve en condiciones normales, se obliga a pagar el costo del mismo, información que viene impresa en el pagaré y podrá consultar dependiendo de la tecnología del equipos contratado.</p>
                        </AccordionItem>

                        <AccordionItem title='¿Cómo se cancela el pagaré?'>
                            <p>El pagaré se cancela en cuanto el suscriptor cumple con la entrega del equipo, tiene su cuenta al corriente en sus pagos y en caso de haber contratado un plazo forzoso, éste haya cumplido con la vigencia adquirida y, de esta manera, además de quedar cancelado automáticamente, se concluye la relación contractual con el proveedor.</p>
                        </AccordionItem>

                          <AccordionItem title='¿Cómo puedo hacer válida mi garantía?'>
                            
                            <ul>
                                 <li>Contacta al Centro de Atención a Clientes en 55 96 28 34 74 y proporciona la información del servicio ON Satelital contratado y del que se requiera la atención a tu solicitud, por ejemplo: a) folio del Contrato, b) número de identificación del Suscriptor, c) domicilio, d) teléfono, e) e-mail etc.</li>
                                 <li>Permite y apoya al agente de Atención a Clientes, mismo que a partir de un proceso de verificación previo, evaluará la falla, posible solución remota y de requerirlo la visita técnica para reemplazo del decodificador y/o equipo terminal, así como alguno de los accesorios que lo complementan.</li>
                                 <li>En caso de requerirse el reemplazo del equipo terminal, así como alguno de los accesorios que lo complementan, se programará una visita técnica para dicho reemplazo en un lapso no mayor a 30 días, para lo cual se realizará el ajuste correspondiente en su facturación por el tiempo sin servicio o falla a solicitud del Suscriptor.</li>

                            </ul>
                        </AccordionItem>

                        <AccordionItem title='¿Qué vigencia tiene la garantía?'>
                            <p>La vigencia de la garantía será por el tiempo que dure la relación contractual, siempre y cuando no se incumpla ninguna de las razones de NULIDAD, que se enlistan en la misma.</p>
                        </AccordionItem>

                        <AccordionItem title='¿Cuáles son los supuestos en los que mi póliza de garantía entra en la nulidad?'>
                            
                            <ul>
                                 <li>Por variación de voltaje dentro de la instalación eléctrica.</li>
                                 <li>Por modificar la instalación del equipo terminal y/o alguno de los accesorios empleados para proveer el servicio.</li>
                                 <li>Por manipular y/o abrir el equipo terminal por personas ajenas a el Proveedor.</li>
                                 <li>Por mover el equipo terminal del lugar originalmente instalado sin autorización del Proveedor.</li>

                            </ul>
                        </AccordionItem>

                        <AccordionItem title='¿Si la garantía ya no aplica por alguna de las razones de NULIDAD, cuál el costo de reparación o reposición?'>
                            <p>Puedes consultar los costos adicionales por reparación o remplazo del equipo terminal, así como alguno de los accesorios que lo complementan en <a href="oninternet.com.mx/pricessat"> http://oninternet.com.mx/pricessat </a></p>
                            <p>Si tienes alguna otra duda, puedes llamarnos al Centro de Atención a Clientes al teléfono 55 9628 3474, disponible las 24 horas.</p>
                        </AccordionItem>






                        <h1 className='bg-primary text-light text-uppercase text-center p-4'>ON INALÁMBRICO + AMAZON PRIME</h1>
                       
                        <AccordionItem title='¿Qué es Amazon Prime?'>
                            <p><strong>La suscripción a Amazon Prime pone a su alcalnce lo mejor de las compras y el entrentenimiento.</strong></p>
                            <p>Los miembros de Prime disfrutan de entregas rápidas y gratuitas de millones de artículos, incluso en el mismo día o al día siguiente en los lugares donde están disponibles.</p>
                            <p>Prime Incluye la transmisión por Internet de miles de películas, series de televisión y contenidos originales de Amazon premiados de gran popularidad gracias a Prime Video.</p>
                            <p>La suscripción también permite acceder a más de dos millones de canciones seleccionadas a mano a través de Amazon Music. Puede informarse sobre estas y otras ventajas en <a href="https://www.amazon.com.mx/">www.amazon.com.mx</a></p>
                        </AccordionItem>

                        <AccordionItem title='Cuáles son las ventajas de ser miembro de Amazon Prime'>
                            <p><strong>Los miembros de Amazon Prime pueden disfrutar de las siguientes ventajas:</strong></p>
                            <p><strong>Compras y entregas: </strong>acceso anticipado a las ofertas flash y opciones de entrega rápida, gratuita y flexible que se adaptan a su vida</p>
                            <p><strong>Amazon Music: </strong>acceso a 2 millones de canciones seleccionadas a mano incluido con prime. Podrá escucharlas sin anuncios, con cambios de canción ilimitados y sin conexión.</p>
                            <p><strong>Amazon Prime Video: </strong>vea y descargue miles de películas y series de televisión , incluidos contenidos originales de Amazon premiados, sin anuncios.</p>
                            <p><strong>Prime Gaming: </strong>acceso a juegos, suscripciones a canales y contenido exclusivo gratis en plataformalíder mundial de transmisión en directo por Internet para jugadores.</p>
                            <p>Si desea una lista mas detallada de las ventajas de Prime, entre en www.amazon.com.mx</p>
                        </AccordionItem>

                        <AccordionItem title='Si ya estoy dado de alta en un servicio de transmisión de musica por internet (como Spotify, Pandora, etc.), ¿por qué necesitaria Amazon Music?'>
                            <p>Mientras que muchas suscripciones a servicios de transmisión por Internet solo ofrecen escuchar sin anuncios en las categorias prémium,<strong> Amazon Music</strong>, incluido con Prime, ofrece eso mismo, junto con cambios de canciones ilimitados, para todo el mundo.</p>
                            <p>Además, si tiene un dispositivo de <strong>Amazon con Alexa</strong>, indudablemente la mejor opción para usted es <strong>Amazon Music</strong>, ya que tendra una mejor experiencia de escucha que con cualquier otro servicio de transmisión</p>
                            <p>Y aunque no tenga un dispositivo de <strong>Amazon de Alexa</strong>, la aplicacion <strong>Amazon Music</strong> tambien tiene Alexa integrada, con lo que podrá escuchar y explorar sin utilizar las manos esté donde esté. Y no olvide que <strong>Amazon Music</strong> esta incluido en su suscriptición de Prime sin costo adicional, así como muchas otras ventajas en compras, entregas y entretenimiento.</p>
                        </AccordionItem>

                        <AccordionItem title='Si ya estoy dado de alta en un servicio de transmisión de vídeo por internet (como Netflix, Hooq, etc.), ¿por qué necesitaria Prime Video?'>
                            <p><strong>Amazon Prime Video</strong> permite acceder a una variedad de series de televisión y películas que no estan disponibles en otros servicios de transmisión, incluidas series y peliculas originales de Amazonpremiadas como <strong>Hunters, LOL, La Jauría, Hanna, The Boys, Como Sobrevivir Soltero y De Viaje con los Derbez, entre otras.</strong></p>
                            <p>Gracias a ello -- y a miles de series de televisión y películas más, funciones exclusivas como X-Ray, y la posibilidad de ver contenidos en distintos dispositivos simultaneamente o descargarlos para verlos sin conexión en dispoitivos compatibles--, <strong>Prime Video</strong> es una excelente opcion para cualquier hogar o persona que quiera descubrir contenido nuevo o ver su contenido favorito en casa o sobre la marcha.</p>
                        </AccordionItem>

                        <AccordionItem title='¿Cómo activo los subtítulos en los títulos compatibles de Amazon Prime Video?'>
                            <p>Cuando un título que incluye subtítulos se esté reproduciendo, seleccione el icono o escoge el idioma de subtítulos que desee utilizar y, si hay subtitulos disponibles, se indicara mediante el icono.</p>
                        </AccordionItem>

                        <AccordionItem title='¿Cómo cambio el idioma de audio en los títulos compatibles de Amazon Prime Video?'>
                            <p><strong>Los miembros de Amazon Prime pueden disfrutar de las siguientes ventajas:</strong></p>
                            <p>Cuando esté reproduciendo un título, selecciona el icono.</p>
                            <p>A continuación seleccione la pista de audio que desea escuchar.</p>
                            <p>Las pistas de audio descriptivo llevan el texto <strong>[Audio Descriptivo]</strong> en su nombre.</p>
                            <small><p><stong>Nota: no todos los títulos de Prime Video incluyen pistas alternativas o audio descriptivo, ni todos los dispositivos son compatibles con pistas de audio alternativas.</stong></p></small>
                        </AccordionItem>

                        <AccordionItem title='¿Puedo acceder a todo el contenido de vídeo que ofrece Amazon Prime Video con mi suscrpción a Amazon Prime?'>
                            <p>Con su suscripción a <strong>Amazon Prime</strong>, puede acceder a todo el contenido original de Amazon, así como a miles de series de <strong>televisión y películas</strong> más de gran popularidad.</p>
                            <p>Además, puede acceder a Prime Gaming.</p>
                        </AccordionItem>

                        <AccordionItem title='¿Qué es Prime Gaming?'>
                            <p><strong>Prime Gaming</strong> es el hogar que <strong>Amazon Prime</strong> ofrece a los jugadores.</p>
                            <p>Conecte sus cuentas de <strong>Twitch y Amazon Prime</strong> para disfrutar de las ventajas de Prime Gaming, como juegos gratis todos los meses, recompensas en algunos de los juegos más populares, una suscripción a un canal de <strong>Twitch.tv</strong> cada mes sin costo adicional, y emotes e insignias de chat exclusivas en <strong>Twitch.</strong> Infórmese en gaming.amazon.com.</p>
                        </AccordionItem>

                        <AccordionItem title='¿Qué aplicaciones móviles debo descargar para disfrutar de las ventajas de Amazon Prime durate mis desplazamientos?'>
                            <p>Puede descargar las siguientes aplicaciones móviles desde App Store o Play Store:</p>
                            <p><strong>Amazon: </strong>compre millones de productos y gestione sus pedidos de Amazon esté donde esté.</p>
                            <p><strong>Amazon Prime Video: </strong>vea miles de películas y series de televisión , incluidos contenidos originales de Amazon premiados.</p>
                            <p><strong>Amazon Music: </strong> escuche música sin anuncios y con cambios de canción ilimitados, y descargue canciones para escucharlas sin conexión esté donde esté.</p>
                            <p><strong>Prime Gaming: </strong> vea transmisiones en directo y chatee con jugadores de todo el mundo.</p>
                        </AccordionItem>

                        <AccordionItem title='¿Cómo puedo conseguir Amazon Prime a través de Dish, On Internet o FreedomPop?'>
                            <p>Contratando cualquiera de los paquetes de <strong>Dish, On Internet o FreedomPop con Amazon Prime.</strong></p>
                            <p>Al activar su nuevo paquete se enviará un mensaje de texto y/o correo electrónico con un enlace para que cree una cuenta de <strong>Amazon y active su suscripción a Amazon Prime.</strong></p>
                        </AccordionItem>

                        <AccordionItem title='¿Cuánto dura el acceso a Amazon Prime?'>
                            <p><strong>A. </strong>Mientras tenga un paquete con <strong>Dish, On Internet o FreedomPop</strong> su acceso a <strong>Amazon Prime</strong> estará cubierto y no tendra que pagar nada más por la suscripción</p>
                            <p><strong>B. </strong>El plan <strong>ADD ON de $99 incluye 1 mes de suscripción a Amazon Prime por cortesía de Dish, ON Internet o FreedomPop. </strong>Al final de la promoción, su suscripción a <strong>Amazon Prime </strong>no se interrumpirá, ya que le habremos dado de alta automáticamente en un plan de pago mensual a precio estandar de $99 pesos mensuales.</p>
                            <p>El importe se incluye en la factura de <strong>Dish, ON Internet o FreedomPop. </strong>Si desea darse de baja </p>
                        </AccordionItem>

                        <AccordionItem title='¿Qué ocurre con mi cuenta de Amazon Prime si en algún momento cambio de proveedor o plan de telefonía móvil?'>
                            <p>Si se da de baja como cliente de <strong>Dish, ON Internet o FreedomPop </strong> o se pasa de plan de servicio apto para la oferta a otro que no ofrezca <strong>Amazon Prime, </strong>su suscripción se cancelará automáticamente.</p>
                            <p>Si desea continuar con su suscripción a <strong>Amazon Prime, </strong>entre en <strong>www.amazon.com.mx</strong> para seguir disfrutando de las ventajas, inicie sesión con sus credenciales de amazon y dése de alta directamente en <strong>Amazon Prime.</strong></p>
                        </AccordionItem>

                        <AccordionItem title='¿Qué pasa si ya tengo una suscripción a Amazon Prime?'>
                            <p>Podrá aprovechar la oferta de <strong>Amazon Prime de Dish, ON Internet o FreedomPop </strong>en cuanto termine su suscripción actual a <strong>Amazon Prime.</strong> Puede poner una alerta en su calendario para acordarse.</p>
                        </AccordionItem>

                        <AccordionItem title='Cómo se cancela una suscripción a Amazon Prime que haya sido activada a través de la oferta comercial de dish, ON Internet o FreedomPop?'>
                            <p>Amazon Prime esta incluido dentro de tu paquete con <strong>Dish, ON Internet o FreedomPop.</strong> Si desea cancelar las ventajas de <strong>Amazon Prime, llama al 55 96283474</strong></p>
                        </AccordionItem>

                        <AccordionItem title='¿Qué ocurre con las ventajas de Amazon Prime si Dish, ON Internet o FreedomPop suspende mi cuenta?'>
                            <p>Si su cuenta con Dish queda suspendida durante un plazo de más de <strong>30 días, </strong>las ventajas de Amazon Prime también quedaran suspendidas.</p>
                            <p>Cuando haya pagado la factura de Dish, las ventajas de <strong>Amazon Prime</strong> se reanudaran en cuestión de horas. Si se extiende del <strong>plazo de 30 días, </strong>deberá completar nuevamente el proceso de activación de cuenta.</p>
                        </AccordionItem>

                        <AccordionItem title='No he recibido ningún código de verificación al intentar registrarme para la oferta de Amazon Prime.'>
                            <p>Si presenta problemas para recibir el código de verificación por medio del SMS y/o correo electrónico, póngase en contacto con el servicio de atención al cliente de <strong>Dish, ON Internet o FreedomPop </strong>en <strong>55 96283474</strong></p>
                            <small><p><strong>Nota: para recibir el código de verificación tiene que haber contratado un paquete de Amazon Prime.</strong></p></small>
                        </AccordionItem>

                        <AccordionItem title='¿Cómo puedo comprobar que mi paquete contratado de Amazon Prime con Dish, ON Internet o FreedomPop está pagando mi suscripción a Amazon Prime?'>
                            <p>Puede consultar llamando al servicio de atención de clientes de <strong>Dish, ON Internet o FreedomPop 55 96283474 o enviando un correo electrónico a atencionaclientes@dish.com.mx </strong>para comprobar si su paquete contratado incluye el servicio de <strong>Amazon Prime </strong>o ingresar en la sección de <strong>"Mi Cuenta"</strong> desde la <strong>APP de Amazon Prime Video.</strong></p>
                        </AccordionItem>

                        <AccordionItem title='¿Cómo me pongo en contacto con el servicio de atención al cliente de Dish, ON Internet o FreedomPop?'>
                            <p>Póngase en contacto con el servicio de atención al cliente de <strong>Dish, ON Internet o FreedomPop en el número 5596283474 </strong>o al correo electrónico <strong>atencionaclientes@dish.com.mx</strong></p>
                        </AccordionItem>

                        <AccordionItem title='¿Cómo puedo obtener asistenciapara Amazon Prime?'>
                            <p><strong>Puede ponerse en contacto con el servicio de atención al cliente e Dish, ON Internet o FreedomPop en el número 5596283474 o correo electrónico atencionaclientes@dish.com.mx o ingresar directamente a lapágina de Ayuda y atención al cliente www.amazon.com.mx de Amazon Prime.</strong></p>
                        </AccordionItem>


                    </Accordion>
                </div>
            </div>
        );
    }
}

export default FAQ