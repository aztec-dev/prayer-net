import Buttons from '@/components/Buttons';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';

export default function SignUp() {
  const route = useRouter();
  return (
    <View>
      <Text>Sign Up</Text>
      <Buttons
        title="back"
        onPress={() => route.replace('/')}
        variant="secondary"
        icon={<Ionicons name="arrow-back-circle" size={38} color="white" />}
      ></Buttons>
    </View>
  );
}
