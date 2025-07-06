async function solicitudAgregarTelefono(telefono, callback){
    try {
        if(!callback || !telefono){
            throw new Error("Debe proporcionar un telefono y callback");
        }
        
        const telefonoFormateado = JSON.stringify( 
        {
        id: parseInt(telefono.ID), 
        marca: telefono.Marca,
        modelo: telefono.Modelo,
        color: telefono.Color,
        almacenamiento: telefono.Almacenamiento,
        procesador: telefono.Procesador 
        });
        console.log(telefonoFormateado);
        let response = await fetch("https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: telefonoFormateado
        });

        if(!response.ok){
            throw new Error("Error en la solicitud, status code = " + response.statusText);
        }

        callback(telefonoFormateado);

    } catch(error){
        console.error(error);
    }
}

async function solicitudActualizarTelefono(telefono, callback){
    try {
        const url = "https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/" + telefono.ID;
        const telefonoFormateado = JSON.stringify( 
        {
        id: parseInt(telefono.ID), 
        marca: telefono.Marca,
        modelo: telefono.Modelo,
        color: telefono.Color,
        almacenamiento: telefono.Almacenamiento,
        procesador: telefono.Procesador 
        });
        let response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: telefonoFormateado
        });

        if(!response.ok){
            throw new Error("Solicitud procesada incorrectamente Code Status " + response.statusText);
        }

        callback(telefonoFormateado);

    } catch (error) {
        
    }
}



async function solicitudEliminarTelefono(id, callback) {
    try {
        if(!callback || !id){
            throw new Error("Debe proporcionar un telefono y callback");
        }

        let response = await axios.delete("https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/" + id);
        
        if(response.status != 200){
            throw new Error("La solicitud no se ha efectuado correctamente " + response.status);
        }

        callback();

    } catch (error){
        console.error(error);
    }
}

