import React from 'react';
import {Image, Pressable, useColorScheme} from 'react-native';
import {COLORS} from '../constants';

const IconButton = ({icon, containerStyle, onPress}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? COLORS.darkGreen : COLORS.white,
          alignItems: 'center',
          justifyContent: 'center',
          height: 40,
          width: 40,
          borderRadius: 15,
          ...containerStyle,
        },
      ]}>
      {({pressed}) => (
        <Image
          source={icon}
          style={{
            width: 15,
            height: 15,
            resizeMode: 'contain',
            tintColor: pressed
              ? COLORS.white
              : isDarkMode
              ? COLORS.black
              : COLORS.darkGreen,
          }}
        />
      )}
    </Pressable>
  );
};

export default IconButton;
