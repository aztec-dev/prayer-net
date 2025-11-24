import Card from '@/components/Card';
import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Prayer() {
  const [prayers, setPrayers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPrayers = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      // get the user_profile.id
      const { data: userProfile } = await supabase
        .from('user_profile')
        .select('id')
        .eq('user_id', user?.id)
        .single();

      // get prayers for this user_profile.id
      const { data, error } = await supabase
        .from('prayers')
        .select('*')
        .eq('user_profile_id', userProfile?.id)
        .order('created_at', { ascending: false });

      if (error) {
        Alert.alert(error.message);
      } else {
        setPrayers(data || []);
      }
      setLoading(false);
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
        className="text-text text-[3rem] font-extrabold px-4 py-4"
        style={{ fontFamily: 'Playfair_400Regular' }}
      >
        Prayer Journal
      </Text>
      <ScrollView className="flex-1 px-4">
        {prayers.length === 0 ? (
          <View className="items-center justify-center py-20">
            <Text className="text-text text-[1.2rem] text-center">
              No prayers yet. Start your prayer journal!
            </Text>
          </View>
        ) : (
          prayers.map((prayer) => (
            <View key={prayer.id} className="mb-4">
              <Card title={prayer.title || 'Untitled Prayer'} width="w-full">
                <Text className="text-text text-[1rem]">{prayer.content}</Text>
                <Text className="text-text text-[0.8rem] opacity-60 mt-2">
                  {new Date(prayer.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </Text>
              </Card>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
