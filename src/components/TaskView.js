import MaskedView from '@react-native-community/masked-view';
import React from 'react';
import {Image, Text, View, useColorScheme} from 'react-native';
import {SquircleView} from 'react-native-figma-squircle';
import {IconButton, ToggleSwitch} from '.';
import {COLORS, FONTS, icons} from '../constants';
const TaskView = ({
  time,
  timeName,
  imageIcon,
  onPressMenu,
  switchValue,
  onPressSwitch,
}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View>
      <MaskedView
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 80,
          width: 'auto',
          marginTop: 20,
          marginHorizontal: 25,
          paddingHorizontal: 15,
          backgroundColor: isDarkMode ? COLORS.darkGreen : COLORS.white,
        }}
        maskElement={
          <SquircleView
            style={{width: 'auto', height: 80}}
            squircleParams={{
              cornerRadius: 25,
              cornerSmoothing: 1,
              fillColor: COLORS.darkGreen,
            }}
          />
        }>
        <View style={{marginLeft: 5}}>
          <Image source={imageIcon} style={{height: 35, width: 35}} />
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginLeft: 15,
          }}>
          <Text
            style={{
              ...FONTS.h3,
              color: isDarkMode ? COLORS.textBlack : COLORS.darkGreen,
              paddingVertical: 5,
            }}>
            {timeName},{' '}
            <Text
              style={{
                ...FONTS.body4,
                color: isDarkMode ? COLORS.textBlack : COLORS.darkGreen,
              }}>
              {' '}
              {time}
            </Text>
          </Text>
          <Text
            style={{
              ...FONTS.h4,
              color: isDarkMode ? COLORS.textBlack : COLORS.darkGreen,
              marginBottom: 5,
            }}>
            in 8hours & 30mins
          </Text>
        </View>

        <View
          style={{
            marginLeft: 'auto',
          }}>
          <IconButton
            containerStyle={{
              marginLeft: 'auto',
              backgroundColor: 'transparent',
            }}
            icon={icons.menu}
            onPress={onPressMenu}
          />
          <ToggleSwitch value={switchValue} onPress={onPressSwitch} />
        </View>
      </MaskedView>
    </View>
  );
};

export default TaskView;
