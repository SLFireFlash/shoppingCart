const phoneStruct ='<div class="box-col"><div class="phone-img"><img class="phone-img" src="imgs/1.jpg" alt="phone01" ><div class="phone-data"><div class="phone-name">X<b>iaomi 13 Pro</b></div><div class="phone-price">760$</div><div class="add-to-cart"><button type="button" class="btn btn-success btn-cart">Add TO Cart</button></div></div></div> </div>';
const cartStruct ='<div class="card" id="cart-data" style="width: 18rem;"><div class="card-header">cart</div><ul class="list-group list-group-flush"><li class="list-group-item" id="phone-name"></li><li class="list-group-item" id="phone-price"></li><li class="list-group-item" id="remove-from-cart"><button type="button" class="btn btn-danger" onclick="removeItem()">remove</button></li></ul></div>'

let cart =[];
let count =0;

function loadPhone(){
    const phoneList = document.getElementById("phone-list");
    phoneList.innerHTML += phoneStruct;
}

function addToCart(id,name,price){
    const cartid = document.getElementById("cart-items");
    cartid.innerHTML += cartStruct;
    const phoneName = document.getElementById("phone-name");
    const phonePrice = document.getElementById("phone-price");
    cart.push(id);
    phoneName.innerHTML=name;
    phonePrice.innerHTML=price;
}

function removeItem(){
    const cartData = document.getElementById("cart-data");
    cartData.remove();

}