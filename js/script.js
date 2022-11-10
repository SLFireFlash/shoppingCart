const phoneStruct ='<div class="box-col"><div class="phone-img" id="phone-img"><img class="phone-img" id="img-link" alt="phone01" ><div class="phone-data"><div class="phone-name" id="phone-name-load"></div><div class="phone-price" id="phone-price-load"></div><div class="add-to-cart"><button type="button" class="btn btn-success btn-cart" id="add-to-cart-load">Add TO Cart</button></div></div></div> </div>';
const cartStruct ='<div class="card" id="phone-card"  style="width: 18rem;"><ul class="list-group list-group-flush"><li class="list-group-item" id="phone-name-cart"></li><li class="list-group-item" id="phone-price-cart"></li><li class="list-group-item" id="remove-from-cart"><button type="button" class="btn btn-danger" onclick="removeItem()">remove</button></li></ul></div>'

var cart =[];
let count =0;
let productcount =1;

function loadPhone(){
    const phoneList = document.getElementById("phone-list");
    phoneList.innerHTML = phoneStruct;
    
    var productLink ="https://dummyjson.com/products/" + productcount

    $.getJSON(productLink, function( data ) 
    {
        document.getElementById("img-link").setAttribute('src',data.thumbnail)
        document.getElementById("phone-name-load").innerHTML = data.title
        document.getElementById("phone-price-load").innerHTML=data.price
        productcount++;

    })
    

            
}

function addToCart(name,price){
    console.log("name:" + name)
    console.log("price:"+price)
    if (!cart.includes(price)){
        var cartid = document.getElementById("cart-items");
        cartid.innerHTML += cartStruct;

        var phoneName = document.getElementById("phone-name-cart");
        var phonePrice = document.getElementById("phone-price-cart");
        
        cart.push(price);
        phoneName.innerHTML = name;
        phonePrice.innerHTML = price;
        
    }
 
}

function removeItem(){
    const cartData = document.getElementById("cart-data");
    cartData.remove();

}