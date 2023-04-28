import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation } from '@react-navigation/native';
import HeaderBtn from './HeaderBtn';

export default function Home() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Details');
  };
  const handleSettingsPress = () => {
    navigation.navigate('Settings');
  };

  return (
    <View className="w-full h-full flex justify-start items-center">
      <LinearGradient
        colors={['#424750', '#202326']}
        className="w-full h-full flex justify-center items-center"
      >
        <View className=" absolute top-0 right-4 mt-10 flex justify-end items-center blur-md">
          <HeaderBtn
            imgSrc={require('../../assets/icons/settings.png')}
            onPress={handleSettingsPress}
          />
        </View>
        <Text className="mt-32 text-subTextColor text-2xl leading-7 capitalize">
          tesla
        </Text>
        <Text className="mt-5 text-5xl font-black tracking-wide text-primaryTextColor uppercase">
          cybertruck
        </Text>
        <View className="flex flex-row justify-center items-start z-0">
          <Text className="font-extralight text-[160px] tracking-wide text-primaryTextColor">
            297
          </Text>
          <Text className=" mt-12 text-2xl text-primaryTextColor font-medium">
            km
          </Text>
        </View>
        <Image
          source={require('../../assets/images/mainCar.png')}
          alt="cybertruck side view"
          className="w-full h-[300px] -mt-44 object-cover z-10 ml-10"
        />

        <Text className="text-subTextColor mt-2 text-2xl ">
          A/C is turned on
        </Text>
        <View className="">
          <TouchableOpacity onPress={handlePress}>
            <LinearGradient
              colors={['#11A8FD', '#0081C9']}
              className="mt-5 w-[88px] h-[88px] rounded-full relative justify-center items-center"
            >
              <LinearGradient
                colors={['#005EA3', '#11A8FD']}
                className="w-20 h-20 rounded-full relative justify-center items-center"
              >
                <Image
                  source={require('../../assets/icons/lock.png')}
                  alt="lock icon"
                  className="w-16 h-16"
                />
              </LinearGradient>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <Text className=" mt-5 text-primaryTextColor text-lg font-black ">
          Tap to open the car
        </Text>
      </LinearGradient>
    </View>
  );
}
