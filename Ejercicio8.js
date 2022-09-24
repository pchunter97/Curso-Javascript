function fun(){return true}
console.log(fun())

const asynFun= (()=>{console.log("Hola soy una promesa")})
setTimeout(asynFun,5000)

function* genPar()
{
    let id=0
    while(true)
    {
        id+=2
        if(id==100)
        {
            return id
        }
        yield id
    }
}

const idPar=genPar()
console.log(idPar.next())
console.log(idPar.next())
console.log(idPar.next())
console.log(idPar.next())