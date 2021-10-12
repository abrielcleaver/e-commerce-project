export function renderProduct(products){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productHeader = document.createElement('h2');
    productHeader.textContent = products.name;

    const img = document.createElement('img');
    img.src = products.img;

    const button = document.createElement('button');
    button.value = products.id;
    button.textContent = 'add to cart';

    productCard.append(productHeader, img, button);
    return productCard;
}