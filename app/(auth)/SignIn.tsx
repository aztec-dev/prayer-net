import Buttons from '@/components/Buttons';
import Card from '@/components/Card';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignIn() {
  const route = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="my-auto">
        <Card title="Sign In" width="w-[80%]">
          <Buttons
            title="back"
            onPress={() => route.replace('/')}
            icon={<Ionicons name="arrow-back-circle" size={38} color="white" />}
          />
          <View className="my-3 self-stretch">
            <TextInput
              className="border border-[#ccc] rounded-lg p-3 text-[16px]"
              placeholder="Email"
            />
            <View className="my-3 self-stretch">
              <TextInput
                className="border border-[#ccc] rounded-lg p-3 text-[16px]"
                placeholder="Password"
                secureTextEntry
              />
            </View>
            <View className="self-stretch items-end">
              <Buttons
                title="Login"
                onPress={() => route.replace('/')}
                variant="primary"
                width="w-[90%]"
              />
            </View>
          </View>
        </Card>
      </View>
    </SafeAreaView>
  );
}
