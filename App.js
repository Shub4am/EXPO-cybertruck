import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './src/components/Home';
import Details from './src/components/Details';
import Settings from './src/components/Settings';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LinearGradient } from 'expo-linear-gradient';
import Status from './src/components/Status';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
      {/* <View className="flex w-full h-full">
        <LinearGradient colors={['#424750', '#202326']}>
          <StatusBar style="auto" />
        </LinearGradient>
  </View> */}
    </NavigationContainer>
  );
}
