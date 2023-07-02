//GLOBAL
var products=[];
var cartItems=[];
var cart_n=document.getElementById('cart_n');
//DIVS
var fruitDIV=document.getElementById("fruitDIV");
var juiceDIV=document.getElementById("juiceDIV");
var saladDIV= document.getElementById("saladDIV");
//INFORMATION
var FRUIT=[
    {name:'Denim Shorts',price:800},
    {name: 'Denim Jacket',price:1500},
    {name: 'Jeans',price:900},
    {name: 'Rugged Jeans',price:2000},
    {name: 'Dress',price:2500},
    {name: 'Jeans',price:800},
];
var JUICE=[
    {name: 'White Dress',price:1400},
    {name: 'Yellow Dress',price:900},
    {name: 'Vertical stripe Dress',price:1350},
    {name: 'Black gown',price:2300},
    {name: 'Green gown',price:7000},
    {name: 'Evening gown',price:4500}
];
var SALAD=[
    {name: 'Printed Salwar',price:2500},
    {name: 'Anarkali',price:1100},
    {name: 'White Salwar',price:1200},
    {name: 'BLue top',price:800},
    {name: 'Red Dress',price:1800},
    {name: 'Lehenga',price:2000}
];
//HTML
function HTMLfruitProduct(con){
    let URL = `img/denims/denim${con}.jpg`;
    let btn = `btnFruit${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:25rem;" src="${URL}" alt="Card
                image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <p class="card-text">${FRUIT[con-1].name}</p>
                    <p class="card-text">Price: ${FRUIT[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${FRUIT[con-1].name}',
                            '${FRUIT[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary"><a
                            style="color:inherit;" href="/cart">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${FRUIT[con-1].name}',
                            '${FRUIT[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                            Add to Cart</button>
                        </div>
                        <small class="text-muted">Free Shipping</small>
                    </div>
                </div>
            </div>
        </div>
    `
}


function HTMLjuiceProduct(con){
    let URL = `img/dresses/dress${con}.jpg`;
    let btn = `btnJuice${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:25rem;" src="${URL}" alt="Card
                image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <p class="card-text">${JUICE[con-1].name}</p>
                    <p class="card-text">Price: ${JUICE[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${JUICE[con-1].name}',
                            '${JUICE[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary"><a
                            style="color:inherit;" href="/cart">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${JUICE[con-1].name}',
                            '${JUICE[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                            Add to Cart</button>
                        </div>
                        <small class="text-muted">Free Shipping</small>
                    </div>
                </div>
            </div>
        </div>
    `
}

function HTMLsaladProduct(con){
    let URL = `img/ethnic/ethnic${con}.jpg`;
    let btn = `btnSalad${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:25rem;" src="${URL}" alt="Card
                image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <p class="card-text">${SALAD[con-1].name}</p>
                    <p class="card-text">Price: ${SALAD[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${SALAD[con-1].name}',
                            '${SALAD[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary"><a
                            style="color:inherit;" href="/cart">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${SALAD[con-1].name}',
                            '${SALAD[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                            Add to Cart</button>
                        </div>
                        <small class="text-muted">Free Shipping</small>
                    </div>
                </div>
            </div>
        </div>
    `
}



//ANIMATION
function animation(){
    const toast=swal.mixin({
        toast: true,
        position:'top-end',
        showConfirmButton:false,
        timer:1000
    });
    toast({
        type:'success',
        title: 'Added to shopping cart'
    });
}

//CART FUNCTIONS
function cart(name,price,url,con,btncart){
    var item ={
        name:name,
        price:price,
        url:url
    }
   cartItems.push(item);
   let storage = JSON.parse(localStorage.getItem("cart"));
   if(storage==null){
       products.push(item);
       localStorage.setItem("cart",JSON.stringify(products));

   }  else{
    products = JSON.parse(localStorage.getItem("cart"));
    products.push(item);
    localStorage.setItem("cart",JSON.stringify(products));
   }
   products = JSON.parse(localStorage.getItem("cart"));
   cart_n.innerHTML= `[${products.length}]`;
   document.getElementById(btncart).style.display="none";
   animation();
}

function cart2(name,price,url,con,btncart){
    var item ={
        name:name,
        price:price,
        url:url
    }
   cartItems.push(item);
   let storage = JSON.parse(localStorage.getItem("cart"));
   if(storage==null){
       products.push(item);
       localStorage.setItem("cart",JSON.stringify(products));

   }  else{
    products = JSON.parse(localStorage.getItem("cart"));
    products.push(item);
    localStorage.setItem("cart",JSON.stringify(products));
   }
   products = JSON.parse(localStorage.getItem("cart"));
   cart_n.innerHTML= `[${products.length}]`;
   document.getElementById(btncart).style.display="none";
}



(()=>{
    for (let index = 1; index <= 6; index++) {
        fruitDIV.innerHTML+=`${HTMLfruitProduct(index)}`;
    }
    for (let index = 1; index <= 6; index++) {
        juiceDIV.innerHTML+=`${HTMLjuiceProduct(index)}`;
    }
    for (let index = 1; index <= 6; index++) {
        saladDIV.innerHTML+=`${HTMLsaladProduct(index)}`;
    }

    if (localStorage.getItem("cart")==null) {
        
    } else {
        products=JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;        
    }
})();
