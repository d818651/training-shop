var cart=[];
var items =[
    {id : 1, url:'bash.im', desc:'Easy Polo White', price:'19.99', new:false, sale:true, img:'images/home/product1.jpg'},
    {id : 2, url:'habr.ru', desc:'Black item', price:'123.99', new:true, sale:false, img:'images/home/product2.jpg'},
    {id : 3, url:'mail.ru', desc:'item 34', price:'129.99', new:false, sale:true, img:'images/home/product5.jpg'},
    {id : 4, url:'ya.ru', desc:'item 45', price:'19.23', new:true, sale:true, img:'images/home/product6.jpg'},
    {id : 5, url:'bash.im', desc:'Set 32', price:'569.99', new:false, sale:false, img:'images/home/product4.jpg'},
    {id : 6, url:'google.com', desc:'Easy Polo Edition', price:'39.99', new:false, sale:true, img:'images/home/product4.jpg'},
    {id : 7, url:'', desc:'Easy Black Edition', price:'89.99', new:false, sale:true, img:'images/home/product2.jpg'},
    {id : 7, url:'', desc:'Black Edition', price:'29.99', new:false, sale:true, img:'images/home/product4.jpg'},
    {id : 7, url:'', desc:'Edition', price:'19.99', new:false, sale:true, img:'images/home/product1.jpg'}    
];

document.querySelector('.features_items').addEventListener('click', event =>{
    event.preventDefault();
   if (event.target.matches('.add-to-cart')) cart.push(items[+event.target.id]);
   console.log(cart);
})

var content=items.map((item,i) =>{
var result='';
result=result+'<div class="col-sm-4"><div class="product-image-wrapper"><div class="single-products"><div class="productinfo text-center">';
result=result+'<img src="'+item.img+'" alt="">';
result=result+'<h2>$'+item.price+'</h2>';
result=result+'<p>'+item.desc+'</p>';
result=result+'<a href="" id="'+i+'" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>';
result=result+'</div></div><div class="choose"><ul class="nav nav-pills nav-justified">';
result=result+'<li><a href="#"><i class="fa fa-plus-square"></i>Add to wishlist</a></li>'
result=result+'<li><a href="#"><i class="fa fa-plus-square"></i>Add to compare</a></li></ul></div></div></div>';
return result;
})

document.querySelector('.features_items').innerHTML='<h2 class="title text-center">Features Items</h2>'+content.join('');

// vue.js