import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, theme } from "@theme";
import { icons } from "@assets";
import { _CircularProgressBar } from "@components";
import { FontAwesome5 } from "@expo/vector-icons";
import { selectTimer, useAppDispatch, useAppSelector } from "@store";
import { play, pause, reset } from "@slices";
import { AuthStackScreenProps } from "@navigation-types";
import { gStyles } from "@styles";

export const Home: React.FC<AuthStackScreenProps<"Home">> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const { isPlaying } = useAppSelector(selectTimer);

  const start = () => {
    if (isPlaying) {
      dispatch(pause());
    } else {
      dispatch(play());
    }
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <SafeAreaView style={styles.main} mode="padding">
      <View style={gStyles.topBtnContainer}>
        <TouchableOpacity
          style={gStyles.btn}
          onPress={() => {
            navigation.navigate("Settings");
          }}
        >
          <Image source={icons.settings} style={gStyles.img} />
        </TouchableOpacity>
        <TouchableOpacity style={[gStyles.btn, gStyles.bg_gray]} onPress={handleReset}>
          <Image source={icons.refresh} style={gStyles.img} />
        </TouchableOpacity>
      </View>

      <View style={styles.widgetContainer}>
        <View style={styles.timerContainer}>
          <_CircularProgressBar />
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
        <TouchableOpacity style={styles.fab} onPress={start}>
          {isPlaying ? (
            <FontAwesome5 name="pause" size={28} color={colors.white} />
          ) : (
            <Image source={icons.play} style={gStyles.img} />
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
