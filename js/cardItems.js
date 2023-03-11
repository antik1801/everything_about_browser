

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
}

const showProduct = (product,quantity) =>{
    const ul = document.getElementById('product-list');
    const li = document.createElement('li');
    li.innerText = `Product: ${product} Quantity: ${quantity}`
    ul.appendChild(li);
}

const getItemsToLocalStorage = () =>{
    
}

const setItemsToLocalStorage = () =>{

}