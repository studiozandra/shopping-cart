// shopping cart

var cartContents = 
[
    {
        product: "Finger Toothbrush", 
    description: "A helping hand to a nicer smile.", 
    price: 1.11
}, 
    {
        product: "Barry Manilow's Greatest Hits Collection Vol 1", 
    description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", 
    price: 39.57
}, 
    {
        product: "Ramen Oreos", 
    description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", 
    price: 8.88
}, 
    {
        product: "Woof Washer 360", 
    description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29
}, 
    {
        product: "Sauna Pants", 
        description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", 
        price: 2.33
    }, 
    
    {
        product: "Hug Me Pillow", 
        description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", 
        price: 599.99
    }
];

// image, product, description, price

// document.getElementById('imagePlaceholder1').src ='images/imagePlaceholder.png';
// document.getElementById('imagePlaceholder2').src = '';
// document.getElementById('imagePlaceholder3').src = '';
// document.getElementById('imagePlaceholder4').src = '';
// document.getElementById('imagePlaceholder5').src = '';
// document.getElementById('imagePlaceholder6').src = '';

var subTotal = 0;
var productsEle = document.getElementById("productsList");

for (var i = 0; i < cartContents.length; i++) {
    
    var shoppingCart = document.createElement('div');
    shoppingCart.className = 'itemBox';
    shoppingCart.style.borderTop = '1px solid lightgrey';
    productsEle.appendChild(shoppingCart);
    

    var shopItemImg = document.createElement('img');
    shopItemImg.id = 'itemImg' + i;
    shopItemImg.className = 'prodImg'
    shopItemImg.style.float = 'left';
    shoppingCart.appendChild(shopItemImg);

    var prodDiv = document.createElement('div');
    prodDiv.className = 'nameDescr';
    shoppingCart.appendChild(prodDiv);

    var itemBoxHead = document.createElement('h3');
    itemBoxHead.className = 'itemHeader';
    itemBoxHead.innerHTML = cartContents[i].product;
    prodDiv.appendChild(itemBoxHead);

    var itemBoxDescr = document.createElement('div');
    itemBoxDescr.className = 'itemDescr';
    itemBoxDescr.innerHTML = cartContents[i].description;
    prodDiv.appendChild(itemBoxDescr);

    var itemBoxPrice = document.createElement('div');
    itemBoxPrice.className = 'itemPrice';
    itemBoxPrice.innerHTML = cartContents[i].price;
    shoppingCart.appendChild(itemBoxPrice);

    subTotal += cartContents[i].price;

    
}