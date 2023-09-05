console.log("Conecto");

modificarDatos.onclick = (e) =>{
    e.preventDefault();
    console.log("Conecto2");
    let nuevoNombre = document.getElementById("nuevoNombre");
    let nuevoApellido = document.getElementById("nuevoApellido");
    let nuevoMail = document.getElementById("nuevoMail");
    let newPassword = document.getElementById("newPassword");
    console.log(nuevoNombre.value);
    console.log(nuevoApellido.value);
    console.log(nuevoMail.value);
    console.log(newPassword.value);
}