/*
Controller for Products Page
Control + / for comments
JSON.stringify() needed for localstorage array saves
JSON.parse() needed for localstorage array save retrival
See here: https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage
*/

const products = [] // The storage array of objects for each product.

if (localStorage.getItem('productsSave') != null) {
    let savedProducts = JSON.parse(localStorage.getItem('productsSave')) // Gets the saved products from LocalStorage.
    for (let i = 0; i<savedProducts.length; i++) {
        products.push(savedProducts[i])
    }
}

function createProduct(productName="", productDescription="",productPrice=0.00, Image="") {
    if (productName !="" && productDescription !="" && productPrice !=0.00) {
        if (Image == "") {Image="https://cdn-icons-png.flaticon.com/512/75/75519.png"}
            let template = {
                name: productName,
                description: productDescription,
                image: Image,
                price: Number(productPrice).toFixed(2),
            }
                products.push(template)
                saveProducts()
                // Insertion Code/function
        }
    else {
        console.error('Missing atleast 1 parameter')
        stop()
    }
}

function insertProduct(productName="", productDescription="", Image=0, productPrice=0.00) {
    if (productName == "") {
        console.error('Product Controller: addProduct() called but "productName" not provided. Error 280')
        stop()}
    else if (productDescription == "") {
        console.error('Product Controller: addProduct() called but "productDescription" not provided. Error 281')
        stop()}
    else if (Image == 0) {
        console.warn('Product Controller: addProduct() called but "Image" not provided. Default image has been applied ')
        // Apply a default image
    }
    else if (productPrice == 0.00) {
        console.error('Product Controller: addProduct() called but "productPrice" not provided')
        stop()
    }
    else {
        // Code
        const Container = document.getElementById('productsContainer')
        const ele = document.createElement()
        ele.id = toString(productName);
        ele.Class = 'Product'

    }
}

function saveProducts() {
    try {
        localStorage.setItem('productsSave', JSON.stringify(products)) // Saves the products to LocalStorage.
    }
    catch {
        console.error('Product Controller: An error occured while saving products array. Error 289')
    }
}

function searchProducts(productName) {
    // Used for searching for Product(s)
    for (let oo = 0; oo<products.length; oo++) {
        if (products[oo].name == productName) {
            return products[oo]
        }
    }
}

function removeProduct(reqProductsName) {
    // Used for removing an product from the array.
    let findProduct;
    for (let k = 0; k<products.length; k++) {
        if (products[k].name == reqProductsName) {
            findProduct = products[k].name
            products.splice(k, 1)
        }
    }
    let findProductElement = document.getElementById(findProduct)
    findProductElement.remove()
}

function testCreateProduct() {
    // Used for debugging purposes and testing. Can be executed on console
    let PN = window.prompt('Enter the Products Name:')
    let PD = window.prompt('Enter the Products Description:')
    let PP = window.prompt('Enter a Products Price: (In format: 0.00)')
    let PI = window.prompt('Enter a path to Products Image: (Leave blank for default)')
    if (PI !='') {
        createProduct(PN,PD,PP,PI) // Sends all prompt data to createProduct function.
    }
    else {createProduct(PN,PD, PP, "")} // Sends all prompt data to createProduct function.}
}

function clearLocalStorage() {
    try {
        localStorage.clear() // Removes all saves from LocalStorage.
    }
    catch {
        console.error('Product Controller: An error occured while clearing local storage')
    }
}

function clearProductSave() {
    try {
        localStorage.removeItem('productsSave') // Removes just the Products save from LocalStorage.
    }
    catch {
        console.error('Product Controller: An error occured while clearing Products Save.')
    }
}

function refreshProducts() {
    // Clear existing product elements
    let findProducts = document.getElementsByClassName('productContClass')
    for (let o = 0; o<findProducts.length; o++) {
        findProducts[o].remove()
    }
    // Refresh
    // Get from storage
    if (localStorage.getItem('productsSave') != null) {
        products = JSON.parse(localStorage.getItem('productsSave'))
    }
    // Insert all
    for (let f = 0; f<products.length; f++) {
        let params = products[f]
        insertProduct(params.name, params.description, params.image, params.price)
    }
}