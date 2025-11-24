import Buttons from '@/components/Buttons';
import HeroSection from '@/components/Hero';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../global.css';

export default function Index() {
  // get window dimensions for iPad landscape mode:
  const { width, height } = useWindowDimensions();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const isLandscape = width >= height;
  // device types
  const isIpad = width >= 700;
  const isIpadLandscape = isLandscape && isIpad;
  const isIpadPortrait = !isIpadLandscape && isIpad;
  const topSpacing = isIpadLandscape
    ? height * 0.12
    : isIpadPortrait
      ? height * 0.2
      : 144;

  return (
    <SafeAreaView className="bg-background flex-auto flex-col">
      <HeroSection />
      <View className="py-5 px-4 mt-4">
        <Text
          className={`text-text ${isIpad ? 'text-[3rem]' : 'text-[2rem]'} capitalize`}
          style={{ fontFamily: 'Roboto_800ExtraBold' }}
        >
          Bringing Christians together through prayer
        </Text>
        <Text
          className={`text-text py-1.5 ${isIpad ? 'text-[2rem]' : 'text-[1.5rem]'}`}
          style={{ fontFamily: 'Playfair_400Regular' }}
        >
          “For where two or three are gathered together in My name, I am there
          in the midst of them.” - Matt. 18:20 {width} {height}
        </Text>
      </View>
      {/* sign in/up buttons */}
      <View
        className="flex-shrink-0 items-center justify-start"
        style={{ marginTop: topSpacing }}
      >
        <Buttons
          title="Continue with Email"
          variant="primary"
          onPress={() => router.navigate('/(auth)/SignIn')}
          disabled={loading}
          width="w-[90%]"
          height="h-[4.5rem]"
        />

        <Buttons
          title="Sign up"
          variant="primary"
          onPress={() => router.navigate('/(auth)/SignUp')}
          width="w-[90%]"
          height="h-[4.5rem]"
        />
      </View>
    </SafeAreaView>
  );
}
