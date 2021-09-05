import MaskedView from '@react-native-community/masked-view';
import React from 'react';
import {View, useColorScheme, Text, SafeAreaView, Image} from 'react-native';
import {SquircleView} from 'react-native-figma-squircle';
import {
  HeaderText,
  HomeHeader,
  IconButton,
  TextButton,
  ToggleSwitch,
} from '../components';
import {COLORS, FONTS, icons} from '../constants';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import Sleep from '../assets/svg/sleep.svg';
import TaskView from '../components/TaskView';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const name = 'Criston';

  const [bedtime, setBedtime] = React.useState('10:00 PM');
  const [wakeuptime, setWakeuptime] = React.useState('6:00 AM');

  const [bedSwitch, setBedSwitch] = React.useState(false);
  const [wakeupSwitch, setWakeupSwitch] = React.useState(false);
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 25,
          marginHorizontal: 15,
        }}>
        <IconButton
          containerStyle={{marginRight: 15}}
          icon={icons.user}
          onPress={() => console.log('Pressed Profile')}
        />
        <HomeHeader name={name} />
        <IconButton
          containerStyle={{marginLeft: 'auto'}}
          icon={icons.two_dots}
          onPress={() => console.log('Pressed Option')}
        />
      </View>
    );
  }

  function renderSleepStatus() {
    return (
      <MaskedView
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 150,
          width: 'auto',
          marginTop: 25,
          marginHorizontal: 15,
          backgroundColor: COLORS.darkGreen,
          padding: 10,
        }}
        maskElement={
          <SquircleView
            style={{width: 'auto', height: 150}}
            squircleParams={{
              cornerRadius: 35,
              cornerSmoothing: 1,
              fillColor: COLORS.darkGreen,
            }}
          />
        }>
        <View style={{flexDirection: 'column', marginLeft: 15}}>
          <Text style={{...FONTS.h4, color: COLORS.white}}>
            Ideal hours for Sleep
          </Text>
          <Text style={{...FONTS.body3, color: COLORS.white}}>
            8hours & {'\n'}30mins
          </Text>

          <TextButton
            type="learnMore"
            onPress={() => console.log('Pressed Learn More')}
            containerStyle={{
              height: 40,
              width: 120,
              marginTop: 20,
              borderRadius: 100,
            }}
            label="Learn More"
          />
        </View>

        <View
          style={{
            position: 'absolute',
            right: -10,
          }}>
          <Sleep width={200} />
        </View>
      </MaskedView>
    );
  }

  function renderSchedule() {
    let startingDate = moment();

    return (
      <View
        style={{
          marginTop: 25,
        }}>
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <HeaderText
            title="Your Schedule"
            containerStyle={{alignItems: 'flex-start'}}
          />
        </View>
        <CalendarStrip
          scrollable
          showMonth={false}
          iconStyle={{display: 'none'}}
          style={{height: 100}}
          selectedDate={startingDate}
          highlightDateContainerStyle={{
            borderRadius: 15,
            backgroundColor: COLORS.neonGreen,
          }}
          highlightDateNameStyle={{
            paddingBottom: 4,
            color: isDarkMode ? COLORS.white : COLORS.black,
          }}
          daySelectionAnimation={{
            type: 'border',
            duration: 200,
            borderWidth: 1,
            borderHighlightColor: COLORS.darkGreen,
          }}
          highlightDateNumberStyle={{
            paddingTop: 5,
            color: isDarkMode ? COLORS.white : COLORS.black,
          }}
          dateNumberStyle={{
            color: isDarkMode ? COLORS.textBlack : COLORS.darkGreen,
            paddingVertical: 5,
          }}
          dateNameStyle={{
            color: isDarkMode ? COLORS.textBlack : COLORS.darkGreen,
            paddingVertical: 5,
          }}
          dayComponentHeight={80}
          dayContainerStyle={{
            backgroundColor: isDarkMode ? COLORS.darkGreen : COLORS.white,
            borderRadius: 15,
            width: 50,
          }}
          maxDayComponentSize={62}
          minDayComponentSize={62}
        />
      </View>
    );
  }

  function renderBedTime() {
    return (
      <TaskView
        imageIcon={icons.bed}
        timeName="Bedtime"
        time={bedtime}
        onPressMenu={() => console.log('Pressed menu')}
        switchValue={bedSwitch}
        onPressSwitch={() => setBedSwitch(state => !state)}
      />
    );
  }

  function renderWakeTime() {
    return (
      <TaskView
        imageIcon={icons.alarm_clock}
        timeName="Alaram"
        time={wakeuptime}
        onPressMenu={() => console.log('Pressed menu')}
        switchValue={wakeupSwitch}
        onPressSwitch={() => setWakeupSwitch(state => !state)}
      />
    );
  }

  function renderTotalSleepPercentage() {
    return (
      <MaskedView
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 60,
          width: 'auto',
          marginTop: 20,
          marginHorizontal: 25,
          paddingHorizontal: 15,
          backgroundColor: COLORS.lightGray1,
        }}
        maskElement={
          <SquircleView
            style={{width: 'auto', height: 60}}
            squircleParams={{
              cornerRadius: 25,
              cornerSmoothing: 1,
              fillColor: COLORS.darkGreen,
            }}
          />
        }>
        <View style={{flexDirection: 'column'}}>
          <Text style={{...FONTS.h5, color: COLORS.darkGreen}}>
            You will get 8hours & 30mins of sleep for tonight
          </Text>
        </View>
      </MaskedView>
    );
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? COLORS.gray : COLORS.backgroundWhite,
      }}>
      {/* Header */}

      {renderHeader()}

      {/* SleepStatus */}

      {renderSleepStatus()}

      {/* Schedule */}

      {renderSchedule()}

      {/* ScheduleTasks */}

      {renderBedTime()}

      {renderWakeTime()}

      {renderTotalSleepPercentage()}
    </SafeAreaView>
  );
};

export default Home;
