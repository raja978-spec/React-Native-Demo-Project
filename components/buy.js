import { useEffect, useMemo, useState } from 'react';
import {
    View, StyleSheet, Text, Pressable, Alert
} from 'react-native';
import { Button } from 'react-native';
import { Modal } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';


const styles = StyleSheet.create({
    mainvw: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    subvw: {
        elevation: 10,
        backgroundColor: "white",
        width: 300,
        height: 300,
        padding: 20,
        justifyContent: "center",
        alignItems: "center"
  
    },
    txt: {
        textAlign: "center",
        borderBottomColor: "darkgray",
        borderBottomWidth: 1,
        paddingBottom: 10
    },
    sumtxt: {
        color: "black",
        fontSize: 20,
        marginTop:10,
        fontWeight:"700"
    },
    sumsize:{
        width:130,
        height:57,
       },
    pricetxt:{
        width:130,
        height:57,
       },
    altStyle:{
        width:200,
        height:200,
        backgroundColor:"peachpuff"
    }
});

export default function Buy({ navigation, route }) {
    const price=route.params.Pri
    const [Alert,setAlert]=useState(false);
    const [items,addItems]=useState(1);
    const [totalPrice,setTotalPrice]=useState(price);
    console.log("Buy got ",totalPrice)

    const press=()=>{
        addItems(items+1)       
    }
    
    return (
        <>
        <View style={styles.mainvw}>
            <View style={styles.subvw}>
                <Text style={styles.txt}>Choose a
                    shipping address and payment method to
                    calculate shipping, handling and tax.
                </Text>
                <Text style={styles.sumtxt}>Order Summary</Text>

   
                <View style={{flexDirection:"row",marginTop:10,  
                }}>

                <View style={styles.sumsize}>
                    <Text style={{ fontSize: 17}}>
                        Subtotal:
                    </Text>
                    <Text style={{ fontSize: 17}}>
                        No of items:
                    </Text>
                   
                    <Text style={{fontWeight:"800", color:"maroon", 
                    fontSize: 20,marginTop:15}}>
                        Order Total:
                    </Text>

                </View>

                <View style={styles.pricetxt}>
                    <Text style={{textAlign:"right",fontSize: 20}}>{route.params.Pri}</Text>
                    <Text style={{textAlign:"right",fontSize: 20}}>{items}</Text>
                    <Text style={{fontWeight:"800", 
                                  color:"maroon", 
                                  fontSize: 20,
                                  marginTop:15,
                                  textAlign:"right"
                                }}>
                        {price*items}
                    </Text>
                </View>

                </View>
                <View style={{marginTop:40,elevation:10}}>
                <Button title='Order' onPress={()=>setAlert(true)}/>
                </View>
            </View>
            <View style={{
                position:"relative",
                top:70,
                elevation:50
            }} >
                <View style={{flexDirection:"row",
                  backgroundColor:"white",
                  borderRadius:10,
                  width:100,
                  height:30,
                  justifyContent:"space-around",
                  
                 }}>
                <Text style={{fontSize:20
                ,fontWeight:900,
                 }} onPress={press}
                 >+</Text>
                <Text style={{fontSize:20}}>{items}</Text>
                <Text style={{fontSize:20
                ,fontWeight:900}}>-</Text> 
                </View>
                </View>
                
        </View>
        <Modal
        visible={Alert}
        >
        <View style={[styles.mainvw,{backgroundColor:"dimgrey"}]}>
         <Pressable 
         style={{
            backgroundColor:"green",
            borderRadius:200,
            width:70,
            height:70,
            justifyContent:"center",
            alignItems:"center",
            borderColor:"white",
            borderWidth:3
         }}
         >
             <Icon name='check-circle' size={28} color={"white"}/>
         </Pressable>
        <View style={[styles.subvw,{justifyContent:"center",alignItems:"center"}]}>
            <Text style={{
                fontSize:40,
                fontWeight:300,
                textAlign:"center",
                color:"green"
            }}>Sucess !!</Text>
            <Text
            style={{
                fontSize:20,
                fontWeight:300,
                textAlign:"center",
            }}
            >Your Item is ordered</Text>
            <Pressable
            style={{
                backgroundColor:"green",
                borderRadius:10,
                width:100,
                height:40,
                justifyContent:"center",
                alignItems:"center",
                marginTop:15
            }}
            onPress={()=>navigation.popToTop()}
            >
                <Text style={{
                color:"white",
                }}>Ok</Text>
            </Pressable>
        </View>
        
        </View>
        </Modal>
        </>
        
    )
}