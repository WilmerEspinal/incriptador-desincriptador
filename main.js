let write = document.querySelector('.write');
let btnIncriptar = document.querySelector('.btn-encriptar');
let btnDesincriptar = document.querySelector('.btn-desencriptar');
let btnCopiar = document.querySelector('.btn-copiar');
let containerIncriptado = document.querySelector('.mensaje-incriptado');
let contaierHome = document.querySelector('.container-incriptacion-home');
let textoIncriptado = document.querySelector('.texto-incriptado');

// eventos de click
btnIncriptar.addEventListener('click', obtenerValorTextarea)
btnCopiar.addEventListener('click', copiar)
btnDesincriptar.addEventListener('click', mesajeOculto)

// llaves de incriptacion
let e = 'enter';
let i = 'imes';
let a = 'ai';
let o = 'ober';
let u = 'ufat';

// funciones
//obtine el mesaje escrito en el textarea
function obtenerValorTextarea() {
    let mesaje = write.value;
    if(mesaje == 0) {
        alert('debes escribir tu mensaje para incriptar')
    }else {
        contaierHome.style.display = 'none'
        containerIncriptado.style.display = 'grid'
        // textoIncriptado.append(mesaje)
    }

    //condiciones para remplazar si esa letra existe
    if (mesaje.includes("e")) {
        mesaje = mesaje.replace(/e/g, e);
        textoIncriptado.textContent = mesaje;
    }
    if (mesaje.includes("i")) {
        mesaje = mesaje.replace(/i/g, i);
        textoIncriptado.textContent = mesaje;
    }
    if (mesaje.includes("a")) {
        mesaje = mesaje.replace(/a/g, a);
        textoIncriptado.textContent = mesaje;
    }
    if (mesaje.includes("o")) {
        mesaje = mesaje.replace(/o/g, o);
        textoIncriptado.textContent = mesaje;
    }
    if (mesaje.includes("u")) {
        mesaje = mesaje.replace(/u/g, u);
        textoIncriptado.textContent
    }
    write.value = "";
}

// funcion para copiar el texto incriptado
function copiar() {
    let range = document.createRange()
    range.selectNodeContents(document.querySelector('.texto-incriptado'))

    //copiar el contenido
    navigator.clipboard.writeText(range);
}

// funcion para desincriptar el texto incriptado
function mesajeOculto() {
    let desincriptarMensaje = write.value;
    if(desincriptarMensaje == 0) {
        alert('escribe o pega tu mensaje incriptado')
    }else {
        contaierHome.style.display = 'none'
        containerIncriptado.style.display = 'grid'
    }


    if (desincriptarMensaje.includes(e)) {
        desincriptarMensaje = desincriptarMensaje.replace(/enter/g, 'e');
        textoIncriptado.textContent = desincriptarMensaje;
    }
    if (desincriptarMensaje.includes(i)) {
        desincriptarMensaje = desincriptarMensaje.replace(/imes/g, 'i');
        textoIncriptado.textContent = desincriptarMensaje;
    }
    if (desincriptarMensaje.includes(a)) {
        desincriptarMensaje = desincriptarMensaje.replace(/ai/g, 'a');
        textoIncriptado.textContent = desincriptarMensaje;
    }
    if (desincriptarMensaje.includes(o)) {
        desincriptarMensaje = desincriptarMensaje.replace(/ober/g, 'o');
        textoIncriptado.textContent = desincriptarMensaje;
    }
    if (desincriptarMensaje.includes(u)) {
        desincriptarMensaje = desincriptarMensaje.replace(/ufat/g, 'u');
        textoIncriptado.textContent = desincriptarMensaje;
    }
    write.value = "";
}
