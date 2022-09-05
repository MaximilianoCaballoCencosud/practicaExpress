const express = require('express')
const app = express()

const PORT = 3030


app.get('/', (req,res)=>{

    app.render(__dirname + 'index.html', {
    })

})


app.listen(PORT, (req,res)=> {

    console.log(`Servidor escuchando en el puerto ${PORT}`)

})

app.use(express.static('public'));