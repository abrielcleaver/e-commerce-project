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