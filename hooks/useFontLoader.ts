import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React from "react";

SplashScreen.preventAutoHideAsync();

const useFontLoader = (font: keyof typeof fonts) => {
  const loadFonts = fonts[font];
  const [fontLoaded] = useFonts(loadFonts);

  const onLayoutRootView = React.useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  return { fontLoaded, onLayoutRootView };
};

const fonts = {
  InterTight: {
    InterTight400: require("./../assets/fonts/Inter_Tight/InterTight-Regular.ttf"),
    InterTight500: require("./../assets/fonts/Inter_Tight/InterTight-Medium.ttf"),
    InterTight600: require("./../assets/fonts/Inter_Tight/InterTight-SemiBold.ttf"),
    InterTight700: require("./../assets/fonts/Inter_Tight/InterTight-Bold.ttf"),
  },
};

export default useFontLoader;
