import { Text, View } from 'react-native';

type Props = {
  title: string; // for now, just for the 'sign in' and 'sign up' texts.
  children: React.ReactNode; // to pass in any content.
};

export default function Card({ title, children }: Props) {
  return (
    <View className="">
      <Text>Card</Text>
    </View>
  );
}
