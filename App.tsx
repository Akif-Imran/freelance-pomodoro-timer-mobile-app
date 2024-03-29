import "react-native-gesture-handler";
import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View } from "react-native";
import { RootSiblingParent } from "react-native-root-siblings";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { registerRootComponent } from "expo";
import { colors } from "@theme";
import { store } from "@store";
import { Provider as ReduxProvider } from "react-redux";
import { App } from "@";

SplashScreen.preventAutoHideAsync();

export default function RootApp() {
  const [isAppReady, setIsAppReady] = React.useState(false);

  React.useLayoutEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync({
          "Poppins-Regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
          "Poppins-Medium": require("./src/assets/fonts/Poppins-Medium.ttf"),
          "Poppins-Semibold": require("./src/assets/fonts/Poppins-SemiBold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsAppReady(true);
      }
    };
    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (isAppReady) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!isAppReady) {
    return null;
  } else {
    return (
      <RootSiblingParent>
        <View onLayout={onLayoutRootView} style={styles.rootView}>
          <StatusBar
            backgroundColor={colors.primary}
            style={Platform.OS === "android" ? "light" : "dark"}
          />
          {/* <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}> */}
          {/* <PersistGate persistor={persistor} loading={null}>            </PersistGate> */}
          <ReduxProvider store={store}>
            <NavigationContainer theme={DefaultTheme}>
              <App />
            </NavigationContainer>
          </ReduxProvider>
        </View>
      </RootSiblingParent>
    );
  }
}

registerRootComponent(RootApp);

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
});
