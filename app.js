const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname,"public")));

app.listen(port, () => { 
    console.log(`Escucho en puerto ${port}`)
})

app.get("/", (req,res)=> {
    res.sendFile(path.resolve("./views/home.html"))
})

app.get('/form', (req,res) => {
    res.sendFile(path.resolve('views/productForm.html'));
})

app.get('/login', (req,res) => {
    res.sendFile(path.resolve('views/login.html'));
})

app.get('/register', (req,res) => {
    res.sendFile(path.resolve('views/register.html'));
})

app.get("/home", (req,res)=> {
    res.sendFile(path.resolve("./views/home.html"))
})
