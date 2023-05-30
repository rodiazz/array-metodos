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

const tableBodyHTML = document.getElementById("tableBody");


paisesLatinoamerica.forEach( (algo, index) => {
    const posicion = String(index + 1).padStart(2, "0")
    //document.write(`${posicion} - ${algo.nombre} <br>`)
    tableBodyHTML.innerHTML += `<tr>
        <th scope="row">${posicion}</th>
        <td>${algo.nombre}</td>
        <td>${algo.capital}</td>
        <td>${algo.ubicacion}</td>
        <td>${algo.habitantes}</td>
      </tr>`;
})



//for (let pais of paisesLatinoamerica ) {
//    console.log(pais.nombre);
//}