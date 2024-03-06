const prompt = require('prompt-sync') ()
const ecommerceProduct  = [

    {
        productId: "12345if",
        productName: "sugar",
        productQuantity: "10",
        productPrice: "4,000",
    
    },
    {
        productId: "62345ef",
        productName: "garri",
        productQuantity: "20",
        productPrice: "8,000",
    
    },
    {
        productId: "1445ej",
        productName: "beans",
        productQuantity: "30",
        productPrice: "4,000",
    
    },
    {
        productId: "1665df",
        productName: "coke",
        productQuantity: "40",
        productPrice: "10,000",
    
    },
    {
        productId: "74445gt",
        productName: "yam",
        productQuantity: "50",
        productPrice: "4000",
    
    },
    {
        productId: "33344ce",
        productName: "rice",
        productQuantity: 60,
        productPrice: "7,000",
    },
    {
        productId: "67668er",
        productName: "bread",
        productQuantity: 70,
        productPrice: "5,000",
    },
    {
        productId: "16788eij",
        productName: "juice",
        productQuantity: 80,
        productPrice: "4,000",
    
    },
    {
        productId: "77457ge",
        productName: "onions",
        productQuantity: 90,
        productPrice: "6,000",
    
    },
    {
        productId: "72345mo",
        productName: "egg",
        productQuantity: 100,
        productPrice: "6,700",
    
    },
    {
        productId: "89002ty",
        productName: "corn",
        productQuantity: 110,
        productPrice: "7,500",
    
    },
    {
        productId: "61223jk",
        productName: "wheat",
        productQuantity: 120,
        productPrice: "14,000",
    
    },
    {
        productId: "77654ik",
        productName: "garlic",
        productQuantity: 130,
        productPrice: "45,000",
    
    },
    {
        productId: "76555fg",
        productName: "ginger",
        productQuantity: 140,
        productPrice: "45,000",
    
    },
    {
        productId: "67452ui",
        productName: "pepper",
        productQuantity: 150,
        productPrice: "4,300",
    }
]



// arrays to hold all the cart items
const cart = []

// // function to display products
// function displayProducts(){
//     for (const product of ecommerceProduct) {
//         console.log(`${product.productId} ${product.productName} and price is ${product.productPrice}`)
//     }
// }

// displayProducts()

// function to add to cart 

function addToCart(itemID){
    const selectedProduct = ecommerceProduct.find((item) => item.productId === itemID)
    if (selectedProduct) {
        cart.push(selectedProduct.productName)
        console.log(cart)
    }else{
        console.log("Sorry.... Product Does not exist")
    }
}

addToCart("67452ui")

function displayCart(){
    for(const item of cart){
        console.log("Our product name is " + item)
    }
}

displayCart()


addToCart("77654ik", )

function displayCart(){
    for(const item of cart){
        console.log("Our product name is " + item.productName)
    }

    // using the the reduce function to get the total price of the items in the cart
    const total = cart.reduce((tottal, item) => tottal + item.productPrice, 0) 
    console.log(`The total price of the Products you puchased is $ ${total}`)
}



// displayCart()