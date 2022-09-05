const express = require('express')
const app = express()

const PORT = 3030

app.use(express.static('public'))

app.get('/', (req,res)=>{
 
    res.sendFile(__dirname + '/DH-Heroes/views/index.html', {
    })

})


app.listen(PORT, (req,res)=> {

    console.log(`Servidor escuchando en el puerto ${PORT}`)

})