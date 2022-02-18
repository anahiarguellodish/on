import React from 'react';
import poliza from '../media/Póliza de Garantía ON.pdf';
import { Accordion, AccordionItem } from './generic/Accordion';

class FAQ extends React.Component
{
    render()
    {
        return (
            <div id='faq' className='container-fluid bg-secondary p-5'>
                <div className='container bg-light p-0'>
                    <h1 className='bg-primary text-light text-uppercase text-center p-4'>Póliza de Garantía</h1>
                    <Accordion>

                        <p className="polizagarantia">Da <a href={poliza} target='_blank' rel='noopener noreferrer'>clic aquí</a>  para conocerla.</p>

                        <h1 className='bg-primary text-light text-uppercase text-center p-4'>ON INALÁMBRICO</h1>

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
                            <p>Puedes consultar los costos adicionales por reparación o remplazo del equipo terminal, así como alguno de los accesorios que lo complementan en <a href="oninternet.com.mx/pricesin"> http://oninternet.com.mx/pricesin </a></p>
                            <p>Si tienes alguna otra duda, puedes llamarnos al Centro de Atención a Clientes al teléfono 55 9628 3474, disponible las 24 horas.</p>
                        </AccordionItem>

                       


                        <h1 className='bg-primary text-light text-uppercase text-center p-4'>ON ALÁMBRICO</h1>

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
                            <p>Puedes consultar los costos adicionales por reparación o remplazo del equipo terminal, así como alguno de los accesorios que lo complementan en <a href="oninternet.com.mx/pricesan"> http://oninternet.com.mx/pricesan </a></p>
                            <p>Si tienes alguna otra duda, puedes llamarnos al Centro de Atención a Clientes al teléfono 55 9628 3474, disponible las 24 horas.</p>
                        </AccordionItem>

                       

                        <h1 className='bg-primary text-light text-uppercase text-center p-4'>ON SATELITAL</h1>


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


                       
                    </Accordion>
                </div>
            </div>
        );
    }
}

export default FAQ;