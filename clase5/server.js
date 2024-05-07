
//CARGAR EL MODULO EXPRESS Y LO ASIGNA A LA CONSTANTE
const express= require('express');
// LUEGO INSTANCIIAMOS EL FRAMEWORK DENTRO DE LA CONSTANTE APP
const app = express();
const PORT = 3002;

//DEFINE RUTA BASICA
app.get('/',(request,response)=>{
    response.send("hola mundo!")
})
/* app.get('*',(request,response)=>{
    response.status(400).send("Lo siento,la ruta ingresada no existe")
}) */

// ruta presdetermiada para manejar rutas inexistentes
app.use((resq,res)=>{
    res.status(404).send("Lo siento,la ruta ingresada no existe");
})

//INICIA EL SERVIDOR
app.listen(PORT,()=>{
    console.log("listenin in port",PORT)
});