import { Text, View } from 'react-native';

type Props = {
  title: string; // for now, just for the 'sign in' and 'sign up' texts.
  width?: string;
  height?: string;
  textSize?: string;
  inputLabel?: string;
  children: React.ReactNode; // to pass in any content.
};

export default function Card({
  title,
  width = 'w-auto',
  height = 'h-auto',
  textSize = 'text-[16px]',
  children,
}: Props) {
  return (
    <View
      className={`flex-auto flex-col container p-5 mx-auto bg-card rounded-lg ${textSize} ${width} ${height}`}
    >
      <Text className="text-[32px] text-text">{title}</Text>
      <View>{children}</View>
    </View>
  );
}
// container p-5 mx-auto my-auto bg-card rounded-lg flex-col w-[70%]
