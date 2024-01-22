import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, theme } from "@theme";
import { icons } from "@assets";
import { _CircularProgressBar } from "@components";
import { Easing, withTiming } from "react-native-reanimated";
import { FontAwesome5 } from "@expo/vector-icons";

export const Home: React.FC = () => {
  const [isPlaying, _setIsPlaying] = React.useState(true);

  return (
    <SafeAreaView style={styles.main} mode="margin">
      <View style={styles.topBtnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Image source={icons.settings} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.bg_gray]}>
          <Image source={icons.refresh} style={styles.img} />
        </TouchableOpacity>
      </View>

      <View style={styles.widgetContainer}>
        <View style={styles.timerContainer}>
          <_CircularProgressBar
            progress={withTiming(1, {
              duration: 25,
              easing: Easing.linear,
            })}
          />
        </View>

        <View style={styles.infoBarContainer}>
          <View style={styles.soundTextContainer}>
            <Text style={styles.soundTextInactive}>Lofi</Text>
            <Text style={styles.soundTextActive}>40hz</Text>
            <Text style={styles.soundTextInactive}>Rain</Text>
          </View>
          <View style={styles.soundActiveIndicatorContainer}>
            <View style={styles.activeIndicator} />
          </View>
        </View>
      </View>

      <View style={styles.fabContainer}>
        <TouchableOpacity style={styles.fab}>
          {isPlaying ? (
            <FontAwesome5 name="pause" size={28} color={colors.white} />
          ) : (
            <Image source={icons.play} style={styles.img} />
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.lg,
    backgroundColor: colors.white,
    // borderWidth: 1,
  },
  topBtnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    // borderWidth: 1,
  },
  img: {
    width: 28,
    height: 28,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.sm,
    borderRadius: theme.radius.sm,
    // borderWidth: 1,
  },
  bg_gray: {
    backgroundColor: colors.gray,
  },
  widgetContainer: {
    flex: 8,
    justifyContent: "flex-start",
    paddingVertical: theme.spacing.xl,
    // borderWidth: 1,
  },
  timerContainer: {
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
  },
  infoBarContainer: {
    flex: 1,
    justifyContent: "center",
    // borderWidth: 1,
  },
  soundTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: theme.spacing.xl,
  },
  soundTextInactive: {
    fontSize: theme.font.size.sm,
    fontFamily: theme.font.family.medium,
    color: colors.grayText,
  },
  soundTextActive: {
    fontSize: theme.font.size.lg,
    fontFamily: theme.font.family.medium,
    color: colors.primary,
  },
  soundActiveIndicatorContainer: {
    marginHorizontal: theme.spacing.xl,
    backgroundColor: colors.gray,
    borderRadius: theme.radius.xl,
    flexDirection: "row",
    justifyContent: "center",
  },
  activeIndicator: {
    borderRadius: theme.radius.xl,
    width: theme.font.size.lg * 2,
    height: 8,
    backgroundColor: colors.primary,
  },
  fabContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-end",
    // borderWidth: 1,
  },
  fab: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 96,
    height: 96,
    borderRadius: theme.radius.full,
    backgroundColor: colors.primary,
  },
});
