console.log("Conecto");

iniciarSesion.onclick = (e) => {
    e.preventDefault();
    console.log("Conecto2");
    let usuario = document.getElementById("username");
    let contrasena = document.getElementById("password");
    console.log(usuario.value);
    console.log(contrasena.value);
    // window.location.href = "https://www.youtube.com/";
}