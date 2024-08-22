const BtnEncriptar = document.querySelector(".btn_Ecriptar");
const BtnDesencriptar = document.querySelector(".btn_Desencriptar")
const TxtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto__aviso");
const respuesta = document.querySelector(".evaluador")
const contenido = document.querySelector(".resultado__contenedor")
const BtnCopiar = document.querySelector(".btn__copiar")

//----- boton de encriptar //

BtnEncriptar.addEventListener("click", e=> {
    e.preventDefault();
    let texto = TxtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
     
    if(texto == ""){
        aviso.style.color = "#982B1C"; 
        aviso.textContent = "El campo de texto no debe estar vacio" ;
        setTimeout(()=>{
            aviso.removeAttribute("style")

        }, 1500);
    }
    else if(texto !== txt){
        aviso.style.color = "#982B1C"; 
        aviso.textContent = "No debe tener acentos ni caracteres especiales" ;
        setTimeout(()=>{
            aviso.removeAttribute("style")

        }, 1500); 
    }
    else if (texto !== texto.toLowerCase()){
        aviso.style.color = "#982B1C"; 
        aviso.textContent = "El texto debe ser todo en minúscula" ;
        setTimeout(()=>{
            aviso.removeAttribute("style")

        }, 1500);  
        
    }
    else{
        texto = texto.replace(/e/mg,"enter" );
        texto = texto.replace(/i/mg,"imes" );
        texto = texto.replace(/a/mg,"ai");
        texto = texto.replace(/o/mg,"ober" );
        texto = texto.replace(/u/mg,"ufat" );

        respuesta.innerHTML = texto;
        BtnCopiar.style.visibility = "inherit";
        contenido.remove();


       
    }
   
    
})
//------ boton desencriptar ------- // 

BtnDesencriptar.addEventListener("click", e=> {
    e.preventDefault();
    let texto = TxtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
     
    if(texto == ""){
        aviso.style.color = "#982B1C"; 
        aviso.textContent = "El campo de texto no debe estar vacio" ;
        setTimeout(()=>{
            aviso.removeAttribute("style")

        }, 1500);
    }
    else if(texto !== txt){
        aviso.style.color = "#982B1C"; 
        aviso.textContent = "No debe tener acentos ni caracteres especiales" ;
        setTimeout(()=>{
            aviso.removeAttribute("style")

        }, 1500); 
    }
    else if (texto !== texto.toLowerCase()){
        aviso.style.color = "#982B1C"; 
        aviso.textContent = "El texto debe ser todo en minúscula" ;
        setTimeout(()=>{
            aviso.removeAttribute("style")

        }, 1500);  
        
    }
    else{
        texto = texto.replace(/enter/mg,"e" );
        texto = texto.replace(/imes/mg,"i" );
        texto = texto.replace(/ai/mg,"a");
        texto = texto.replace(/ober/mg,"o" );
        texto = texto.replace(/ufat/mg,"u" );

        respuesta.innerHTML = texto;
        BtnCopiar.style.visibility = "inherit";
        contenido.remove();
    }

    
    
})


//------- boton copiar -------//


BtnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
})

