import { View, Text, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function Card(props) {
  return (
    <View className="mx-2 flex w-[150px] h-[160px] shadow-2xl shadow-black ">
      <LinearGradient
        colors={['#1F2328', '#1A1C1F']}
        className="w-full h-full  rounded-lg"
      >
        <Image source={props.cardImg} className="z-0" />
        <View className="absolute bottom-3 left-3">
          <Text className="text-lg font-black text-primaryTextColor capitalize">
            {props.cardTitle}
          </Text>
          <Text className="text-lg text-subTextColor capitalize">
            {props.cardSubText}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}
