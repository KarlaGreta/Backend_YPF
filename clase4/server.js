const http = require ('http');
const PORT = 3000;

const server = http.createServer((request,response)=>{
    let respuesta = "";
    let statusCode = 200;
    if(request.url ==='/')
        {respuesta ="bienvenido"}
    else if(request.url ==='/nosotros')
        {respuesta ="bienvenido nosotros"}
    else if(request.url ==='/cursos')
        {respuesta ="bienvenido cursos"}
    else if(request.url ==='/contacto')
        {respuesta ="bienvenido contacto"}
    else{
        statusCode = 404;
        respuesta="no se encontro la ruta"
    }

    response.statusCode=statusCode;
    response.setHeader('charset','utf-8');
    response.setHeader('Content-Type','text/plain');
    response.end(respuesta);

})

server.listen(PORT,()=>{
    console.log(`Servidor ejecutandose en el puerto: ${PORT}`);
})