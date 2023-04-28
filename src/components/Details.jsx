import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import HeaderBtn from './HeaderBtn';
import Status from './Status';
import Card from './Card';
import { StatusBar } from 'expo-status-bar';

import { useNavigation } from '@react-navigation/native';

export default function Details() {
  const navigation = useNavigation();

  const handleMenuPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View className="w-full h-full flex">
      <StatusBar style="light" />
      <ScrollView>
        <LinearGradient
          colors={['#424750', '#202326']}
          className="w-full h-full"
        >
          {/* header  */}
          <View className="mt-8 flex flex-row justify-between items-center mx-4">
            <HeaderBtn
              imgSrc={require('../../assets/icons/menu.png')}
              onPress={handleMenuPress}
            />
            <View className="flex justify-center items-center">
              <Text className=" text-subTextColor text-lg leading-5 capitalize">
                tesla
              </Text>
              <Text className=" text-lg font-black tracking-wide text-primaryTextColor uppercase">
                cybertruck
              </Text>
            </View>
            <HeaderBtn
              imgSrc={require('../../assets/icons/user.png')}
              onPress={handleMenuPress}
            />
          </View>

          {/* image */}
          <Image
            source={require('../../assets/images/cybertruckFront.png')}
            alt="cybertruck"
            className="w-full h-[231px] object-contain mt-5 -rotate-2"
          />

          {/* status */}
          <Text className="text-2xl font-black text-primaryTextColor ml-5 leading-7">
            Status
          </Text>
          <View className="flex flex-row mx-auto mt-2">
            <Status
              iconSrc={require('../../assets/icons/battery.png')}
              statusStyle="w-[7px] h-[13px]"
              statusTitle="battery"
              statusText="54%"
            />
            <Status
              iconSrc={require('../../assets/icons/arrow.png')}
              statusStyle="w-[15px] h-[15px]"
              statusTitle="ev range"
              statusText="297 km"
            />
            <Status
              iconSrc={require('../../assets/icons/temperature.png')}
              statusStyle="w-[7px] h-[14px]"
              statusTitle="temperature"
              statusText="27°C"
            />
          </View>

          <Text className=" mt-10 text-2xl font-black text-primaryTextColor ml-5 leading-7">
            Information
          </Text>

          <View className=" flex flex-row mt-2">
            <ScrollView horizontal={true}>
              <Card
                cardImg={require('../../assets/icons/MaskCircle.png')}
                cardTitle="engine"
                cardSubText="sleeping mode"
              />

              <Card
                cardImg={require('../../assets/icons/maskRec.png')}
                cardTitle="climate"
                cardSubText="A/C is on"
              />

              <Card
                cardImg={require('../../assets/icons/maskRec.png')}
                cardTitle="tires"
                cardSubText="low pressure"
              />
            </ScrollView>
          </View>
          {/* footer  */}
          <View className="flex flex-row justify-between items-center mt-5 mx-4">
            <Text className="text-2xl capitalize font-black text-primaryTextColor">
              navigation
            </Text>
            <Text className="text-lg capitalize text-primaryTextColor">
              History
            </Text>
          </View>
          <LinearGradient
            colors={['#424750', '#202326']}
            className="w-full h-full my-2 rounded-[40px]"
          >
            <LinearGradient
              colors={['#353A40', '#16171B']}
              className="w-full h-full rounded-[40px] my-1"
            >
              <View className="flex flex-row justify-between items-center my-1 mx-4">
                <View className="flex">
                  <Text className="text-primaryTextColor text-2xl font-black">
                    A/C is ON
                  </Text>
                  <Text className="text-subTextColor text-lg leading-5 mt-1">
                    Tap to turn off or swipe up{'\n'} for a fast setup
                  </Text>
                </View>
                <TouchableOpacity onPress={handleMenuPress}>
                  <LinearGradient
                    colors={['#11A8FD', '#0081C9']}
                    className="mt-5 w-16 h-16 rounded-full relative justify-center items-center"
                  >
                    <LinearGradient
                      colors={['#005EA3', '#11A8FD']}
                      className="w-[60px] h-[60px] rounded-full relative justify-center items-center"
                    >
                      <Image
                        source={require('../../assets/icons/power.png')}
                        alt="lock icon"
                        className="w-6 h-7"
                      />
                    </LinearGradient>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </LinearGradient>
        </LinearGradient>
      </ScrollView>
    </View>
  );
}
