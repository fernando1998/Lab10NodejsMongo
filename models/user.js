var mongoose = require('mongoose'),
Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var user_schema = new Schema({
    nombres: String,
    apellidos: String,
    email: String,
    password: String
});

user_model = mongoose.model('users',user_schema,'users');

module.exports = {
    login:function(req,res){
        user_model.findOne({email: req.body.email,password: req.body.password},function(err,items){
            if(!err && items !== null){
                res.redirect('/producto');
                console.log('items:--------------------------');
                console.log(items);
            }else{
                res.render('login',{error:'Email o password incorrectos!'});
            }
        }); 
    }
};