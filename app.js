// Saldo inicial del usuario
let saldoUsuario = 15000

// Funcion que inicializa la app
const initializeApp = () => {

    // Input inicial por parte del usuario
    const inputUsuario = parseInt(prompt("Bienvenido, elija una opción para continuar: 1-Consultar Saldo | 2-Retirar Efectivo"))

    // Consulta si desea realizar otra operación
    const consultaOtraOperacion = () => {
        const respuestaOperacion = parseInt(prompt("Quiere realizar otra operación?: 1- Si | 2- No"))
        if (respuestaOperacion === 1) {
            initializeApp()
        } else if (respuestaOperacion === 2) {
            alert("Muchas gracias por confiar en nosotros, que tenga un buen dia!")

        } else {
            alert("Por favor ingrese un numero valido")
            consultaOtraOperacion()
        }
    }

    // Realiza el calculo de cuanto ingresa para extraer el usuario y cuanto queda de saldo
    const retirarEfectivo = () => {
        const usuarioRetiro = parseInt(prompt("Ingrese el monto a retirar: "))

        if (usuarioRetiro > saldoUsuario) {
            alert("Saldo insuficiente, por favor vuelva a intentarlo")
            retirarEfectivo()
        } else if (usuarioRetiro <= saldoUsuario) {
            saldoUsuario = saldoUsuario - usuarioRetiro
            alert(`Su saldo actual es de: $${saldoUsuario}`)
            consultaOtraOperacion()
        } else {
            alert("Por favor, ingrese un monto valido")
            retirarEfectivo()
        }
    }

    // Consulta si desa retirar efectivo
    const opcionRetiro = () => {
        const opcionElegida = parseInt(prompt("Desea retirar efectivo? 1- Si | 2- No"))
        if (opcionElegida === 1) {
            retirarEfectivo()
        } else if (opcionElegida === 2) {
            consultaOtraOperacion()
        } else {
            alert("Por favor ingrese un numero valido e intente de nuevo")
            opcionRetiro()
        }
    }

    // Switch que evalua que accionar tomar en relación al primer input del usuario
    switch (inputUsuario) {
        case 1:
            alert(`Su saldo actual es de: $${saldoUsuario}`)
            opcionRetiro()
            break;

        case 2:
            retirarEfectivo()
            break;

        default:
            alert("Por favor ingrese un numero válido e intente de nuevo")
            initializeApp()
    }
}

// Invocación de la funcion principal de la app
initializeApp()






