function ecommerce () {

    let greet = "WELCOME TO ALL PHONES LINK"//  welcome greeting
    let about = "WE SALE ALL TYPES OF QUALITY AND AFFORDABLE PHONES AND WE ARE LOCATED IN FIFTEEN STATES IN NIGERIA"//about our products and location.
    const phone =[
        {
            productId: "1",
            name : "Samsung",
            price : "10000",
            quantity : "10",
            location : "Kano"
        },
    
        {
            productId: "2",
            name : "Oppo",
            price : "20000",
            quantity : "20",
            location : "Kaduna"
        },
        {

          productId: "3",  
            name : "Sony",
            price : "30000",
            quantity : "30",
            location : "Abuja"
    
        },
    
        {
            productId: "4",
            name : "Nokia",
            price : "40000",
            quantity : "40",
            location : "Kogi"
    
        },
    
        {
            productId: "5",
            name : "LG",
            price : "50000",
            quantity : "50",
            location : "Enugu"
        },
        {
            productId: "6",
            name : "Tecno",
            price : "60000",
            quantity : "60",
            location : "Imo"
        },
    
        {
            productId: "7",
            name : "Itel",
            price : "70000",
            quantity : "70",
            location : "Benue"
        },
    
        {
            productId: "8",
            name : "iphone",
            price : "80000",
            quantity : "80",
            location : "Lagos"
        },
    
        {
            productId: "9",
            name : "Huawei",
            price : "90000",
            quantity : "90",
            location : "Yobe"
        },
    
        {
            productId: "10",
            name : "Infinix",
            price : "100000",
            quantity : "100",
            location : "Edo"
        },
    
        {
            productId: "11",
            name : "Vivo",
            price : "110000",
            quantity : "110",
            location : "Bauchi"
        },
    
        {
            productId: "12",
            name : "Apple",
            price : "120000",
            quantity : "120",
            location : "Anambra"
        },
    
        {
            productId: "13",
            name : "Fairphone",
            price : "130000",
            quantity : "130",
            location : "Ebonyi"
        },
    
        {
            productId: "14",
            name : "Blackberry",
            price : "140000",
            quantity : "140",
            location : "Oyo"
        },
    
        {productId: "15",
            name : "Xiaomi",
            price : "150000",
            quantity : "150",
            location : "Rivers"
        }
    
        
    ]

    let goodbye = "THANK YOU FOR PATRONIZING US"
    console.log(greet)
    console.log(about)

    for (const phones of phone) {
        console.log(`The Product ID is ${phones.productId} The name of the phone is ${phones.name}, The price is ${phones.price}, The quantity is ${phones.quantity},The location is ${phones.location}`)
    }
    console.log(goodbye)
}

ecommerce()