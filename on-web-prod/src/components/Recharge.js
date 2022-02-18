import React from 'react';

import $ from 'jquery';


import '../css/gbadicionales.css';

import icono_3 from '../media/gbadicionales/icono-3.svg';
import icono_2 from '../media/gbadicionales/icono-2.svg';
import icono_1 from '../media/gbadicionales/icono-1.svg';
import PonteOn from '../media/gbadicionales/PonteOn.svg';
import IconoPila2 from '../media/gbadicionales/IconoPila2.svg';
import IconoPila from '../media/gbadicionales/IconoPila.svg';
import IconoPila1 from '../media/gbadicionales/IconoPila1.svg';
import IconoPila3 from '../media/gbadicionales/IconoPila3.svg';


const Package = props =>
{
    return (
        <div className='col-12 col-sm-4 mb-5'>
            <div className='p-3 text-center border border-light'>
                <h1 className='font-l border-bottom border-light pb-3'>
                    {props.gb}
                    <span className='h4 font-book font-m2'>GB</span>
                </h1>
                <h6 className='font-book font-s mt-3'>PAGA SÓLO</h6>
                <h2 className='font-l'>
                    <span className='h4 font-m1 align-middle d-inline-block pr-1'>$</span>{props.price}
                </h2>
            </div>
        </div>
    );
};

