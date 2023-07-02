//Require
const express= require('express');
const mongoose=require('mongoose');
const Order= mongoose.model('Order');

var router=express.Router();
mongoose.set('useFindAndModify',false);
//Router
router.get('/',(req,res)=>{
    res.render('menu');
});

router.get('/login_user',(req,res)=>{
    res.render('login_user');
});
router.get('/register',(req,res)=>{
    res.render('register');
});

router.get('/login',(req,res)=>{
    res.render('login');
});
router.get('/cart',(req,res)=>{
    res.render('cart');
});
router.get('/reset',(req,res)=>{
    res.render('reset');
});


router.get('/orders',(req,res)=>{
    res.render('orders');
});
router.get('/admin',(req,res)=>{
    Order.find((err,docs)=>{
        if(!err)
        {
            res.render("admin",{
                order:docs
            });
        }else {
            console.log('Error in order:'+err);
        }
    });
});

router.get('/admin1',(req,res)=>{
    Order.find((err,docs)=>{
        if(!err)
        {
            res.render("admin1",{
                order:docs
            });
        }else {
            console.log('Error in order:'+err);
        }
    });
});


router.get('/order/:id',(req,res)=>{
    Order.findById(req.params.id,(err,doc)=>{
        if (!err) {
            res.render("orders",{order:doc});
        } else {
            console.log('Error findbyId:'+err);
        }
    });
});
router.get('/order/delete/:id',(req,res)=>{
    Order.findByIdAndRemove(req.params.id,(err,doc)=>{
        if (!err) {
            res.redirect('/admin1');
        } else {
            console.log('Error in delete:'+err);
        }
    });
});

//POST
router.post('/cart',(req,res)=>{
    insertOrder(req,res);
});
router.post('/order',(req,res)=>{
    updateOrder(req,res);
});

//Functions
function updateOrder(req,res){
    Order.findOneAndUpdate({_id:req.body._id},req.body,{new:true},(err,doc)=>{
        if (!err) {
            res.redirect('/admin1');
        } else {
            console.log('Update Error'+err);
        }
    });
}

function insertOrder(req,res){
    var d=new Date();
    var t=d.getTime();
    var counter=t;
    counter+=1;
    var order=new Order();
    order.total=req.body.total;
    order.order=counter;
    order.save((err,doc)=>{
        if (!err) {
            console.log('Order: '+order);
            res.redirect('/admin');
        } else {
            console.log('Error insertOrder:'+err);
        }
    });
}

module.exports=router;