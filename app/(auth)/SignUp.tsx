import Buttons from '@/components/Buttons';
import Card from '@/components/Card';
import { supabase } from '@/lib/supabase';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignUp() {
  const colorScheme = useColorScheme();
  const route = useRouter();
  // user details
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function CreateUser() {
    // creates a new user
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) Alert.alert(error.message);
    return data.user?.id;
  }

  async function createUserProfile(first_name: string, last_name: string) {
    // creates a user profile. right now it only creates their first name and last name
    const userId = await CreateUser();
    try {
      setLoading(true);
      const updates = {
        user_id: userId,
        first_name,
        last_name,
        created_at: new Date(),
      };
      const { error } = await supabase.from('user_profile').upsert(updates);
      if (error) {
        Alert.alert(error.message);
      } else {
        route.replace('/(app)/Profile');
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="my-auto">
            <Card title="Welcome!" width="w-[90%]">
              <View className="my-1 self-stretch">
                <TextInput
                  className="border border-[#ccc] rounded-lg p-6 text-[16px]"
                  onChangeText={setFirstName}
                  value={firstName}
                  placeholderTextColor="#ccc"
                  autoCapitalize="words"
                  placeholder="John"
                />
              </View>
              <View className="my-1 self-stretch">
                <TextInput
                  className="border border-[#ccc] rounded-lg p-6 text-[16px]"
                  onChangeText={setLastName}
                  value={lastName}
                  autoCapitalize="words"
                  placeholderTextColor="#ccc"
                  placeholder="Doe"
                />
              </View>
              <View className="my-1 self-stretch">
                <TextInput
                  className="border border-[#ccc] rounded-lg p-6 text-[16px]"
                  placeholder="Email"
                  onChangeText={setEmail}
                  value={email}
                  autoCapitalize="none"
                  placeholderTextColor="#ccc"
                  keyboardType="email-address"
                />
              </View>
              <View className="my-1 self-stretch">
                <TextInput
                  className="border border-[#ccc] rounded-lg p-6 text-[16px]"
                  placeholder="Password"
                  onChangeText={setPassword}
                  value={password}
                  secureTextEntry
                  placeholderTextColor="#ccc"
                  autoCapitalize="none"
                />
              </View>
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
                  title="Sign Up"
                  onPress={() => createUserProfile(firstName, lastName)}
                  disabled={loading}
                  variant="primary"
                  width="flex-1"
                />
              </View>
            </Card>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
