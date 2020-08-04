const express = require('express'),
app = express(),
path = require('path'),
PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

app.get('*',(req,res) =>{
    res.render('index');
})

app.listen(PORT,() => console.log(`Server listening at ${PORT}`));