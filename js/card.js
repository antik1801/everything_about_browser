const addProduct = () =>{
    const productField = document.getElementById('Product-name');
    const productQuantity = document.getElementById('Product-quantity');
    const product = productField.value;
    const quantity = productQuantity.value;
    // console.log(`Product name: ${product} && Product quantity : ${quantity}`);
    productField.value="";
    productQuantity.value="";
    displayProduct(product,quantity);
    saveProductToLocalStorage(product,quantity);

    // show the enter product into 'product-container'
}

const displayProduct = (product, quantity) =>{
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}
const getStoredShoppingCart = () =>{
    // suppose we will find a key in localSTorage named cart
    let cart = {}
    const storedCart = window.localStorage.getItem('cart')
    // if storedCart is available in the localSTorage we change it as a object
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    // else we will add the item as a string
    return cart;
}   

const saveProductToLocalStorage = (product,quantity) =>{
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cardStringified = JSON.stringify(cart);
    window.localStorage.setItem("cart", cardStringified);
}

const displayProductsFromLocalStorage = () =>{
    const saveCards = getStoredShoppingCart();
    // console.log(saveCards);
    for (const product in saveCards) {
        if (Object.hasOwnProperty.call(saveCards, product)) {
            const quantity = saveCards[product];
            displayProduct(product,quantity)
            
        }
    }
}

displayProductsFromLocalStorage();