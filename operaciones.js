function busquedaPorId(id){
    const telefonosFiltrados = telefonos.filter((telefono) => telefono.id === parseInt(id));
    
    if(!telefonosFiltrados.length > 0){
        alert("No se encontro el telefono");
        return null;
    }

    cargarTabla(telefonosFiltrados);
}


function agregarTelefono(telefono){
    // Primero ejecuta la solicitud, si la solicitud ocurre correctamente, ejecutamos el callback que pasamos
    // a la funcion asincrona.
    solicitudAgregarTelefono(telefono, (telFormateado) => {
        telefonos.push(JSON.parse(telFormateado));
        cargarTabla(telefonos);
    });
}



function actualizarTelefono(telefono){
    solicitudActualizarTelefono(telefono, (telFormateado) => {
        telFormateado = JSON.parse(telFormateado);
        telefonos = telefonos.filter((tel) => tel.id !== telFormateado.id);
        telefonos.push(telFormateado);
        cargarTabla(telefonos);
    });
}


function eliminarTelefono(id){
    solicitudEliminarTelefono(id, () => {
        telefonos = telefonos.filter((telefono) => telefono.id !== parseInt(id));
        cargarTabla(telefonos);
    });   
}