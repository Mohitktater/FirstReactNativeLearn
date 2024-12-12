import React from 'react';  
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNav from './screens/components/BottomNav';   
import TopBar from './screens/components/TopNav'; 
import { SafeAreaView, View, StyleSheet } from 'react-native'; 
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';
import WishList from './screens/Wishlist';
import Test from './screens/testlist';
import SingleProduct from './screens/home/SingleProduct';
const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <SafeAreaView style={styles.container}>
   
    <NavigationContainer>
    <TopBar /> 
      <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={BottomNav} />
            <Stack.Screen name="Wishlist" component={WishList} />
            <Stack.Screen name="Product" component={SingleProduct} />
      </Stack.Navigator>   
    <View style={styles.content}>
    </View>
       </NavigationContainer>
    </SafeAreaView>  
    </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
  },
  content: {
    flex: 0, // Takes up all available space between the top bar and bottom nav
  },
});

export default App;
