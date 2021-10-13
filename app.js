// import functions and grab DOM elements

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

import { renderProduct } from './data/render-product.js';
import { products } from './data/products.js';

const productList = document.getElementById('product-list');

for (let product of products){
    const productCard = renderProduct(product);
    productList.append(productCard);
}