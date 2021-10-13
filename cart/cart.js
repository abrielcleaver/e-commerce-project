import { products } from '../data/products.js';
import { cartItems } from '../data/cart-data.js';
import { calculateOrderTotal, findById, toUSD } from '../utils.js';
import { renderLineItem } from '../render-line-item.js';
console.log(cartItems);

// cartItem: {id:'1', qty: 2}
const tbody = document.getElementById('table-body');
for (let cartItem of cartItems ){
    const productData = findById(cartItem.id, products);

    const tr = renderLineItem(cartItem, productData);
    tbody.appendChild(tr);
}

const orderTotal = calculateOrderTotal(cart, products);
const tdOrderTotal = document.getElementById('total');
tdOrderTotal.textContent = toUSD(orderTotal);
