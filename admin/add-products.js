// get form and create new object from formData

import { addProduct } from '../utils.js';

const form = document.getElementById('product-form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const data = new FormData(form);
    const newPlant = {
        id: data.get('id'),
        name: data.get('name'),
        img: data.get('img'),
        description: data.get('description'),
        type: data.get('type'),
        price:data.get('price')
    };

    addProduct(newPlant);
    alert('Plant successfully added');
});