import { Text, View } from 'react-native';
import '../global.css';

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="flex-initial bg-slate-400 p-16 rounded-xl shadow">
        <Text className="text-xl font-bold text-white">
          NativeWind Welcomes you Champion!
        </Text>
      </View>
    </View>
  );
}
