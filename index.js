let nombreIngresado = prompt('ingrese nombre');
let apellidoIngresado = prompt ('Ingresar apellido')

if ((nombreIngresado != "") && (apellidoIngresado != "")){
    alert ("Nombre: " + nombreIngresado + " \nApellido: " + apellidoIngresado);
}else{
    alert("Error: Ingresar nombre y apellido")
    while((nombreIngresado !="") && (apellidoIngresado !="")){
        alert("Debes registrarte");
        nombreIngresado = prompt("ingrese nombre");
        apellidoIngresado = prompt ("Ingresar apellido")
}
}




let mayorEdad = parseInt (prompt ("ingrese su edad"))
if (mayorEdad !== ""){
    alert("Tu edad " + mayorEdad)
    
}else{
    alert("Debes colocar tu edad")
}
while((mayorEdad <  "18") &&  (mayorEdad != "")) {
    alert("Debes ser MAYOR DE EDAD para poder continuar ");
    mayorEdad = parseInt (prompt ("ingrese su edad"))
}


let numeroIngresado = parseInt(
    prompt("Ingresa tu edad")
)

for(let i = 1; i <= 5; i++ ){
    let resultado = numeroIngresado * i;
    alert(numeroIngresado + " X " + i +" = " + resultado)
}

for (let i = 1; i <= 5; i++){
    let nombre = prompt ("ingresa el producto");
    alert(" Nº " + i + " Producto: " + nombre);
    if (i == 2){
        alert("carrito lleno: " + nombreIngresado)
        break;
    }
}


function porcentajeDeDescuento(variable1, variable2) {
    let resultado = variable1 * variable2 / 100 - (segundoNumero);
    
    alert("total a pagar " + resultado) 
}

const primerNumero = parseInt (prompt("ingrese el descuento"))
const segundoNumero = parseInt (prompt("ingrese la cantidad"))
porcentajeDeDescuento(primerNumero, segundoNumero);
let continuar = prompt("¿deseas otra operación de descuento? si no la deseas escribe salir " + nombreIngresado )
if ( continuar != "salir"){
    
    }
while(continuar != "salir"){
    
    const primerNumero = parseInt (prompt("ingrese el descuento"))
    const segundoNumero = parseInt (prompt("ingrese la cantidad"))
    porcentajeDeDescuento(primerNumero, segundoNumero);
    let continuar = prompt("¿deseas otra operacion de descuento? " + nombreIngresado)
}

