var mongoose = require('mongoose'),
Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var producto_schema = new Schema({
    nombre: String,
    descripcion: String,
    precio: String
});

prod_model = mongoose.model('producto',producto_schema,'producto');

module.exports = {
    show: function(req,res){

        if(req.query._id == null){
            prod_model.find({},function(err,items){
                if(!err){
                    res.render('table',{data: items});
                }else{
                    return console.log(err);
                }
            });
        }else{
            prod_model.findOne({_id: req.query._id},function(err,items){
                if(!err){
                    res.render('show',{data: items});
                }else{
                    return console.log(err);
                }
            }); 
        }
    },
    create: function(req,res){
        var item = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio
        };
        var nuevo = new prod_model(item).save();
        res.redirect("/producto");
    },
    edit: function(req,res){
        prod_model.findOne({_id: req.query._id},function(err,items){
            if(!err){
                res.render('edit',{data: items});
            }else{
                return console.log(err);
            }
        });
    },
    update: function(req,res){
        prod_model.findOne({_id: req.body._id},function(err,producto){
            producto.nombre = req.body.nombre;
            producto.descripcion = req.body.descripcion;
            producto.precio = req.body.precio;
            producto.save();
            res.redirect("/producto");
        });
    },
    delete: function(req,res){
        prod_model.findOne({_id: req.query._id},function(err,producto){
            producto.remove();
            res.redirect('/producto');
        });
    },
};