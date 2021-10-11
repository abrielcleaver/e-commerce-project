export function renderProduct(products){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productHeader = document.createElement('h2');
    productHeader.textContent = products.name;

    const img = document.createElement('img');
    img.src = products.img;

    productCard.append(productHeader, img);
    return productCard;
}