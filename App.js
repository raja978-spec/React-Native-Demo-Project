import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './components/home';
import Product from './components/product';
import ViewProduct from './components/viewproduct';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Brand1} from './components/brand1';
import { Button, Text } from 'react-native';
import Buy from './components/buy';
import { TestComp1 } from './testcomponents/testcomp1';
import Search from './components/search';
import { Login,SignUp } from './components/profile';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Toptab = createMaterialTopTabNavigator();
const Drawertab=createDrawerNavigator();


function TopNav() {
  return (
    <View style={{flex:100,justifyContent:"center",alignItems:"center",
    backgroundColor:"white"
    }}>
      <Text style={{flex:5,margin:20,fontSize:20,
      fontWeight:900
      }}>Categories</Text>
      <View style={{flex:80}}>
      <Toptab.Navigator
      screenOptions={{
        tabBarItemStyle:{
          backgroundColor:"peachpuff",
          margin:10,
          borderRadius:100
        },
        tabBarScrollEnabled:true,
        tabBarStyle:{
          
        },
        tabBarActiveTintColor:"black",
      }}
      >
        <Toptab.Screen component={Brand1}
         name='Apple' initialParams={{brand:"Apple"}}
         />
        <Toptab.Screen component={Brand1} name='Samsung' initialParams={{brand:"Samsung"}} />
        <Toptab.Screen component={Brand1} name='Fitbit' initialParams={{brand:"Fitbit"}}/>
        <Toptab.Screen component={Brand1} name='Garmin' initialParams={{brand:"Garmin"}}/>
        <Toptab.Screen component={Brand1} name='Huawei' initialParams={{brand:"Huawei"}}/>
        <Toptab.Screen component={Brand1} name='Fossi' initialParams={{brand:"Fossi"}}/>
      </Toptab.Navigator>
      
      </View>
      
    </View>

  )
}

function BottomTabNavigations() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "antiquewhite",
        headerShown: false,
      }}
      style={{marginBottom:10}}
    >
      <Tab.Screen name="Male" component={Product}
        options={{
          tabBarIcon: () => <Icon name='male' size={30} color="lighcoral"></Icon>
        }}
        initialParams={{gender:"male"}}
      />
      <Tab.Screen name="Female" component={Product}
        options={{
          tabBarIcon: () => <Icon name='female' size={30} color="lighcoral"></Icon>
        }}
        initialParams={{gender:"female"}}

      />
    </Tab.Navigator>
  )
}

function StackTabNav()
{
  return(
   <Stack.Navigator
   screenOptions={{headerShown:false}}
   >
    <Stack.Screen name='products' component={BottomTabNavigations} />
    <Stack.Screen name='View' component={ViewProduct}/>
    <Stack.Screen name="Buy"component={Buy} />
   </Stack.Navigator>
  )
}
function BrandTab(){
  return(
    <Stack.Navigator
    screenOptions={{headerShown:false}}
    >
     <Stack.Screen name='products' component={TopNav} 
     />
     <Stack.Screen name='View' component={ViewProduct}/>
     <Stack.Screen name="Buy"component={Buy} />
    </Stack.Navigator>
   )
}
function ProfileTab(){
  return(
    <Toptab.Navigator
    style={{marginTop:50}}
    screenOptions={{
      tabBarActiveTintColor:"black",
      tabBarStyle:{
        borderRadius:100,
        backgroundColor:"peachpuff",
        margin:10
      },
      tabBarItemStyle:{
        backgroundColor:"white",
        margin:10,
        borderRadius:100
      }
    }}
    >
      <Toptab.Screen component={Login}
       name='Login' 
       />
      <Toptab.Screen component={SignUp} name='Signup'  />
    </Toptab.Navigator>
    
    )
}
function App() {
  return (
  <NavigationContainer>
    <Tab.Navigator
    screenOptions={{
    tabBarActiveBackgroundColor:"peachpuff",
    tabBarActiveTintColor:"blue",
    headerTitleAlign:"center",
    headerStyle:{
      backgroundColor:"peachpuff"
    },
    headerTitle:"WATCHY",
    headerTitleStyle:{
      fontSize:35,
      fontWeight:"100",
      fontStyle:"italic"
    },
    }}
    >
      <Tab.Screen name='Home' component={Home}
      options={{
        tabBarIcon:()=><Icon name="home" size={30} />
      }}
      />
      
      <Tab.Screen name='Products' component={StackTabNav}
        options={{
          tabBarIcon:()=><Icon name="list" size={30} />
        }}
        
      />
      <Tab.Screen name='Brands' component={BrandTab}
        options={{
          tabBarIcon:()=><Icon name="list-alt" size={30} />
        }}  
      />
      <Tab.Screen name='Profile' component={ProfileTab}
        options={{
          tabBarIcon:()=><Icon name="login" size={30} />
        }}  
      />
      
    </Tab.Navigator>
  {
    /*
    <Drawertab.Navigator
   screenOptions={{
          headerTitleStyle: {
            color: "lightcoral",
            fontSize: 30
          },
          headerTitleAlign: "center",
          drawerStyle:{
            borderColor:"peachpuff",
            borderWidth:10,
            backgroundColor:"white",
          },
          drawerType:"back",
          drawerActiveTintColor:"blue",
          drawerActiveBackgroundColor:"peachpuff",
         }}
   
  >
  <Drawertab.Screen name='Home' component={Home}
  options={{drawerIcon:()=><Icon name='home' size={30} />}}
  />
  <Drawertab.Screen name='Products' component={StackAndBottomTab}
  options={{drawerIcon:()=><Icon name='list' size={30} />}}
  />
  <Drawertab.Screen name='Brands' component={StackAndTopTab} 
  options={{drawerIcon:()=><Icon name='list-alt' size={30} />}}
  />
  
 
  </Drawertab.Navigator>
  */
  }
  </NavigationContainer>
  )
}


export default App;
