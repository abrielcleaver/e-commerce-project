export function renderProduct(products){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productHeader = document.createElement('h2');
    productHeader.textContent = products.name;

    const img = document.createElement('img');
    img.src = products.img;

    const type = document.createElement('p');
    type.textContent = products.type;

    const description = document.createElement('p');
    description.textContent = products.description;

    const price = document.createElement('p');
    price.textContent = products.price;

    const button = document.createElement('button');
    button.id = products.id;
    button.textContent = 'ADD TO CART';

    productCard.append(productHeader, img, description, type, price, button);
    return productCard;
}