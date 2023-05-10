var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var muneco = document.querySelector(".inosuke");
var parrafoMuneco = document.querySelector(".texto");
var parrafoMuneco2 = document.querySelector(".texto2");
var textarea = document.querySelector(".textarea");
var resultado = document.querySelector(".resultado")
var copy = document.querySelector("#copy");

// evento de clicl
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;


// ocultar contenido 
function ocultarDiv(){
    muneco.classList.add("ocultar")
    parrafoMuneco.classList.add("ocultar")
    parrafoMuneco2.classList.add("ocultar")
    copy.classList.add("activar")

}
// llamando a encriptar
function encriptar(){
    ocultarDiv();
    var textarea = recuperarTexto();
    resultado.textContent = encriptarTexto(textarea)
    
}
// llamando desencriptar
function desencriptar() {
    ocultarDiv();
    var textarea = recuperarTexto();
    resultado.textContent = desencriptarTexto(textarea)
}

// recuperar texto esxrito
function recuperarTexto(){
    return textarea.value;
}


// salida del encriptado

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal= "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}
// salida del desencriptado
function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

// evento para copiar texto encriptado
const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", copiar = () => { alert("texto copiado")
var contenido = document.querySelector(".resultado").textContent;
navigator.clipboard.writeText(contenido);
})

