import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// This is a custom button component

type Props = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary'; // or any styles you want
  disabled?: boolean;
  icon?: React.ReactElement;
  width?: string;
  height?: string;
};

export default function Buttons({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  icon,
  width = 'w-auto',
  height = 'h-auto',
}: Props) {
  // background based on type
  const bg = variant === 'primary' ? 'bg-secondary' : 'bg-card';

  // text color based on background (like calculator project)
  const textColor =
    variant === 'primary'
      ? '#FFFFFF' // dark bg → white text
      : '#000000'; // light bg → dark text

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={
        icon
          ? ''
          : `${bg} ${width} ${height} h-16 rounded-full my-1 items-center justify-center`
      }
    >
      {icon ? (
        icon
      ) : (
        <Text
          className={'text-[20px]'}
          style={{ fontFamily: 'Roboto_500Medium', color: textColor }}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
