//! WHHILE Y FOR NO SON METODOS ESPECIFICOS DE LOS ARRAY 
const numero = parseInt(prompt("Ingresar numero del cual quiere obtener la tabla de multiplicacion"));

let i = 11;

while (i <= 10 ) {
    const multiplicacion = i * numero;
    console.log (`Resultado de ${i} x ${numero} = ${i * numero}`);

    i++;
}