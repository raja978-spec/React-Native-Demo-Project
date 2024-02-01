import {
    View, Text, Pressable, StyleSheet, Image, ScrollView, TouchableOpacity
}
    from 'react-native';
import { productData } from '../data';

const styles = StyleSheet.create({
    imgvw: {
        borderRadius: 10,
        width: 160,
        margin: 5,
        padding: 10
    },
    imgSty: {
        width: 160, 
        borderRadius: 10,
        margin: 10,
        justifyContent: "center", alignItems: "center",
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

export default function Product({ navigation, route }) {
    const g = route.params.gender
    let productImages=productData(g)
    
    return (
        <View style={{ flex: 1}}>
            <ScrollView style={{ flex: 0.90,backgroundColor:"white"}}>
                <View style={{ flexDirection: "row", flexWrap: "wrap"}}>
                    {
                        Object.keys(productImages).map((e, i) => (
                            <View
                            style={[styles.imgSty,{elevation:10
                            }]}
                            key={i}
                            >
                                {console.log("Product page price ",productImages[e].price)}
                           
                                <TouchableOpacity onPress={() => navigation.push("View",
                                    { id: e, pr: productImages[e].price })}
                                    style={styles.imgSty}
                                >
                                    <Image
                                        style={{marginTop:20 ,width:100,height:100}}
                                        source={productImages[e].image}
                                    />

                                    <Text style={{textAlign:"center",
                                     width:120,height:120,padding:10
                                     }}>
                                        {productImages[e].description}
                                    </Text>

                                    <Text style={{ color: "lightcoral"}}
                                     numberOfLines={2}
                                    >
                                        PRICE: <Text style={{ color: "blue" }}>
                                            {productImages[e].price}</Text></Text>
                                </TouchableOpacity>

                            </View>


                        ))
                    }

                </View>
            </ScrollView>
            {
                /*
                 <View style={styles.btmvw}>
            <View style={styles.iconvw}>
                <TouchableOpacity onPress={() =>navigation.navigate("home")}>
                    <Icon name="home" size={30} color="white" />

                </TouchableOpacity>
            </View>
            </View>
            
                */
            }

        </View>
    )
}