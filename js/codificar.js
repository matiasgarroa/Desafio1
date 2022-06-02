var tdInput = document.querySelector("#texto");
var tdOuput = document.querySelector("#texto-resultado");
var pantallaInicio = document.querySelector(".inicio");
var pantallaResultado = document.querySelector(".resultado");

pantallaResultado.classList.add("invisible");

function indexResultado(){
    pantallaResultado.classList.remove("invisible");
    pantallaInicio.classList.add("invisible");
}

function indexInicio(){
    pantallaResultado.classList.add("invisible");
    pantallaInicio.classList.remove("invisible");
}

function botonEncriptar(){
    var textoEncriptado = encriptar(tdInput.value);
    tdOuput.value = textoEncriptado;
}

function encriptar(stringEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    var stringEncriptar = stringEncriptar.toLowerCase();
    for (let i=0; i < matrizCodigo.length; i++){
        if (stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    if (stringEncriptar == ""){
        indexInicio();
    }else{
        indexResultado();
        return stringEncriptar;
    }
    
}

function botonDesencriptar(){
    var textoDesencriptado = desencriptar(tdInput.value);
    tdOuput.value = textoDesencriptado;
}

function desencriptar(stringDesencriptar){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    var stringDesencriptar = stringDesencriptar.toLowerCase();
    for (let i=0; i < matrizCodigo.length; i++){
        if (stringDesencriptar.includes(matrizCodigo[i][0])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    if (stringDesencriptar == ""){
        indexInicio();
    }else{
        indexResultado();
        return stringDesencriptar;
    }
}

function botonCopiar(){
    var textoCopiar = document.getElementById("texto-resultado");
    textoCopiar.select();
    document.execCommand('copy');

    alert("Copiado al portapapeles");
}