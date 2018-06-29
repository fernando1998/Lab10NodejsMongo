var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/form',function(req,res){
  var desc = 0.1;
  var total = 0; 
  var precios=[
    {nombre:'java',precio:1200},
    {nombre:'php',precio:800},
    {nombre:'.net',precio:1500}
    ] ;
  var precioCurso = precios.find(curso => curso.nombre=== req.body.curso).precio;
  var tpago = req.body.tipo;

      if(tpago=='efectivo'){
        total  = parseInt(precioCurso) - parseInt(precioCurso*desc); 
      }else{
        total =  parseInt(precioCurso);
      }
  datos = {
		title:'Recepción de datos',
		val_curso : req.body.curso,
    val_nivel : req.body.nivel,
    val_tipo : req.body.tipo,
    total : total
	}
	res.render('form',datos);
});
module.exports = router;
