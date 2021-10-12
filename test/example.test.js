// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderProduct } from "../data/render-product.js";
import { products} from "../data/products.js";

const test = QUnit.test;

test('renderProduct should return HTML snippet', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="product-card"><h2>Pothos</h2><img src="./assets/pothos-severin-candrian-GG9Gh1_FjbM-unsplash.jpg"><p>Epipremnum aureum, also known as pothos, is native to Mo'orea</p><p>Tropical</p><p>$20</p><button value=\"1\">ADD TO CART</button></div>`;
    const pothos = products[0];
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProduct(pothos).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
