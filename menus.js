function limpiarMenu() {
    const formulario = document.getElementById("formulario");
    formulario.innerHTML = "";
}




function menuBuscar() {
    const formulario = document.getElementById("formulario");
    const textoOperacion = document.getElementById("tituloOperacion");
    textoOperacion.innerText = "Buscar Telefono";
    formulario.innerHTML = `
    <div>
        <label>ID</label>
        <input type="text" placeholder="Ingrese el ID"/>
    </div>

    `;
}

function menuAgregar() {
    const formulario = document.getElementById("formulario");
    const textoOperacion = document.getElementById("tituloOperacion");
    textoOperacion.innerText = "Agregar Telefono";
    formulario.innerHTML = `
        <div>
            <label>ID</label>
            <input type="text" placeholder="Ingrese el ID"/>
        </div>
        <div>
            <label>Marca</label>
            <input type="text" placeholder="Ingrese Marca"/>
        </div>
        <div>
            <label>Modelo</label>
            <input type="text" placeholder="Ingrese Modelo"/>
        </div>   
        <div>
            <label>Color</label>
            <input type="text" placeholder="Ingrese el Color"/>
        </div>   
        <div>
            <label>Almacenamiento</label>
            <input type="text" placeholder="Ingrese el Almacenamiento"/>
        </div>   
        <div>
            <label>Procesador</label>
            <input type="text" placeholder="Ingrese el Procesador"/>
        </div>   
        `;

}


function menuActualizar(){
    
    const formulario = document.getElementById("formulario");
    const textoOperacion = document.getElementById("tituloOperacion");
    textoOperacion.innerText = "Actualizar Telefono";
    formulario.innerHTML = `
        <div>
            <label>ID</label>
            <input type="text" placeholder="Ingrese el ID"/>
        </div>
        <div>
            <label>Marca</label>
            <input type="text" placeholder="Ingrese Marca"/>
        </div>
        <div>
            <label>Modelo</label>
            <input type="text" placeholder="Ingrese Modelo"/>
        </div>   
        <div>
            <label>Color</label>
            <input type="text" placeholder="Ingrese el Color"/>
        </div>   
        <div>
            <label>Almacenamiento</label>
            <input type="text" placeholder="Ingrese el Almacenamiento"/>
        </div>   
        <div>
            <label>Procesador</label>
            <input type="text" placeholder="Ingrese el Procesador"/>
        </div>   
        `;

}




function menuEliminar() {
    const formulario = document.getElementById("formulario");
    const textoOperacion = document.getElementById("tituloOperacion");
    textoOperacion.innerText = "Eliminar Telefono";
    formulario.innerHTML = `
    <div>
        <label>ID</label>
        <input type="text" placeholder="Ingrese el ID telefono a eliminar"/>
    </div>

    `;
}