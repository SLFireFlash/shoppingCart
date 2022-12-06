var cart =[];
let count =0;
let productcount =1;
let structCount =1;

var cartStruct =`<div class="card" id="phone-card-${count}"  style="width: 18rem;"><ul class="list-group list-group-flush"><li class="list-group-item" id="phone-name-cart-${count}"></li><li class="list-group-item" id="phone-price-cart-${count}"></li><li class="list-group-item" id="remove-from-cart${count}"><button type="button" class="btn btn-danger" onclick="removeItem()">remove</button></li></ul></div>`;


function phoneStructFun(){
    
    //main dev
    let phoneListConst =document.getElementById('phone-list');
    let mainDev =document.createElement("div");
    mainDev.setAttribute("class","box-col");
    mainDev.setAttribute("id",`phone-no-${structCount}`);
    phoneListConst.appendChild(mainDev);

    //img dev
    phoneListConst =document.getElementById(`phone-no-${structCount}`);
    mainDev =document.createElement("div");
    mainDev.setAttribute("class","phone-img")
    mainDev.setAttribute("id",`phone-img-${structCount}`);
    phoneListConst.appendChild(mainDev);
    
    //img data
    phoneListConst =document.getElementById(`phone-img-${structCount}`);
    mainDev =document.createElement("img");
    mainDev.setAttribute("class","phone-img")
    mainDev.setAttribute("id",`phone-img-id-${structCount}`);
    phoneListConst.appendChild(mainDev);


    //phone-data
    mainDev =document.createElement("div");
    mainDev.setAttribute("class","phone-data");
    mainDev.setAttribute("id",`phone-data-${structCount}`);
    phoneListConst.appendChild(mainDev);

    //set phone data
        //name
    phoneListConst =document.getElementById(`phone-data-${structCount}`);
    mainDev =document.createElement("div");
    mainDev.setAttribute("class","phone-name");
    mainDev.setAttribute("id",`phone-name-load-${structCount}`);
    phoneListConst.appendChild(mainDev);
        //price
    mainDev =document.createElement("div");
    mainDev.setAttribute("class","phone-price");
    mainDev.setAttribute("id",`phone-price-load-${structCount}`);
    phoneListConst.appendChild(mainDev);

    //div add to cart
    phoneListConst =document.getElementById(`phone-data-${structCount}`);
    mainDev=document.createElement("div");
    mainDev.setAttribute("class","phone-price");
    mainDev.setAttribute("id",`add-to-cart-${structCount}`)
    phoneListConst.appendChild(mainDev);

    //button add to cart
    phoneListConst =document.getElementById(`add-to-cart-${structCount}`);
    mainDev=document.createElement("button");
    mainDev.setAttribute("class","btn btn-success btn-cart");
    mainDev.setAttribute("type",`button`)
    mainDev.innerHTML ="Add To Cart";
    phoneListConst.appendChild(mainDev);

    //load data
    var productLink ="https://dummyjson.com/products/" + structCount

    $.getJSON(productLink, function( data ) 
    {
        let loadDev;
        loadDev = document.getElementById(`phone-img-id-${structCount}`).setAttribute("src",data.thumbnail);
        document.getElementById(`phone-name-load-${structCount}`).innerHTML = data.title
        document.getElementById(`phone-price-load-${structCount}`).innerHTML=data.price
        structCount++;

    })




}
function loadPhone(){
    const phoneList = document.getElementById("phone-list");
    phoneList.innerHTML = phoneStruct;
    
    var productLink ="https://dummyjson.com/products/" + productcount

    $.getJSON(productLink, function( data ) 
    {
        document.getElementById("img-link")('src',data.thumbnail)
        document.getElementById(`phone-name-load-${structCount}`).innerHTML = data.title
        document.getElementById(`phone-price-load-${structCount}`).innerHTML=data.price
        productcount++;

    })
           
}

function addToCart(name,price){
    console.log("name:" + name)
    console.log("price:"+price)
    if (!cart.includes(price)){
        var cartid = document.getElementById("cart-items");
        cartid.innerHTML += cartStruct;

        var phoneName = document.getElementById(`phone-name-cart-${count}`);
        var phonePrice = document.getElementById(`phone-price-cart-${count}`);
        
        
        cart.push(price);
        // phoneName.innerHTML = name;
        // phonePrice.innerHTML = price;
        count++;
        console.log(`number is ${count}`)
        
    }
 
}

function removeItem(){
    const cartData = document.getElementById("cart-data");
    cartData.remove();

}

