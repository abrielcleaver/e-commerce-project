## Lab 07: Shopping Cart

### New Files
*  `cart/` folder w/
    * `index.html`
    * `render-line-items.js`  (Julie's demo file shows cart/cart.js)
* `data/` folder w/
    * `cart-data.js`

### Getting Started

* Make new index.html file in folder named cart/
    * HTML can be generated using !
* Test that page works - visit in live server and add /cart/ to the end of the URL


### Step 1
* Create static HTML table in cart/index.html w/following:
    * Table header `<th>`
        * Product
        * Price
        * Qty
        * Total
    * Table body `<tbody>`
        * empty static element
    * Table footer `<tfoot>`
        * 2 empty `<td>`
        * order total `<td>`

### Step 2

* Make a new folder - data/
* create file cart-data.js within data/
* export array literal
    const cart = [{ items in the cart }]

ACP

### Step 3

* Make file `utils.js` in root directory
* create function `findById` in `utils.js`
    ``` js
    export const findById(id, array){
        for (item of array) {
            if (item.id === id){
                return item;
            } else {
                return null;
            }
        }

    }

    * TDD `findById` function using `expect.deepEqual`
        ACP

### Step 4

* make new file in `cart/` called `render-line-items.js`
* using static HTML example, copy in and comment out
* 