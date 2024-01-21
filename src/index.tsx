import { StyleSheet, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "@theme";

export const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.fonts}>Main</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fonts: {
    fontFamily: theme.font.family.medium,
    fontSize: theme.font.size.lg,
  },
});
