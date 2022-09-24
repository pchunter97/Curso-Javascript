const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});


// logger.log("Hola estoy saliendo por pantalla")
const funError = (valor=>{
    if(typeof valor ==="number")
    {
        return valor
    }
    else
    {
        throw new Error("Error de tipo")
    }
})

try{
 console.log(funError("a"))
}
catch(e)
{
    // console.log(e)
    logger.error(`${e}`)
}