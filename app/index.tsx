import HeroSection from '@/components/Hero';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../global.css';

export default function Index() {
  // get window dimensions for iPad landscape mode:
  const { width, height } = useWindowDimensions();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const isLandscape = width >= height;
  const isIpadLandscape = isLandscape && width >= 700;
  const topSpacing = isLandscape ? height * 0.1 : 144; // 144 ≈ mt-36

  return (
    <SafeAreaView className="bg-background flex-auto flex-col">
      <HeroSection />
      <View className="py-5 px-4 mt-4">
        <Text
          className={`text-text ${isIpadLandscape ? 'text-[3rem]' : 'text-[2rem]'} capitalize`}
          style={{ fontFamily: 'Roboto_800ExtraBold' }}
        >
          Bringing Christians together through prayer
        </Text>
        <Text
          className={`text-text py-1.5 ${isIpadLandscape ? 'text-[2rem]' : 'text-[1.5rem]'}`}
          style={{ fontFamily: 'Playfair_400Regular' }}
        >
          “For where two or three are gathered together in My name, I am there
          in the midst of them.” - Matt. 18:20
        </Text>
      </View>
      {/* sign in/up buttons */}
      <View
        className="flex flex-row justify-center gap-6"
        style={{ marginTop: topSpacing }}
      >
        <TouchableOpacity
          className="bg-card w-48 h-16 mt flex-initial items-center justify-center rounded-xl"
          onPress={() => router.navigate('/(auth)/SignIn')}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text
              className="text-text text-[20px]"
              style={{ fontFamily: 'Roboto_500Medium' }}
            >
              Sign in
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-card w-48 h-16 flex-initial items-center justify-center rounded-xl"
          onPress={() => router.navigate('/SignUp')}
        >
          <Text
            className="text-text text-[20px]"
            style={{ fontFamily: 'Roboto_500Medium' }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
