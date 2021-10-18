// import { products } from '../data/products.js';
import { calculateOrderTotal, findById, toUSD, getCart, getProducts } from '../utils.js';
import { renderLineItem } from '../render-line-item.js';

const cart = getCart();
const products = getProducts();
// cartItem: {id:'1', qty: 2}
const tbody = document.getElementById('table-body');
for (let cartItem of cart){
    const productData = findById(cartItem.id, products);

    const tr = renderLineItem(cartItem, productData);
    tbody.appendChild(tr);
}

const orderTotal = calculateOrderTotal(cart, products);
const tdOrderTotal = document.getElementById('total');
tdOrderTotal.textContent = toUSD(orderTotal);

const orderBtn = document.getElementById('order-button');
orderBtn.addEventListener('click', ()=>{
    localStorage.removeItem('CART');
    window.location.replace('..');
});