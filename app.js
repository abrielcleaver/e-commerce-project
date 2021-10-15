// import functions and grab DOM elements

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

import { renderProduct } from './data/render-product.js';
import { products } from './data/products.js';
import { addItem } from './utils.js';

const productList = document.getElementById('product-list');

for (let product of products){
    const productCard = renderProduct(product);
    productList.append(productCard);
}

// loop through ALL add buttons
// addEventListener to each one
// 'click' calls addItem with buttons id

const addButtons = document.querySelectorAll('button');
for (let addBtn of addButtons){
    addBtn.addEventListener('click', ()=>{
    // console.log(addBtn.id);
        addItem(addBtn.id);
        alert('Added to Cart!');
    });
}