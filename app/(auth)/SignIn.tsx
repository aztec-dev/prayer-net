import Buttons from '@/components/Buttons';
import { useRouter } from 'expo-router';
import { Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignIn() {
  const route = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="container p-5 mx-auto my-auto bg-card rounded-lg flex-col w-[70%]">
        <Text className="text-text text-[28px]">Sign In</Text>
        <View className="pt-10 pb-2 self-stretch">
          <TextInput
            className="border border-[#ccc] rounded-lg p-3 text-[16px]"
            placeholder="Email"
          ></TextInput>
        </View>
        <View className="pb-10 self-stretch">
          <TextInput
            className="border border-[#ccc] rounded-lg p-3 text-[16px]"
            placeholder="Password"
            secureTextEntry
          ></TextInput>
        </View>
        <Buttons
          title="Back"
          onPress={() => route.replace('/')}
          variant="primary"
        ></Buttons>
      </View>
    </SafeAreaView>
  );
}
