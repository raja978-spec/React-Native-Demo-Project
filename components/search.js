import
{
View,TextInput,
StyleSheet,
ScrollView,
TouchableOpacity,
Image,Text
}
from 'react-native';
import { brandProducts } from '../data';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-android';
import { useEffect, useState } from 'react';
const styles=StyleSheet.create({
srcStyle:{
    borderColor:"lightcoral",
    borderWidth:2
},
imgvw: {
    borderRadius: 10,
    width: 160,
    margin: 5,
    padding: 10
},
imgSty: {
    width: 159, backgroundColor: "white", borderRadius: 10,
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
})

export default function Search() {
    let [data, setData] = useState([]);
  
    useEffect(() => {
      setData(brandProducts());
    }, []);
  
    let change = (value) => {
        let data = brandProducts();
        setData([]); // Clear the previous data
      
        data.forEach((product) => {
          if (product.description.includes(value)) {
            setData((prevData) => [...prevData, product]);
          }
        });
      };

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.25 }}>
          <SearchBar
            placeholder="Search by name"
            style={styles.srcStyle}
            onChangeText={change}
          />
        </View>
  
        <View style={{ flex: 0.50 }}>
          <ScrollView style={{ flex: 0.50 }}>
  <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
    {data.map((product) => (
      <View style={styles.imgSty} key={product.id}>
        <TouchableOpacity
          onPress={() =>
            navigation.push("View", {
              id: product.id,
              des: product.description,
              pr: product.price,
            })
          }
          style={styles.imgSty}
        >
          <Image
            style={{ width: 100, height: 100, margin: 10 }}
            source={product.image}
          />

          <Text
            style={{
              textAlign: "center",
              marginTop: 5,
              padding: 10,
              width: 120,
              height: 120,
            }}
          >
            {product.description}
          </Text>

          <Text style={{ color: "lightcoral", marginTop: 20, marginBottom: 1 }}>
            PRICE: <Text style={{ color: "blue" }}>{product.price}</Text>
          </Text>
        </TouchableOpacity>
      </View>
    ))}
  </View>
</ScrollView>
        </View>
      </View>
    );
  }
  