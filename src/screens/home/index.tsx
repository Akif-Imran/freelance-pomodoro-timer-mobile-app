import { StyleSheet, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "@theme";

export const Home: React.FC = () => {
  return (
    <SafeAreaView>
      <Text style={styles.fonts}>Home</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  fonts: {
    fontFamily: theme.font.family.semi_bold,
  },
});
