//variables
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
const btnReset = document.querySelector('#resetBtn');

//eventListeners

eventListeners();

function eventListeners() {
    //inicio de la aplicacion y deshabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);

    //campos del formulario
    email.addEventListener('blur', validarCampos);
    asunto.addEventListener('blur', validarCampos);
    mensaje.addEventListener('blur', validarCampos);
    btnEnviar.addEventListener('click', enviarEmail);
    btnReset.addEventListener('click', resetFormulario);
}



//funciones

function inicioApp() {
    //deshabilitar envio
    btnEnviar.disabled = true;
}

//valida que el campo tenga algo escrito
function validarCampos() {

    //se valida longitud del texto y que no esta vacio
    validarLongitud(this);

    //validar unicamente el email
    if (this.type == "email") {
        validarEmail(this);
    }

    //nos aseguramos que no existe .errores en ningun campo del documento
    let errores = document.querySelectorAll('.error');

    //habilitamos el boton enviar si los campos no estan vacios
    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if (errores.length === 0) {
            btnEnviar.disabled = false;
        }

    }
}

// cuando se envia el correo
function enviarEmail(e) {
    //spinner al presionar enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    //gif que envia email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';

    const loaderContainer = document.querySelector('#loaders');

    setTimeout(function () {
        spinnerGif.style.display = 'none';
        loaderContainer.appendChild(enviado);


    }, 3000);
    setTimeout(function (e) {
        enviado.remove();
        formulario.reset();
    }, 8000);

    e.preventDefault();

}

//verifica la longitud del texto de los campos
function validarLongitud(campo) {
    if (campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');

    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

//valida email
function validarEmail(campo) {
    const email = campo.value;
    if (email.indexOf('@') === -1) {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    } else {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }
}

//resetea formulario
function resetFormulario(e) {
    formulario.reset();
    e.preventDefault();
}