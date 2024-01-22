import { StyleSheet, View } from "react-native";
import React from "react";
import { Home } from "@screens";
import { colors } from "@theme";

export const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Home />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
