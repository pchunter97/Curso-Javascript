class Estudiante{
    #nombre;
    #asignatura;
    constructor(nombre,asignatura)
    {
        this.#nombre = nombre;
        this.#asignatura = asignatura
    }

    obtenDatos() {
        return {nombre:this.#nombre,asignatura:this.#asignatura}
    }

}

const estudiante = new Estudiante("Jeffield",["javascript","html","css"])
console.log(estudiante.obtenDatos())
