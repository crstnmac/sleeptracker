import React from 'react';
import {View, Text, useColorScheme} from 'react-native';
import {COLORS, FONTS} from '../constants';

const HomeHeader = ({name, status, containerStyle}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        alignItems: 'flex-start',
        ...containerStyle,
      }}>
      <Text
        style={{
          ...FONTS.h4,
          color: isDarkMode ? COLORS.white : COLORS.darkGreen,
        }}>
        Hi ,{name}
      </Text>
      <Text
        style={{
          ...FONTS.h2,
          color: isDarkMode ? COLORS.white : COLORS.darkGreen,
        }}>
        Sleep Schedule
      </Text>
    </View>
  );
};

export default HomeHeader;
