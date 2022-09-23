const hoy = new Date()
const fecha_nac=new Date(1997,0,08)
let comparacion=(hoy.getTime()>fecha_nac.getTime())?true:false

let dia_nac = fecha_nac.getDate()
console.log(dia_nac)

let mes_nac = fecha_nac.getMonth()+1
console.log(mes_nac)

let anio_nac=fecha_nac.getFullYear()
console.log(anio_nac)
