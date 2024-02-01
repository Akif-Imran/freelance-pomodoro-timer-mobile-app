import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, theme } from "@theme";
import { icons, images } from "@assets";
import { gStyles } from "@styles";
import { AuthStackScreenProps } from "@navigation-types";
import { selectAuth, useAppDispatch, useAppSelector } from "@store";
import { revoke } from "@slices";
import { ToastService } from "@utility";

export const Settings: React.FC<AuthStackScreenProps<"Settings">> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectAuth);

  const handleLogout = () => {
    dispatch(revoke());
  };

  const handleReset = () => {
    ToastService.show("Under development");
  };

  return (
    <SafeAreaView style={styles.main} mode="padding">
      <View style={gStyles.topBtnContainer}>
        <TouchableOpacity style={styles.profileBadge} onPress={handleLogout} activeOpacity={0.7}>
          <Image
            source={user.photoURL ? { uri: user.photoURL } : images.profile}
            style={styles.profileImg}
          />
          <View>
            <Text style={gStyles.tblHeaderText}>{user.displayName}</Text>
            <Text style={gStyles.tblDescText}>{user.email}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[gStyles.btn, gStyles.bg_gray]} onPress={handleReset}>
          <Image source={icons.refresh} style={gStyles.img} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.lg,
    backgroundColor: colors.white,
    // borderWidth: 1,
  },
  profileBadge: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: theme.spacing.sm,
    gap: theme.spacing.sm,
    backgroundColor: colors.gray,
    borderRadius: theme.radius.sm,
  },
  profileImg: {
    width: 32,
    height: 32,
    borderRadius: theme.radius.full,
  },
});
