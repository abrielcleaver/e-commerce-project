// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderProduct } from '../data/render-product.js';
import { products } from '../data/products.js';
import { addItem, clearCart, findById, getCart, getProducts, addProduct } from '../utils.js';


const test = QUnit.test;

test('renderProduct should return HTML snippet', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="product-card"><h2>Pothos</h2><img src="./assets/pothos-severin-candrian-GG9Gh1_FjbM-unsplash.jpg"><p>Epipremnum aureum, also known as pothos, is native to Mo'orea</p><p>Tropical</p><p>20</p><button id="1" class="add-button">ADD TO CART</button></div>`;
    const pothos = products[0];
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProduct(pothos).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('findById should return item matching ID', (expect)=>{
    const expected = {
        id: '1',
        name: 'Pothos',
        img: './assets/pothos-severin-candrian-GG9Gh1_FjbM-unsplash.jpg',
        description: 'Epipremnum aureum, also known as pothos, is native to Mo\'orea',
        type: 'Tropical',
        price: 20
    };

    const actual = findById('1', products);
    expect.deepEqual(actual, expected);
});

test ('getCart should return cart if it exists', (expect)=>{

    const fakeCart = [
        { id:'1', qty: '2' },
        { id:'3', qty: '4' }
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));

    const cart = getCart();

    expect.deepEqual(cart, fakeCart);
});

test ('addItem should increment qty of what is in the cart', (expect)=>{
    const fakeCart = [
        { id:'1', qty: '3' },
        { id:'3', qty: '4' } 
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart)); 
    addItem('1');
    const cart = getCart();
    const expected = [
        { id:'1', qty: 4 },
        { id:'3', qty: '4' }
    ];
    expect.deepEqual(cart, expected);
});

test ('clearCart should remove item', (expect)=>{
    const expected = [];
    let cart = [
        { id:'1', qty: '3' },
        { id:'3', qty: '4' } 
    ];
    localStorage.setItem('CART', JSON.stringify(cart));
    
    clearCart();
    const actual = getCart();

    expect.deepEqual(actual, expected);
});

test ('addProduct should add new product', (expect)=>{
    let products = getProducts();
    const newPlant = {
        id: '7',
        name: 'Rubber Tree',
        description: 'Rubber trees are among the easiest indoors plants, with large, dramatic foliage that can sometimes be variegated.',
        type: 'Tropical',
        price: 30
    };

    addProduct(newPlant);

    products = getProducts();
    expect.equal(products.length, 7);
});