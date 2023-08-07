import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
/* Stack Navigators */
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
/* Home Screens */
import HomeScreen from "./screens/homeOptions/HomeScreen";
import MapScreen from "./screens/homeOptions/MapScreen";
import EatsScreen from "./screens/homeOptions/EatsScreen";
import ITScreen from "./screens/homeOptions/ITScreen";

const App = () => {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="EatsScreen"
              component={EatsScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="ITScreen"
              component={ITScreen}
              options={{ headerShown: true }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center", // the alignment of each item inside the line
    justifyContent: "center", // the alignment of the whole line
  },
  sidebar: {
    maxWidth: "240px",
    border: "1px solid rgba(0, 0, 0, 0.1)",
  },
});

export default App;
