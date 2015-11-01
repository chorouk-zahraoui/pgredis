var express = require('express'),
    Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://node:node@52.28.17.216:5432/node');
var Register = sequelize.define('user_status',{
    ts: Sequelize.DATE,
    status: Sequelize.STRING
});
sequelize
    .sync({force: false})
    .then(function(){
        console.log('ready');
    }
);

var app = express();

app.get('/update-status/:stat', function(req,res){
    //Register.create({
    //    ts: Date(),
    //    status: req.params.stat
    //})
    //    .then(function(){
    //        res.send(req.params.stat);
    //    })
    //    .catch(function(err){
    //        res.send(err);
    //    });
    res.send('OK');
});

app.listen(8001);

function execute(obj) {
    return sequelize
        .sync()
}