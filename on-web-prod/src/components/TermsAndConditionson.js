import React from 'react';
import TocPage from './generic/TocPage';
import getLegalLinks from './Legal/getLegalLinks';

const TermsAndConditions = props =>
{
    return (
        <div id='terms-and-conditions' className='container p-4'>
            <TocPage history={props.history} links={getLegalLinks()}>
            <h4>TÉRMINOS Y CONDICIONES DISH / ON INTERNET Y AMAZON PRIME.</h4>

            <p>Dichos Términos y Condiciones son para el servicio que ofrece de manera conjunta “Dish / On Internet y Amazon Prime”, donde se otorga el acceso a la plataforma Prime Video al usuario final.</p>
            <p>Al dar clic en “Aceptar”, usted, en lo sucesivo “Suscriptor” acepta de manera incondicional las obligaciones que adquiere con la empresa Comercializadora de Frecuencias Satelitales S. de R.L de C.V, en lo sucesivo “Proveedor”.</p>
            <p>En caso de no estar de acuerdo con los términos y condiciones aquí establecidos, puede hacer clic en e botón “Cancelar” y de esa manera el proceso de contratación no continuará.</p>

            <p><strong>•	PROVEEDOR: </strong> Comercializadora de Frecuencias Satelitales, S. de R.L de C.V. con domicilio en Calzada de Tlalpan #1924, Col. Churubusco Country Club, Alcaldía Coyoacán, Ciudad de México, C.P. 04210 </p>
            <p><strong>•	SUSCRIPTOR:</strong> Persona física o moral, mayor de edad, que se adhiere a los presentes términos y condiciones, aceptando las obligaciones que esto conlleva, mismo que ha proporcionado sus datos para realizar la solicitud del servicio.</p>
            <p><strong>•	SERVICIO:</strong> Televisión Restringida vía Satélite conocida comercialmente como “Dish” en conjunto con películas, series y videos disponibles vía streaming, comercialmente conocido como “Amazon Prime Video”</p>
            <p><strong>•	DISPOSITIVOS:</strong> Equipos electrónicos y/o tecnológicos propiedad del “Suscriptor” con los que podrá tener acceso al servicio de Amazon Prime, ya sean televisores, tabletas electrónicas, teléfonos inteligentes, o cualquier otro dispositivo que tenga la capacidad de conectarse a Internet.</p>
            <p><strong>•	FORMAS DE PAGO:</strong>Medio por el que el Suscriptor decide realizar el pago de los servicios contratados, mismo que puede ser mediante tarjeta de crédito o débito y en efectivo en los lugares autorizados para ello. </p>
            <p><strong>•	PAQUETES:</strong>El Suscriptor podrá contratar cualquiera de las combinaciones que el Proveedor tiene disponibles en venta nueva, mismas que se detallan a continuación:</p>
            

            <ul class="colores-list">
                <li><strong>DISH + Amazon Prime</strong></li>
                <li><strong>DISH + Amazon Prime + Freedom Pop</strong></li>
                <li><strong>Amazon Prime + Freedom Pop</strong></li>
            </ul>
           

            <p>Al contratar cualquiera de los “PAQUETES” arriba mencionados, el suscriptor tendrá un beneficio sobre el precio final de su mensualidad.</p>

                <p><strong>AMAZON PRIME COMO SERVICIO ADICIONAL: </strong> El Suscriptor podrá contratar Amazon Prime como servicio adicional, costo que será añadido a la mensualidad del paquete ya contratado, y con el cual se le ofrece un free view de 30 días.</p>
                <p><strong>BENEFICIOS:</strong> Al realizar la compra de los Paquetes y/o adquirir Amazon Prime como servicio adicional, otorga a el suscriptor los siguientes beneficios:  </p>
                   <ul className="palomitas">
                        <li>	Envíos gratis en productos enviados por Amazon desde Estados Unidos</li>
                        <li>	Recepción de productos gratis en 1 día en más de 30 ciudades o en 2 días para ek resto del País.</li>
                        <li>	Prime video </li>
                        <li>	Prime Music</li>
                        <li>	Twitch Prime</li>
                        <li>	3 dispositivos de manera simultanea con una misma cuenta.</li>
                    </ul> 
                        

            <p>Para más información de estos beneficios dar clic en: </p>

            <p>•	SITIO(s) : La página de  internet <a href="www.dish.com.mx">www.dish.com.mx</a> y <a href="http://amazon.dish.com.mx">http://amazon.dish.com.mx</a>   mismas que son propiedad del prestador.<br />
La página <a href="www.amazon.com.mx">www.amazon.com.mx</a>  mismas que son propiedad de Amazon. 
</p>
            <p>•	CONTRAPRESTACIÓN MENSUAL: El costo mensual que el Proveedor cobrará a el Suscriptor será por el paquete, o servicio adicional adquirido, mismo que podrá ser cubierta en efectivo, tarjeta de débito y/o crédito. </p>

            <p><strong>DESCRIPCIÓN DEL SERVICIO.</strong></p>

            <p>Dish ofrece el servicio de televisión restringida vía satélite, a través de un decodificador mediante e cual se le provee el servicio. </p>
            <p>Amazon es un servicio vía internet, el cual permite visualizar, videos, series películas, a través de streaming. </p>
            <p>Freedompop es un servicio de telefonía móvil. </p>
            <p>Amazon y Freedompop son servicios ofertados a nombre de Dish, operados por terceros, en caso de cualquier cuestión relacionada con el servicio, se debe de canalizar directamente con el proveedor de servicios en <a href="www.dish.com.mx">www.dish.com.mx</a> y <a href="http://amazon.dish.com.mx">http://amazon.dish.com.mx</a> o en <a href="www.amazon.com.mx">www.amazon.com.mx</a>, siendo ésta última, propiedad de Amazon Prime.</p>

            <p><strong>SUSCRIPCION, CONTRAPRESTACIÓN MENSUAL Y FACTURACIÓN.</strong></p>

            <p><strong>SUSCRIPCIÓN:</strong> Al proporcionar el Suscriptor sus datos con Dish, posteriormente ingresará a un landing page (página de destino) intermedia, entre Amazon y Dish, donde deberá dar clic en la aceptación de los Términos y Condiciones del servicio. </p>
            <p>Dish lo redirigirá con Amazon Prime para realizar la activación de su cuenta, deberá dar clic en “Crear cuenta con Amazon” y al dar clic ahí se estará adhiriendo a los términos de uso y aviso de privacidad de Amazon.</p>
            <p><strong>CONTRAPRESTACIÓN MENSUAL:</strong> El proveedor proporcionará una referencia de pago donde deberá de pagar mensualmente el costo del paquete adquirido, al momento de la compra y activación de Amazon Prime. </p>

            <p><strong>FACTURACIÓN:</strong></p>
            <p>El Suscriptor acepta y reconoce que todo lo relacionado con la facturación y pagos será directamente con él prestador del servicio “DISH” por lo que al aceptar el presente contrato manifiesta expresamente conocer los términos y condiciones de facturación, y pagos por los servicios adquiridos. </p>

            <p><strong>REQUISITOS DE CONTRATACIÓN</strong></p>

            <p>• Identificación oficial vigente: INE, Pasaporte o Cédula Profesional (aplica para personas físicas). Acta Constitutiva, Identificación y Poder Notarial (en caso de persona moral).</p>
            <p>• Comprobante de domicilio: Recibo de luz, predial, recibo telefónico, recibo de agua.</p>
            <p>• Solicitud de servicios y/o Carátula (debidamente firmado): Completar con las firmas del Suscriptor y sin datos faltantes.</p>
            <p>• Para el registro de tarjeta con cargo recurrente: Se deberá especificar dentro de la Solicitud de servicios y/o Carátula y el Suscriptor debe firmar de aceptación el apartado de cargo recurrente. </p>

            <p><strong>CANCELACIÓN</strong></p>

            <p>La cancelación de Amazon Prime deberá hacerse directamente con el prestador del servicio “Dish” y podrá hacerse en cualquier momento comunicándose al número de atención a clientes  5596283474, continuando únicamente con el plazo mínimo forzoso que tiene el servicio de televisión restringida, mismo que se indica en su contrato de prestación de servicios.</p>
            <p>Si la contratación fue en “Bundle” Amazon + Dish desde la venta, el suscriptor perderá el costo preferencial que tiene sobre su factura, y deberá pagar el precio de lista del paquete de televisión adquirido.</p>

            </TocPage>
        </div>
    );
}

export default TermsAndConditions;