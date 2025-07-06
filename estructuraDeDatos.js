// Codigo encargado de cargar los datos para manejarlos de forma local
let telefonos = [];

function inicioWeb() {
    axios.get("https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos")
    .then((respuesta) => {
        telefonos = respuesta.data;
        cargarTabla(telefonos);
    })
    .catch(error => console.error(error));

    menuBuscar();
}



function obtenerDatosFormulario(){
    const formulario = document.getElementById('formulario');
    const datosFormulario = {};

    for(let campo of formulario.children){
        if(!campo.children[1].value){
            alert("No puede haber un campo vacio");
            return null;
        }
        datosFormulario[campo.children[0].textContent] = campo.children[1].value;       
    }

    return datosFormulario;
}