class Recharge extends React.Component
{
    componentDidMount() {
    

    $(document).ready(function(){
    $(".inalam-contains").show();
    $(".satelital-contains").hide();
    $("#suscribe-inalambrico").click(function(){
        $(".inalam-contains").show();
        $(".satelital-contains").hide();
        $("#suscribe-inalambrico").addClass("suscribe-inalam-active");
        $("#suscribe-inalambrico").removeClass("suscribe-sate-inactive");
        $("#suscribe-satelital").addClass("suscribe-sate-inactive");
        $("#suscribe-satelital").removeClass("suscribe-inalam-active");
    });
    $("#suscribe-satelital").click(function(){
        $(".satelital-contains").show();
        $(".inalam-contains").hide();
        $("#suscribe-satelital").removeClass("suscribe-sate-inactive");
        $("#suscribe-satelital").addClass("suscribe-inalam-active");
        $("#suscribe-inalambrico").removeClass("suscribe-inalam-active");
        $("#suscribe-inalambrico").addClass("suscribe-sate-inactive");
    });
        $(".alambrico-contains").hide();
        $(".suscribe-alambrico").addClass("suscribe-inactive");
        $(".suscribe-inalambrico").addClass("suscribe-active");
        $(".suscribe-satelital").addClass("suscribe-inactive");

        
        $("#suscribe-inalambrico").click(function(){
            $(".inalambrico-contains").show();
            $(".alambrico-contains").hide();
            $(".satelital-contains").hide();
            $(".suscribe-inalambrico").addClass("suscribe-active");
            $(".suscribe-inalambrico").removeClass("suscribe-inactive");
            $(".suscribe-alambrico").addClass("suscribe-inactive");
            $(".suscribe-satelital").addClass("suscribe-inactive");
        });
        $("#suscribe-alambrico").click(function(){
            $(".alambrico-contains").show();
            $(".inalambrico-contains").hide();
            $(".satelital-contains").hide();
            $(".suscribe-alambrico").addClass("suscribe-active");
            $(".suscribe-alambrico").removeClass("suscribe-inactive");
            $(".suscribe-satelital").addClass("suscribe-inactive");  
            $(".suscribe-inalambrico").addClass("suscribe-inactive");    
        });
        $(".satelital-contains").hide();
        $("#suscribe-satelital").click(function(){
            $(".satelital-contains").show();
            $(".alambrico-contains").hide();
            $(".inalambrico-contains").hide();
            $(".suscribe-satelital").addClass("suscribe-active");
            $(".suscribe-satelital").removeClass("suscribe-inactive");
            $(".suscribe-alambrico").addClass("suscribe-inactive");
            $(".suscribe-inalambrico").addClass("suscribe-inactive");
        });


    });
     // Add minus icon for collapse element which is open by default
     $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".fas").addClass("fa-chevron-up").removeClass("fa-chevron-down");
      });
      // Toggle plus minus icon on show hide of collapse element
      $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".fas").removeClass("fa-chevron-down").addClass("fa-chevron-up");
      }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".fas").removeClass("fa-chevron-up").addClass("fa-chevron-down");
      });
    


    }

    render()
    {
        return (
            <div>

                <div className="">
                        <div className="col-12 pleca-verde-gba">
                            <div className="row">
                                <div className="col-7 text-left ml-5 text-pleca-verde">
                                    <h1>Te cONecta</h1>
                                    <h3>Con el internet ideal para ti</h3>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 ">
                                    <div className="row contenedor-iconos-pleca">
                                        <img className="icono-pleca-verde-gba img-fluid" src={icono_3} alt=""/>
                                        <img className="icono-pleca-verde-gba img-fluid" src={icono_2} alt=""/>
                                        <img className="icono-pleca-verde-gba img-fluid" src={icono_1} alt=""/>
                                    </div>
                                    <div className=" contenedor-iconos-pleca">
                                        <img src={PonteOn} className="icon-ponteon" alt=""/>

                                    </div>

                                </div>
                            </div>

                        </div>

                      <div className="row flow-container switch-inalam-adicionales">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center ">
                              <div className="tabs-container d-flex justify-content-center tab-switch-gbad">
                                  <div className="suscribe-inalam-active" id="suscribe-inalambrico">
                                    <p className="suscribe-text">ON INALÁMBRICO</p>
                                    <p className="text-pospago">(Planes postpago)</p>
                                  </div>
                                  <div className="suscribe-sate-inactive" id="suscribe-satelital">
                                    <p className="suscribe-text">ON SATELITAL</p>
                                  </div>
                                    
                                </div>
                         
                          </div>
                      </div>

                      
                      <div className="">
                          <div className="inalam-contains">
                              <div className="compra-text col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3">
                                  <h2 className="compra"><b>Compra un</b></h2>
                                  <h2 className="title-gba"><strong> PAQUETE GB ADICIONALES</strong></h2>
                                  <h2 className="compra text-right"><b>y sigue navegando de voLON</b></h2>
                              </div>  
                              <div className="pleca-morada col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3">
                                <h2 className="telefono-gbad">LLAMA AL <a className="colora" href="tel:55 56 10 10 10">55 56 10 10 10</a></h2>

                              </div>
                              <p className="col-lg-8 col-md-8 col-sm-12 offset-lg-2 offset-md-2" id="text">Al alcanzar la capacidad máxima del paquete contratado, sigues navegando a una velocidad reducida, o puedes adquirir este paquete para volver a navegar de volON.</p>
                                
                              <div align="center">
                              <div className="col-md-3  col-sm-12 col-12 col-precios">
                              <div className="inalambrico-container">
                                  <div className="blue-container">
                                  <div className="icon-text">
                                      <p className="hasta-text">CAPACIDAD</p>
                                      <img src={IconoPila2}/>
                                  </div>
                                      <div className="divider-alt"></div>
                                      <p className="capacidad-text">
                                          <span className="capacidad-num">5</span> 
                                          <span className="capacidad-gb">GB</span></p>
                                      
                                      <div className="gbad-yellow-container">
                                       <p>
                                          <span className="paga">PAGA</span>
                                          <span></span>
                                          <span className="signo">$</span>
                                          <span className="precio">40</span></p>
                                      </div>

                                </div>  
                                  </div>
                              </div>
                              </div>

                              <div className=" text-center">
                                <span className="text-pagos col-12">COMPRA ESTOS PAQUETES PAGANDO</span>
                                <div className="row col-12 justify-content-center">
                                  <p className="text-pagos">CON TARJETA DE CRÉDITO O DÉBITO</p>
                                  <span className="">
                                    <center>
                                      <div className="decoration ml-4 mr-4"> | </div>
                                    </center>
                                  </span>
                                  <p className="text-pagos">CON CARGO A TU ESTADO DE CUENTA ON*</p>
                                </div>
                              </div>
                              <div className="col-12 text-center">
                                <span className="text-paquetes-gba">Puedes comprar todos los paquetes que desees</span>
                                <h2 className="telefono-gbad-foot mt-3">LLAMA AL <a className="colora" href="tel:55 56 10 10 10">55 56 10 10 10</a></h2>
                  
                            </div>
                              <div className="col-lg-8 col-md-8 col-sm-12 offset-lg-2 offset-md-2 text-center">
                                <p className="tyc-gb">*Sujeto a Límite de crédito. La vigencia del paquete de GB contratado es de un 1 día. Consulta la disponibilidad llamando al Centro de Atención a Clientes al número <a href="tel:55 56 10 10 10">55 56 10 10 10</a>. La velocidad reducida para los planes ON Inalámbrico Planes Postpago es de 512 Kbps. Para ON Satelital, la velocidad reducida es de 500 Kbps para el plan Internet 3 con 5 GB; para todos los demás planes, la velocidad reducida es de 1 mega. Vigencia al  28 de febrero de 2022.</p>
                             </div>
                            <div className="accordion" id="accordionExample">
                              <div className="card">
                                <div className="card-header" id="headingOne">
                                  <h5 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
                                      aria-expanded="true" aria-controls="collapseOne">
                                     <strong>Conoce aquí las tarifas si vives en la frontera</strong> 
                                      <i className="col-12 fas fa-chevron-down rotate-icon"></i>
                                    </button>
                                  </h5>
                                </div>
                            
                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                  <div className="container-fluid text-center pleca-morada" >
                                          <p className="oninternet-collapse col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3">ON Internet, en cumplimiento con el Decreto de estímulos fiscales región
                                        fronteriza norte, aplicará el respectivo porcentaje en los impuestos a nuestros servicios en dicha región.</p>
                                    
                                     </div>
                                  <div className="container mt-5">
                                    <h2 className="col-12 fronterizo_1">MUNICIPIOS QUE CONFORMAN LA REGIÓN<br/> FRONTERIZA NORTE:</h2>
                                    <div className="col-12">
                                      <table className="table table-responsive-sm tabla-fronteriza">
                                        <thead>
                                          <th scope="col">Estados</th>
                                          <th scope="col">Municipios</th>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td scope="row" className="">Baja California</td>
                                            <td scope="row" className="municipios">Ensenada, Mexicali, Tecate, Tijuana y Playas de Rosarito.</td>
                                          </tr>
                                          <tr>
                                            <td scope="row">Sonora</td>
                                            <td scope="row" className="municipios">Agua Prieta, Naco, Cananea, Santa Cruz, Nogales, Sáric, Altar,
                                              Caborca, General Plutarco Elías Calles, Puerto Peñasco y San Luis Río Colorado.</td>
                                          </tr>
                                          <tr>
                                            <td scope="row">Chihuahua</td>
                                            <td scope="row" className="municipios">Manuel Benavides, Ojinaga, Coyamel de Sotol, Guadalupe, Praxedis G.
                                              Guerrero, Juárez, Ascensión y Janos.</td>
                                          </tr>
                                          <tr>
                                            <td scope="row">Coahuila de Zaragoza</td>
                                            <td scope="row" className="municipios">Hidalgo, Guerrero, Nava, Piedras Negras, Jiménez, Zaragoza, Acuña y
                                              Ocampo.</td>
                                          </tr>
                                          <tr>
                                            <td scope="row">Nuevo León</td>
                                            <td scope="row" className="municipios">Anáhuac.</td>
                                          </tr>
                                          <tr>
                                            <td scope="row">Tamaulipas</td>
                                            <td scope="row" className="municipios">Matamoros, Valle Hermoso, Río Bravo, Reynosa, Gusto Díaz Ordaz,
                                              Camargo, Miguel Alemán, Mier, Guerrero y Nuevo Laredo.</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <br/>
                                  <div align="center">
                                    <div className="col-md-3  col-sm-12 col-12 col-precios">
                                      <div className="inalambrico-container">
                                        <div className="blue-container">
                                          <div className="icon-text">
                                            <p className="hasta-text">CAPACIDAD</p>
                                            <img src={IconoPila2}/>
                                          </div>
                                          <div className="divider-alt"></div>
                                          <p className="capacidad-text">
                                            <span className="capacidad-num">5</span>
                                            <span className="capacidad-gb">GB</span></p>
                                          
                                          <div className="gbad-yellow-container">
                                            <p>
                                            <span className="paga">PAGA</span>
                                            <span></span>
                                            <span className="signo">$</span>
                                            <span className="precio">37</span></p>
                                          </div>
                                        </div>
                            
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>             
                        

                        <div className="satelital-contains">
                            <div className="compra-text col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3">
                                <h2 className="compra"><b>Compra un</b></h2>
                                <h2 className="title-gba"><strong> PAQUETE GB ADICIONALES</strong></h2>
                                <h2 className="compra text-right"><b>y sigue navegando de voLON</b></h2>
                                <h2 className="telefono-gbad">LLAMA AL <a className="colora" href="tel:55 56 10 10 10">55 56 10 10 10</a></h2>
                                <p className="col-lg-12" id="text">Al alcanzar la capacidad máxima del paquete contratado, sigues navegando a una velocidad reducida, o puedes adquirir este paquete para volver a navegar de volON.</p>
                            </div>    
                            <div className="col-12 row">
                              <div className="col-md-3  col-sm-12 col-12 col-precios">
                                <div className="satelital-container">
                                  <div className="blue-container">
                                    <div className="icon-text">
                                      <p className="hasta-text">CAPACIDAD</p>
                                      <img src={IconoPila}/>
                                    </div>
                                    <div className="divider-alt"></div>
                                    <p className="capacidad-text">
                                      <span className="capacidad-num">1</span> 
                                      <span className="capacidad-gb">GB</span></p>
                                    
                                    <div className="gbad-yellow-container">
                                    <p>
                                      <span className="paga">PAGA</span>
                                      <span></span>
                                      <span className="signo">$</span>
                                      <span className="precio">69</span></p>
                                    </div>
                                    
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3  col-sm-12 col-12 col-precios">
                                <div className="satelital-container">
                                  <div className="blue-container">
                                    <div className="icon-text">
                                      <p className="hasta-text">CAPACIDAD</p>
                                      <img src={IconoPila1}/>
                                    </div>
                                    <div className="divider-alt"></div>
                                    <p className="capacidad-text">
                                      <span className="capacidad-num">3</span> 
                                      <span className="capacidad-gb">GB</span></p>
                                    
                                    <div className="gbad-yellow-container">
                                     <p>
                                      <span className="paga">PAGA</span>
                                      <span></span>
                                      <span className="signo">$</span>
                                      <span className="precio">186</span></p>
                                    </div>
                                    
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3  col-sm-12 col-12 col-precios">
                                <div className="satelital-container">
                                  <div className="blue-container">
                                    <div className="icon-text">
                                      <p className="hasta-text">CAPACIDAD</p>
                                      <img src={IconoPila2}/>
                                    </div>
                                    <div className="divider-alt"></div>
                                    <p className="capacidad-text">
                                      <span className="capacidad-num">5</span> 
                                      <span className="capacidad-gb">GB</span></p>
                                    
                                    <div className="gbad-yellow-container">
                                    <p>
                                      <span className="paga">PAGA</span>
                                      <span></span>
                                      <span className="signo">$</span>
                                      <span className="precio">301</span></p>
                                    </div>
                                    
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3  col-sm-12 col-12 col-precios">
                                <div className="satelital-container">
                                  <div className="blue-container">
                                    <div className="icon-text">
                                      <p className="hasta-text">CAPACIDAD</p>
                                      <img src={IconoPila3}/>
                                    </div>
                                    <div className="divider-alt"></div>
                                    <p className="capacidad-text">
                                      <span className="capacidad-num">10</span> 
                                      <span className="capacidad-gb">GB</span></p>
                                    
                                    <div className="gbad-yellow-container">
                                    <p>
                                      <span className="paga">PAGA</span>
                                      <span></span>
                                      <span className="signo">$</span>
                                      <span className="precio">489</span></p>
                                    </div>
                                    
                                  </div>
                                </div>
                              </div>
                  
                            </div>     
                            <div className =" text-center">   
                              <span className="text-pagos col-12">COMPRA ESTOS PAQUETES PAGANDO</span>
                                  <div className="row col-12 justify-content-center">
                                      <p className="text-pagos">CON CARGO A TU ESTADO DE CUENTA ON*</p> 
                                  </div>
                          </div>
                          <div className="col-12 text-center">
                              <span className="text-paquetes-gba">Puedes comprar todos los paquetes que desees</span>
                              <h2 className="telefono-gbad-foot mt-3">LLAMA AL <a className="colora" href="tel:55 56 10 10 10">55 56 10 10 10</a></h2>

                          </div>
                          <div className="col-12 text-center">
                          <p className="tyc-gb">*Sujeto a Límite de crédito. La vigencia del paquete de GB contratado es de un 1 día. Consulta la disponibilidad llamando al Centro de Atención a Clientes al número <a href="tel:55 56 10 10 10">55 56 10 10 10</a>. La velocidad reducida para los planes ON Inalámbrico Planes Postpago es de 512 Kbps. Para ON Satelital, la velocidad reducida es de 500 Kbps para el plan Internet 3 con 5 GB; para todos los demás planes, la velocidad reducida es de 1 mega. Vigencia al  28 de febrero de 2022.</p>
                          </div>
                          <div className="accordion" id="accordionExample">
                            <div className="card">
                              <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                  <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                   <strong>Conoce aquí las tarifas si vives en la frontera</strong> 
                                    <i className="col-12 fas fa-chevron-down"></i>
                                  </button>
                                </h5>
                              </div>
                          
                              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="container-fluid text-center pleca-morada" >
                                        <p className="oninternet-collapse col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3">ON Internet, en cumplimiento con el Decreto de estímulos fiscales región
                                      fronteriza norte, aplicará el respectivo porcentaje en los impuestos a nuestros servicios en dicha región.</p>
                                  
                                   </div>
                                  <div className="container mt-5">
                                  <h2  className="col-12 fronterizo_1">MUNICIPIOS QUE CONFORMAN LA REGIÓN<br/> FRONTERIZA NORTE:</h2>
                                  <div className="col-12">
                                    <table className="table table-responsive-sm tabla-fronteriza">
                                      <thead>
                                        <th scope="col">Estados</th>
                                        <th scope="col">Municipios</th>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td scope="row" className="">Baja California</td>
                                          <td scope="row" className="municipios">Ensenada, Mexicali, Tecate, Tijuana y Playas de Rosarito.</td>
                                        </tr>
                                        <tr>
                                          <td scope="row">Sonora</td>
                                          <td scope="row" className="municipios">Agua Prieta, Naco, Cananea, Santa Cruz, Nogales, Sáric, Altar, Caborca, General Plutarco Elías Calles, Puerto Peñasco y San Luis Río Colorado.</td>
                                        </tr>
                                        <tr>
                                          <td scope="row">Chihuahua</td>
                                          <td scope="row" className="municipios">Manuel Benavides, Ojinaga, Coyamel de Sotol, Guadalupe, Praxedis G. Guerrero, Juárez, Ascensión y Janos.</td>
                                        </tr>
                                        <tr>
                                          <td scope="row">Coahuila de Zaragoza</td>
                                          <td scope="row" className="municipios">Hidalgo, Guerrero, Nava, Piedras Negras, Jiménez, Zaragoza, Acuña y Ocampo.</td>
                                        </tr>
                                        <tr>
                                          <td scope="row">Nuevo León</td>
                                          <td scope="row" className="municipios">Anáhuac.</td>
                                        </tr>
                                        <tr>
                                          <td scope="row">Tamaulipas</td>
                                          <td scope="row" className="municipios">Matamoros, Valle Hermoso, Río Bravo, Reynosa, Gusto Díaz Ordaz, Camargo, Miguel Alemán, Mier, Guerrero y Nuevo Laredo.</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                                <br/>
                                <div className="col-12 row">
                                  <div className="col-md-3  col-sm-12 col-12 col-precios">
                                    <div className="satelital-container-fronterizo">
                                      <div className="blue-container">
                                        <div className="icon-text">
                                          <p className="hasta-text">CAPACIDAD</p>
                                          <img src={IconoPila}/>
                                        </div>
                                        <div className="divider-alt"></div>
                                        <p className="capacidad-text">
                                          <span className="capacidad-num">1</span> 
                                          <span className="capacidad-gb">GB</span></p>
                                        
                                        <div className="gbad-yellow-container-fronterizo">
                                        <p>
                                          <span className="paga">PAGA</span>
                                          <span></span>
                                          <span className="signo">$</span>
                                          <span className="precio">65</span></p>
                                        </div>
                                        
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3  col-sm-12 col-12 col-precios">
                                    <div className="satelital-container-fronterizo">
                                      <div className="blue-container">
                                        <div className="icon-text">
                                          <p className="hasta-text">CAPACIDAD</p>
                                          <img src={IconoPila1}/>
                                        </div>
                                        <div className="divider-alt"></div>
                                        <p className="capacidad-text">
                                          <span className="capacidad-num">3</span> 
                                          <span className="capacidad-gb">GB</span></p>
                                        
                                        <div className="gbad-yellow-container-fronterizo">
                                        <p>
                                          <span className="paga">PAGA</span>
                                          <span></span>
                                          <span className="signo">$</span>
                                          <span className="precio">175</span></p>
                                        </div>
                                        
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3  col-sm-12 col-12 col-precios">
                                    <div className="satelital-container-fronterizo">
                                      <div className="blue-container">
                                        <div className="icon-text">
                                          <p className="hasta-text">CAPACIDAD</p>
                                          <img src={IconoPila2}/>
                                        </div>
                                        <div className="divider-alt"></div>
                                        <p className="capacidad-text">
                                          <span className="capacidad-num">5</span> 
                                          <span className="capacidad-gb">GB</span></p>
                                        
                                        <div className="gbad-yellow-container-fronterizo">
                                        <p>
                                          <span className="paga">PAGA</span>
                                          <span></span>
                                          <span className="signo">$</span>
                                          <span className="precio">280</span></p>
                                        </div>
                                        
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3  col-sm-12 col-12 col-precios">
                                    <div className="satelital-container-fronterizo">
                                      <div className="blue-container">
                                        <div className="icon-text">
                                          <p className="hasta-text">CAPACIDAD</p>
                                          <img src={IconoPila3}/>
                                        </div>
                                        <div className="divider-alt"></div>
                                        <p className="capacidad-text">
                                          <span className="capacidad-num">10</span> 
                                          <span className="capacidad-gb">GB</span></p>
                                        
                                        <div className="gbad-yellow-container-fronterizo">
                                        <p>
                                          <span className="paga">PAGA</span>
                                          <span></span>
                                          <span className="signo">$</span>
                                          <span className="precio">455</span></p>
                                        </div>
                                        
                                      </div>
                                    </div>
                                  </div>
                      
                                </div>    

                              </div>
                            </div>
                        
                            </div>
                        </div>
                      </div>
                                    
                    </div>




            </div>
        );
    }
}

export default Recharge;