// import { createDrawerNavigator } from '@react-navigation/drawer';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from './Home';
// function App() {
//   return (
//     // <NavigationContainer>
//     //   <Stack.Navigator>
//     //   <Stack.Screen
//     //   name='Home'
//     //       component={Home}
//     //     />
//     //   </Stack.Navigator>
//     // </NavigationContainer>
//     <>
//     <Home/>
//     </>
//   );
// }


// export default App;


import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Test from './src/Test';


const Stack = createStackNavigator();



const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
      />

      <Stack.Screen
      name='Test'
      component={Test}
      />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App