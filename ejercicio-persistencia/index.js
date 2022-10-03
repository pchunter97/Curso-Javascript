let nombre="Jeffield"
let apellido="Fullbuster"
const persona = {nombre,apellido}

//Almacenado en SessionStorage
sessionStorage.setItem("persona",JSON.stringify(persona))

//Almacenado en LocalStorage
localStorage.setItem("persona",JSON.stringify(persona))

document.cookie="persona="+persona.nombre+","+persona.apellido+";expires="+new Date().toUTCString()