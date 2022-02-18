import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
// import egoLogo from '../../media/ego_logo.png';
import promo from '../../media/dishon_promo.png';
import inalambrico from '../../media/inalambrico-internet.png';
import alambrico from '../../media/alambrico-internet.png';
import satelital from '../../media/satelital-internet.png';
import satelital_v2 from '../../media/onsatelital_v2.png';
import triangulo from '../../media/triangulo.png';
import ZonaVerde from '../../media/ZonaVerde.png';
import g10 from '../../media/10gb.png';
import g20 from '../../media/20gb.png';
import g30 from '../../media/30gb.png';
import g50 from '../../media/50gb.png';
import g60 from '../../media/60gb.png';
import g110 from '../../media/110gb.png';
import gb5 from '../../media/img-on-satelital/5_gb.png';
import gb10 from '../../media/img-on-satelital/10_gb.png';
import gbdiez from '../../media/img-on-satelital/10gb.png';
import gb20 from '../../media/img-on-satelital/20_gb.png';
import gb30 from '../../media/img-on-satelital/30gb.png';
import gb40 from '../../media/img-on-satelital/40_gb.png';
import gb50 from '../../media/img-on-satelital/50gb.png';
import gb60 from '../../media/img-on-satelital/60gb.png';
import gb50a from '../../media/img-on-satelital/50gba.png';
import gb110 from '../../media/img-on-satelital/110gb.png';
import gb100a from '../../media/img-on-satelital/100gba.png';
import anua from '../../media/img-on-satelital/anualidad-info.png';
import ct10 from '../../media/img-on-satelital/ct-10.png';
import ct20 from '../../media/img-on-satelital/ct-20.png';
import ct30 from '../../media/img-on-satelital/ct-30.png';
import ct50 from '../../media/img-on-satelital/ct-50.png';
import ct60 from '../../media/img-on-satelital/ct-60.png';
import ct110 from '../../media/img-on-satelital/ct-110.png';
import grupo02mg from '../../media/img-on-satelital/Grupo2mg.png';
import grupo05mg from '../../media/img-on-satelital/Grupo05mg.png';
import grupo10mg from '../../media/img-on-satelital/Grupo10mg.png';
import grupo20mg from '../../media/img-on-satelital/Grupo20mg.png';
import grupo30mg from '../../media/img-on-satelital/Grupo30mg.png';
import grupo30mg01 from '../../media/img-on-satelital/Grupo30mg01.png';
import antes10mg from '../../media/img-on-alambrico/antes10mg.png';
import antes20mg from '../../media/img-on-alambrico/antes20mg.png';
import antes50mg from '../../media/img-on-alambrico/antes50mg.png';
import antes100mg from '../../media/img-on-alambrico/antes100mg.png';
import ahora20mg from '../../media/img-on-alambrico/ahora20mg.png';
import ahora30mg from '../../media/img-on-alambrico/ahora30mg.png';
import ahora50mg from '../../media/img-on-alambrico/ahora50mg.png';
import ahora100mg from '../../media/img-on-alambrico/ahora100mg.png';
import ahora200mg from '../../media/img-on-alambrico/ahora200mg.png';
import iconovelo from '../../media/img-on-inalambrico/IconoVelo.png';
import iconoPila from '../../media/img-on-inalambrico/IconoPila.svg';
import iconoveloB from '../../media/img-on-inalambrico/IconoVeloB.png';
import iconoPila_mid from '../../media/img-on-inalambrico/IconoPila-mid.svg';
import iconoveloC from '../../media/img-on-inalambrico/IconoVeloC.png';
import iconoPila_full from '../../media/img-on-inalambrico/IconoPila-full.svg';
import iconoPromo from '../../media/img-on-inalambrico/Promo.svg';
import iconoPromo2 from '../../media/img-on-inalambrico/Promo (2).svg';

import signomorado from '../../media/signomorado.png';
import signoblanco from '../../media/signoblanco.png';
import signomoradogastos from '../../media/signomorado gastos.png';

import Tabs from '../Packs/Tabs_nuevo';
import Page from '../Packs/Page';
import Pack from '../Packs/Pack';



import iconSinAccesso from '../../media/assets/iconSinAccesso.svg';
import iconNavegaIlimitado from '../../media/assets/iconNavegaIlimitado.svg';
import icoFreezone from '../../media/assets/icoFreezone.svg';
import iconwww from '../../media/assets/iconwww.svg';
import Cap30Gb from '../../media/assets/Cap30Gb.svg';
import Vel25Megas from '../../media/assets/Vel25Megas.svg';

import Iconovelo from '../../media/assets/iconovelo.png';
import IconoPila from '../../media/assets/IconoPila.svg';
import IconoveloB from '../../media/assets/iconovelob.png';
import IconoPila_mid from '../../media/assets/IconoPila-mid.svg';
import IconoveloC from '../../media/assets/iconoveloc.png';
import IconoPila_full from '../../media/assets/IconoPila-full.svg';
import cable from '../../media/assets/cable.svg';
import capacidad from '../../media/assets/capacidad.svg';
import internet from '../../media/assets/internet.svg';
import mexico from   '../../media/assets/mexico.svg';


import velocidad from '../../media/assets/velocidad.svg';
import mas from '../../media/assets/mas.svg';
import Cap50Gb from '../../media/assets/Cap50Gb.svg';
import max_speed from '../../media/assets/max-speed.svg';

import tcon from '../../media/Alámbricoift.pdf';
import destinos from '../../media/Destinos internacionales por paquetes.pdf';


import promocion_img from '../../media/promocion.svg';


import nuevo_1 from  '../../media/contentassets/nuevo_1.png';
import tacometro_bajo from '../../media/contentassets/tacometro_bajo.svg';
import Capacidad_baja from '../../media/contentassets/Capacidad_baja.svg';
import tacometro_medio from '../../media/contentassets/tacometro-medio.svg';
import Capacidad_media from '../../media/contentassets/Capacidad-media.svg';
import tacometro_alto from '../../media/contentassets/tacometro-alto.svg';
import Capacidad_alta from '../../media/contentassets/Capacidad-alta.svg';
import tacometro_bajo_p from '../../media/contentassets/tacometro-bajo-p.svg';
import Capacidad60_p from '../../media/contentassets/Capacidad60-p.svg';
import tacometro_medio_p from '../../media/contentassets/tacometro-medio-p.svg';
import Capacidad60_media from '../../media/contentassets/Capacidad60-media.svg';
import tacometro_alto_p from '../../media/contentassets/tacometro-alto-p.svg';
import Capacidad60_alta from '../../media/contentassets/Capacidad60-alta.svg';



import Capacidad60 from '../../media/contentassets/Capacidad60.svg';
import tacometro_alto_grande from '../../media/contentassets/tacometro-alto-grande.svg';
import tacometro_bajo_grande from '../../media/contentassets/tacometro-bajo-grande.svg';
import mas_wifi from '../../media/contentassets/mas-wifi.svg';
import conexion from '../../media/contentassets/conexion.svg';
import casa_wifi from '../../media/contentassets/casa-wifi.svg';
import plazo_forzoso from '../../media/contentassets/plazo-forzoso.svg';

import interface_q from '../../media/contentassets/interface.svg';
import no_wifi from '../../media/contentassets/no-wifi.svg';
import recicle from '../../media/contentassets/recicle.svg';
import n90_dias from '../../media/contentassets/90-dias.svg';
import beneficios_casa from '../../media/contentassets/beneficios-casa.svg';
import on_app from '../../media/contentassets/on-app.svg';
import n89 from '../../media/contentassets/89.svg';
import n51 from '../../media/contentassets/51.svg';
import n299 from '../../media/contentassets/299.svg';
import n52 from '../../media/contentassets/52.svg';
import n399 from '../../media/contentassets/399.svg';
import n53 from '../../media/contentassets/53.svg';


const Button = withRouter(props => (
    <button
        className='btn btn-secondary btn-lg d-block text-bold '
        onClick={() => props.history.push(props.path)}
    >
        {props.label}
    </button>
))

