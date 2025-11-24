import Buttons from '@/components/Buttons';
import Card from '@/components/Card';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { TextInput, useColorScheme, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignUp() {
  const colorScheme = useColorScheme();
  const route = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="my-auto">
        <Card title="Sign In" width="w-[90%]">
          <View className="my-3 self-stretch">
            <TextInput
              className="border border-[#ccc] rounded-lg p-6 text-[16px]"
              placeholder="Email"
            />
            <View className="my-3 self-stretch">
              <TextInput
                className="border border-[#ccc] rounded-lg p-6 text-[16px]"
                placeholder="Password"
                secureTextEntry
              />
              <View className="flex flex-row items-center gap-3 mt-10">
                {/* Back button - retun to index. */}
                <Buttons
                  title="back"
                  onPress={() => route.replace('/')}
                  icon={
                    <Ionicons
                      name="arrow-back-circle"
                      size={50}
                      color={colorScheme === 'dark' ? 'white' : 'black'}
                    />
                  }
                />
                <Buttons
                  title="Login"
                  onPress={() => route.replace('/')}
                  variant="primary"
                  width="flex-1"
                />
              </View>
            </View>
          </View>
        </Card>
      </View>
    </SafeAreaView>
  );
}
