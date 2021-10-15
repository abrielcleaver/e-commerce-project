import { toUSD } from './utils.js';

export function renderLineItem(cartItems, productData){
    const tr = document.createElement('tr');
    
    const tdName = document.createElement('td');
    tdName.textContent = productData.name;
    
    const tdPrice = document.createElement('td');
    tdPrice.textContent = productData.price;
    
    const tdQty = document.createElement('td');
    tdQty.textContent = cartItems.qty;
    
    const tdTotal = document.createElement('td');
    const total = cartItems.qty * productData.price;
    tdTotal.textContent = toUSD(total);

    tr.append(tdName, tdPrice, tdQty, tdTotal);

    return tr;
}