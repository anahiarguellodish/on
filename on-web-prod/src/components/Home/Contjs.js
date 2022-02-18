

import React from 'react';
import $ from 'jquery';




class  Contjs extends React.Component
{
   




  componentDidMount() {

    $(document).ready(function(){

           $(".basico-contains").show();
          $(".extremo-contains").hide();
          $("#suscribe-basico").click(function(){
              $(".basico-contains").show();
              $(".extremo-contains").hide();
              $("#suscribe-basico").addClass("suscribe-sat-active");
              $("#suscribe-basico").removeClass("suscribe-sat-inactive");
              $("#suscribe-extremo").removeClass("suscribe-sat-active");
              $("#suscribe-extremo").addClass("suscribe-sat-inactive");
          });
          $("#suscribe-extremo").click(function(){
              $(".extremo-contains").show();
              $(".basico-contains").hide();
              $("#suscribe-extremo").removeClass("suscribe-sat-inactive");
              $("#suscribe-extremo").addClass("suscribe-sat-active");
              $("#suscribe-basico").removeClass("suscribe-sat-active");
              $("#suscribe-basico").addClass("suscribe-sat-inactive");
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

      
        

        

        // $(".categoria_entrada").click(function(){

          setTimeout(function(){


            $(".basico-contains").show();
          $(".extremo-contains").hide();
          $("#suscribe-basico").click(function(){
           
              $(".basico-contains").show();
              $(".extremo-contains").hide();
              $("#suscribe-basico").addClass("suscribe-sat-active");
              $("#suscribe-basico").removeClass("suscribe-sat-inactive");
              $("#suscribe-extremo").removeClass("suscribe-sat-active");
              $("#suscribe-extremo").addClass("suscribe-sat-inactive");
          });
          $("#suscribe-extremo").click(function(){
              $(".extremo-contains").show();
              $(".basico-contains").hide();
              $("#suscribe-extremo").removeClass("suscribe-sat-inactive");
              $("#suscribe-extremo").addClass("suscribe-sat-active");
              $("#suscribe-basico").removeClass("suscribe-sat-active");
              $("#suscribe-basico").addClass("suscribe-sat-inactive");
          });
           //alert("Se inicio el script");


              $(".internet-contains").show();
              $(".tel-contains").hide();
              $("#suscribe-internet").click(function(){
                  $(".internet-contains").show();
                  $(".tel-contains").hide();
                  $("#suscribe-internet").addClass("suscribe-sat-active");
                  $("#suscribe-internet").removeClass("suscribe-sat-inactive");
                  $("#suscribe-tel").addClass("suscribe-sat-inactive");
                  $("#suscribe-tel").removeClass("suscribe-sat-active");
              });
              $("#suscribe-tel").click(function(){
                  $(".tel-contains").show();
                  $(".internet-contains").hide();
                  $("#suscribe-tel").removeClass("suscribe-sat-inactive");
                  $("#suscribe-tel").addClass("suscribe-sat-active");
                  $("#suscribe-internet").removeClass("suscribe-sat-active");
                  $("#suscribe-internet").addClass("suscribe-sat-inactive");
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

               $("#portabilidad").click(function(){
                    window.location="/portabilidad";
                });




          },500);
         
          


        // });
        
      
    });

  }


render()
    {
        return(
            <div>
            </div> 
              
        );
    }

}
export default Contjs;
