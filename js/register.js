console.log("Conecto");
registroUsuario.onclick = (e) => {
    e.preventDefault();
    console.log("Conecto2");
    let dniCliente = document.getElementById("dniCliente");
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let mail = document.getElementById("mail");
    let password = document.getElementById("password");
    let fechaNac = document.getElementById("fechaNac");
    console.log(dniCliente.value);
    console.log(nombre.value);
    console.log(apellido.value);
    console.log(mail.value);
    console.log(password.value);
    console.log(fechaNac.value);


}