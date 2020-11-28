function ponerCeroDelante(numSinCero) {

    if (numSinCero < 10) {
        numSinCero = '0' + numSinCero;
    }

    return numSinCero;
}

function convertirMes(mes) {
    // Convertimos el número del mes a su nombre correspondiente
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    return meses[mes];
}

// Nos devuelve la fecha del día actual
function fecha() {
    var diaHoy = new Date();
    var dia = diaHoy.getDate();
    var mes = diaHoy.getMonth();
    var anio = diaHoy.getFullYear();

    // Para que tenga el 0 delante en los días menores al dia 10, con los meses lo mismo
    dia = ponerCeroDelante(dia);

    // Convertimos el número del mes a su nombre correspondiente
    mes = convertirMes(mes);

    diaHoy = dia + ' de ' + mes + ' del ' + anio;

    document.getElementById('diaHoy').innerHTML = diaHoy;

    return diaHoy;
}

fecha();

// Funciones de añadir tarea y borrar tarea
const submitForm = document.querySelector('.agregar');
const addTareaBtn = document.querySelector('.add-tarea');
const listaTareas = document.querySelector('.tareas');
const lista = document.querySelectorAll('.tareas li');

let listaLong = lista.length;

const generarTemplate = (tarea) => {
    const html = `<li>
        <input type="checkbox" id="tarea_${listaLong}">

        <label for="tarea_${listaLong}"> 
            <span class="check"></span>
            ${tarea}
        </label>

        <i class="far fa-trash-alt borrar"></i>
    </li>`

    listaTareas.innerHTML += html;
};

function agregarTareaALista(t) {

    t.preventDefault();

    const tarea = submitForm.agregar.value.trim();

    if (tarea.length) {
        listaLong = listaLong + 1;
        generarTemplate(tarea);
        submitForm.reset();
    }
}

submitForm.addEventListener('submit', agregarTareaALista);
addTareaBtn.addEventListener('click', agregarTareaALista);

function borrarDeLista(t) {
    if (t.target.classList.contains('borrar')) {
        t.target.parentElement.remove();
    }

}

listaTareas.addEventListener('click', borrarDeLista);

/*************Cambiar color de fondo con un botón***************/

// Probar con un único color
/*function btnCambiarColor() {
    let fondo = document.getElementById("body").style.background = "linear-gradient(45deg, #09c4d9, #8e0d47)";
    let fondoBtn = document.getElementById("btn-color").style.background = "red";
    let colorLetraBtn = document.getElementById("btn-color").style.color = "gold";
}*/

// Declaramos un array con los colores que queremos de fondo y del botón y la letra del mismo
let colorFondo = ["radial-gradient(ellipse farthest-corner at center top, #08bce0 0%, #053149 100%)", "linear-gradient(45deg, #63c4c9, #ad2550)", "radial-gradient(ellipse farthest-corner at center top, #f28f60 0%, #f04d5c 100%)", "radial-gradient(ellipse farthest-corner at center top, #0fd083 0%, #1c7c0e 100%)", "linear-gradient(45deg, #000000, #8b8b8b)"];
let colorFondoBtn = ["#067593", "#b61f4d", "#ee3e39", "#13792b", "#151515"];
//let colorFondoLetraBtn = ["fff", "fff", "", "", "#fff"];

let i = 1;

function btnCambiarColor() {

    let fondo = document.getElementById("body").style.background = colorFondo[i];
    let fondoBtn = document.getElementById("btn-color").style.background = colorFondoBtn[i];
    //let colorLetraBtn = document.getElementById("btn-color").style.color = colorFondoLetraBtn[i];

    if (i < colorFondo.length - 1) i++;
    else i = 0;

}