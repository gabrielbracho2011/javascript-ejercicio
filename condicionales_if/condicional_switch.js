var color = prompt("Escriba un color primario: ");

switch(color) {
    case "rojo":
        console.log ("Elegiste el color rojo");
        break;

    case "azul":
        console.log ("Elegiste el color azul");
        break;
        
    case "amarillo":
        console.log ("Elegiste el color amarillo");
        break;
        
    default:
        console.log("El color ingresado no es primario");
        break;
}