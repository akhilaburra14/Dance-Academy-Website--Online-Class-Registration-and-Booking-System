const express = require("express")
const path = require("path")
const app = express();
const fs = require("fs")
const port = 8000

// EXPRESS SPECFICATIONS 
app.use('/static', express.static('static'))// setting the server
app.use(express.urlencoded({extended: true}))

// PUG SPECFICATIONS
app.set('view engine', 'pug')// set the templete engine as pug
app.set('views', path.join(__dirname, 'views'))// set the views directory


// ENDPOINTS
app.get('/', (req, res)=>{
    res.status(200).render('home.pug');
})

app.get('/contact', (req, res)=>{
    res.status(200).render('contact.pug');
})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`the application started sucesfully on the port ${port}`);
})