//Lista de compras
const lista_compra = ["Arroz", "Atún", "Jamón", "Martillo", "Avena"];
lista_compra.push("Aceite de Girasol");
console.log(lista_compra);
lista_compra.pop();
console.log(lista_compra);

//Peliculas favoritas
const peliculas = [
  {
    titulo: "Spiderman 2",
    director: "Sam Reimi",
    fecha: new Date(2010, 02, 01),
  },
  {
    titulo: "harry potter y el prisionero de azkaban",
    director: "Alfonso Cuarón",
    fecha: new Date(2004, 10, 10),
  },
  {
    titulo: "interstellar",
    director: "Christopher Nolan",
    fecha: new Date(2010, 10, 22),
  },
];

const mayor_2001 = peliculas.filter((objeto) => objeto.fecha.getDate()>1 && objeto.fecha.getMonth()>=1&&objeto.fecha.getFullYear()>=2010 );
console.log(mayor_2001);

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map((objeto) => objeto.director);
console.log(directores);

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map((objeto) => objeto.titulo);
console.log(titulos);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directores_titulos = directores.concat(titulos);
console.log(directores_titulos);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const directores_titulos_factor = [...directores, ...titulos];
console.log(directores_titulos_factor);
