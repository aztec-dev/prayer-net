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

export default function SignIn() {
  const colorScheme = useColorScheme();
  const route = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function AuthUser() {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert(error.message);
    } else if (data?.session) {
      route.replace('/(app)/Profile');
    }
    setLoading(false);
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
            <Card title="Good To See You Again!" width="w-[90%]">
              <View className="my-3 self-stretch">
                <TextInput
                  className="border border-[#ccc] rounded-lg p-6 text-[16px]"
                  placeholder="Email"
                  onChangeText={setEmail}
                  value={email}
                  autoCapitalize="none"
                  placeholderTextColor="#ccc"
                  keyboardType="email-address"
                />
                <View className="my-3 self-stretch">
                  <TextInput
                    className="border border-[#ccc] rounded-lg p-6 text-[16px]"
                    placeholder="Password"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                    placeholderTextColor="#ccc"
                    autoCapitalize="none"
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
                      onPress={() => AuthUser()}
                      variant="primary"
                      width="flex-1"
                    />
                  </View>
                </View>
              </View>
            </Card>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
