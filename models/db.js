const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/ecommercedb',{useNewUrlParser: true,useUnifiedTopology: true,},(err)=>{
    if(!err){
        console.log('MongoDB connected');
    }else {
        console.log('Error '+err);
    }
});
require('./order.model');