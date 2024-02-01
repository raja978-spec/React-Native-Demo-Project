import { useState } from 'react'
import
{
    View,Text,Button
}
from 'react-native'

export function TestComp1(){

const[txt,setText]=useState("")

press=(e)=>{
    console.log(Object.keys(e))
    console.log(e.eventPhase)
    if(txt == ""){
        setText("Hello world")
    }
    if(txt=="Hello world"){
        setText("")
    }
}
return(
    <View 
    style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }}
    >
     <Text
     style={{
        fontSize:40,
     }}
     onLayout={layoutEvent}
     >{txt}</Text>
     <Button title='click me' onPress={press}/>
    </View>
)
}