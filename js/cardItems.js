

const catchProduct = () =>{
    // catch 2 input fields
    const productName = document.getElementById('Product-name');
    const productQuantity = document.getElementById('Product-quantity');
    const product = productName.value;
    const quantity = productQuantity.value;
    // clear the input
    productName.value='';
    productQuantity.value='';
    showProduct(product,quantity);
    setItemsToLocalStorage(product,quantity);
}

const showProduct = (product,quantity) =>{
    const ul = document.getElementById('product-list');
    const li = document.createElement('li');
    li.innerText = `Product: ${product} Quantity: ${quantity}`
    ul.appendChild(li);
}

const getItemsToLocalStorage = () =>{
    let cart ={};
    const storedCart = localStorage.getItem("cart");
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const setItemsToLocalStorage = (product,quantity) =>{
    const cart = getItemsToLocalStorage();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    window.localStorage.setItem('cart', cartStringified);
}


const displayProductsFromLocalStorage = () =>{
    const savedCart = getItemsToLocalStorage();
    for (const product in savedCart) {
        if (Object.hasOwnProperty.call(savedCart, product)) {
            const quantity = savedCart[product];
            showProduct(product,quantity);
        }
    }
}
displayProductsFromLocalStorage();