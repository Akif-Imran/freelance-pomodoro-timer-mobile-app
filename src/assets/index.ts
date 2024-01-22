import { ImageRequireSource } from "react-native";

type IconKeys = "settings" | "refresh" | "play";
export const icons: Record<IconKeys, ImageRequireSource> = {
  settings: require("./icons/settings-icon.png"),
  refresh: require("./icons/refresh.png"),
  play: require("./icons/play.png"),
};
