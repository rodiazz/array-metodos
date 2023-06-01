const producto1 = 346.56;
const producto2 = 596.3;
const producto3 = 180.34;
const producto4 = 14.34;
const dolar = 470;
const iva = 1.21;
const ganancia = 1.35;
const interesFinanciacion = 1.40;

//const precioFinal1Contado = producto1 * dolar * iva * ganancia;
//const precioFinal1Financiado = precioFinal1Contado * interesFinanciacion;
//const precioCuota = Math.ceil(precioFinal1Financiado / 12);

 //document.write(`<p><strong>PRECIO CONTADO: </strong> $ ${precioFinal1Contado}</p>`)
 //document.write(`<p><strong>12 cuotas de $ ${parseInt(precioFinal1Financiado / 12)}</strong></p>`)
 //document.write(`<p><small>PRECIO LISTA: </small> $ ${precioFinal1Financiado}</p>`)

 function calcularPrecios (valorProducto, cuotas){

    const precioContado = parseInt(valorProducto * dolar * iva * ganancia);
    

    console.log(cuotas);
    document.write(`<p><strong>PRECIO CONTADO: </strong> $ ${precioContado}</p>`)

    if (!cuotas) return
    const precioFinanciado = parseInt(precioContado * interesFinanciacion);
    const precioCuota = +(precioFinanciado / cuotas).toFixed(2);

    
    document.write(`<p><strong>${cuotas} cuotas de $ ${parseInt(precioFinanciado / 12)}</strong></p>`)  
    document.write(`<p><small>PRECIO LISTA: </small> $ ${precioCuota}</p><hr>`) 

 }

 calcularPrecios(producto1,12);
 calcularPrecios(producto2,6);
 calcularPrecios(producto3,3);
 calcularPrecios(producto4,18);