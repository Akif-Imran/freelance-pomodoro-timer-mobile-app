export default {
  expo: {
    name: "Pomo App",
    slug: "freelance-pomodoro-timer-mobile-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      googleServicesFile: process.env.GOOGLE_SERVICES_IOS,
      bundleIdentifier: "com.hershjoshi.pomo",
      buildNumber: "1",
      supportsTablet: true,
    },
    android: {
      googleServicesFile: process.env.GOOGLE_SERVICES_ANDROID,
      package: "com.hershjoshi.pomo",
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: ["expo-font", "@react-native-google-signin/google-signin"],
    extra: {
      eas: {
        projectId: "f65567b1-f9f1-4485-94d5-4cce7eedb1cd",
      },
    },
  },
};
