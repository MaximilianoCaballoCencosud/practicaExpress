const express = require('express')
const app = express()
const path = require('path')

const PORT = 3030

app.use(express.static('public'))

app.get('/', (req,res)=>{

    res.sendFile( path.join(__dirname, '/DH-Heroes/views/home.html'));
    });


app.listen(PORT, (req,res)=> {

    console.log(`Servidor escuchando en el puerto ${PORT}`)

})