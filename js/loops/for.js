for (let i=1 ; i<=10000 ; i++ ) {

    const res = Math.pow(i,2);
   document.write(`${i}^2 = ${res} <br>` );
   if(i === 5){
    break;
   }
}

console.time("pow");


//let age = parseInt(prompt("Ingrese la edad de la persona que va a ingresar al cine"));
//console.log(age);
////age > 5      age < 130
//while (!(age > 5) || !(age < 130)) {
//    
//    console.warn ("El valor ingresado no es valido");
//    age = parseInt(prompt("Ingrese la edad de la persona que va a ingresar al cine"));
//}


console.log("Salio del bucle");
