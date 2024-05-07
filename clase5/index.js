const express = require('express');
const app = express();
const PORT = 3050 ;

let respuesta;
app.get('/',(req,res)=>{
    res.set("Content-Type","text/html");
    res.send("<html><body><h1>Estas en HOME</h1></body></html>")
})
app.get('/cursos',(req,res)=>{
    res.set("Content-Type","text/html");
    res.send("<html><body><h1>Estas en CURSOS</h1></body></html>")
})
app.get('/contacto',(req,res)=>{
    res.set("Content-Type","text/html");
    res.send("<html><body><h1>Estas en CONTACTO</h1></body></html>")
})
app.use((req,res)=>{
    res.status(404).json({
        error:"404",
        descrip:"No se encuentra la ruta o recurso solicitado",
    })
})

app.listen(PORT,()=>{
    
    console.log("escuchando en el puerto:",PORT);
})