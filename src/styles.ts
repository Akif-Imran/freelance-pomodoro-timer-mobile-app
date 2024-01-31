import { colors, theme } from "@theme";
import { StyleSheet } from "react-native";

export const baseStyles = StyleSheet.create({
  title: {
    fontFamily: theme.font.family.medium,
    fontSize: theme.font.size.lg,
    lineHeight: 32,
    letterSpacing: (0.5 / 100) * theme.font.size.lg,
  },
  subTitle: {
    fontFamily: theme.font.family.regular,
    fontSize: theme.font.size.sm,
    lineHeight: 22,
    letterSpacing: (0.5 / 100) * theme.font.size.sm,
  },
});

export const textStyles = StyleSheet.create({
  screenTitles: {
    ...baseStyles.title,
    color: colors.white,
    textAlign: "center",
  },
  screenSubText: {
    ...baseStyles.subTitle,
    color: colors.grayScale70,
    textAlign: "center",
  },
  errorText: {
    ...baseStyles.subTitle,
    textAlign: "center",
    marginBottom: theme.spacing.sm,
    color: colors.error,
  },
});
