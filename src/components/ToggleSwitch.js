import React from 'react';
import Toggle from 'react-native-toggle-element';
import {COLORS} from '../constants';
import {useColorScheme, View} from 'react-native';

const ToggleSwitch = ({value, onPress}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View>
      <Toggle
        value={value}
        onPress={onPress}
        trackBar={{
          activeBackgroundColor: isDarkMode ? COLORS.black : COLORS.darkGreen,
          inActiveBackgroundColor: COLORS.transparentBlack1,
          borderWidth: 5,
          borderActiveColor: isDarkMode ? COLORS.black : COLORS.darkGreen,
          borderInActiveColor: COLORS.transparentBlack1,
          width: 48,
          height: 24,
        }}
        thumbButton={{
          width: 26,
          height: 26,
          activeBackgroundColor: COLORS.neonGreen,
          inActiveBackgroundColor: isDarkMode ? COLORS.textBlack : COLORS.white,
        }}
        trackBarStyle={{marginBottom: 5}}
      />
    </View>
  );
};

export default ToggleSwitch;
