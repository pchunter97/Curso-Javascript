let nombre="Jeffield"
let apellido ="Fullbuster"
let estudiante=`${nombre} ${apellido}`
console.log(estudiante)

let estudianteMayus=estudiante.toUpperCase
console.log(estudianteMayus)

let estudianteMinus=estudiante.toLowerCase
console.log(estudianteMinus)

let estudiante_cantidad=estudiante.length
console.log(estudiante_cantidad)

let pl_nombre= nombre.charAt(0)
console.log(pl_nombre)

let ul_apellido = apellido.charAt(apellido.length-1)
console.log(ul_apellido)

let estudiante_sin_espacios=estudiante.replace(" ","")
console.log(estudiante_sin_espacios)

let nombre_en_estudiante = estudiante.includes(nombre)
console.log(nombre_en_estudiante)