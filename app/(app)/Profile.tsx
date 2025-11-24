import Card from '@/components/Card';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Profile() {
  const router = useRouter();
  const [profile, setProfile] = useState<any>(null);
  const [prayers, setPrayers] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const { data, error } = await supabase
        .from('user_profile')
        .select('first_name, last_name')
        .eq('user_id', user?.id)
        .single();
      if (error) {
        Alert.alert(error.message);
      } else {
        setProfile(data);
      }
      setLoading(false);
    };
    getProfile();
  }, []);

  useEffect(() => {
    const getPrayers = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      console.log('Auth User ID:', user?.id);

      // get the user_profile.id
      const { data: userProfile, error: profileError } = await supabase
        .from('user_profile')
        .select('id')
        .eq('user_id', user?.id)
        .single();

      //   console.log('User Profile:', userProfile);
      //   console.log('Profile Error:', profileError);

      // get prayers for this user_profile.id
      const { data, error } = await supabase
        .from('prayers')
        .select('*')
        .eq('user_profile_id', userProfile?.id);

      //   console.log('Prayers Data:', data);
      //   console.log('Prayers Error:', error);

      if (error) {
        Alert.alert(error.message);
      } else {
        setPrayers(data);
        // console.log('Prayers set to state:', data);
      }
    };
    getPrayers();
  }, []);

  if (loading) {
    return (
      <SafeAreaView className="flex-1 bg-background items-center justify-center">
        <ActivityIndicator size="large" color="#1181c8" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <Text
        className="text-text text-[3.5rem] font-extrabold"
        style={{ fontFamily: 'Playfair_400Regular' }}
      >
        Hello {profile?.first_name} {profile?.last_name}
      </Text>
      <Pressable onPress={() => router.push('/(app)/Prayer')}>
        <Card title="Total Prayers" width="w-[90%]">
          <Text className="text-text text-[2rem] font-bold">
            {prayers?.length}
          </Text>
        </Card>
      </Pressable>
    </SafeAreaView>
  );
}
