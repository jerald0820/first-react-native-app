import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ThirdScreen from "./screens/ThirdScreen";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: "Welcome", headerShown: false}}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{title: "Profile", headerShown: false}}
        />
        
      </Stack.Navigator>
    </NavigationContainer> 
  );
}