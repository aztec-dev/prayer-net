import Buttons from '@/components/Buttons';
import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';

export default function SignUp() {
  const route = useRouter();
  return (
    <View>
      <Text>Sign Up</Text>
      <Buttons
        title="Back"
        onPress={() => route.replace('/')}
        variant="secondary"
      ></Buttons>
    </View>
  );
}
