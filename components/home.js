import {
    Button, View, Text, StyleSheet,
    Pressable, ImageBackground, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
    vw: {
        flex: 1, justifyContent: "center", alignItems: "center",
        borderColor: "white",
        borderWidth: 10,
    },
    txt: {
        fontStyle: "italic",
        color: "white",
        fontSize: 60,
        borderColor: "palegoldenrod",
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 80,
        textAlign: "center"
    },
    btn: {
        width: 200,
        height: 60,
        backgroundColor: "peachpuff",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 150,

    },
    btntxt: {
        fontSize: 19
    }
})

export default function Home({ navigation }) {
    return (
        <ImageBackground style={styles.vw} source={require('../bg_image/bg4.jpg')}>

            <View style={{ margin: 7 }}>
                <Text style={styles.txt}>Welcome To Watchy</Text>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Products")} >
                    <Text style={styles.btntxt}>SHOW PRODUCTS</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={[styles.btn, { width: 150, marginTop: 30 }]}
                    onPress={() => navigation.navigate("Brands")}
                >
                    <View style={{ flexDirection: "row" }}>
                        <Icon name="branding-watermark"
                            style={{ marginRight: 10 }} size={25}
                            color={"white"} />
                        <Text style={styles.btntxt}>BRANDS</Text>
                    </View>

                </TouchableOpacity>

            </View>


        </ImageBackground>

    )
}