const getDataFromLocalStorage = () => {
    const cartFromLS = localStorage.getItem("cart");
    let cart = {};
    if (cartFromLS) {
        cart = JSON.parse(cartFromLS);
    }
    return cart;
};



const getDataFromWebsite = () => {
    // get data from website
    const ProductName = document.getElementById("ProductsName");
    const ProductQuantity = document.getElementById("ProductsQuantity");

    const product = ProductName.value;
    const quantity = ProductQuantity.value;
    setDataToLocalStorage(product, quantity)
    // clear input
    ProductName.value = '';
    ProductQuantity.value = '';
    // console.log(convertedCart);

}
const setDataToLocalStorage = (product, quantity) => {
    const cart = getDataFromLocalStorage();
    cart[product] = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
}

const displayProductFromLs = () => {
    const products = getDataFromLocalStorage();
    for (const product in products) {
        displayProduct(product, products[product]);
    }

}

const displayProduct = (product, quantity) => {
    // create li to set website
    const li = document.createElement("li");
    li.innerText = `${product} : ${quantity}`;
    document.getElementById("productList").appendChild(li);

}




getDataFromLocalStorage();
displayProductFromLs();