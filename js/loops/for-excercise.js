const text = prompt("Ingrese el texto que desea invertir") 

const vocales = "aeiou";
console.log(text.length);
let totalVocales = 0;

for (let i = text.length - 1; i >=0 ; i--) {
    const letra = text[i]
    //console.log(text[i]);
    document.write(letra);

    if (vocales.includes(letra.toLowerCase)){
        totalVocales ++;
    }

}

console.log (`TOTAL DE VOCALES ENCONTRADAS= ${totalVocales} VOCALES`)