const  paisesLatinoamerica  =  [
    {
      nombre : "Argentina" ,
      ubicacion : "Sur de Sudamérica" ,
      habitantes : 45000000 ,
      capital : "Buenos Aires" ,
    }, 
    {
      nombre : "Bolivia" ,
      ubicacion : "Centro de Sudamérica",
      habitantes : 11000000 ,
      capital : "La Paz" ,
    } ,
    {
      nombre : "Brasil" ,
      ubicacion : "Este de Sudamérica" ,
      habitantes : 211000000 ,
      capital : "Brasilia" ,
    } ,
    {
      nombre : "Chile" ,
      ubicacion : "Sur de Sudamérica",
      habitantes : 19000000 ,
      capital : "Santiago" ,
    } ,
    {
      nombre : "Colombia" ,
      ubicacion : "Norte de Sudamérica",
      habitantes : 50340000 ,
      capital : "Bogotá" ,
    } ,
    {
      nombre : "Costa Rica" ,
      ubicacion : "Centroamerica",
      habitantes : 5100000 ,
      capital : "San José" ,
    } ,
    {
      nombre : "Cuba" ,
      ubicacion : "El Caribe" ,
      habitantes : 11400000 ,
      capital : "La Habana" ,
    } ,
    {
      nombre : "Ecuador" ,
      ubicacion : "Oeste de Sudamérica",
      habitantes : 17300000 ,
      capital : "Quito" ,
    } ,
    {
      nombre : "El Salvador" ,
      ubicacion : "Centroamerica",
      habitantes : 6500000 ,
      capital : "San Salvador" ,
    } ,
    {
      nombre : "Guatemala" ,
      ubicacion : "Centroamerica",
      habitantes : 18200000 ,
      capital : "Ciudad de Guatemala" ,
    } ,
    {
      nombre : "Honduras" ,
      ubicacion : "Centroamerica",
      habitantes : 10000000 ,
      capital : "Tegucigalpa" ,
    } ,
    {
      nombre : "México" ,
      ubicacion : "Norte de America Central" ,
      habitantes : 128900000 ,
      capital : "Ciudad de México" ,
    } ,
    {
      nombre : "Nicaragua" ,
      ubicacion : "Centroamerica",
      habitantes : 6400000 ,
      capital : "Managua" ,
    } ,
    {
      nombre : "Panamá" ,
      ubicacion : "Centroamerica",
      habitantes : 4300000 ,
      capital : "Ciudad de Panamá" ,
    } ,
    {
      nombre : "Paraguay" ,
      ubicacion : "Centro de Sudamérica",
      habitantes : 7200000 ,
      capital : "Asunción" ,
    } ,
] ;
const copiaArray = Array.from(paisesLatinoamerica);
const tableBodyHTML = document.getElementById("tableBody");

function pintarPaisesOriginales() {
  renderizarTable(paisesLatinoamerica)
}

function aplicarFiltroNombre(evtDesdeHTML) {

  const valorFiltro = evtDesdeHTML.target.value.toLowerCase();

  const paisesFiltrados = paisesLatinoamerica.filter(function(pais){
    const nombrePais = pais.nombre.toLowerCase();

    if(nombrePais.includes (valorFiltro)){
      return true;
    }
    return false;
  })

  renderizarTable(paisesFiltrados)
}

function borrarPais(indice) {
  copiaArray.splice(indice,1);
  console.log(copiaArray)
  renderizarTable(copiaArray)
  calcularPoblacionTotal(copiaArray)

}

function calcularPoblacionTotal(listaPaises){

  const acumuladoTotal = listaPaises.reduce( (acumulador, pais) => {
    console.log(`Acumulador: ` , acumulador)
   acumulador += pais.habitantes;

   return acumulador
   

  }
  ,0);
 const populationCell = document.getElementById("total");
 populationCell.innerText = acumuladoTotal
}


  //let count = 0;

  //listaPaises.forEach(pais =>{
    //count += pais.habitantes;
 // })

  //console.log(`Total Obtenido:  ${count}`)


calcularPoblacionTotal(paisesLatinoamerica);

paisesLatinoamerica.splice(4,1)

function renderizarTable(arrayDePaises) {

  tableBodyHTML.innerHTML = "";

   arrayDePaises.forEach( (algo, index) => { 

      const posicion = String(index + 1).padStart(2, "0")

      //document.write(`${posicion} - ${algo.nombre} <br>`)

       tableBodyHTML.innerHTML += `<tr>
        <th scope="row">${posicion}</th>
        <td>${algo.nombre}</td>
        <td>${algo.capital}</td>
        <td>${algo.ubicacion}</td>
        <td>${algo.habitantes}</td>
        <td>
              <button class="btn btn-danger" onclick ="borrarPais(${index})">
                  <i class="fa-solid fa-trash"></i>
              </button>
        </td>
      </tr>`;
    } )
}

renderizarTable(paisesLatinoamerica);

function filtrarPaises () {

  const paisesFiltrados = paisesLatinoamerica.filter(function(pais) {
    //Filtrar paises con poblacion mayor a 1.5M
    console.log(pais.habitantes);
  
    if(pais.habitantes >= 15000000) {
      return true;
    } else {
      return false;
    }
  
  })

  renderizarTable(paisesFiltrados);

}



//renderizarTable(paisesFiltrados);

//console.log(paisesFiltrados);
//console.log(paisesLatinoamerica);

//const numeros = [1 ,2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];
//const pares = numeros.filter(function (value){
 //   if (value % 2 === 0){
 //       console.log(`${value} es par`)
 //       return true;
 //   } else {
  //      console.log(`${value} es impar`)
 //       return false;
//    }
//})

//console.log("PARES",pares); 