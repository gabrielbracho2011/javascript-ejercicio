var valor_uno = prompt("Ingrese el primer valor: ");
var valor_dos = prompt("Ingrese el segundo valor: ");

var resta = valor_uno - valor_dos;

if (resta > 0) {
    console.log("Es mayor a 0");
    if (resta % 2 == 0) {
        console.log("La resta es par");
    } else {
        console.log("La resta es impar");
    }

} else {
    console.log("Es menor o igual a 0");
}