require('./models/db');
const express= require('express');
const path= require('path');
const exphbs= require('express-handlebars');
const bodyparser= require('body-parser');
const Handlebars= require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const orderController= require('./controller/orderController');


var app=express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'/public')));
app.set('views',path.join(__dirname,'views'));
app.engine('hbs',exphbs({
    extname: 'hbs',
    defaultLayout: 'mainLayout',
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    layoutsDir: __dirname+'/views/'
}));
app.set('view engine','hbs');
app.listen(5800,()=>{
    console.log('Server on port: 5800');
});
app.use('/',orderController);