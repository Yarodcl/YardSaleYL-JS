
//Llamando clases 

const buttonEmail = document.querySelector('.nav-email');
const deskMenu = document.querySelector('.desktop-menu');
const burgerButton = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartButton = document.querySelector('.nav-shop-cart')
const shoppingCartMenu = document.querySelector('.shoppingCart-menu')
//Event Listener

cartButton.addEventListener('click', toggleShoppingMenu)
buttonEmail.addEventListener('click', toggleDeskM);
burgerButton.addEventListener('click', toggleMobMenu);
//Funciones

function toggleShoppingMenu(){
    shoppingCartMenu.classList.toggle('inactive');
    deskMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}
function toggleDeskM(){
    deskMenu.classList.toggle('inactive');
    shoppingCartMenu.classList.add('inactive');
}

function toggleMobMenu(){
    mobileMenu.classList.toggle('inactive');
    shoppingCartMenu.classList.add('inactive');
}

//Lista de productos

const productList = [];

productList.push ({
    name:'Funko Pop Spiderman',
    price: 12700,
    image: 'https://http2.mlstatic.com/D_NQ_NP_624484-MLA48984250347_012022-O.jpg'
});
productList.push ({
    name:'Funko Pop Batman',
    price: 1200,
    image: 'https://falabella.scene7.com/is/image/Falabella/gsc_113515420_667035_1?wid=800&hei=800&qlt=70'
});
productList.push ({
    name:'Funko Pop Goku',
    price: 1600,
    image: 'https://ripleycl.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Fimagenes-sellers-mercado-ripley%2F2022%2F01%2F05174552%2FGOKU-948.jpeg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=eeb3b5fad930f38e08832dd8f7bce07f'
});
productList.push ({
    name:'Funko Pop Elvis Stitch',
    price: 1500,
    image: 'https://cf.shopee.cl/file/05d2d81df95ad0ffdb2b10446471020c'
});
productList.push ({
    name:'Funko Pop Inosuke',
    price: 300,
    image: 'https://falabella.scene7.com/is/image/Falabella/gsc_113547265_669177_1?wid=800&hei=800&qlt=70'
});
productList.push ({
    name:'Funko Pop Heavy',
    price: 2200,
    image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6113/6113509_sd.jpg'
});
productList.push ({
    name:'Funko pop Patrick Bateman',
    price: 800,
    image: 'https://http2.mlstatic.com/D_NQ_NP_669110-MLC43894838813_102020-O.jpg'
});
productList.push ({
    name:'Funko pop Perfect Cell',
    price: 600,
    image: 'https://http2.mlstatic.com/D_NQ_NP_600225-MLC51377550235_092022-O.jpg'
});
productList.push ({
    name:'Funko pop Frieza ',
    price: 876,
    image: 'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-paris-marketplace/default/dw49bcfa10/images/imagenes-productos/800/MK6A/MK6AK8IPJW-001.jpg?sw=1480&sh=2000&sm=fit'
}); 

//Llamar productos

/*             <div class="product-card">
                <img src="https://images.pexels.com/photos/10365983/pexels-photo-10365983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                <div class="product-info">
                    <div>
                        <p>$120.000</p>
                        <p>Plush bear</p>
                    </div>
                    <figure>
                        <img src="./Icons/bt_add_to_cart.svg">
                    </figure>
                </div>
            </div>
            <div class="product-card">
 */

const cardsContainer = document.querySelector('.cards-container');
function renderProducts(arr){
    for(products of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
    }
}