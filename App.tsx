import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { useEffect, useState } from 'react';
import SplashScreenLottie from '@/components/core/SplashScreenLottie';
import Animated, { FadeIn } from 'react-native-reanimated';

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

export default function App() {

  const [appReady, setAppReady] = useState(false);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  let [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      setAppReady(true);
    }
  }, [fontsLoaded, fontError]);

  if (!appReady || !isAnimationFinished) {
    return <SplashScreenLottie setIsAnimationFinished={setIsAnimationFinished} />;
  }

  return (
    <Animated.View 
      entering={FadeIn}
      style={styles.container}
    >
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
