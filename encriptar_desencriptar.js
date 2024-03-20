
//Inicializando las clases cuando no hay texto o si hay texto de salida

const noTexto = document.querySelector(".noTextoSalida");
const siTexto = document.querySelector(".siTextoSalida");
const reemplazar = [['a',"ai"],['e',"enter"],['i',"imes"],['o',"ober"],['u',"ufat"]];

let textoSalida;

//Función mostrar

function mostrarContenido(elemento,texto){
    if(texto==""){
        noTexto.style.display="flex";
        siTexto.style.display="none";
    }else{
        textoSalida = texto;
        noTexto.style.display="none";
        siTexto.style.display="flex";    
        document.querySelector(elemento).innerHTML = texto;
        document.getElementById(elemento).scrollIntoView();
    }
}
    

//Función encriptar

function encriptar(){
    let textoUsuario = document.getElementById("textoEntradaUsuario").value;
    console.log(textoUsuario);
    if(textoUsuario==null){
        mostrarContenido("#textoSalidaUsuario","")
    }else{
        mostrarContenido("#textoSalidaUsuario",textoUsuario.replace(/[aeiou]/gi,function(vocal){
            switch(vocal.toLowerCase()){
                case 'a': return 'ai';
                case 'e': return 'enter';
                case 'i': return 'imes';
                case 'o': return 'ober';
                case 'u': return 'ufat';
            }
        }));
    }
    
}

//Función desencriptar

function desencriptar(){
    let textoUsuario = document.getElementById("textoEntradaUsuario").value;
    if(textoUsuario==null){
        mostrarContenido("#textoSalidaUsuario","")
    }else{
        mostrarContenido("#textoSalidaUsuario",textoUsuario.replace(/ai|enter|imes|ober|ufat/g,function(llave){
            switch(llave.toLowerCase()){
                case 'ai': return 'a';
                case 'enter': return 'e';
                case 'imes': return 'i';
                case 'ober': return 'o';
                case 'ufat': return 'u';
            }
        }));
    }
}

//Función copiar

function copiar(){
    navigator.clipboard.writeText(textoSalida);
}