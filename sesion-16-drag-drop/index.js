const parrafos= document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion-papelera")
parrafos.forEach(parrafo=>{
    parrafo.addEventListener("dragstart", event =>{
        // console.log("Inicio de arrastre")
        // console.log("Estoy arrastrando el párrafo: "+parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id",parrafo.id)
        // const img_ghost = document.querySelector("img")
        // event.dataTransfer.setDragImage(img_ghost,0,0)

    })

    parrafo.addEventListener("dragend",()=>{
        console.log("He terminado de arrastrar")
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion=>{
    seccion.addEventListener("dragover", event=>{
        event.preventDefault()
        // console.log("Drag Over")
    })

    seccion.addEventListener("drop",event=>{
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log("Párrafo id:", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        // seccion.appendChild(parrafo)
        parrafo.remove()
    })
})