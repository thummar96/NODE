const bcrypt = require("bcryptjs");

const productsData = {
    Products : [
        {
            id:"P0001",
            name:"Macbook Air",
            description:"The MacBook Air has an anodized aluminum casing that is 0.16 inches at its thinnest point and 0.76 inches at its thickest. Often described as the same size as a pad of paper, the laptop has just one USB port, an audio headphone jack and built-in speakers and microphone.",
            richDescription:"https://www.apple.com/in/macbook-air-m1/",
            image:"path",
            images:"Folder paths",
            brand:"Apple",
            price:100000,
            category:"63c9170fd17a49d1005e64da",
            countInStock:999,
            rating:5,
            isFeatured:true,
            dateCreated:20230119
        }
    ]
}

module.exports=productsData;