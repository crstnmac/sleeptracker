import React from 'react';
import {View, Text, useColorScheme} from 'react-native';
import {COLORS, FONTS} from '../constants';

const HeaderText = ({title, containerStyle}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        alignItems: 'center',
        ...containerStyle,
      }}>
      <Text
        style={{
          ...FONTS.h2,
          color: isDarkMode ? COLORS.white : COLORS.darkGreen,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default HeaderText;
