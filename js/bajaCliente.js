console.log("Conecto");
darBaja.onclick = (e) =>{
    e.preventDefault();
    console.log("Conecto2");
    let dniCliente = document.getElementById("dniCliente");
    let contrasena = document.getElementById("password");
    let motivo = document.getElementById("motivo");
    console.log(dniCliente.value);
    console.log(contrasena.value);
    console.log(motivo.value);
}