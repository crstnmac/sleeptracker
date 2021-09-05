import React from 'react';
import {Pressable, Text} from 'react-native';
import {COLORS, FONTS} from '../constants';

const TextButton = ({
  iconLeft,
  label,
  containerStyle,
  textStyle,
  onPress,
  type,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {
          backgroundColor: pressed
            ? type === 'learnMore'
              ? COLORS.lightGreen
              : COLORS.lightGray
            : type === 'learnMore'
            ? COLORS.neonGreen
            : COLORS.white,
          alignItems: 'center',
          justifyContent: 'center',
          height: 40,
          width: 40,
          borderRadius: 15,
          ...containerStyle,
        },
      ]}>
      <Text
        style={{
          ...FONTS.h4,
          alignItems: 'center',
          justifyContent: 'center',
          color: COLORS.textBlack,
          ...textStyle,
        }}>
        {label}
      </Text>
    </Pressable>
  );
};

export default TextButton;
