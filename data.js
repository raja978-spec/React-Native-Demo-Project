export function productData(g){
    let productImages;

    if (g == "male") {

        productImages =
        {
            product1: {
                image: require("./product_images/watch1.jpg"),
                price: "500",
                description: "PunnkFunnk T800 1.99 Inch Display Android Ultra Wave Astra Bluetooth Calling Smart Watch"
            },
            product2: {
                image: require('./product_images/watch2.jpg'),
                price: "405",
                description: "Dicto MID116 Plus Smart Bracelet Fitness Tracker Color Screen Smart Watch"
            },
            product3: {
                image: require('./product_images/watch3.jpg'),
                price: "2,777",
                description: "Maxima Max Pro 2 1.83 inch HD Display Smart Watch (Black)"
            },
            product4: {
                image: require('./product_images/watch4.jpg'),
                price: "2,990",
                description: "Play Playfit Slim Mystic Blue IPS Display Smart Watch Distance Tracker, Calorie Tracker"
            },
            product5: {
                image: require('./product_images/watch5.jpg'),
                price: "3,599",
                description: "Play 1.75 inch Gold+Pink Full Touch Smart Watch in-Built EBEL Speaker,Blood Pressure Monitor"
            },
            product6: {
                image: require('./product_images/watch6.jpg'),
                price: "3,539",
                description: "Play Playfit Champ 2 Indigo Blue TFT Display Smart Watch Sleep Monitor, Blood Pressure Monitor"
            },
        }
    }
    if (g == "female") {
        productImages =
        {
            gproduct1: {
                image: require('./product_images/gwatch1.jpg'),
                price: "500",
                description: "PunnkFunnk T800 1.99 Inch Display Android Ultra Wave Astra Bluetooth Calling Smart Watch"
            },
            gproduct2: {
                image: require('./product_images/gwatch2.jpg'),
                price: "405",
                description: "Dicto MID116 Plus Smart Bracelet Fitness Tracker Color Screen Smart Watch"
            },
            gproduct3: {
                image: require('./product_images/gwatch3.jpg'),
                price: "2,777",
                description: "Maxima Max Pro 2 1.83 inch HD Display Smart Watch (Black)"
            },
            gproduct4: {
                image: require('./product_images/gwatch4.jpg'),
                price: "2,990",
                description: "Play Playfit Slim Mystic Blue IPS Display Smart Watch Distance Tracker, Calorie Tracker"
            },
            gproduct5: {
                image: require('./product_images/gwatch5.jpg'),
                price: "3,599",
                description: "Play 1.75 inch Gold+Pink Full Touch Smart Watch in-Built EBEL Speaker,Blood Pressure Monitor"
            },
            gproduct6: {
                image: require('./product_images/gwatch6.jpg'),
                price: "3,539",
                description: "Play Playfit Champ 2 Indigo Blue TFT Display Smart Watch Sleep Monitor, Blood Pressure Monitor"
            },
        }
    }

    return productImages   

}

export function brandProducts(p){
    console.log("Data ",p)
    const productImages =
    {
     "Apple":{
            Aproduct1: {
                image: require('./product_images/Abrand1.jpg'),
                price: "500",
                description: "PunnkFunnk T800 1.99 Inch Display Android Ultra Wave Astra Bluetooth Calling Smart Watch"
            },
            Aproduct2: {
                image: require('./product_images/Abrand2.jpg'),
                price: "405",
                description: "Dicto MID116 Plus Smart Bracelet Fitness Tracker Color Screen Smart Watch"
            },
            Aproduct3: {
                image: require('./product_images/Abrand3.jpg'),
                price: "2,777",
                description: "Maxima Max Pro 2 1.83 inch HD Display Smart Watch (Black)"
            },
            Aproduct4: {
                image: require('./product_images/Abrand4.jpg'),
                price: "2,990",
                description: "Play Playfit Slim Mystic Blue IPS Display Smart Watch Distance Tracker, Calorie Tracker"
            },
            Aproduct5: {
                image: require('./product_images/Abrand5.jpg'),
                price: "3,599",
                description: "Play 1.75 inch Gold+Pink Full Touch Smart Watch in-Built EBEL Speaker,Blood Pressure Monitor"
            },
            Aproduct6: {
                image: require('./product_images/Abrand6.jpg'),
                price: "3,539",
                description: "Play Playfit Champ 2 Indigo Blue TFT Display Smart Watch Sleep Monitor, Blood Pressure Monitor"
            },
        },

        "Samsung":{
            Aproduct1: {
                image: require('./product_images/Abrand1.jpg'),
                price: "500",
                description: "PunnkFunnk T800 1.99 Inch Display Android Ultra Wave Astra Bluetooth Calling Smart Watch"
            },
            Aproduct2: {
                image: require('./product_images/Abrand2.jpg'),
                price: "405",
                description: "Dicto MID116 Plus Smart Bracelet Fitness Tracker Color Screen Smart Watch"
            },
            Aproduct3: {
                image: require('./product_images/Abrand3.jpg'),
                price: "2,777",
                description: "Maxima Max Pro 2 1.83 inch HD Display Smart Watch (Black)"
            },
            Aproduct4: {
                image: require('./product_images/Abrand4.jpg'),
                price: "2,990",
                description: "Play Playfit Slim Mystic Blue IPS Display Smart Watch Distance Tracker, Calorie Tracker"
            },
            Aproduct5: {
                image: require('./product_images/Abrand5.jpg'),
                price: "3,599",
                description: "Play 1.75 inch Gold+Pink Full Touch Smart Watch in-Built EBEL Speaker,Blood Pressure Monitor"
            },
            Aproduct6: {
                image: require('./product_images/Abrand6.jpg'),
                price: "3,539",
                description: "Play Playfit Champ 2 Indigo Blue TFT Display Smart Watch Sleep Monitor, Blood Pressure Monitor"
            },
        },

        "Fitbit":{
            Aproduct1: {
                image: require('./product_images/Abrand1.jpg'),
                price: "500",
                description: "PunnkFunnk T800 1.99 Inch Display Android Ultra Wave Astra Bluetooth Calling Smart Watch"
            },
            Aproduct2: {
                image: require('./product_images/Abrand2.jpg'),
                price: "405",
                description: "Dicto MID116 Plus Smart Bracelet Fitness Tracker Color Screen Smart Watch"
            },
            Aproduct3: {
                image: require('./product_images/Abrand3.jpg'),
                price: "2,777",
                description: "Maxima Max Pro 2 1.83 inch HD Display Smart Watch (Black)"
            },
            Aproduct4: {
                image: require('./product_images/Abrand4.jpg'),
                price: "2,990",
                description: "Play Playfit Slim Mystic Blue IPS Display Smart Watch Distance Tracker, Calorie Tracker"
            },
            Aproduct5: {
                image: require('./product_images/Abrand5.jpg'),
                price: "3,599",
                description: "Play 1.75 inch Gold+Pink Full Touch Smart Watch in-Built EBEL Speaker,Blood Pressure Monitor"
            },
            Aproduct6: {
                image: require('./product_images/Abrand6.jpg'),
                price: "3,539",
                description: "Play Playfit Champ 2 Indigo Blue TFT Display Smart Watch Sleep Monitor, Blood Pressure Monitor"
            },
        }

    }
 
    if(productImages[p]){
     return productImages[p]
    }
    else{
      return false
    }
}