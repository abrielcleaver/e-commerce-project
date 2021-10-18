export function findById(id, items){
    // loop through the items
    for (let item of items){
        // if the item's id is equal to the id argument, return the item
        if (item.id === id){
            return item;
        }
        // else continue the loop
    }
}

export function calculateOrderTotal(cart, products) {
    // initialize a variable to keep track of total
    // loop through the cart items
    // get the associated product from the product list
    // add the qty * price to the total
    // return the total
    
    let orderTotal = 0;
    for (let item of cart){
        const product = findById(item.id, products);
        orderTotal = orderTotal + product.price * item.qty;
    }
    return orderTotal;
}

export function toUSD(number){
    return number.toLocaleString('en-us', { style: 'currency', currency: 'USD' });
}

// getCart
    // get the cart from ls
    // parse from JSON to JS
    // if the cart doesn't exist yet -- return empty array
export function getCart(){
    const cartString = localStorage.getItem('CART') || '[]';
    const cart = JSON.parse(cartString);
    
    return cart;
}
// addItem(id) --> will increment by 1 (for now)
        // call getCart()
        // use findById to find matching cartItem with the id
        // if cartItem is found, increment qty by 1
        // else create new cartItem with id and qty = 1
        // stringify the cart back to JSON
        // set the cart to ls
export function addItem(id){
    const cart = getCart();
    
    const cartItem = findById(id, cart);
    if (cartItem){
        cartItem.qty++;
    } else {
        const newCartItem = { id: id, qty: '1' };
        cart.push(newCartItem);
    }
    const stringCart = JSON.stringify(cart);
    localStorage.setItem('CART', stringCart);
}

// clearCart
// localStorage.removeItem('CART')

export function clearCart(){
    const clearString = localStorage.setItem('CART') || '[]';
    const clearCrt = JSON.parse(clearString);

    return clearCrt;
}
import { products } from './data/products.js';

export function getProducts() {
    // get products from LS
    let storageProducts = localStorage.getItem('PRODUCTS');
    const plants = JSON.parse(storageProducts);
    // if there are NO products in LS -- seed the data
    if (!plants){
        const productString = JSON.stringify(products);
        localStorage.setItem('PRODUCTS', productString);
    }
    return plants || products;
}