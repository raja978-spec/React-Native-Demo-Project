import {
    View, Text, Image, Pressable, TouchableOpacity, 
    ScrollView, StyleSheet, Alert
}
    from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
    mainvw: {
        flex: 100, backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    buyBtonVw:{
        height: 40, 
        backgroundColor: "peachpuff", 
        borderRadius: 10,
        margin:15
    },
    bottomvw:{
        flex: 10, 
        marginBottom: 10, 
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center",
    },

    iconvw:
        {
            width: 50,
            backgroundColor: "lightcoral",
            alignItems: "center", justifyContent: "center",
            borderRadius: 300,
            margin: 15

        },
    imgStyle:{ 
        flex: 30 ,justifyContent:"center"
        ,alignItems:"center",
    },
    alertMessage: {
        fontSize: 18,
        color: 'blue',
      },

})

export default function ViewProduct({ navigation, route }) {

    let p=route.params.id;
    let pri=route.params.pr;
    console.log("Viewprodt got price",pri)
    let productImages;

    if(p === "product1" ||p === "product2" ||p === "product3" || p ==="product4" 
    ||p === "product5" ||p === "product6"
    ){
    productImages =

    {
        product1: {
            image: require('../full_product_image/watch1f.png'),
            price: "500",
            description: require('../full_product_image/watch1fd.png')
        },
        product2: {
            image: require('../full_product_image/watch2f.png'),
            price: "500",
            description: require('../full_product_image/watch2fd.png')
        },
        product3: {
            image: require('../full_product_image/watch3f.png'),
            price: "500",
            description: require('../full_product_image/watch3fd.png')
        },
        product4: {
            image: require('../full_product_image/watch4f.png'),
            price: "500",
            description: require('../full_product_image/watch4fd.png')
        },
        product5: {
            image: require('../full_product_image/watch5f.png'),
            price: "500",
            description: require('../full_product_image/watch5fd.png')
        },
        product6: {
            image: require('../full_product_image/watch6f.png'),
            price: "500",
            description: require('../full_product_image/watch1fd.png')
        },

    }
   }

   if(p === "gproduct1" || p ==="gproduct2" || p ==="gproduct3" || p ==="gproduct4" 
   || p ==="gproduct5" || p ==="gproduct6"
   ){
    productImages =

    {
        gproduct1: {
            image: require('../full_product_image/watch1fg.png'),
            price: "500",
            description: require('../full_product_image/watch1fd.png')
        },
        gproduct2: {
            image: require('../full_product_image/watch2fg.png'),
            price: "500",
            description: require('../full_product_image/watch2fd.png')
        },
        gproduct3: {
            image: require('../full_product_image/watch3fg.png'),
            price: "500",
            description: require('../full_product_image/watch3fd.png')
        },
        gproduct4: {
            image: require('../full_product_image/watch4fg.png'),
            price: "500",
            description: require('../full_product_image/watch4fd.png')
        },
        gproduct5: {
            image: require('../full_product_image/watch5fg.png'),
            price: "500",
            description: require('../full_product_image/watch5fd.png')
        },
        gproduct6: {
            image: require('../full_product_image/watch6fg.png'),
            price: "500",
            description: require('../full_product_image/watch1fd.png')
        },

    }
   }

   if(p==="Aproduct1" || p==="Aproduct2" ||
   p==="Aproduct3" || p==="Aproduct4"
   || p==="Aproduct5"|| p==="Aproduct6" ){
    productImages={
        Aproduct1: {
            image: require('../product_images/Abrand1.jpg'),
            price: "500",
            description: require('../full_product_image/watch3fd.png')
        },
        Aproduct2: {
            image: require('../product_images/Abrand2.jpg'),
            price: "405",
            description: require('../full_product_image/watch3fd.png')
        },
        Aproduct3: {
            image: require('../product_images/Abrand3.jpg'),
            price: "2,777",
            description: require('../full_product_image/watch3fd.png')
        },
        Aproduct4: {
            image: require('../product_images/Abrand4.jpg'),
            price: "2,990",
            description: require('../full_product_image/watch3fd.png')
        },
        Aproduct5: {
            image: require('../product_images/Abrand5.jpg'),
            price: "3,599",
            description: require('../full_product_image/watch3fd.png')
        },
        Aproduct6: {
            image: require('../product_images/Abrand6.jpg'),
            price: "3,539",
            description: require('../full_product_image/watch3fd.png')
        },
    }
   }


    return (
        <>
            <View style={styles.mainvw}>
                <ScrollView style={{ flex: 0.90}}>
                    <View style={[styles.imgStyle,{marginBottom:100}]}>
                        <Image
                            style={{width:300,height:300}}
                            source={productImages[p].image}
                            resizeMode='contain'
                        />
                    </View>

                    <View style={{ flex: 30 }}>
                        <Image
                            source={productImages[p].description}
                        />
                    </View>
                    <View style={[{flex: 20,marginTop:30,flexDirection:"row"},styles.mainvw]}>
                    
                         <Pressable style={[styles.buyBtonVw,{width:100,
                            flexDirection:"row",justifyContent:"center",
                            alignItems:"center"}]}
                            onPress={()=>navigation.push("Buy",{Pri:pri})}
                            >

                            <View style={{marginRight:10,
                            backgroundColor:"white",borderRadius:5}}
                            >
                            <Icon name="shopping-cart" size={20} />
                            </View>

                            <Text style={{ fontSize: 15, 
                            textAlign: "center",
                            fontWeight:"bold",
                            }}>Buy</Text>

                        </Pressable>
                        
                        <Pressable style={[styles.buyBtonVw,{width:150,
                            flexDirection:"row",
                            justifyContent:"center",
                            alignItems:"center"}]}>

                            <View style={{marginRight:10,backgroundColor:"white",borderRadius:5}}>
                            <Icon name="add-shopping-cart" size={20} />
                            </View>
                            <Text style={{ fontSize: 15, 
                                textAlign: "center",
                                fontWeight:"bold",
                                 }}
                            >Add to cart</Text>

                        </Pressable>
                    </View>
                    
                  
                </ScrollView>
            </View>
           
        </>


    )
}