const Packs = () =>
{
    const labels = ['On Inalámbrico', 'On Alámbrico', 'On Satelital', 'On Internet/Amazon Prime'];

    const page0 =
        <Page
            cols={3}
            header={
                
                    <div className="">
                           <div className="">

                            <div className="row flow-container switch-inalam">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center ">
                                    <div className="tabs-container d-flex justify-content-center tab-switch-inalam">
                                        <div className="suscribe-pospago" id="suscribe-pospago">
                                          <p className="suscribe-text-titulos"> PLANES POSTPAGO </p>
                                        </div>
                                        <div className="suscribe-prepago" id="suscribe-prepago">
                                          <p className="suscribe-text-titulos">RECARGAS PREPAGO</p>
                                        </div>
                                        <div className="nuevo prepago-nuevo">
                                          <img className="" src={nuevo_1}/>
                                        </div>
                                          
                                      </div>
                                <div className="flecha-abajo-inalam"></div>
                                </div>
                            </div>

                          {/*<!--  pospago-->*/}
                            <div className="container">
                              <div className="row pospago-contains">
                                  <div className="mt-5 mb-5 col-lg-12 col-md-12 col-12 t-container-inalam">
                                      <h2 className="mt-1"><b>Internet fácil que conectas y usas</b></h2>
                                      <h2 className="" id="title-inalam">Gastos de Activación $ <strong className="pospago-title-precio">799</strong></h2>
                                  </div>

                                 {/* <div className="pospago-promocion">
                                    <img className="img-responsive pospago-promocion-img" src={promocion_img}/>
                                  </div><br/><br/><br/>
                                

                                <div className="pospago-promocion">
                                  <img className="img-responsive pospago-promocion-img" src={promocion_img}/>
                                </div>
                                 */}
                        

                                  <div className="col-lg-3 col-md-4  col-sm-12 col-12 col-precios">
                                    <div className="inalambrico-container">
                                      <div className="blue-container-planpostpago">
                                        <div className="icon-text">
                                          <p className="hasta-text">Internet</p>
                                          {/*<img src={tacometro_bajo}/>*/}
                                        </div>
                                        <div className="divider-alt"></div>
                                        <p className="pospago-hasta-inalam"></p>
                                        <p className="pospago-capacidad-text">5</p>
                                        <p className="megas-text"></p>
                                        {/*<!--<p className="velocidad-text"><span>DE</span> VELOCIDAD</p>-->*/}
                                        <div className="pospago-yellow-container-inalam">
                                          <div className="icon-text">
                                            <p className="pospago-capacidad-text-alt">Capacidad</p>
                                            <img src={Capacidad_baja}/>
                                          </div>
                                          <div className="divider"></div>
                                          <p className="gigas-text">80<span>GB</span></p>
                                          <p className="caracteristicas-text">Ideal para conectar 2 dispositivos a la vez</p>
                                        </div>
                                        {/*<!--<p className="pospago-hasta-inalam mt-2">Desde</p>-->*/}
                                        <div className="precio-container">
                                          <p className="money-text">$</p>
                                          <p className="pospago-precio-text">271</p>
                                        </div>
                                        <p className="pospago-month-text">Al mes</p>
                                        <a href="/cobertura_inalambrico" className="btn pospago-btn-contratar">Cobertura</a>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-lg-3 col-md-4  col-sm-12 col-12 col-precios">
                                    <div className="inalambrico-container">
                                      <div className="blue-container-planpostpago">
                                        <div className="icon-text">
                                          <p className="hasta-text">Internet</p>
                                          {/*<img src={tacometro_medio}/>*/}
                                        </div>
                                        <div className="divider-alt"></div>
                                        <p className="pospago-hasta-inalam"></p>
                                        <p className="pospago-capacidad-text">10</p>
                                        <p className="megas-text"></p>
                                        {/*<!--<p className="velocidad-text"><span>DE</span> VELOCIDAD</p>-->*/}
                                        <div className="pospago-yellow-container-inalam">
                                          <div className="icon-text">
                                            <p className="pospago-capacidad-text-alt">Capacidad</p>
                                            <img src={Capacidad_media}/>
                                          </div>
                                          <div className="divider"></div>
                                          <p className="gigas-text">120<span>GB</span></p>
                                          <p className="caracteristicas-text">Ideal para conectar 3 dispositivos a la vez</p>
                                        </div>
                                        {/*<!--<p className="pospago-hasta-inalam mt-2">Desde</p>-->*/}
                                        <div className="precio-container">
                                          <p className="money-text">$</p>
                                          <p className="pospago-precio-text">449</p>
                                        </div>
                                        <p className="pospago-month-text">Al mes</p>
                                        <a href="/cobertura_inalambrico" className="btn pospago-btn-contratar">Cobertura</a>
                                      </div>
                                    </div>
                                  </div>


                                  <div className="col-lg-3 col-md-4  col-sm-12 col-12 col-precios">
                                  <div className="yellow-container-alam1 container-alam1-masVelocidad">
                                
                                <div className="row">
                                  <p className="col-md-12 col-sm-12 col-lg-12 recibeMas">NUEVO</p>
                                </div>
                                  </div>
                                    <div className="inalambrico-container">
                                      <div className="blue-container-planpostpago">
                                        <div className="icon-text">
                                          <p className="hasta-text">Internet</p>
                                          {/*<img src={tacometro_medio}/>*/}
                                        </div>
                                        <div className="divider-alt"></div>
                                        <p className="pospago-hasta-inalam"></p>
                                        <p className="pospago-capacidad-text">10</p>
                                        <p className="megas-text"></p>
                                        {/*<!--<p className="velocidad-text"><span>DE</span> VELOCIDAD</p>-->*/}
                                        <div className="pospago-yellow-container-inalam flecha-prox">
                                          <div className="icon-text">
                                            <p className="pospago-capacidad-text-alt">Capacidad</p>
                                            <img src={Capacidad_alta}/>
                                          </div>
                                          <div className="divider"></div>
                                          <p className="gigas-text">200<span>GB</span></p>
                                          <p className="caracteristicas-text">Ideal para conectar 3 dispositivos a la vez</p>
                                        </div>
                                        {/*<!--<p className="pospago-hasta-inalam mt-2">Desde</p>-->*/}
                                        <div className="precio-container">
                                          <p className="money-text">$</p>
                                          <p className="pospago-precio-text">649</p>
                                        </div>
                                        <p className="pospago-month-text">Al mes</p>
                                        <a href="/cobertura_inalambrico" className="btn pospago-btn-contratar">Cobertura</a>
                                      </div>
                                    </div>
                                  </div> 

                                  <div className="col-lg-3 col-md-4  col-sm-12 col-12 col-precios">
                                    <div className="inalambrico-container">
                                      <div className="blue-container-planpostpago">
                                        <div className="icon-text">
                                          <p className="hasta-text">Internet</p>
                                          {/*<img src={tacometro_alto}/>*/}
                                        </div>
                                        <div className="divider-alt"></div>
                                        <p className="pospago-hasta-inalam"></p>
                                        <p className="pospago-capacidad-text">20</p>
                                        <p className="megas-text"></p>
                                        {/*<!--<p className="velocidad-text"><span>DE</span> VELOCIDAD</p>-->*/}
                                        <div className="pospago-yellow-container-inalam">
                                          <div className="icon-text">
                                            <p className="pospago-capacidad-text-alt">Capacidad</p>
                                            <img src={Capacidad_media}/>
                                          </div>
                                          <div className="divider"></div>
                                          <p className="gigas-text">180<span>GB</span></p>
                                          <p className="caracteristicas-text">Ideal para conectar 4 dispositivos a la vez</p>
                                        </div>
                                        {/*<!--<p className="pospago-hasta-inalam mt-2">Desde</p>-->*/}
                                        <div className="precio-container">
                                          <p className="money-text">$</p>
                                          <p className="pospago-precio-text">759</p>
                                        </div>
                                        <p className="pospago-month-text">Al mes</p>
                                        <a href="/cobertura_inalambrico" className="btn pospago-btn-contratar">Cobertura</a>
                                      </div>
                                    </div>
                                  </div>
                              <p className="pagos">*Pagos en efectivo, tarjeta de débito o crédito</p>


                              </div>


                            </div>
                            
                          {/*<!--  prepago-->*/}
                            <div className="container">
                              <div className="row prepago-contains suscribe-inactivo container">
                                  <div className="mt-5 mb-5 col-lg-12 col-md-12 col-12 t-container-inalam">
                                      <h2 className=" prepago-title-1">Recárgate de internet con el nuevo prepago de ON</h2>
                                      <h5 className="" id="prepago-title">Compra la recarga de internet que necesitas ¡Es tú desiciON! </h5>
                                  </div>
                                  <div className="card mb-3 col-12 prepago-card" >
                                      <div className="prepago-recarga">
                                          <h4>RECARGA SEMANAL</h4>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-3 col-sm-12 col-12 prepago-precio-card row">
                                            <p className="prepago-money col-2 offset-1">$</p>
                                            <p className="prepago-precio col-8">89</p>
                                        </div>
                                        <div className="col-md-9 col-sm-12 col-12 grey-card">
                                          <div className="card-body prepago-card-info row">
                                              <ul className="prepago-lista-inalam prepago-lista col-lg-8 col-md-12 col-sm-12 col-12">
                                                  <li className="row">
                                                      <div className="col-1">
                                                         {/* <img className="speed-list" src={tacometro_bajo_p}/>*/}
                                                      </div>
                                                      <div className="col-9 ml-3">
                                                          <p className="text-card-prepago alinear_izquierda">Internet 5 </p>
                                                      </div>
                                                  </li>
                                                  <li className="row">
                                                      <div className="col-1">
                                                          <img className="speed-list" src={Capacidad60_p}/>
                                                      </div>
                                                      <div className="col-9 ml-3">
                                                          <p className="text-card-prepago alinear_izquierda">20 GB de capacidad</p>
                                                      </div>
                                                  </li>
                                                  <li className="text-card-prepago">Tu conexión durará por 7 días o<br/> 20 GB, lo que se acabe primero*.</li>
                                                  <li><small className="text-card-prepago color_titulos_small">Ideal para conectar <strong> 2 Dispositivos a la vez</strong></small></li>
                                              </ul>
                                              <div className="prepago-btn-contratar col-md-4 col-sm-12 col-12">
                                                  <a href="/contrata"><button class="btn prepago-btn btn-lg col-12" type="button"> ¡LA QUIERO!</button></a>
                                              </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                        
                                    <div className="card mb-3 col-12 prepago-card mt-5" >
                                      <div className="prepago-recarga">
                                          <h4>RECARGA MENSUAL</h4>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-3 col-sm-12 col-12 prepago-precio-card row">
                                            <p className="prepago-money col-2 offset-1">$</p>
                                            <p className="prepago-precio col-8">299</p>
                                        </div>
                                        <div className="col-md-9 col-sm-12 col-12 grey-card">
                                          <div className="card-body prepago-card-info row">
                                              <ul className="prepago-lista-inalam prepago-lista col-lg-8 col-md-12 col-sm-12 col-12">
                                                  <li className="row">
                                                      <div className="col-1">
                                                         {/* <img className="speed-list" src={tacometro_medio_p}/>*/}
                                                      </div>
                                                      <div className="col-9 ml-3">
                                                          <p className="text-card-prepago alinear_izquierda">Internet 5 </p>
                                                      </div>
                                                  </li>
                                                  <li className="row">
                                                      <div className="col-1">
                                                          <img className="speed-list" src={Capacidad60_media}/>
                                                      </div>
                                                      <div className="col-9 ml-3">
                                                          <p className="text-card-prepago alinear_izquierda">80 GB de capacidad</p>
                                                      </div>
                                                  </li>
                                                  <li className="text-card-prepago">Tu conexión durará por 30 días u<br/> 80 GB, lo que se acabe primero*.</li>
                                                  <li><small className="text-card-prepago color_titulos_small">Ideal para conectar <strong> 2 Dispositivos a la vez</strong></small></li>
                                              </ul>
                                              <div className="prepago-btn-contratar col-md-4 col-sm-12 col-12">
                                                  <a href="/contrata"><button class="btn prepago-btn btn-lg col-12" type="button"> ¡LA QUIERO!</button></a>
                                              </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                        
                                    <div className="card mb-3 col-12 prepago-card mt-5" >
                                      <div className="prepago-recarga">
                                          <h4>RECARGA MENSUAL</h4>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-3 col-sm-12 col-12 prepago-precio-card row">
                                            <p className="prepago-money col-2 offset-1">$</p>
                                            <p className="prepago-precio col-8">399</p>
                                        </div>
                                        <div className="col-md-9 col-sm-12 col-12 grey-card">
                                          <div className="card-body prepago-card-info row">
                                              <ul className="prepago-lista-inalam prepago-lista col-lg-8 col-md-12 col-sm-12 col-12">
                                                  <li className="row">
                                                      <div className="col-1">
                                                         {/* <img className="speed-list" src={tacometro_alto_p}/>*/}
                                                      </div>
                                                      <div className="col-9 ml-3">
                                                          <p className="text-card-prepago alinear_izquierda">Internet 10 </p>
                                                      </div>
                                                  </li>
                                                  <li className="row">
                                                      <div className="col-1">
                                                          <img className="speed-list" src={Capacidad60_alta}/>
                                                      </div>
                                                      <div className="col-9 ml-3">
                                                          <p className="text-card-prepago alinear_izquierda">120 GB de capacidad</p>
                                                      </div>
                                                  </li>
                                                  <li className="text-card-prepago">Tu conexión durará por 30 días o<br/> 120 GB, lo que se acabe primero*.</li>
                                                  <li><small className="text-card-prepago color_titulos_small">Ideal para conectar <strong> 3 Dispositivos a la vez</strong></small></li>
                                              </ul>
                                              <div className="prepago-btn-contratar col-md-4 col-sm-12 col-12">
                                                  <a href="/contrata"><button class="btn prepago-btn btn-lg col-12" type="button"> ¡LA QUIERO!</button></a>
                                              </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  
                                  <p className="pagos col-12">Pagos en efectivo</p>
                                  <div className="prepago-activacion container">
                                      <div className="prepago-title-activacion">
                                          <h2><b>GASTOS DE ACTIVACIÓN</b></h2>
                                          <h4>Según la recarga con la que quieres iniciar paga en una exhibición:</h4>
                        
                                      </div>
                                      <div className="prepago-circle-cards row mt-5">
                                          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                            <div className="prepago-yellow-card">
                                              <div className="text col-12">
                                                <div className="prepago-yc-precios mt-4 row inalambrico_alado_20">
                                                  <h4 className="col-2 ml-4 mt-3 ofsset-1 prepago_yc_costo">$</h4>
                                                  <h1 className=" ml-n4 prepago_yc_precio">1,089</h1>
                        
                                                </div>
                                                <div className="prepago-yc-info mt-1">
                                                  <p className="col-12 prepago_yc_precio_2">Incluye 1 <strong> recarga semanal</strong></p>
                                                  <p className="prepago_yc_precio_3"><strong>Internet 5  / 20GB</strong> </p>
                                                  <p className="prepago_yc_precio_4 mt-3"><strong>Pago único</strong> </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                            <div className="prepago-purple-card ">
                                              <div className="text col-12">
                                                <div className="prepago-yc-precios mt-4 row inalambrico_alado_20">
                                                  <h4 className="col-2 ml-4 mt-3 ofsset-1 prepago_yc_costo">$</h4>
                                                  <h1 className=" ml-n4 prepago_yc_precio">1,299</h1>
                        
                                                </div>
                                                <div className="prepago-yc-info mt-1">
                                                  <p className="col-12 prepago_yc_precio_2">Incluye 1 <strong> recarga mensual</strong></p>
                                                  <p className="prepago_yc_precio_3"><strong>Internet 5  / 80GB</strong> </p>
                                                  <p className="prepago_yc_precio_4 mt-3"><strong>Pago único</strong> </p>
                                                </div>
                                              </div>
                                              
                                            </div>
                                          </div>
                                          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                            <div className="prepago-green-card ">
                                              <div className="text col-12">
                                                <div className="prepago-yc-precios mt-4 row inalambrico_alado_20">
                                                  <h4 className="col-2 ml-4 mt-3 ofsset-1 prepago_yc_costo">$</h4>
                                                  <h1 className=" ml-n4 prepago_yc_precio">1,399</h1>
                        
                                                </div>
                                                <div className="prepago-yc-info mt-1">
                                                  <p className="col-12 prepago_yc_precio_2">Incluye 1 <strong> recarga mensual</strong></p>
                                                  <p className="prepago_yc_precio_3"><strong>Internet 10  / 120GB</strong> </p>
                                                  <p className="prepago_yc_precio_4 mt-3"><strong>Pago único</strong> </p>
                                                </div>
                                              </div>
                                              
                                            </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                            </div>

                          </div>

                          {/*<!--Contenidos flotantes-->*/}

                             {/*<!--Como funciona pospago-->*/}
                          <div className="pospago-card-group-funciona pospago-contains card-carac mt-5">
                            <h3 id="T_card">¿CÓMO FUNCIONA?</h3>
                            <div className="card-group ">

                                <div className="card pospago-cards-inalambricas">
                                    <div className="card-body mt-5 ml-4 card-list">
                                        <ul className="pospago-lista-inalam">
                                         <br/><br/>
                                            <li className="row">
                                                <div className="col-2">
                                                    <img className="pospago-speed-list" src={tacometro_alto}/>
                                                </div>
                                                <div className="col-9">
                                                    <p className="text-card">VELOCIDAD: qué tan rápido navegas. (megas)</p>
                                                </div>
                                            </li>
                                            <li className="row mt-3">
                                                <div className="col-2">
                                                    <img className="pospago-speed-list" src={Capacidad60}/>
                                                </div>
                                                <div className="col-9">
                                                    <p className="text-card">CAPACIDAD: Actividades que puedes hacer en Internet (GB).</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card pospago-cards-inalambricas">
                                    <div className="card-body row card-speed">
                                        <div className="col-6 pospago-divisor">
                                            <img className="speed-card" src={tacometro_alto_grande}/>
                                            <p className="mt-2 pospago-speed">VELOCIDAD CONTRATADA</p>
                                        </div>
                                        <div className="col-6">
                                            <img className="speed-card" src={tacometro_bajo_grande}/>
                                            <p className="mt-2 pospago-speed">VELOCIDAD REDUCIDA</p>
                                        </div>
                                        <p className="text-card mt-1">Si alcanzas el máximo de capacidad,<strong className="pospago-strong-inalam"> podrás seguir navegando a 512 Kbps</strong> por 60 GB adicionales.</p>
                                    </div>
                                </div>
                                <div className="card pospago-cards-inalambricas">
                                <div className="card-body">
                                    <img id="wifi" className="card-img-top" alt="..." src={mas_wifi}/>
                                    <p id="" className="text-card mt-4">Si lo deseas, <strong className="pospago-strong-inalam">puedes comprar un paquete GB adicionales </strong> para volver a navegar a la velocidad contratada.</p>
                                </div>
                                </div>
                            </div>
                          </div>

                             {/*<!--beneficios pospago-->*/}
                          <div className="container pospago-contains">
                            <div className="pospago-card-group-beneficios card-carac">
                                <h3 id="T_card">BENEFICIOS</h3>
                                <div className="card-group ">

                                    <div className="card pospago-cards-inalambricas">
                                        <div className="card-body mt-4">
                                            <img className="conexiones mt-3" src={conexion}/>
                                            <p className="mt-3"><strong className="pospago-strong-inalam"> Fácil conexión: </strong><br/>Enchufas - Enciendes - Navegas</p>
                                        </div>
                                    </div>
                                    <div className="card pospago-cards-inalambricas">
                                        <div className="card-body mt-3">
                                            <img id="casa" src={casa_wifi}/>
                                            <p className="mt-4 pospago-text-casa"><strong className="pospago-strong-inalam"> Puedes mover el módem y conectarlo en cualquier parte de tu casa.</strong> No puedes sacarlo del domicilio porque el servicio se suspenderá.</p>
                                        </div>
                                    </div>
                                    <div className="card pospago-cards-inalambricas">
                                        <div className="card-body mt-3">
                                            <img src={plazo_forzoso}/>
                                            <p className="mt-4">Sin plazo forzoso</p>
                                        </div>
                                    </div>
                                    <div className="card pospago-cards-inalambricas">
                                        <div className="card-body mt-2">
                                            <img id="pospago-logON" src={on_app}/>
                                            <p className="mt-2 pospago-logON">Descarga la app para tener el control de tu servicio.<br/><strong className="pospago-link"><a  className="color_blanco" href="https://play.google.com/store/apps/details?id=mx.com.dish.oninternet" target='_blank'> Descárgala aquí.</a></strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>

                             {/*<!--Banner morado prepago-->*/}
                          <div className="prepago-contains prepago_purple_ban mt-5">
                            <span>Disponible únicamente en Estado de México, Nuevo León y Michoacán. Sujeto a disponibilidad de cobertura.</span>
                          </div>

                             {/*<!--Como funciona prepago-->*/}
                          <div className="pospago-card-group-funciona prepago-contains card-carac mt-3">
                            <h3 id="T_card">¿CÓMO FUNCIONA?</h3>
                            <div className="card-group ">

                                <div className="card pospago-cards-inalambricas">
                                    <div className="card-body ml-3 card-list">
                                        <br/>
                                        <ul className="pospago-lista-inalam">
                                          <p>Las recargas contienen:</p>
                                            <li className="row">
                                                <div className="col-2">
                                                    <img className="pospago-speed-list" src={tacometro_alto}/>
                                                </div>
                                                <div className="col-10">
                                                    <p className="text-card">VELOCIDAD: qué tan rápido navegas. (megas)</p>
                                                </div>
                                            </li>
                                            <li className="row">
                                                <div className="col-2">
                                                    <img className="pospago-speed-list" src={interface_q}/>
                                                </div>
                                                <div className="col-10">
                                                    <p className="text-card">VIGENCIA: Periodo que dura la recarga</p>
                                                </div>
                                            </li>
                                            <li className="row">
                                                <div className="col-2">
                                                    <img className="pospago-speed-list" src={Capacidad60}/>
                                                </div>
                                                <div className="col-10">
                                                    <p className="text-card">CAPACIDAD: Actividades que puedes hacer en Internet (GB).</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card pospago-cards-inalambricas">
                                <div className="card-body">
                                    <img id="wifi" className="card-img-top" alt="..." src={no_wifi}/>
                                    <p  className="text-card prepago_texto_card">*Al alcanzar el máximo de GB o al expirar la vigencia, lo que pase primero, el servicio se corta.</p>
                                </div>
                                </div>
                                <div className="card pospago-cards-inalambricas">
                                <div className="card-body">
                                    <img id="wifi" className="card-img-top" alt="..." src={recicle}/>
                                    <p className="text-card prepago_texto_card">Compra la recarga que quieras para volver a navegar.<br/> <a className="prepago-link" data-toggle="modal" data-target="#prepago-modal">¿Cómo recargar?</a></p>
                                </div>
                                </div>
                                <div className="card pospago-cards-inalambricas">
                                <div className="card-body">
                                    <img id="wifi" className="card-img-top" alt="..." src={n90_dias}/>
                                    <p  className="text-card prepago_texto_card">Después de 90 días sin recargar, un técnico de ON Internet acudirá a recoger el módem.**</p>
                                </div>
                                </div>
                            </div>

                            <p>**Asegúrate de recargar como mínimo 1 vez en 3 meses para evitar que tu servicio se cancele. Si sucede, te contactarán para recoger el módem.</p>
                          </div>

                             {/*<!--beneficios prepago-->*/}
                          <div className="container prepago-contains">
                            <div className="pospago-card-group-beneficios card-carac">
                                <h3 id="T_card">BENEFICIOS</h3>
                                <div className="card-group ">
                                  <div className="col-4 mb-4 adecuar">
                                    <div className="card pospago-cards-inalambricas">
                                        <div className="card-body mt-3">
                                            <img id="recicle" src={recicle}/>
                                            <p className="mt-3">Paga por las <strong className="pospago-strong-inalam"> recargas que quieras, cuando quieras y como quieras.</strong> Sujeto a disponibilidad.</p>
                                        </div>
                                    </div>
                                  </div>
                                  <div className="col-4 mb-4 adecuar">
                                    <div className="card pospago-cards-inalambricas">
                                        <div className="card-body mt-3">
                                            <img id="interface" src={interface_q}/>
                                            <p className="mt-4"><strong className="pospago-strong-inalam">No hay gastos fijos:</strong> <br/>No se renuevan automáticamente. Recarga cuando quieras **</p>
                                        </div>
                                    </div>
                                  </div>
                                  <div className="col-4 mb-4 adecuar">
                                    <div className="card pospago-cards-inalambricas">
                                        <div className="card-body mt-3">
                                            <img className="conexiones mt-2" src={conexion}/>
                                            <p className="mt-4"><strong className="pospago-strong-inalam"> Fácil conexión: </strong><br/>Enchufas - Enciendes - Navegas</p>
                                        </div>
                                    </div>
                                  </div>
                                  <div className="col-4 mb-4 adecuar">
                                    <div className="card pospago-cards-inalambricas">
                                        <div className="card-body mt-3">
                                            <img id="" src={beneficios_casa}/>
                                            <p className="mt-2"><strong className="pospago-strong-inalam">Puedes mover el módem y conectarlo en cualquier parte de tu casa.</strong> Solo no lo saques porque el servicio se suspenderá.</p>
                                        </div>
                                    </div>
                                  </div>
                                  <div className="col-4 mb-4 adecuar">
                                    <div className="card pospago-cards-inalambricas">
                                        <div className="card-body mt-4">
                                            <img id="plazo-forzoso" src={plazo_forzoso}/>
                                            <p className="mt-2"><strong className="pospago-strong-inalam"> Sin plazo forzoso</strong></p>
                                        </div>
                                    </div>
                                  </div>
                                  <div className="col-4 mb-4 adecuar">
                                    <div className="card pospago-cards-inalambricas">
                                        <div className="card-body mt-2">
                                            <img id="" src={on_app}/>
                                            <p className="mt-2"><strong className="pospago-strong-inalam"> Descarga la app</strong> para tener el control de tu servicio y comprar más recargas.</p>
                                        </div>
                                    </div>
                                  </div>
                            </div>
                            </div>
                          </div>
                        
                          {/*<!--terminos  prepago-->*/}
                          <div className="container prepago-contains">
                            <small className="col-12 prepago_tc">**Asegúrate de recargar como mínimo 1 vez en 3 meses para evitar que tu servicio se cancele. Si sucede, te contactarán para recoger el módem.</small>
                            <p className="mt-4 prepago_tc fronterizo_3">Los servicios están sujetos a disponibilidad de cobertura, condiciones, facilidades técnicas y diversos factores externos del servicio. Vigencia al  28 de febrero de 2022 o hasta agotar existencias. Sujetos a cambio con previa autorización de la Autoridad competente.</p>
                            <div className="col-12  small-inalam  legales">
                              <small>Consulta  tarifas registradas  ante  IFT <a href="https://oninternet.com.mx/ratesinpre">aquí</a></small><br/>
                            </div>

                          </div>

                          {/*<!--terminos  prepago-->*/}
                          <div className="col-12  small-inalam pospago-contains legales">
                          {/* <p>Promoción válida al 30 de noviembre de 2021. El beneficio de devolución de $100.00 en el segundo mes, aplica únicamente para clientes nuevos que contraten el servicio ON Inalámbrico Planes Postpago durante la vigencia de la promoción y que estén activos y al corriente con sus pagos.</p> */}
                           <p> Todos los paquetes están sujetos a condiciones técnicas y disponibilidad de cobertura. *Precios señalados son de carácter informativo, en moneda nacional e impuestos incluidos del 16%, sujetos a cambio previa autorización de la Autoridad competente. Si quieres conocer más consulta términos y condiciones en oninternet.com.mx. La información aquí presentada (imágenes, textos, logos y cualquier elemento), constituye derechos de autor y propiedad intelectual usada con autorización de su titular, protegidos por las leyes aplicables. Vigencia válida al  28 de febrero de 2022.</p>
                            <div className="col-12  small-inalam  legales">
                            <small>Consulta  tarifas registradas  ante  IFT <a href="https://oninternet.com.mx/ratesin">aquí</a></small><br/>
                          </div>
                          </div>

                          <br/>

                       



                          <br/>
                          <br/>
                          <br/>


                      {/*<!-- Modal recargas -->*/}
                            <div className="modal fade" id="prepago-modal" tabindex="-1" role="dialog" aria-labelledby="prepago-modal-label" aria-hidden="true">
                              <div className="modal-dialog modal-xl">
                                <div className="modal-content">
                                  <div className="modal-header prepago-modal-header">
                                    <h5 className="modal-title" id="prepago-modal-label">¿CÓMO RECARGAR?</h5>
                                    <button type="button" className="close cerrar-modal" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <div className="modal-body prepago-modal-body container">
                                    <div className="modal-primero row">
                                      <div className="col-1">
                                        <div className="numero-uno"><p className="modal-numero">1</p></div>
                                      </div>
                                      <p className="col numero-text ml-n5 alinear_izquierda">Con la referencia de pago de la recarga que quieras:</p>
                                      <div className="row col-12 ml-2">
                                        <img className="img-responsive col-lg-6 col-md-6 col-sm-12 col-12" src={n89}/>
                                        <img className="img-responsive col-lg-6 col-md-6 col-sm-12 col-12" src={n51}/>
                                      </div>

                                      <div className="row col-12 ml-2 mt-3">
                                        <img className="img-responsive col-lg-6 col-md-6 col-sm-12 col-12" src={n299}/>
                                        <img className="img-responsive col-lg-6 col-md-6 col-sm-12 col-12" src={n52}/>
                                      </div>

                                      <div className="row col-12 ml-2 mt-3">
                                        <img className="img-responsive col-lg-6 col-md-6 col-sm-12 col-12" src={n399}/>
                                        <img className="img-responsive col-lg-6 col-md-6 col-sm-12 col-12" src={n53}/>
                                      </div>

                                      <div className="modal-dispo mt-4 ml-3">
                                          <p>Antes de comprar una, entra a la app ON Internet para asegurar la disponibilidad de la recarga que deseas.</p>
                                      </div>

                                    </div>

                                    <div className="modal-segundo row mt-5">
                                      <div className="col-1">
                                        <div className="numero-uno"><p className="modal-numero">2</p></div>
                                      </div>
                                      <p className="col numero-text ml-n5 alinear_izquierda">Acude a los lugares autorizados de pago como bancos, supermercados, farmacias, etc. <a className="modal-link" href="https://oninternet.com.mx/places-of-payment"> Conócelos aquí.</a></p>
                                    </div>

                                    <div className="modal-tercero row mt-5">
                                      <div className="col-1">
                                        <div className="numero-uno"><p className="modal-numero">3</p></div>
                                      </div>
                                      <p className="col numero-text ml-n5 alinear_izquierda">Paga la recarga que tengas disponible y que deseas y PUM! Ya estás ON otra vez.</p>
                                    </div>

                                    <div className="modal-conditions mt-4">
                                      <p>¡No olvides consultar el consumo de GB desde la app ON Internet!</p>
                                      <h4 className="mt-4 modal-dudas">¿DUDAS? Llámanos: <a className="telefono" href="tel:55 9628 3474"> 55 9628 3474</a></h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                               



                    </div>             
                                   
            }
            packs={[  
               
                   
            ]}
            footer={
              
                   <div></div>



              


            }
        />;

     const page1 =
        <Page
            cols={3}
            header={
                <div className="row alambrico-contains ">
                      <div className="row flow-container switch-alam">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center ">
                              <div className="tabs-container d-flex justify-content-center tab-switch-alam">
                                  <div className="suscribe-internet" id="suscribe-internet">
                                    <p className="suscribe-text-titulos">INTERNET</p>
                                  </div>
                                  <div className="suscribe-tel ml-2" id="suscribe-tel">
                                    <p className="suscribe-text-titulos">INTERNET + TELEFONÍA FIJA</p>
                                  </div>
                                </div>
                          <div className="flecha-abajo-alam"></div>
                          </div>
                      </div>

                      <div className="container">
                          <div className="mt-3 mb-5 col-lg-12 col-md-12 col-12 t-container-alam">
                              <h2 className="" id="title-alam">SI TUS GANAS DE NAVEGAR <e className="tel-contains"> Y DE HABLAR </e><br/>  NO TIENEN LÍMITES,<br/> ponte ON con estos paquetONes:</h2>
                              <h3 className="mt-1">Gastos de instalación: $800 ¡págalos en 4 meses!*<e className="tel-contains">*</e></h3>

                          </div>

                          <div className="row internet-contains">
                              <div className="col-lg-3 col-md-6  col-sm-12 col-12 col-precios">

                              <div className="yellow-container-alam container-alam-masVelocidad">
                                
                                <div className="row">
                                  <p className="col-md-12 col-sm-12 col-lg-12 recibeMas">RECIBE MAYOR VELOCIDAD</p>
                                </div>
                               
                                <div className="row segundo_texto">
                                  <p className="primeros col-md-12 col-sm-12 col-lg-12">Los primeros</p>
                                  <p className="masVelocidadMonths col-md-12 col-sm-12 col-lg-12"> 3 MESES</p>
                                </div>
                                  
                              </div>

                                <div className="inalambrico-container">
                                  <div className="blue-container-masVelocidad">
                                    <div className="icon-text">
                                      <p className="hasta-text-masVelocidad vel-alam">Internet</p>
                                      {/*<img className="img-vel" src={velocidad}/>*/}
                                    </div>
                                    <div className="divider-alt"></div>
                                    <p className="hasta-alam"></p>
                                    <p className="capacidad-text-masVelocidad cap-alam">20</p>
                                    <p className="megas-text megas-alam"></p>
                                    
                                    <div className="yellow-container-alam-internet precio-container">
                                      <div className="row cont-precio">
                                          <p className="money-t-alam col-md-1 col-sm-4 col-2">$</p>
                                          <p className="precio-t-alam textocentrado col-md-5 col-sm-6 col-4 ml-n3">349</p>
                                      </div>
                                       <p className="month-text-alam">Al mes</p>
                                    </div>          
                                    <a href="/contrata" className="btn contrata-alam">Contrata</a>
                                  </div>
                                </div>
                              </div>


                              <div className="col-lg-3 col-md-6  col-sm-12 col-12 col-precios">

                              <div className="yellow-container-alam container-alam-masVelocidad">
                                
                                <div className="row">
                                  <p className="col-md-12 col-sm-12 col-lg-12 recibeMas">RECIBE MAYOR VELOCIDAD</p>
                                </div>
                               
                                <div className="row segundo_texto">
                                  <p className="primeros col-md-12 col-sm-12 col-lg-12">Los primeros</p>
                                  <p className="masVelocidadMonths col-md-12 col-sm-12 col-lg-12"> 3 MESES</p>
                                </div>
                                  
                              </div>

                                <div className="inalambrico-container">
                                  <div className="blue-container-masVelocidad">
                                    <div className="icon-text">
                                      <p className="hasta-text-masVelocidad vel-alam">Internet</p>
                                      {/*<img className="img-vel" src={velocidad}/>*/}
                                    </div>
                                    <div className="divider-alt"></div>
                                    <p className="hasta-alam"></p>
                                    <p className="capacidad-text-masVelocidad cap-alam">30</p>
                                    <p className="megas-text megas-alam"></p>
                                    
                                    <div className="yellow-container-alam-internet precio-container">
                                        <div className="row cont-precio">
                                          <p className="money-t-alam col-md-1 col-sm-4 col-2">$</p>
                                          <p className="precio-t-alam textocentrado col-md-5 col-sm-6 col-4 ml-n3">399</p>
                                        </div>
                                       <p className="month-text-alam ">Al mes</p>
                                    </div>          
                                    <a href="/contrata" className="btn contrata-alam">Contrata</a>
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-3 col-md-6  col-sm-12 col-12 col-precios">
                                <div className="inalambrico-container">
                                  <div className="blue-container-internet">
                                    <div className="icon-text">
                                      <p className="hasta-text-masVelocidad vel-alam">Internet</p>
                                      {/*<img className="img-vel" src={max_speed}/>*/}
                                    </div>
                                    <div className="divider-alt"></div>
                                    <p className="hasta-alam"></p>
                                    <p className="capacidad-text-masVelocidad cap-alam">150</p>
                                    <p className="megas-text megas-alam"></p>
                                    
                                    <div className="yellow-container-alam-internet precio-container container-alam-internet">
                                        <div className="row cont-precio">
                                          <p className="money-t-alam col-md-1 col-sm-4 col-2">$</p>
                                          <p className="precio-t-alam textocentrado col-md-5 col-sm-6 col-4 ml-n3">549</p>
                                        </div>
                                       <p className="month-text-alam">Al mes</p>
                                    </div>          
                                    <a href="/contrata" className="btn contrata-alam">Contrata</a>
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-3 col-md-6  col-sm-12 col-12 col-precios">
                                <div className="inalambrico-container">
                                  <div className="blue-container-internet">
                                    <div className="icon-text">
                                      <p className="hasta-text-masVelocidad vel-alam">Internet</p>
                                      {/*<img className="img-vel" src={max_speed}/>*/}
                                    </div>
                                    <div className="divider-alt"></div>
                                    <p className="hasta-alam"></p>
                                    <p className="capacidad-text-masVelocidad cap-alam">200</p>
                                    <p className="megas-text megas-alam"></p>
                                    
                                    <div className="yellow-container-alam-internet precio-container container-alam-internet">
                                        <div className="row cont-precio">
                                          <p className="money-t-alam col-md-1 col-sm-4 col-2">$</p>
                                          <p className="precio-t-alam textocentrado col-md-5 col-sm-6 col-4 ml-n3">899</p>
                                        </div>
                                       <p className="month-text-alam">Al mes</p>
                                    </div>          
                                    <a href="/contrata" className="btn contrata-alam">Contrata</a>
                                  </div>
                                </div>
                              </div>
                            
                           

                            <div className="card-group card-group-alambrico card-carac">

                              <div className="card esp-alambricas">
                                <div className="mt-2 fronterizo_3">
                                <img src={cable} id="cable-img" className="card-img-top" alt="..."/>

                                </div>
                                <div className="card-body">
                                  <p className="p-strong-alam">Internet por cable de cobre o fibra óptica.</p>
                                  <p className="text-caract">La fibra óptica permite alcanzar grandes velocidades.</p>
                                </div>
                              </div>

                              
                              <div className="card esp-alambricas">
                                <div className="mt-4 fronterizo_3">
                                <img src={capacidad} id="capacidad-img" className="card-img-top" alt="..."/>

                                </div>
                                <div className="card-body mt-2">
                                  <p className="p-strong-alam">No hay limíte de capacidad.</p>
                                  <p className="text-caract"> Realiza la actividad que quieras en internet sin preocuparte por la capacidad.</p>
                                </div>
                              </div>

                              <div className="card esp-alambricas">
                                <div className="mt-3 fronterizo_3">
                                <img src={internet} id="internet-img" className="card-img-top" alt="..."/>

                                </div>
                                <div className="card-body mt-1">
                                  <p className="p-strong-alam">Internet</p>
                                  <p className="text-caract">bajo la red más grande y estable de México.</p>
                                </div>
                              </div>

                              <div className="card esp-alambricas">
                                <div className="mt-3 fronterizo_3">
                                <img src={mexico}  id="mexico-img" className="card-img-top" alt="..."/>

                                </div>
                                <div className="card-body mt-2">
                                  <p className="p-strong-alam">Cobertura a nivel nacional </p>
                                  <p className="text-caract">(sujeto a disponibilidad de facilidades)</p>
                                </div>
                              </div>
                            </div>
                          <div className='my-4 font-s text-gray text-center'> 

                              <e className="tel-contains"> *Tu servicio incluye llamadas ilimitadas a números fijos y móviles en México, Estados Unidos, Canadá y hasta 180 países más, consulta lista de destinos completa según tu servicio adquirido <a href={destinos} target="_blank">aquí</a>. Precios con impuestos incluidos. Términos y Condiciones <a href={tcon} target="_blank">aquí</a>.</e>
                              <br/>

                                COBERTURA A NIVEL NACIONAL <br/> *El beneficio de diferirlo hasta en cuatro meses, aplica para clientes que mantengan su pago mensual al corriente. Precios señalados son de carácter informativo, en moneda nacional e impuestos incluidos del 16%, sujeto a cambio previa autorización de la Autoridad competente. Para asistencia en la contratación de servicios, formas de pago, términos, condiciones, costos, características, paquetes, así como los beneficios de navegar a mayor velocidad por tres meses (aplica para nuevas contrataciones de paquetes ON Alámbrico y que se mantengan al corriente en el pago de su servicio) llame al 5555 123 123 o en www.oninternet.com.mx. Los servicios están sujetos a disponibilidad de cobertura y facilidades técnicas. Derechos reservados de Comercializadora de Frecuencias Satelitales S. de R.L. de C.V. Todo material aquí referido constituye derechos de autor y propiedad intelectual usada bajo autorización, protegidos por leyes mexicanas e internacionales. Vigencia de la promoción al 30 de septiembre de 2021.

                              </div>

                              <div className=" col-12 internet-contains  legales">
                                        <small>Consulta  tarifas registradas  ante  IFT <a href="/ratesan">aquí</a></small><br/>
                              </div>


                              <div className="col-12 legales tel-contains">
                                        <small>Consulta  tarifas registradas  ante  IFT <a href="/ratesanfija">aquí</a></small><br/>
                              </div>
                          </div>

                            <div className="row tel-contains suscribe-inactivo">

                            
                            
                            
                              <div className="col-lg-2 col-md-6 col-sm-12 col-12 col-precios">
                                <div className="inalambrico-container-telfija ">
                                  <div className="blue-container-internettelfija">
                                    <div className="icon-text">
                                      <p className="hasta-text">Internet</p>
                                      {/*<img src={max_speed}/>*/}
                                    </div>
                                                                            

                                    <div className="divider-alt"></div>
                                    <p className="hasta-alam"></p>
                                    <p className="capacidad-text cap-tel">20</p>
                                    <p className="megas-text megas-tel"></p>
                                    <p className="linea-text"><img className="mr-2" src={mas}/>1 línea con llamadas ilimitadas*</p>
                                    
                                    
                                    <div className="yellow-container-alam precio-container container-alam-internettelfija cont-tel_home cont-tel">
                                      <div className="row cont-precio">
                                        <p className="money-t-alam col-md-1 col-sm-4 col-2">$</p>
                                        <p className="precio-t-alam textocentrado col-md-5 col-sm-6 col-4 ml-n3">389</p>
                                      </div>
                                     <p className="month-text-alam">Al mes</p>
                                  </div> 
                                  <a href="/contrata" className="btn contrata-alam">Contrata</a>
                                 </div>
                                </div>
                              </div>

                              <div className="col-lg-2 col-md-6 col-sm-12 col-12 col-precios">
                                <div className="inalambrico-container-telfija">
                                  <div className="blue-container-internettelfija">
                                    <div className="icon-text">
                                      <p className="hasta-text">Internet</p>
                                      {/*<img src={max_speed}/>*/}
                                    </div>
                                    <div className="divider-alt"></div>
                                    <p className="hasta-alam"></p>
                                    <p className="capacidad-text cap-tel">30</p>
                                    <p className="megas-text megas-tel"></p>
                                    <p className="linea-text"><img className="mr-2" src={mas}/>1 línea con llamadas ilimitadas*</p>
                                    
                                    
                                    <div className="yellow-container-alam precio-container container-alam-internettelfija cont-tel_home cont-tel">
                                      <div className="row cont-precio">
                                        <p className="money-t-alam col-md-1 col-sm-4 col-2">$</p>
                                        <p className="precio-t-alam textocentrado col-md-5 col-sm-6 col-4 ml-n3">435</p>
                                      </div>
                                     <p className="month-text-alam">Al mes</p>
                                  </div> 
                                  <div className="old-capacidad-tel">
                                    <span>LOS PRIMEROS 3 MESES <br/> <strong className="ofertON">PAGAS $389</strong> </span>
                                  </div>
                                  <div className="arrow-linea"></div>
                                  <div className="arrow-r-linea arrow-r-nettel"></div>
                                  <a href="/contrata" className="btn contrata-alam btn-special">Contrata</a>
                                 </div>
                                </div>
                              </div>

                              <div className="col-lg-2 col-md-6 col-sm-12 col-12 col-precios">
                                <div className="inalambrico-container-telfija">
                                  <div className="blue-container-internettelfija">
                                    <div className="icon-text">
                                      <p className="hasta-text">Internet</p>
                                      {/*<img src={max_speed}/>*/}
                                    </div>
                                    <div className="divider-alt"></div>
                                    <p className="hasta-alam"></p>
                                    <p className="capacidad-text cap-tel">40</p>
                                    <p className="megas-text megas-tel"></p>
                                    <p className="linea-text"><img className="mr-2" src={mas}/>1 línea con llamadas ilimitadas*</p>
                                    
                                    
                                    <div className="yellow-container-alam precio-container container-alam-internettelfija cont-tel_home cont-tel">
                                      <div className="row cont-precio">
                                        <p className="money-t-alam col-md-1 col-sm-4 col-2">$</p>
                                        <p className="precio-t-alam textocentrado col-md-5 col-sm-6 col-4 ml-n3">499</p>
                                      </div>
                                     <p className="month-text-alam">Al mes</p>
                                  </div> 
                                  <div className="old-capacidad-tel">
                                    <span>LOS PRIMEROS 3 MESES <br/> <strong className="ofertON">PAGAS $435</strong> </span>
                                  </div>
                                  <div className="arrow-linea"></div>
                                  <div className="arrow-r-linea arrow-r-nettel"></div>
                                  <a href="/contrata" className="btn contrata-alam btn-special">Contrata</a>
                                 </div>
                                </div>
                              </div>
                              <div className="col-lg-2 col-md-6 col-sm-12 col-12 col-precios">
                                <div className="inalambrico-container-telfija">
                                  <div className="blue-container-internettelfija">
                                    <div className="icon-text">
                                      <p className="hasta-text">Internet</p>
                                      {/*<img src={max_speed}/>*/}
                                    </div>
                                    <div className="divider-alt"></div>
                                    <p className="hasta-alam"></p>
                                    <p className="capacidad-text cap-tel">150</p>
                                    <p className="megas-text megas-tel"></p>
                                    <p className="linea-text"><img className="mr-2" src={mas}/>Hasta 2 líneas con llamadas ilimitadas*</p>
                                    
                                    
                                    <div className="yellow-container-alam precio-container container-alam-internettelfija cont-tel_home cont-tel">
                                      <div className="row cont-precio">
                                        <p className="money-t-alam col-md-1 col-sm-4 col-2">$</p>
                                        <p className="precio-t-alam textocentrado col-md-5 col-sm-6 col-4 ml-n3">599</p>
                                      </div>
                                     <p className="month-text-alam">Al mes</p>
                                  </div> 
                                  <div className="old-capacidad-tel">
                                    <span>LOS PRIMEROS 3 MESES <br/> <strong className="ofertON">PAGAS $499</strong> </span>
                                  </div>
                                  <div className="arrow-linea"></div>
                                  <div className="arrow-r-linea arrow-r-nettel"></div>
                                  <a href="/contrata" className="btn contrata-alam btn-special">Contrata</a>
                                 </div>
                                </div>
                              </div>

                              <div className="col-lg-2 col-md-6 col-sm-12 col-12 col-precios">
                                <div className="inalambrico-container-telfija">
                                  <div className="blue-container-internettelfija">
                                    <div className="icon-text">
                                      <p className="hasta-text">Internet</p>
                                      {/*<img src={max_speed}/>*/}
                                    </div>
                                    <div className="divider-alt"></div>
                                    <p className="hasta-alam"></p>
                                    <p className="capacidad-text cap-tel">200</p>
                                    <p className="megas-text megas-tel"></p>
                                    <p className="linea-text">Hasta 3 Líneas con llamadas ilimitadas*</p>
                                    
                                    
                                    <div className="yellow-container-alam precio-container container-alam-internettelfija cont-tel_home cont-tel">
                                      <div className="row cont-precio">
                                        <p className="money-t-alam col-md-1 col-sm-4 col-2">$</p>
                                        <p className="precio-t-alam textocentrado col-md-5 col-sm-6 col-4 ml-n3">999</p>
                                      </div>
                                     <p className="month-text-alam">Al mes</p>
                                  </div> 
                                  <a href="/contrata" className="btn contrata-alam">Contrata</a>
                                 </div>
                                </div>
                              </div>




                                <div className="portabilidad container-fluid mt-4">
                                  <h4>¿QUIERES CONSERVAR TU LÍNEA TELEFÓNICA?</h4>
                                  <button id="portabilidad" className="btns btn-purple col-lg-4 col-md-12 col-sm-12 col-12" type="button" href="/portabilidad">PONTE ON Y DA CLIC AQUÍ</button>
                                </div>
                                <div className="card-group card-group-alambrico card-carac">

                                <div className="card esp-alambricas">
                                  <div className="mt-2 fronterizo_3">
                                  <img src={cable} className="card-img-top" alt="..."/>

                                  </div>
                                  <div className="card-body">
                                    <p className="p-strong-alam">Internet por cable de cobre o fibra óptica.</p>
                                    <p className="text-caract">La fibra óptica permite alcanzar grandes velocidades.</p>
                                  </div>
                                </div>

                                
                                <div className="card esp-alambricas">
                                  <div className="mt-4 fronterizo_3">
                                  <img src={capacidad} id="capacidad-img" className="card-img-top" alt="..."/>

                                  </div>
                                  <div className="card-body mt-2">
                                    <p className="p-strong-alam">No hay limíte de capacidad.</p>
                                    <p className="text-caract"> Realiza la actividad que quieras en internet sin preocuparte por la capacidad.</p>
                                  </div>
                                </div>

                                <div className="card esp-alambricas">
                                  <div className="mt-3 fronterizo_3">
                                  <img src={internet} className="card-img-top" alt="..."/>

                                  </div>
                                  <div className="card-body mt-1">
                                    <p className="p-strong-alam">Internet</p>
                                    <p className="text-caract">bajo la red más grande y estable de México.</p>
                                  </div>
                                </div>

                                <div className="card esp-alambricas">
                                  <div className="mt-4 fronterizo_3">
                                  <img src={mexico}  id="mexico-img" className="card-img-top" alt="..."/>

                                  </div>
                                  <div className="card-body">
                                    <p className="p-strong-alam">Cobertura a nivel nacional </p>
                                    <p className="text-caract">(sujeto a disponibilidad de facilidades)</p>
                                  </div>
                                </div>
                              </div>
                            <div className='my-4 font-s text-gray text-center'> 

                              <e className="tel-contains">**El beneficio de diferirlo hasta en cuatro meses, aplica para clientes que mantengan su pago mensual al corriente. *Tu servicio incluye llamadas ilimitadas a números fijos y móviles en México, Estados Unidos, Canadá y hasta 180 países más, consulta lista de destinos completa según tu servicio adquirido <a href={destinos} target="_blank">aquí</a>. Precios con impuestos incluidos. Términos y Condiciones <a href={tcon} target="_blank">aquí</a>.</e>
                              <br/>

                                COBERTURA A NIVEL NACIONAL <br/> Los servicios están sujetos a disponibilidad de cobertura, condiciones, facilidades técnicas y diversos factores pueden afectar la velocidad de navegación del servicio. Vigencia al 30 de septiembre de 2021 o hasta agotar existencias. Sujetos a cambio con previa autorización de la Autoridad competente. 

                              </div>

                              <div className=" col-12 internet-contains  legales">
                                        <small>Consulta  tarifas registradas  ante  IFT <a href="/ratesan">aquí</a></small><br/>
                              </div>


                              <div className="col-12 legales tel-contains">
                                        <small>Consulta  tarifas registradas  ante  IFT <a href="/ratesanfija">aquí</a></small><br/>
                              </div>
                            </div>

                      </div> 
                     
                      
                  </div>
            }
            packs={[ ]}
            footer={
               
                <div className='container font-m'>

                    <div className='row'>

                        <div className='col-12 text-center'>

                            <span>FORMAS DE PAGO: TARJETA DE CRÉDITO, DÉBITO O EFECTIVO</span>
                           
                        </div>

                    </div>

              </div>
                

                

               
            }
        />;
        
        

    const page2 =
        <Page
            cols={2}
            header={
               <div className="row satelital-contains">
                      <div className="row flow-container switch-2">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center ">
                              <div className="tabs-container d-flex justify-content-center tab-switch-2">
                                  <div className="suscribe-basico" id="suscribe-basico">
                                    <p className="suscribe-texti">BÁSICO</p>
                                  </div>
                                  <div className="suscribe-extremo ml-2" id="suscribe-extremo">
                                    <p className="suscribe-texti">EXTREMO</p>
                                  </div>
                                </div>
                          <div className="flecha-abajo"></div>
                          </div>
                      </div>
                     
                      <div className="container">
                            <div className="mt-3 mb-5 col-lg-12 col-md-12 col-12 t-container ">
                                <h2 className="" id="title-satelite">INTERNET vía satélite que llega <br/> a donde otros no pueden</h2>
                                <h3 className="mt-3">Nuevos paquetes con más GB a mejor precio.<br/> Contrátalo ahora y <strong id="gb">tendrás los primeros dos meses sin límite de GB</strong> </h3>
                            </div>

                            <div className="row basico-contains ">
                                <div className="col-lg-2 col-md-6  col-sm-12 col-12 col-precios">
                                  <div className="inalambrico-container">
                                    <div className="blue-container blue-bas">
                                      <div className=" icon-text">
                                        <p className="hasta-text-bas">Internet</p>
                                        {/*<img className="img-sat-sat" src={max_speed}/>*/}
                                      </div>
                                      <div className="divider-alt"></div>
                                      <p className="hasta-text-alt hasta-bas"></p>
                                      <p className="capacidad-text cap-bas">3</p>
                                      <p className="megas-text megas-bas"></p>
                                      
                                      <div className="yellow-container-basico y-cont-bas">
                                        <div className="icon-text">
                                          <p className="capacidad-text-alt-alt">Capacidad por promoción</p>
                                          <img src={IconoPila}/>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="caracteristicas-text">Obtén del mes 3 y hasta el 12 <br/> <strong className="gb-adicionales">+5 GB ADICIONALES</strong></p>
                                        <p className="gigas-text g-bas">10<span>GB</span></p>
                                        <p className="totales-text">TOTALES</p>
                                      </div>
                                      
                                      <div className="precio-container">
                                        <p className="money-text money-bas">$</p>
                                        <p className="precio-text precio-bas">779</p>
                                      </div>
                                      <p className="month-text month-bas">Al mes</p>
                                      <div className="capacidad-yellow cap-y-b caratula-sat">
                                          <p>CAPACIDAD ORIGINAL</p>
                                      </div>
                                      <div className="old-capacidad-ex-sat">
                                        <h1>5 GB</h1>
                                      </div>
                                      <div className="arrow-left-basico"></div>
                                      <div className="arrow-right arrow-r-bas"></div>
                                      
                                      <a href="/cobertura_satelital" className="btn btn-contratar contrata-sat">Cobertura</a>
                                      </div>
                                  </div>
                                </div>
                                <div className="col-lg-2 col-md-6  col-sm-12 col-12 col-precios">
                                  <div className="inalambrico-container">
                                    <div className="blue-container blue-bas">
                                      <div className=" icon-text">
                                        <p className="hasta-text-bas">Internet</p>
                                        {/*<img className="img-sat-sat" src={max_speed}/>*/}
                                      </div>
                                      <div className="divider-alt"></div>
                                      <p className="hasta-text-alt hasta-bas"></p>
                                      <p className="capacidad-text cap-bas">5</p>
                                      <p className="megas-text megas-bas"></p>
                                      
                                      <div className="yellow-container-basico y-cont-bas">
                                        <div className="icon-text">
                                          <p className="capacidad-text-alt-alt">Capacidad por promoción</p>
                                          <img src={IconoPila}/>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="caracteristicas-text">Obtén del mes 3 y hasta el 12 <br/> <strong className="gb-adicionales">+10 GB ADICIONALES</strong></p>
                                        <p className="gigas-text g-bas">25<span>GB</span></p>
                                        <p className="totales-text">TOTALES</p>
                                      </div>
                                      
                                      <div className="precio-container">
                                        <p className="money-text money-bas">$</p>
                                        <p className="precio-text precio-bas">1,019</p>
                                      </div>
                                      <p className="month-text month-bas">Al mes</p>
                                      <div className="capacidad-yellow cap-y-b caratula-sat">
                                          <p>CAPACIDAD ORIGINAL</p>
                                      </div>
                                      <div className="old-capacidad-ex-sat">
                                        <h1>15 GB</h1>
                                      </div>
                                      <div className="arrow-left-basico"></div>
                                      <div className="arrow-right arrow-r-bas"></div>
                                      <a href="/cobertura_satelital" className="btn btn-contratar contrata-sat">Cobertura</a>
                                      </div>
                                  </div>
                                </div>
                                <div className="col-lg-2 col-md-6  col-sm-12 col-12 col-precios">
                                  <div className="inalambrico-container">
                                    <div className="blue-container blue-bas">
                                      <div className=" icon-text">
                                        <p className="hasta-text-bas">Internet</p>
                                        {/*<img className="img-sat-sat" src={max_speed}/>*/}
                                      </div>
                                      <div className="divider-alt"></div>
                                      <p className="hasta-text-alt hasta-bas"></p>
                                      <p className="capacidad-text cap-bas">10</p>
                                      <p className="megas-text megas-bas"></p>
                                      
                                      <div className="yellow-container-basico y-cont-bas">
                                        <div className="icon-text">
                                          <p className="capacidad-text-alt-alt">Capacidad por promoción</p>
                                          <img src={IconoPila}/>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="caracteristicas-text">Obtén del mes 3 y hasta el 12 <br/> <strong className="gb-adicionales">+10 GB ADICIONALES</strong></p>
                                        <p className="gigas-text g-bas">30<span>GB</span></p>
                                        <p className="totales-text">TOTALES</p>
                                      </div>
                                      
                                      <div className="precio-container">
                                        <p className="money-text money-bas">$</p>
                                        <p className="precio-text precio-bas">1,199</p>
                                      </div>
                                      <p className="month-text month-bas">Al mes</p>
                                      <div className="capacidad-yellow cap-y-b">
                                          <p>CAPACIDAD ORIGINAL</p>
                                      </div>
                                      <div className="old-capacidad-ex-sat">
                                        <h1>20 GB</h1>
                                      </div>
                                      <div className="arrow-left-basico"></div>
                                      <div className="arrow-right arrow-r-bas"></div>
                                      <a href="/cobertura_satelital" className="btn btn-contratar contrata-sat">Cobertura</a>
                                      </div>
                                  </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12 col-12 col-precios special-pack-bas">
                                  <div className="inalambrico-container">
                                      <div className="special-pack special-pack-bas-alt d-flex justify-content-center">
                                        <h6 className="special-text">PAQUETE ESPECIAL</h6>
                                      <div className="flecha-down-alt"></div>
                                      </div>
                                    <div className="blue-container-alt blue-bas fronterizo_3">
                                      <div className=" icon-text">
                                        <p className="hasta-text-bas">Internet</p>
                                        {/*<img className="img-sat-sat" src={Vel25Megas}/>*/}
                                      </div> 
                                      <div className="divider-alt"></div>
                                      <p className="hasta-text-alt-alt hasta-bas"></p>
                                      <p className="capacidad-text-alt-sat cap-bas">25</p>
                                      <p className="megas-text-alt megas-bas"></p>
                                      
                                      <div className="yellow-container-alt p-container p-container-bas ">
                                        <div className="icon-text">
                                          <p className="capacidad-text-alt-alt cap-sat">Capacidad por promoción</p>
                                          <img src={Cap30Gb}/>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="caracteristicas-text-alt">Obtén del mes 3 y hasta el 12 <br/> <strong className="gb-adicionales">+10 GB ADICIONALES</strong></p>
                                        <p className="gigas-text-alt g-bas">30<span>GB</span></p>
                                        <p className="totales-text-alt">TOTALES</p>
                                      </div>
                                      
                                      <div className="precio-container">
                                        <p className="money-text-alt money-bas">$</p>
                                        <p className="precio-text-alt precio-bas">1,399</p>
                                      </div>
                                      <p className="month-text-alt month-bas">Al mes</p>
                                      <div className="capacidad-yellow-alt cap-y-b">
                                          <p>CAPACIDAD ORIGINAL</p>
                                      </div>
                                      <div className="old-capacidad-ex-sat">
                                        <h1>20 GB</h1>
                                      </div>
                                      <div className="arrow-left-basico arrow-bas"></div>
                                      <div className="arrow-right arrow-r-bas"></div>
                                      <a href="/cobertura_satelital" className="btn btn-contratar contrata-sat">Cobertura</a>
                                      </div>
                                  </div>
                                </div>
                                <div className="col-lg-2 col-md-6  col-sm-12 col-12 col-precios">
                                  <div className="inalambrico-container">
                                    <div className="blue-container blue-bas">
                                      <div className=" icon-text">
                                        <p className="hasta-text-bas">Internet</p>
                                        {/*<img className="img-sat-sat" src={max_speed}/>*/}
                                      </div>
                                      <div className="divider-alt"></div>
                                      <p className="hasta-text-alt hasta-bas"></p>
                                      <p className="capacidad-text cap-bas">10</p>
                                      <p className="megas-text megas-bas"></p>
                                      
                                      <div className="yellow-container-basico y-cont-bas">
                                        <div className="icon-text">
                                          <p className="capacidad-text-alt-alt">Capacidad por promoción</p>
                                          <img src={Cap50Gb}/>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="caracteristicas-text">Obtén del mes 3 y hasta el 12 <br/> <strong className="gb-adicionales">+10 GB ADICIONALES</strong></p>
                                        <p className="gigas-text g-bas">50<span>GB</span></p>
                                        <p className="totales-text">TOTALES</p>
                                      </div>
                                      
                                      <div className="precio-container">
                                        <p className="money-text money-bas">$</p>
                                        <p className="precio-text precio-bas">1,799</p>
                                      </div>
                                      <p className="month-text month-bas">Al mes</p>
                                      <div className="capacidad-yellow cap-y-b">
                                          <p>CAPACIDAD ORIGINAL</p>
                                      </div>
                                      <div className="old-capacidad-ex-sat">
                                        <h1>40 GB</h1>
                                      </div>
                                      <div className="arrow-left-basico"></div>
                                      <div className="arrow-right arrow-r-bas"></div>
                                      <a href="/cobertura_satelital" className="btn btn-contratar contrata-sat">Cobertura</a>
                                      </div>
                                  </div>
                                </div>


                                 

                              <div className="col-12 mt-n2 text-card-sat fronterizo_3">
                                <p>Plazo forzoso: 24 meses</p>
                              </div>
                              </div>






                              <div className="row extremo-contains suscribe-inactivo">
                                <div className="col-lg-3 col-md-6 col-sm-12 col-12 col-precios">
                                  <div className="inalambrico-container">
                                    <div className="blue-container-extremo">
                                      <div className="icon-text">
                                        <p className="hasta-text">Internet</p>
                                        {/*<img src={max_speed}/>*/}
                                      </div>
                                      <div className="divider-alt"></div>
                                      <p className="hasta-text-alt"></p>
                                      <p className="capacidad-text">20</p>
                                      <p className="megas-text"></p>
                                      
                                      <div className="yellow-container-extremo">
                                        <div className="icon-text">
                                          <p className="capacidad-text-alt-alt">Capacidad por promoción</p>
                                          <img src={IconoPila}/>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="caracteristicas-text">Obtén del mes 3 y hasta el 12 <br/> <strong className="gb-adicionales">+10 GB ADICIONALES</strong></p>
                                        <p className="gigas-text">70<span>GB</span></p>
                                        <p className="totales-text">TOTALES</p>
                                      </div>
                                      
                                      <div className="precio-container">
                                        <p className="money-text">$</p>
                                        <p className="precio-text">2,199</p>
                                      </div>
                                      <p className="month-text">Al mes</p>
                                      <div className="capacidad-yellow">
                                          <h6>CAPACIDAD ORIGINAL</h6>
                                      </div>
                                      <div className="old-capacidad-ex">
                                        <h1>60 GB</h1>
                                      </div>
                                      <div className="arrow-left arrow-extremo"></div>
                                      <div className="arrow-right arrow-r-ext"></div>
                                      <div className="contratar-btn">
                                          <a href="/cobertura_satelital" className="btn btn-contratar-alt">Cobertura</a>
                                      </div>
                                      </div>
                                  </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-12 col-12 col-precios special-pack-alt">
                                  <div className="inalambrico-container">
                                      <div className="special-pack sp-ex d-flex justify-content-center">
                                        <h6 className="special-text">PAQUETE ESPECIAL</h6>
                                      <div className="flecha-down-alt"></div>
                                      </div>
                                    <div className="blue-container-alt">
                                      <div className="icon-text">
                                        <p className="hasta-text-sat">Internet</p>
                                        {/*<img src={Vel25Megas}/>*/}
                                      </div> 
                                      <div className="divider-alt"></div>
                                      <p className="hasta-text-alt-alt"></p>
                                      <p className="capacidad-text-alt-sat">25</p>
                                      <p className="megas-text-alt"></p>
                                      
                                      <div className="yellow-container-alt p-container p-container-ex">
                                        <div className="icon-text">
                                          <p className="capacidad-text-alt-alt cap-sat">Capacidad por promoción</p>
                                          <img src={Cap30Gb}/>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="caracteristicas-text-alt">Obtén del mes 3 y hasta el 12 <br/> <strong className="gb-adicionales">+10 GB ADICIONALES</strong></p>
                                        <p className="gigas-text-alt ">30<span>GB</span></p>
                                        <p className="totales-text-alt">TOTALES</p>
                                      </div>
                                      
                                      <div className="precio-container">
                                        <p className="money-text-alt">$</p>
                                        <p className="precio-text-alt">1,399</p>
                                      </div>
                                      <p className="month-text-alt">Al mes</p>
                                      <div className="capacidad-yellow-alt">
                                          <h6>CAPACIDAD ORIGINAL</h6>
                                      </div>
                                      <div className="old-capacidad-ex">
                                        <h1>20 GB</h1>
                                      </div>
                                      <div className="arrow-left arrow-extremo"></div>
                                      <div className="arrow-right arrow-r-ext"></div>
                                      <div className="contratar-btn">
                                          <a href="/cobertura_satelital" className="btn btn-contratar-alt">Cobertura</a>
                                      </div>
                                      </div>
                                  </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-12 col-12 col-precios">
                                  <div className="inalambrico-container">
                                    <div className="blue-container-extremo">
                                      <div className="icon-text">
                                        <p className="hasta-text">Internet</p>
                                        {/*<img src={max_speed}/>*/}
                                      </div>
                                      <div className="divider-alt"></div>
                                      <p className="hasta-text-alt"></p>
                                      <p className="capacidad-text">30</p>
                                      <p className="megas-text"></p>
                                      
                                      <div className="yellow-container-extremo">
                                        <div className="icon-text">
                                          <p className="capacidad-text-alt-alt">Capacidad por promoción</p>
                                          <img src={IconoPila}/>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="caracteristicas-text">Obtén del mes 3 y hasta el 12 <br/> <strong className="gb-adicionales">+10 GB ADICIONALES</strong></p>
                                        <p className="gigas-text">110<span>GB</span></p>
                                        <p className="totales-text">TOTALES</p>
                                      </div>
                                      
                                      <div className="precio-container">
                                        <p className="money-text">$</p>
                                        <p className="precio-text">3,099</p>
                                      </div>
                                      <p className="month-text">Al mes</p>
                                      <div className="capacidad-yellow">
                                          <h6>CAPACIDAD ORIGINAL</h6>
                                      </div>
                                      <div className="old-capacidad-ex">
                                        <h1>100 GB</h1>
                                      </div>
                                      <div className="arrow-left arrow-extremo"></div>
                                      <div className="arrow-right arrow-r-ext"></div>
                                      <div className="contratar-btn">
                                          <a href="/cobertura_satelital" className="btn btn-contratar-alt">Cobertura</a>
                                      </div>
                                      </div>
                                  </div>
                                </div>

                                <div className="col-lg-3 col-md-6  col-sm-12 col-12 col-precios">
                                  <div className="inalambrico-container">
                                    <div className="blue-container-extremo">
                                      <div className="icon-text">
                                        <p className="hasta-text">Internet</p>
                                        {/*<img src={max_speed}/>*/}
                                      </div>
                                      <div className="divider-alt"></div>
                                      <p className="hasta-text-alt"></p>
                                      <p className="capacidad-text">30</p>
                                      <p className="megas-text"></p>
                                      
                                      <div className="yellow-container-extremo">
                                        <div className="icon-text">
                                          <p className="capacidad-text-alt-alt">Capacidad por promoción</p>
                                          <img src={IconoPila}/>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="caracteristicas-text">Obtén del mes 3 y hasta el 12 <br/> <strong className="gb-adicionales">+10 GB ADICIONALES</strong></p>
                                        <p className="gigas-text">160<span>GB</span></p>
                                        <p className="totales-text">TOTALES</p>
                                      </div>
                                      
                                      <div className="precio-container">
                                        <p className="money-text">$</p>
                                        <p className="precio-text">4,599</p>
                                      </div>
                                      <p className="month-text">Al mes</p>
                                      <div className="capacidad-yellow">
                                          <h6>CAPACIDAD ORIGINAL</h6>
                                      </div>
                                      <div className="old-capacidad-ex">
                                        <h1>150 GB</h1>
                                      </div>
                                      <div className="arrow-left arrow-extremo"></div>
                                      <div className="arrow-right arrow-r-ext"></div>
                                      <div className="contratar-btn">
                                          <a href="/cobertura_satelital" className="btn btn-contratar-alt">Cobertura</a>
                                      </div>
                                      </div>
                                  </div>
                                </div>

                              <div className="col-12 mt-n2 text-card-sat fronterizo_3">
                                <p>Plazo forzoso: 24 meses</p>
                              </div>
                              </div>

                              <div className="gastos-inst col-12 mt-5">
                                <h2 className="text-2nd">Gastos de Instalación</h2>
                                <h5 className="text-6th fronterizo_3">(Dependiendo de la forma de pago mensual)</h5>
                                <div className="card-group mt-5">
                                  <div className="card card-inst col-md-4 col-lg-4 col-sm-12">
                                    <div className="card-header bg-inst">Efectivo</div>
                                    <div className="card-body">
                                      <h5 className="text-3rd_alt">Gastos de instalación</h5>
                                      <div className="precio-container">
                                        <p className="money-text_alt">$</p>
                                        <p className="precio-text_alt">4,000</p>
                                      </div>
                                      <h6 className="text-6th_alt">EN UNA SOLA EXHIBICIÓN</h6>
                                    </div>
                                    <div className="card-footer bg-inst footer-inst">Efectivo, tarjeta de crédito o débito</div>
                                  </div>

                                  <div className="card card-inst col-md-4 col-lg-4 col-sm-12">
                                    <div className="card-header bg-inst">Con cargo mensual a tu tarjeta de crédito</div>
                                    <div className="card-body">
                                      <h5 className="text-3rd_alt fronterizo_4">$4,000</h5>
                                      <div className="precio-container">
                                        <p className="money-text_alt">$</p>
                                        <p className="precio-text_alt">2,000</p>
                                      </div>
                                      <h6 className="text-6th_alt">EN UNA SOLA EXHIBICIÓN</h6>
                                    </div>
                                    <div className="card-footer bg-inst footer-inst">DOMICILIANDO CON TARJETA DE CRÉDITO</div>
                                  </div>

                                  <div className="card card-inst col-md-4 col-lg-4 col-sm-12">
                                    <div className="card-header bg-inst">Anualidad</div>
                                    <div className="card-body">
                                      <h5 className="text-3rd_alt">Paga por un año adelantado</h5>
                                      <div className="row">
                                        <div className="precio-container col-4">
                                          <p className="money-text__alt">$</p>
                                          <p className="precio-text__alt">2,000</p>
                                        </div>
                                        <div className="precio-container col-8">
                                          <p className="money-text__alt">+</p>
                                          <p className="precio-text__alt">11 meses</p>
                                        </div>

                                      </div>
                                      <div className="row mt-n3">
                                        <div className="precio-container col-4">
                                          <p className="text-6th_alt">Gastos de Instalación</p>
                                        </div>
                                        <div className="precio-container col-8">
                                          <p className="text-6th_alt">DEL PAQUETE ELEGIDO</p>
                                        </div>

                                      </div>
                                      <h6 className="text-6th_alt">Y TE REGALAMOS EL MES 12</h6>
                                    </div>
                                    <div className="card-footer bg-inst footer-inst_alt">*EFECTIVO, TARJETA DE CRÉDITO O DÉBITO</div>
                                  </div>
                                </div>
                              </div>

                              <div className="card-group card-group-sat mt-3">

                                <div className="card esp-sat">
                                  <div className="mt-4 fronterizo_3">
                                  <img src={iconSinAccesso} className="card-img-top" alt="..."/>

                                  </div>
                                  <div className="card-body">
                                    <p className="p-strong p-card-sat">Es ideal para lugares sin acceso a internet por cable o móvil.</p>
                                  </div>
                                </div>

                                
                                <div className="card esp-sat">
                                  <div className="mt-2 fronterizo_3">
                                  <img src={iconNavegaIlimitado} id="capacidad-img" className="card-img-top" alt="..."/>

                                  </div>
                                  <div className="card-body card-internet">
                                    <p className="p-strong p-card-sat">Navegarás ilimitadamente</p>
                                    <p className="card-text">Si alcanzas el máximo de capacidad durante el mes, seguirás navegando ilimitadamente a una velocidad reducida: para Internet 3 con 5 GB será 500 Kbps y para el resto de los paquetes, a 1 Mega. <a className="link-sat" data-toggle="modal" data-target=""></a> </p>
                                  </div>
                                </div>

                                <div className="card esp-sat-alt">
                                  <div className="mt-2 fronterizo_3">
                                  <img src={icoFreezone} className="card-img-top" alt="..."/>

                                  </div>
                                  <div className="card-body card-fz">
                                    <p className="card-text mb-n1 text-card-sat-alt">Aprovecha 6 horas de <strong>freezone</strong>:</p>
                                    <p className="card-text mt-2 text-card-sat-alt">De las <strong>00:00 a las 6:00 hrs</strong> podrás realizar las actividades que desees ¡SIN CONSUMIR TU CAPACIDAD!</p>
                                  </div>
                                </div>

                                <div className="card esp-sat-alt">
                                  <div className="mt-2 fronterizo_3">
                                  <img src={iconwww}  id="mexico-img" className="card-img-top" alt="..."/>

                                  </div>
                                  <div className="card-body card-www">
                                    <p className="card-text mb-n1 text-card-sat">Disfruta de la <strong>navegación inteligente:</strong></p>
                                    <p className="card-text mt-2 text-card-sat-alt">Visita páginas web, lee contenido en blogs, manda mensajes instantáneos ¡SIN CONSUMIR TU CAPACIDAD!*</p>
                                  </div>
                                 </div>
                                 <div className="col-md-12 col-lg-3 col-sm-12 offset-lg-9 ofsset-md-9 small-sat legales">
                                   <small>*Ver o subir videos, imágenes o documentos sí consumen capacidad.</small>
                                 </div>
                              </div>
                              <div className="col-12 small-sat small-alt legales">
                                <small><br/>
                                Precios de los paquetes señalados son informativos. Importes en moneda nacional e impuestos incluidos, sujetos a cambio previa autorización de la Autoridad competente. Términos y condiciones en oninternet.com.mx o llame al (55) 55 123 123. El beneficio de navegación ilimitada en los dos primeros meses y el de los Gigabytes (GB) adicionales del 3 al mes 12, aplican a partir de la instalación y solo es aplicable si mantiene sus pagos puntuales y al corriente. A partir del mes 13 se reanudará en automático la capacidad inicial del paquete contratado. Los descuentos y beneficios referidos en los gastos de instalación son informativos. Al término de la Capacidad mensual del paquete contratado, el usuario podrá seguir navegando a una velocidad reducida de 500 kbps para el paquete Internet 3 con 5 GB y el resto de los paquetes seguirán navegando a 1 Mega de velocidad. El servicio está sujeto a disponibilidad de cobertura, condiciones y facilidades técnicas que pueden afectar la velocidad de navegación del servicio. La información presentada (imágenes, textos, logos y cualquier otro elemento) constituye derechos de autor y propiedad intelectual usada con autorización de su titular, protegidos por leyes aplicables. Vigencia de la promoción y sus costos:30 de septiembre de 2021.</small>
                              </div>

                              <div className="col-12  small-inalam  legales">
                              <small>Consulta  tarifas registradas  ante  IFT <a href="https://oninternet.com.mx/ratessat">aquí</a></small><br/>
                            </div>
                      </div>
                          
                      <div className="modal fade" id="conoce-mas" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="">SI ALCANZAS EL MÁXIMO DE CAPACIDAD DURANTE EL MES, SEGUIRÁS NAVEGANDO A 500 KBPS O A 1 MEGA ILIMITADAMENTE DEPENDIENDO DE TU PAQUETE CONTRATADO.</h5>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body row">
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <table className="table table-responsive table-striped y-table">
                                  <thead>
                                    <tr>
                                      <th className="title-y-table">Paquetes que navegarán a 500 Kbps:</th>
                                    </tr>
                                  </thead>
                                  <tbody className="tablastamodal">
                                    <tr>
                                     <th>Internet <strong className="s-table">3</strong> con <strong className="s-table">5 GB</strong></th>
                                    </tr>
                                    <tr>
                                     <th>Internet <strong className="s-table">5</strong> con <strong className="s-table">15 GB</strong></th>
                                    </tr>
                                    <tr>
                                     <th>Internet <strong className="s-table">10</strong> con <strong className="s-table">20 GB</strong></th>
                                    </tr>
                                    <tr>
                                     <th>Internet <strong className="s-table">25</strong> con <strong className="s-table">20 GB</strong></th>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <table className="table table-responsive table-striped p-table">
                                  <thead>
                                    <tr>
                                      <th className="title-y-table">Paquetes que navegarán a 1 mega:</th>
                                    </tr>
                                  </thead>
                                  <tbody className="tablastamodal">
                                    <tr>
                                     <th>Internet <strong className="s-table">10</strong> con <strong className="s-table">40 GB</strong></th>
                                    </tr>
                                    <tr>
                                     <th>Internet <strong className="s-table">20</strong> con <strong className="s-table">60 GB</strong></th>
                                    </tr>
                                    <tr>
                                     <th>Internet <strong className="s-table">30</strong> con <strong className="s-table">100 GB</strong></th>
                                    </tr>
                                    <tr>
                                     <th>Internet <strong className="s-table">30</strong> con <strong className="s-table">150 GB</strong></th>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>

            }
            packs={[
                   
                 /*    
                   
                <Pack
                    megas='2.5' megasUnit='MEGAS'
                    buttonLabel='CONOCE MÁS' buttonPatContrataata'
                    capacidad='CAPACIDAD 5 GB'
                />,
                <Pack
                    megas='5' megasUnit='MEGAS'
                    buttonLabel='CONOCE MÁS' buttonPatContrataata'
                    capacidad='CAPACIDAD 10 GB'
                />,
                <Pack
                    megas='10' megasUnit='MEGAS'
                    buttonLabel='CONOCE MÁS' buttonPatContrataata'
                    capacidad='CAPACIDAD 20 GB'
                />,
                <Pack
                    megas='20' megasUnit='MEGAS'
                    buttonLabel='CONOCE MÁS' buttonPatContrataata'
                    capacidad='CAPACIDAD 40 GB'
                />,
                <Pack
                    megas='30' especial={<span className='font-m'>*</span>} megasUnit='MEGAS'
                    buttonLabel='CONOCE MÁS' buttonPatContrataata'
                    capacidad='CAPACIDAD 50 GB'
                />,
                <Pack
                    megas='30' especial={<span className='font-m'>*</span>} megasUnit='MEGAS'
                    buttonLabel='CONOCE MÁS' buttonPatContrataata'
                    capacidad='CAPACIDAD 100 GB'
                />*/
            ]}
            /*Navega libremente sin consumir tu capacidad de GB. Las actividades que consumirán tu capacidad de GB son únicamente las plataformas de streaming, para ver videos y escuchar música, y las descargas y subidas de documentos.*/
//<div>Navega libremente sin consumir tu capacidad de GB. Las plataformas de streaming, ver videos, escuchar música y las descargas y subidas de documentos son las actividades que consumirán tu capacidad de GB.</div>
            footer={<div className='row'>
         
        </div> }
        />;

    const pages = [page0];
    const direccion =["/", "/alambrico", "/satelital", "/On Internet/Amazon Prime"];
    const activation = 0; 

    return (
        <Tabs id='packs' labels={labels} pages={pages} direccion={direccion} activation={activation} />
    );
}

export default Packs;
