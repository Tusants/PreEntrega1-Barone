
function valorEmpleado(horas, horaEmpleado) {
    return horas * horaEmpleado;
}

function sueldoEmpleado(sueldoBruto, retenciones) {
    return sueldoBruto / retenciones;
}

function reiniciarDecimal(numero) {
    return numero.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function convertirADolares(monto, tasaDeCambio) {
    return monto / tasaDeCambio;
}

function resultadoSueldo() {
    let horaEmpleado = 15000.00;
    let retenciones = 1.30;
    let tasaDeCambio = 1350;
    let opcion;

    do {
        opcion = prompt('¿Quieres saber el sueldo 1) Bruto, 2) Neto o 3) Salir?\nIngrese 1, 2 o 3 para continuar');

        if (opcion == '1') {
            let horas = parseFloat(prompt('Ingrese la cantidad de horas trabajadas por el empleado:'));
            if (isNaN(horas) || horas <= 0) {
                alert('Ingrese un número válido');
            } else {
                let sueldoBruto = valorEmpleado(horas, horaEmpleado);
                alert(`El sueldo del empleado sin descontar aportes es: ${reiniciarDecimal(sueldoBruto)} pesos`);

                let convertir = prompt('¿Quieres convertir este monto a dólares? (si/no)');
                if (convertir.toLowerCase() === 'si') {
                    let tasaDeCambio = parseFloat(prompt('Ingrese la tasa de cambio de pesos a dólares:'));
                    if (isNaN(tasaDeCambio) || tasaDeCambio <= 0) {
                        alert('Ingrese una tasa de cambio válida');
                    } else {
                        let sueldoBrutoDolares = convertirADolares(sueldoBruto, tasaDeCambio);
                        alert(`El sueldo del empleado sin descontar aportes es: ${reiniciarDecimal(sueldoBruto)} pesos (${reiniciarDecimal(sueldoBrutoDolares)} dólares)`);
                    }
                }
            }
        } else if (opcion == '2') {
            let sueldoBruto = parseFloat(prompt('Ingrese el sueldo bruto del empleado:'));
            if (isNaN(sueldoBruto) || sueldoBruto <= 0) {
                alert('Ingrese un número válido');
            } else {
                let sueldoNeto = sueldoEmpleado(sueldoBruto, retenciones);
                alert(`El sueldo del empleado después de descontar aportes es: ${reiniciarDecimal(sueldoNeto)} pesos`);
                let convertir = prompt('¿Quieres convertir este monto a dólares? (si/no)');
                if (convertir.toLowerCase() === 'si') {
                    let tasaDeCambio = parseFloat(prompt('Ingrese la tasa de cambio de pesos a dólares:'));
                    } else {
                        let sueldoNetoDolares = convertirADolares(sueldoNeto, tasaDeCambio);
                        alert(`El sueldo del empleado después de descontar aportes es: ${reiniciarDecimal(sueldoNeto)} pesos (${reiniciarDecimal(sueldoNetoDolares)} dólares)`);
                    }
                }
        } else if (opcion == '3') {
            alert('Saliendo del programa');
        } else {
            alert('Opción no válida, por favor ingrese 1, 2 o 3.');
        }
    } while (opcion !== '3');
}

resultadoSueldo();