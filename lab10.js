var express = require("express"),
app = express(),
bodyParser = require('body-parser'),
producto = require('./models/prod');
users = require('./models/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine','pug');

app.get('/',function(req,res){
    res.send('Hola Mundo!');
});

app.get('/producto',producto.show);
app.post('/producto',producto.create);
app.post('/producto/update',producto.update); 
app.get('/producto/delete',producto.delete); 

app.get('/login',function(req,res){
     res.render('login',{error:0});
});
app.post('/login',users.login);


app.get('/table',function(req,res){
    res.render('table');
});

app.get('/crear',function(req,res){
    res.render('crear');
});

app.get('/ver',producto.show);
app.get('/editar',producto.edit);

app.listen(9090,function(){
    console.log('Iniciando!');
});