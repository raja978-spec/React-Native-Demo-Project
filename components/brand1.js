import {
    View, Text, StyleSheet, ScrollView
    , Image,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import { brandProducts } from '../data';

const styles = StyleSheet.create({
    imgvw: {
        backgroundColor: "gray",
        borderRadius: 10,
        margin: 2,
        padding: 10,
    },
    imgSty: {
        width: 160, 
        borderRadius: 10,
        margin: 10,
        justifyContent: "center", 
        alignItems: "center",
        
    },
    btmvw: {
        flex: 0.10, marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    iconvw: {
        width: 60,
        height: 60,
        backgroundColor: "lightcoral",
        alignItems: "center", justifyContent: "center",
        borderRadius: 300,
        flexDirection: "row",
    }
});

function Brand1({ navigation, route }) {
    const b=route.params.brand
    const res=brandProducts(b)
    console.log(res)
    console.log(" ")
    console.log("________________________________________________________")
    const productImages=brandProducts(b)
    
    return (
        <View style={{ flex: 1}}>
            <ScrollView style={{ flex: 0.90,backgroundColor:"white" }}>
                <View style={{ flexDirection: "row", flexWrap: "wrap", }}>
                    {
                        productImages && Object.keys(productImages).map((e, i) => (

                            <View
                            style={[styles.imgSty,{elevation:10
                            }]}
                           key={i}
                            >
                                <TouchableOpacity onPress={() => navigation.push("View",
                                    { id: e, des: productImages[e].description
                                        ,pr: productImages[e].price })}
                                    style={styles.imgSty}
                                >
                                    <Image
                                        style={{ width:100,height:100,marginTop:20 }}
                                        source={productImages[e].image}
                                    />

                                    <Text style={{textAlign:"center",padding:10,
                                      width:120,height:120
                                      }}>
                                        {productImages[e].description}
                                    </Text>

                                    <Text style={{ color: "lightcoral",}}>
                                        PRICE: <Text style={{ color: "blue" }}>
                                            {productImages[e].price}</Text></Text>
                                </TouchableOpacity>

                            </View>


                        ))
                    }

                </View>
            </ScrollView>
        </View>
    
    )
}
export {Brand1}