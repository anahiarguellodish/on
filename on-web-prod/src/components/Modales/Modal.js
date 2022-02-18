

import React from 'react';
import $ from 'jquery';

import privacidad from '../../media/privacidad.jpg';
import recibo from '../../media/recibo.png';
import popup from '../../media/Banner5.jpg';







class Modal extends React.Component
{
    constructor(props)
    {
        super(props);
    }





    componentDidMount() {

      var clienteon="";

      function contratacion(){
 
          $.ajax({
             type: 'POST',
             url: "https://www.dish.com.mx/onservice/test.php",
             data: $('#contratacion').serialize(),  
             success: function(data){
                alert(data);
             },
             error:function(data){
                
             }
          });
      }

       function validcliente(client){
 
          $.ajax({
             type: 'POST',
             url: "https://www.dish.com.mx/onservice/cliente_.php",
             data: {"cliente":client},
             dataType: "json",
             success: function(data){
               // var respose = $.parseJSON(data); 
                // alert(data);
                if(data.codigo==111){
                  $("#cliente").parent().addClass("error");
                  $("#cliente").val("");
                  $("#numero").val("");
                    $("#numero").parent().css("display","none");
                    $("#numero").parent().attr("style","display:none");
                    $(".label-cliente").html(data.descripcion);
                    $(".label-cliente").css("color","red");
                }else{
                   $("#cliente").parent().removeClass("error");
                   clienteon=client;
                    $("#numero").parent().css("display","block");
                    $(".label-cliente").html("");
                }

             },
             error:function(data){
                
             }
          });
      }

      function validnumero(numero){
 
          $.ajax({
             type: 'POST',
             url: "https://www.dish.com.mx/onservice/numero.php",
             data: {"cliente":clienteon,"numero":numero},  
             success: function(data){
                // alert(data);
                if(data==111){
                  $("#numero").parent().addClass("error");
                  $("#numero").val("");
                   $(".label-numero").html("Número no valido");
                    $(".label-numero").css("color","red");
                }else{
                   $("#numero").parent().removeClass("error");
                     $(".label-numero").html("");
                }

             },
             error:function(data){
                
             }
          });
      }



      function validimei(imeis){
 
          $.ajax({
             type: 'POST',
             url: "https://www.dish.com.mx/onservice/imei.php",
             data: {"email":imeis},   
             success: function(data){
                // alert(data);
                if(data==111){
                  $("#email").parent().addClass("error");
                  $("#email").val("");
                   $(".label-email").html("Email no valido");
                    $(".label-email").css("color","red");
                }else{
                   $("#email").parent().removeClass("error");
                  $(".label-email").html("");
                }

             },
             error:function(data){
                
             }
          });
      }





    $(function () {

           $("#banner_buenfinn").on("click",function(){
              //alert("modal");
               window.location="/terms-and-conditionsin";
               cambiaurlbuenfin();
          });


           function cambiaurlbuenfin(){
              window.location="/terms-and-conditionsin";
           }

           $("#numero").parent().css("display","none");

           function getParameterByName(name) {
              name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
              var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
              results = regex.exec(window.location.search);
              return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
          }


          var modalexito=getParameterByName("modal");

          if(modalexito==200){
            // $(".modalexito").addClass("show");
            // $(".modalexito").removeClass("fade");
            // $(".modalexito").show();
            var contenido= '<br><div class="container">'+
                            '<div class="col-lg-8 col-md-12 col-sm-12 offset-md-2" style="top: 70px;">'+
                             '<div class="card flex-fill" id="card">'+
                              '<div class="row no-gutters">'+
                              '<div class="col-md-6 col-sm-6 app_modal_verde" id="card-logo">'+
                                 '<img src="/static/media/ON_logo_blanco.866ffd24.png" class="card-img mt-5 img-fluid" style="margin-top: 4rem !important;" alt="">'+
                                  '<h1 style="color: white; text-align: center; font: bold;">INTERNET</h1>'+
                                '<div id="triangle" class="col-2"></div>'+
                              '</div>'+
                              '<div class="col-md-6 col-sm-6" id="card-body">'+
                                '<div class="card-body ml-2" id="gracias">'+
                                  '<div class="col-12 mt-3" style="margin-top: -10px !important;">'+
                                    '<h1>¡Listo!</h1>'+
                                    '<h4>Ya quedaste registrado en el portal.</h4>'+
                                  '</div>'+
                                '</div>'+
                                '<button class="btn btn-success col-6 offset-3 enlace">INICIA SESIÓN</button>'+
                              '</div>'+
                              '</div>'+
                            '</div>'+
                            '</div>'+
                            '</div><br>';
            $("#home").empty();
            $("#home").append(contenido);
            $("#home").addClass("app_modal_exito");
            
          }

            $(".enlace").on("click",function(){
              window.location="https://myon.oninternet.com.mx/";
            });

            
              $(".pospago-contains").show();
              $(".prepago-contains").hide();
              $("#suscribe-pospago").click(function(){
                  $(".pospago-contains").show();
                  $(".prepago-contains").hide();
                  $("#suscribe-pospago").addClass("suscribe-inalam-active");
                  $("#suscribe-pospago").removeClass("suscribe-inalam-inactive");
                  $("#suscribe-prepago").addClass("suscribe-inalam-inactive");
                  $("#suscribe-prepago").removeClass("suscribe-inalam-active");
              });
              $("#suscribe-prepago").click(function(){
                  $(".prepago-contains").show();
                  $(".pospago-contains").hide();
                  $("#suscribe-prepago").removeClass("suscribe-inalam-inactive");
                  $("#suscribe-prepago").addClass("suscribe-inalam-active");
                  $("#suscribe-pospago").removeClass("suscribe-inalam-active");
                  $("#suscribe-pospago").addClass("suscribe-inalam-inactive");
              });
 
            $(".field-wrapper .field-placeholder").on("click", function () {
                $(this).closest(".field-wrapper").find("input").focus();
            });
            $(".field-wrapper input").on("keyup", function () {
                var value = $.trim($(this).val());
                if (value) {
                    $(this).closest(".field-wrapper").addClass("hasValue");
                } else {
                    $(this).closest(".field-wrapper").removeClass("hasValue");
                }
            });


            $("#contratacion_sub").on("click", function(event){
              // event.preventDefault();
              //  contratacion();
              // $('#contratacion').submit();
            });

             $("#cliente").on("change", function(event){
              var cli=$(this).val();
               validcliente(cli);
            });

            $("#numero").on("change", function(event){
              var cli=$(this).val();
               validnumero(cli);
            });


            $("#email").on("change", function(event){
              var cli=$(this).val();
               validimei(cli);
            });

            $(".close").on("click", function(event){
                $(".modalexito").addClass("fade");
                $(".modalexito").removeClass("show");
                $(".modalexito").hide();
            });

             $("#password2").on("change", function(event){
              var pass2=$(this).val();
              var pass1=$("#password").val();

              if(pass1!=pass2){
                $("#password").parent().addClass("error");
                $("#password").val("");
                $("#password2").val("");
              }
            });

 
        });

     
      
        $(".suscribe-2000-contains").hide();
        
        $("#suscribe-600").on("click",function(){
            $(".suscribe-600-contains").show();
            $(".suscribe-2000-contains").hide();
        });

         $("#suscribe-2000").on("click",function(){
            $(".suscribe-600-contains").hide();
            $(".suscribe-2000-contains").show();
        });




          

         var r="false";
         var s="false";
         var t="false";
         var u="false"; 
         var banderar="contenido";
         var v="false";

         $("#internet_legal").on("click",function(){
            if(r=="true"){
                $(".internet_").slideUp("slow");
                r="false";
            }else{
                $(".internet_").slideDown("slow");
                r="true";
            }
         });

          
            $("#inalambrico_legal").on("click",function(){
            if(s=="true"){
                $(".inalambrico_").slideUp("slow");
                s="false";
            }else{
                $(".inalambrico_").slideDown("slow");
                s="true";
            }
         });

           
            $("#alambrico_legal").on("click",function(){
            if(t=="true"){
                $(".alambrico_").slideUp("slow");
                t="false";
            }else{
                $(".alambrico_").slideDown("slow");
                t="true";
            }
         });


            $("#alambricotel_legal").on("click",function(){
            if(v=="true"){
                $(".alambricotel_").slideUp("slow");
                v="false";
            }else{
                $(".alambricotel_").slideDown("slow");
                v="true";
            }
         });


         
            $("#satelital_legal").on("click",function(){
            if(u=="true"){
                $(".satelital_").slideUp("slow");
                u="false";
            }else{
                $(".satelital_").slideDown("slow");
                u="true";
            }
         });

          $(".internet_").slideUp("slow");
          $(".inalambrico_").slideUp("slow");
          $(".alambrico_").slideUp("slow");
          $(".satelital_").slideUp("slow");
          $(".alambricotel_").slideUp("slow");


          $(".titulo_estado").on("click",function(){

          	var classes = $(this).attr("class");
   			var split_classes = classes.split(' ');

   			if(split_classes[2]=="usado"){
   				$(".cobertura_ciudades_"+split_classes[0]).hide();
   				$(".titulo_estado").removeClass("usado");
   			}else{
   				$(".cobertura_ciudades_"+split_classes[0]).show();
   				$(".titulo_estado").addClass("usado");
   			}

   			
          });

          

          

            

     
          

          setInterval(function(){
          	// console.log("interval");
          	// console.log("vlor r: "+ typeof r);
          	// console.log("vlor contenido: "+banderar);


			$("#internet_legal").off();
			$("#inalambrico_legal").off();
			$("#alambrico_legal").off();
      $("#alambricotel_legal").off();
			$("#satelital_legal").off();
			$(".titulo_estado").off();
      $("#alambricotel_").off();
      

       $(".confirmacion").off("click");

      $(".confirmacion").on("click",function(e){

              e.preventDefault();
              var bool=window.confirm("¡OJO! El sitio al que te diriges es ajeno a ON Internet");

              if(bool){
                  window.open($(this).attr("href"));
              }

           });


			 $(".titulo_estado").on("click",function(){

          	var classes = $(this).attr("class");
   			var split_classes = classes.split(' ');

   			if(split_classes[2]=="usado"){
   				$(".cobertura_ciudades_"+split_classes[0]).hide();
   				$(".titulo_estado").removeClass("usado");
   			}else{
   				$(".cobertura_ciudades_"+split_classes[0]).show();
   				$(".titulo_estado").addClass("usado");
   			}

   			
          });


          	$("#internet_legal").on("click",function(){
            if(r=="true"){
                $(".internet_").slideUp("slow");
                r="false";
            }else{
                $(".internet_").slideDown("slow");
                r="true";
            }
         });

          
            $("#inalambrico_legal").on("click",function(){
            if(s=="true"){
                $(".inalambrico_").slideUp("slow");
                s="false";
            }else{
                $(".inalambrico_").slideDown("slow");
                s="true";
            }
         });

           
            $("#alambrico_legal").on("click",function(){
            if(t=="true"){
                $(".alambrico_").slideUp("slow");
                t="false";
            }else{
                $(".alambrico_").slideDown("slow");
                t="true";
            }
         });


            $("#alambricotel_legal").on("click",function(){
            if(v=="true"){
                $(".alambricotel_").slideUp("slow");
                v="false";
            }else{
                $(".alambricotel_").slideDown("slow");
                v="true";
            }
         });

         
            $("#satelital_legal").on("click",function(){
            if(u=="true"){
                $(".satelital_").slideUp("slow");
                u="false";
            }else{
                $(".satelital_").slideDown("slow");
                u="true";
            }
         });
        





          },997);
          //  setInterval(function(){
          //         console.log("interval");

          
          setInterval(function(){

          	// console.log("valorde r: "+ r);

          	if(r=="true"){
          		 $(".internet_").slideDown("slow");
          	}

          	if(s=="true"){
          		 $(".inalambrico_").slideDown("slow");
          	}

          	if(t=="true"){
          		 $(".alambrico_").slideDown("slow");
          	}

          	if(u=="true"){
          		 $(".satelital_").slideDown("slow");
          	}

          	if(r=="false"){
          		 $(".internet_").slideUp("slow");
          	}

          	if(s=="false"){
          		 $(".inalambrico_").slideUp("slow");
          	}

          	if(t=="false"){
          		 $(".alambrico_").slideUp("slow");
          	}

          	if(u=="false"){
          		 $(".satelital_").slideUp("slow");
          	}

           if(v=="true"){
               $(".alambricotel_").slideDown("slow");
            }



          },1000);
           

           
             

            
          //    });
          // },997);






            



         

        // if(window.location=="http://oninternet-dev.s3-website-us-east-1.amazonaws.com/"){
        //   $("#modalbuenfin").click();
        // }

        //  if(window.location=="https://oninternet.com.mx/"){
        //   $("#modalbuenfin").click();
        // }



        if(window.location=="https://oninternet.com.mx/"){
          // $("#modalbuenfin").click();
        var script_incr="<script>var ssaUrl = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'clickserv.basis.net/conv/b8bab8cd47070076';new Image().src = ssaUrl; (function(d) {  var syncUrl = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'pixel-a.basis.net/dmp/asyncPixelSync'; var iframe = d.createElement('iframe'); (iframe.frameElement || iframe).style.cssText = \"width: 0; height: 0; border: 0;\"; iframe.src = \"javascript:false\"; d.body.appendChild(iframe); var doc = iframe.contentWindow.document; doc.open().write('<body onload=\"window.location.href=\''+syncUrl+'\'\">'); doc.close();})(document);</script>";
          $("head").append(script_incr);
        }

        if(window.location=="https://oninternet.com.mx/cobertura"){
        var script_incr="<script>var ssaUrl = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'clickserv.basis.net/conv/4308ffd76b76fd15';new Image().src = ssaUrl; (function(d) {  var syncUrl = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'pixel-a.basis.net/dmp/asyncPixelSync'; var iframe = d.createElement('iframe'); (iframe.frameElement || iframe).style.cssText = \"width: 0; height: 0; border: 0;\"; iframe.src = \"javascript:false\"; d.body.appendChild(iframe); var doc = iframe.contentWindow.document; doc.open().write('<body onload=\"window.location.href=\''+syncUrl+'\'\">'); doc.close(); })(document); </script>";
        $("head").append(script_incr);
        }

        if(window.location=="https://oninternet.com.mx/contrata"){
        var script_incr="<script>var ssaUrl = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'clickserv.basis.net/conv/882d3348bbbd13c6';new Image().src = ssaUrl; (function(d) {  var syncUrl = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'pixel-a.basis.net/dmp/asyncPixelSync'; var iframe = d.createElement('iframe'); (iframe.frameElement || iframe).style.cssText = \"width: 0; height: 0; border: 0;\"; iframe.src = \"javascript:false\"; d.body.appendChild(iframe); var doc = iframe.contentWindow.document; doc.open().write('<body onload=\"window.location.href=\''+syncUrl+'\'\">'); doc.close(); })(document); </script>";
        $("head").append(script_incr);
        }

        if(window.location=="https://oninternet.com.mx/customer-service"){
        var script_incr="<script>var ssaUrl = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'clickserv.basis.net/conv/6e84c5994812b22a';new Image().src = ssaUrl; (function(d) {  var syncUrl = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'pixel-a.basis.net/dmp/asyncPixelSync'; var iframe = d.createElement('iframe'); (iframe.frameElement || iframe).style.cssText = \"width: 0; height: 0; border: 0;\"; iframe.src = \"javascript:false\"; d.body.appendChild(iframe); var doc = iframe.contentWindow.document; doc.open().write('<body onload=\"window.location.href=\''+syncUrl+'\'\">'); doc.close(); })(document); </script>";
        $("head").append(script_incr);
        }

      

        if(window.location=="https://oninternet.com.mx/faq"){
        var script_incr="<script>var ssaUrl = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'clickserv.basis.net/conv/57a595891382ac7c';new Image().src = ssaUrl; (function(d) {  var syncUrl = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'pixel-a.basis.net/dmp/asyncPixelSync'; var iframe = d.createElement('iframe'); (iframe.frameElement || iframe).style.cssText = \"width: 0; height: 0; border: 0;\"; iframe.src = \"javascript:false\"; d.body.appendChild(iframe); var doc = iframe.contentWindow.document; doc.open().write('<body onload=\"window.location.href=\''+syncUrl+'\'\">'); doc.close(); })(document); </script>";
        $("head").append(script_incr);
        }

        if(window.location=="https://oninternet.com.mx/map"){
        var script_incr="<script>var ssaUrl = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'clickserv.basis.net/conv/923003d050e40d39';new Image().src = ssaUrl; (function(d) {  var syncUrl = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'pixel-a.basis.net/dmp/asyncPixelSync'; var iframe = d.createElement('iframe'); (iframe.frameElement || iframe).style.cssText = \"width: 0; height: 0; border: 0;\"; iframe.src = \"javascript:false\"; d.body.appendChild(iframe); var doc = iframe.contentWindow.document; doc.open().write('<body onload=\"window.location.href=\''+syncUrl+'\'\">'); doc.close(); })(document); </script>";
        $("head").append(script_incr);
        }

        if(window.location=="https://oninternet.com.mx/min-rights"){
        var script_incr="<script>var ssaUrl = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'clickserv.basis.net/conv/9f1866d64bbf816e';new Image().src = ssaUrl; (function(d) {  var syncUrl = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'pixel-a.basis.net/dmp/asyncPixelSync'; var iframe = d.createElement('iframe'); (iframe.frameElement || iframe).style.cssText = \"width: 0; height: 0; border: 0;\"; iframe.src = \"javascript:false\"; d.body.appendChild(iframe); var doc = iframe.contentWindow.document; doc.open().write('<body onload=\"window.location.href=\''+syncUrl+'\'\">'); doc.close(); })(document); </script>";
        $("head").append(script_incr);
        }

        if(window.location=="https://oninternet.com.mx/places-of-payment"){
        var script_incr="<script>var ssaUrl = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'clickserv.basis.net/conv/63aa2967680b930e';new Image().src = ssaUrl; (function(d) {  var syncUrl = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'pixel-a.basis.net/dmp/asyncPixelSync'; var iframe = d.createElement('iframe'); (iframe.frameElement || iframe).style.cssText = \"width: 0; height: 0; border: 0;\"; iframe.src = \"javascript:false\"; d.body.appendChild(iframe); var doc = iframe.contentWindow.document; doc.open().write('<body onload=\"window.location.href=\''+syncUrl+'\'\">'); doc.close(); })(document); </script>";
        $("head").append(script_incr);
        }

        if(window.location=="https://oninternet.com.mx/prices"){
        var script_incr="<script>var ssaUrl = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'clickserv.basis.net/conv/2c1aeb568c63e66c';new Image().src = ssaUrl; (function(d) {  var syncUrl = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'pixel-a.basis.net/dmp/asyncPixelSync'; var iframe = d.createElement('iframe'); (iframe.frameElement || iframe).style.cssText = \"width: 0; height: 0; border: 0;\"; iframe.src = \"javascript:false\"; d.body.appendChild(iframe); var doc = iframe.contentWindow.document; doc.open().write('<body onload=\"window.location.href=\''+syncUrl+'\'\">'); doc.close(); })(document); </script>";
        $("head").append(script_incr);
        }

        if(window.location=="https://oninternet.com.mx/terms-and-conditions"){
        var script_incr="<script>var ssaUrl = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'clickserv.basis.net/conv/a0a59396cb24de4c';new Image().src = ssaUrl; (function(d) {  var syncUrl = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'pixel-a.basis.net/dmp/asyncPixelSync'; var iframe = d.createElement('iframe'); (iframe.frameElement || iframe).style.cssText = \"width: 0; height: 0; border: 0;\"; iframe.src = \"javascript:false\"; d.body.appendChild(iframe); var doc = iframe.contentWindow.document; doc.open().write('<body onload=\"window.location.href=\''+syncUrl+'\'\">'); doc.close(); })(document); </script>";
        $("head").append(script_incr);
        }

        if(window.location=="https://oninternet.com.mx/terms-of-use"){
        var script_incr="<script>var ssaUrl = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'clickserv.basis.net/conv/f5b83a772c9707b8';new Image().src = ssaUrl; (function(d) {  var syncUrl = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'pixel-a.basis.net/dmp/asyncPixelSync'; var iframe = d.createElement('iframe'); (iframe.frameElement || iframe).style.cssText = \"width: 0; height: 0; border: 0;\"; iframe.src = \"javascript:false\"; d.body.appendChild(iframe); var doc = iframe.contentWindow.document; doc.open().write('<body onload=\"window.location.href=\''+syncUrl+'\'\">'); doc.close(); })(document); </script>";
        $("head").append(script_incr);
        }

       


  }


render()
    {
        return(
              <form id="contratacion" action='https://www.dish.com.mx/onservice/test.php' method='post'>
                 <div className='modal fade ON-form' tabindex='-1' role='dialog'>
                  <div className='modal-dialog modal-dialog-right-side'>
                    <div className='modal-content modal-content-right-side'>
                      <div className='modal-header modal-header-right-side'>
                        <h5 className='modal-title h4'>Ingresa los siguientes datos:</h5>
                        <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                          <span aria-hidden='true'>&times;</span>
                        </button>
                      </div>
                      <div className='modal-body modal-body-right-side'>

                        <p className='modal-subtitle'>Servicio disponible para clientes de ON Alámbrico y ON Inalámbrico.</p>
                        <div className='row'>
                          <div className='col-md-12 col-sm-12 col-xs-12'>
                            <div className='form-wrapper'>
                              <div className='field-wrapper'>
                                  <label className='label-cliente' for='cliente' id='labelcliente' >No. Cliente</label>
                                  <input type='text' name='cliente' id='cliente' required='Este campo es obligatorio' />
                                  <div className='field-placeholder'><span>NÚMERO DE CLIENTE</span></div>
                              </div>
                          <button type='button' className='btn-question' data-toggle='modal' data-target='#exampleModalCenter'>¿Dónde encuentro mi número de cliente?</button>
                              <div className='field-wrapper'>
                                  <label className='label-numero' for='numero' id='labelnumero'>Telefono</label>
                                  <input type='text' name='numero' id='numero'  required='Este campo es obligatorio'/>
                                  <div className='field-placeholder'><span>INGRESA TU TELÉFONO REGISTRADO</span></div>
                              </div>
                              <div className='field-wrapper'>
                                  <label className='label-email' for='email' id='labelemail'>Email</label>
                                  <input type='email' name='email'  id='email'  required='Este campo es obligatorio' />
                                  <div className='field-placeholder'><span>E-MAIL</span></div>
                              </div>
                              <div className='field-wrapper'>
                                  <label className='label-numero' for='password' id='labelpassword'>Contraseña</label>
                                  <input type='password' name='password' id='password' required='Este campo es obligatorio' />
                                  <div className='field-placeholder'><span>CONTRASEÑA</span></div>
                              </div>
                              <div className='field-wrapper'>
                                  <label className='label-numero' for='password2' id='labelpassword2'>Confirma contraseña</label>
                                  <input type='password' name='password2' id='password2' required='Este campo es obligatorio'/>
                                  <div className='field-placeholder'><span>CONFIRMA TU CONTRASEÑA</span></div>
                              </div>
                              <label>
                              <input type='checkbox' name='check'/>
                              <span className='text_privacidad'>He leído y acepto el <a data-toggle='modal' data-target='#privacidad_modal'>&nbsp;Aviso de Privacidad.</a></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                  <div className='modal-footer modal-footer-right-side'>
                        <div className='form-button'>
                          <button  id='contratacion_sub' className='btn btn-primary btn-send'> Enviar</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='modal fade' id='exampleModalCenter' tabindex='-1' role='dialog'>
                  <div className='modal-dialog modal-dialog-centered modal-xl' role='document'>
                    <div className='modal-content'>
                      <div className='modal-header modal-header-right-side'>
                        <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                          <span aria-hidden='true'>&times;</span>
                        </button>
                      </div>
                      <div className='modal-body modal-body-right- text-center'>
                        <h5 className='modal-title title-center'>PUEDES ENCONTRAR TU NÚMERO DE CLIENTE EN:</h5>
                        <p className='zona'>La parte superior de tu contrato</p>
                        <img src={recibo} className='recibo'alt='ImagenRecibo'/>
                        <p className='zona mt-2'>O llámanos al <span>(55) 96 28 34 74</span> para apoyarte.</p>
                      </div>
                    </div>
                  </div>
                </div> 

                <div className='modal fade' id='privacidad_modal' tabindex='-1' role='dialog' aria-hidden='true'>
                  <div className='modal-dialog modal-dialog-centered modal-xl' role='document'>
                    <div className='modal-content'>
                      <div className='modal-header modal-header-right-side'>
                        <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                          <span aria-hidden='true'>&times;</span>
                        </button>
                      </div>
                      <div className='modal-body modal-body-right- text-center'>
                        <h5 className='modal-title title-center'>Aviso de privacidad</h5>
                        <img src={privacidad} className='recibo' alt='ImagenPrivacidad'/>
                      </div>
                    </div>
                  </div>
                </div> 


                <div className='modal fade' id='modalbuenfinn'  tabindex='-1' role='dialog' aria-hidden='true'>
                  <div className='modal-dialog modal-dialog-centered modal-xl pointerevents'  role='document'>
                    <div className=''>
                      <div className='modal-header modal-header-right-side '>
                        <button type='button' className='close header_modal_buenfin header_modal_buenfin_tache' data-dismiss='modal' aria-label='Close'>
                          <span aria-hidden='true'>&times;</span>
                        </button>
                      </div>
                      <div  className='modal-body modal-body-right- text-center baner_buenfinn_box'>
                         <a id="modalbuenfin" data-toggle='modal' data-target='#modalbuenfinn'></a>
                        <img src={popup} id='banner_buenfinn' className='baner_buenfinn_'  alt='popup'/>
                      </div>
                    </div>
                  </div>
                </div> 

                




              </form>


              
        );
    }

}
export default Modal;
