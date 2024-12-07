function Login() {
    let identificar = true;
    let intentos = 3;
    do {
        let usuario = prompt("Ingresa su nombre!").toUpperCase();
        if (usuario === null || usuario === "") {
            alert("Por favor ingrese un nombre");
            break
        }
        if (usuario === "ADMIN" && intentos > 0) {
            alert("Bienvenido " + usuario);
            identificar = false;
        } else {
            alert("Incorrecto, ¡inténtelo de nuevo!");
            intentos--;
            if (intentos < 1) {
                alert("¡Superaste los intentos!");
                break
            }
        }
    } while (identificar === true);
}

Login()

function suma() {
    const envio = 1050
    a = parseFloat(prompt("ingresa el precio del primer producto!"))
    b = parseFloat(prompt("ingresa el precio del segundo producto!"))
    c = parseFloat(prompt("ingresa el precio del tercer producto!"))
    let resultado = a + b + c
    alert("El total es: " + resultado)
    let resultadoCostoenvio = resultado + envio
    confirm("Sumarle costo de envio de $1050")
    alert("El total a pagar de: " + resultadoCostoenvio)
}
suma()