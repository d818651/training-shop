var cart = {
    cart:[

    ]
};

var items = {
    items: [
        { id: 1, url: 'bash.im', desc: 'Easy Polo White', price: '19.99', new: false, sale: true, img: 'images/home/product1.jpg' },
        { id: 2, url: 'habr.ru', desc: 'Black item', price: '123.99', new: true, sale: false, img: 'images/home/product2.jpg' },
        { id: 3, url: 'mail.ru', desc: 'item 34', price: '129.99', new: false, sale: true, img: 'images/home/product5.jpg' },
        { id: 4, url: 'ya.ru', desc: 'item 45', price: '19.23', new: true, sale: true, img: 'images/home/product6.jpg' },
        { id: 5, url: 'bash.im', desc: 'Set 32', price: '569.99', new: false, sale: false, img: 'images/home/product4.jpg' },
        { id: 6, url: 'google.com', desc: 'Easy Polo Edition', price: '39.99', new: false, sale: true, img: 'images/home/product4.jpg' },
        { id: 7, url: '', desc: 'Easy Black Edition', price: '89.99', new: false, sale: true, img: 'images/home/product2.jpg' },
        { id: 7, url: '', desc: 'Black Edition', price: '29.99', new: false, sale: true, img: 'images/home/product4.jpg' },
        { id: 7, url: '', desc: 'Edition', price: '19.99', new: false, sale: true, img: 'images/home/product1.jpg' }
    ]
};



//document.querySelector('.features_items').innerHTML='<h2 class="title text-center">Features Items</h2>'+content.join('');


var appItems = new Vue({
    el: '.my-items',
    data: items,
    methods: {
        addCard: addCard,
        removeCard: removeCard
    }
})


var appCart = new Vue({
    el: '.my-cart',
    data:cart,
    methods: {
        addCard: addCard,
        removeCard: removeCard
    }
})

function addCard(item) {
    cart.cart.push(item);
    console.log(item);
}

function removeCard(item) {
 cart.cart=cart.cart.filter(x=>x!=item);
}
// vue.js