import {
Text,View,TextInput, Pressable,
KeyboardAvoidingView,
ScrollView
}
from 'react-native'

export function Login(){

    return(
        <View
        style={{flex:1,
        }}
        >
        <View style={{
            flex:1,
            padding:20
            }}>
        <Text
        style={{
            fontSize:35,
            textAlign:"center",
            marginTop:40,
            color:"black"
        }}
        >LOGIN</Text>
      
        <Text
        style={{
            fontSize:20,
        }}
        >Name: </Text>
        <TextInput 
        style={{
            borderColor:"peachpuff",
            borderWidth:1,
            borderRadius:10
           
        }}
        placeholder='Enter your name'/>

        <Text
        style={{
            fontSize:20,
            marginTop:10
        }}
        >Password: </Text>
        <TextInput 
        style={{
            borderColor:"peachpuff",
            borderWidth:1,
            borderRadius:10
            
        }}
        placeholder='Enter your password'
        textContentType='password'
        />
        
        <Pressable
            style={{
                backgroundColor:"peachpuff",
                borderRadius:10,
                width:100,
                height:40,
                justifyContent:"center",
                alignItems:"center",
                marginTop:15
            }}
            onPress={()=>navigation.popToTop()}
            >
                <Text>Submit</Text>
            </Pressable>
 
       
        </View>
        
        </View>
    )
}

export function SignUp(){
    return(
        <ScrollView
        style={{flex:1}}
        >

<View style={{
            flex:1,
            padding:20
            }}>
        <Text
        style={{
            fontSize:35,
            color:"lighcoral",
            textAlign:"center",
            color:"black"
        }}
        >SIGN UP</Text>
        <Text
        style={{
            fontSize:20,
            marginTop:10
        }}
        >Name: </Text>
        <TextInput 
        style={{
            borderColor:"peachpuff",
            borderWidth:1,
            borderRadius:10
            
        }}
        placeholder='Enter your Name'
        />


        <Text
        style={{
            fontSize:20,
            marginTop:10
        }}
        >Password: </Text>
        <TextInput 
        style={{
            borderColor:"peachpuff",
            borderWidth:1,
            borderRadius:10
            
        }}
        placeholder='Enter your password'
        />

        <Text
        style={{
            fontSize:20,
            marginTop:10
        }}
        >Re-Password: </Text>
        <TextInput 
        style={{
            borderColor:"peachpuff",
            borderWidth:1,
            borderRadius:10
            
        }}
        placeholder='Re-Enter your password'
        />


        <Text
        style={{
            fontSize:20,
            marginTop:10
        }}
        >Email: </Text>
        <TextInput 
        style={{
            borderColor:"peachpuff",
            borderWidth:1,
            borderRadius:10
            
        }}
        placeholder='Enter your email'
        />
        
      
        <Pressable
            style={{
                backgroundColor:"peachpuff",
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
                }}>Submit</Text>
            </Pressable>
 
       
        </View>
        
        </ScrollView>
         
        
        
    )
}