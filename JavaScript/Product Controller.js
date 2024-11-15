// Controller for Products Page
// JSON.stringify() needed for localstorage array saves
// JSON.parse() needed for localstorage array save retrival
// See here: https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage

const products = []

if (localStorage.getItem('productsSave') =~ null) {
    products = JSON.parse(localStorage.getItem('productsSave'))
}

function productCheck(reqProductName) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].productName == reqProductName)
            return true
    }
}

function createProduct(productName="", productDescription="", Image=0, productPrice=0.00) {
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
        if (productCheck(productName) == true) {
            console.error('Product Controller: Product already exists! Error 288')
        }
        else {
            let template = {
                name: toString(productName),
                description: toString(productDescription),
                image: Image,
                price: Number(productPrice).toFixed(2),
            }
            products.push(template)
            saveProducts()
            // Insertion Code/function
            insertProduct(productName, productDescription, Image, productPrice)
        }
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
    }
}

function saveProducts() {
    try {
        localStorage.setItem('productsSave', JSON.stringify(products))
    }
    catch {
        console.error('Product Controller: An error occured while saving products array. Error 289')
    }
}

function searchProducts(searchType) {
    // Used for searching for Product(s)
}

function removeProduct(reqProductsName) {
    // Used for removing an product from the array.
}

function testCreateProduct() {
    let PN = window.prompt('Enter the Products Name:')
    let PD = window.prompt('Enter the Products Description:')
    let PI = window.prompt('Enter a path to Products Image: (Leave blank for default)')
    let PP = window.prompt('Enter a Products Price: (In format: 0.00)')
    createProduct(PN,PD,PI,PP) // Sends all prompt data to addProduct function.
}

function clearLocalStorage() {
    try {
        localStorage.clear()
    }
    catch {
        console.error('Product Controller: An error occured while clearing local storage')
    }
}

function clearProductSave() {
    try {
        localStorage.removeItem('productsSave')
    }
    catch {
        console.error('Product Controller: An error occured while clearing Products Save.')
    }
}

function testLoadProducts() {
    return products
}

function refreshProducts() {
}

function getProducts() {
    try {
        return products
    }
    catch {
        console.error('Product Controller: An error occured while loading products array. Error 290')
    }
}
