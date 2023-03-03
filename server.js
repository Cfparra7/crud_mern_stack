const express =require ('express')
const app =express()

//importar conexion mongoDB
const archivoBD = require ('./conexion')

app.get('/', (req, res)=>{
  res.end('Bienvenido alservidor backend Node.js. Corriendo...')
})

//vonfigurar server basico
app.listen(5000, function (){
  console.log('El servidor esta corriendo correctamente')
})