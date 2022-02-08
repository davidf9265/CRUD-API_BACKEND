const express = require('express');
const mysql = require('mysql2');
const myconn = require('express-myconnection')
const cors = require('cors')

const routes = require('./routes')

const app = express();

app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'enddafo5169265+-',
    database: 'libreta'
}

//middlewares
app.use(cors()) // permite las solicitudes de cualquier origen
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

// routes --------------------------------------
app.get('/', (req,res)=>{
    res.send('Welcome to my API')
}) 

app.use('/api', routes)

//server running -------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})