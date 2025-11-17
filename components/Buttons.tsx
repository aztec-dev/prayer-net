import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary'; // or any styles you want
  disabled?: boolean;
};

export default function Buttons({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
}: Props) {
  // background based on type
  const bg = variant === 'primary' ? 'bg-secondary' : 'bg-card';

  // text color based on background (like calculator project)
  const textColor =
    variant === 'secondary'
      ? '#FFFFFF' // dark bg → white text
      : '#000000'; // light bg → dark text

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`${bg} w-48 h-16 rounded-xl items-center justify-center`}
    >
      <Text
        className={'text-[20px]'}
        style={{ fontFamily: 'Roboto_500Medium', color: textColor }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
