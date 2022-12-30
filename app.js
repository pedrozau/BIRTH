const express = require('express') 
const route = require('./routes/routeHome')
require('dotenv').config() 


const app = express() 

app.set('view engine','ejs')
app.use(route)
app.use(express.static(__dirname + '/public'))
app.listen(process.env.PORT, () => {
    console.log("Runnig server")
})





