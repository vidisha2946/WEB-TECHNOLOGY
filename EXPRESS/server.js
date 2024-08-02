const express = require('express');
const path = require('path');
const app = express();
app.get('/home',(req,res)=>{
    res.send('<h1>Hello World</h1>')
});
app.get('/help',(req,res)=>{
    res.send('<h1>help me</h1>')
});
app.get('/about',(req,res)=>{
    res.send('<h1>about me</h1>')
});
app.get('/abc',(req,res)=>{
    res.sendFile(path.join(__dirname,"abc.html"))
});
app.get('/user/:name',(req,res)=>{
    res.send(`hello world from ${req.params.name}`)
});
app.listen(5000,()=>{
    console.log('server started at 5000')
});
