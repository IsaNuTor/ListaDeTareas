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