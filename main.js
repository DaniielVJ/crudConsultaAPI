const menuNavegacion = document.getElementById('menuNavegacion');
const boton = document.getElementById('boton');

function cargarTabla(telefonos) {
    telefonos.sort((a, b) => a.id - b.id);
    const bodyTabla = document.getElementById('cuerpoTabla');
    bodyTabla.innerHTML = "";
    for(let telefono of telefonos){
        const fila = document.createElement('tr');
        fila.setAttribute("class", "table-light");
        for(let campo in telefono){
            const campoTelefono = document.createElement('td');
            campoTelefono.innerText = telefono[campo];
            fila.appendChild(campoTelefono);
        }
        bodyTabla.appendChild(fila);
    }
    
}

menuNavegacion.addEventListener('click', function(e){
    if(e.target.id === 'buscar'){
        limpiarMenu();
        boton.setAttribute('class', 'buscar');
        menuBuscar();
    } else if (e.target.id === "agregar") {
        limpiarMenu();
        boton.setAttribute('class', 'agregar');
        menuAgregar();
    }  else if (e.target.id === "actualizar") {
        limpiarMenu();
        boton.setAttribute('class', 'actualizar');
        menuActualizar();
    } else if (e.target.id === "eliminar") {
        limpiarMenu();
        boton.setAttribute('class', 'eliminar');
        menuEliminar();
    } else {
        console.warn("Opcion no disponible");
    }
});


// Aqui mandamos a llamar la operacion que se quiere realizar cuando se tiene seleccionado 
boton.addEventListener('click', function(e){
    const telefono = obtenerDatosFormulario();
    if(e.currentTarget.getAttribute('class') === 'buscar'){
        busquedaPorId(telefono.ID);
    } else if (e.currentTarget.getAttribute('class') === 'agregar'){
        agregarTelefono(telefono);
    }  else if (e.currentTarget.getAttribute('class') === 'actualizar'){
        actualizarTelefono(telefono);
    }  else if (e.currentTarget.getAttribute('class') === 'eliminar'){
        eliminarTelefono(telefono.ID);
    }
});