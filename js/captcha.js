   "use strict"
   
   document.addEventListener("DOMContentLoaded", ()=>{

    /* CAPTCHA */
    let generar = document.querySelector("#generar-captcha");
    let btn_validar= document.querySelector("#validar-captcha");
    generar.addEventListener("click", crearCaptcha);
    btn_validar.addEventListener ("click",validarCaptcha);
    let generarCaptcha;

    
   
    function crearCaptcha () {
        let captcha = "";
        let textoCaptcha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";  
       
        for (let i = 0; i < 5; i++) {
            captcha += textoCaptcha.charAt(Math.floor(Math.random() * textoCaptcha.length));
    }

    document.querySelector("#captcha").innerHTML = captcha;
    generarCaptcha = captcha;
    }
    function validarCaptcha() { 
        event.preventDefault();
        let input = document.querySelector("#input-captcha");
        let respuesta = document.querySelector("#verificacionResultado") 
        console.log(input.value == generarCaptcha);  
        if (input.value == generarCaptcha) {   
          respuesta.innerHTML = "Captcha correcto"
          input.value = "";     
          return true;        
        } else {
          respuesta.innerHTML = "Captcha incorrecto"
          return false; 
               
        }
        
      }
   })
 
