import { Playfair_400Regular } from '@expo-google-fonts/playfair/400Regular';
import {
  Roboto_500Medium,
  Roboto_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Playfair_400Regular,
    Roboto_500Medium,
    Roboto_800ExtraBold,
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return <Stack screenOptions={{ headerShown: false }} />;
}
