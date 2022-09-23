const datos_personales = {
  nombre: "Jeffield",
  edad: 25,
  altura: 172,
  esDesarrollador: true,
};

const edad = datos_personales.edad;
const datos_P = [datos_personales, {nombre:"Jake",edad:24,altura:173,esDesarrollador:false},{nombre:"Sherry",edad:23,altura:171,esDesarrollador:false}];
datos_P.sort((a,b)=>a.edad-b.edad)
console.log(datos_P);
