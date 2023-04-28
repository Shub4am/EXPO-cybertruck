import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function HeaderBtn(props) {
  return (
    <View className="">
      <TouchableOpacity onPress={props.onPress}>
        <LinearGradient
          colors={['#2C3036', '#31343C']}
          className="w-14 h-14 rounded-full flex justify-center items-center blur-sm"
        >
          <LinearGradient
            colors={['#2F353A', '#1C1F22']}
            className="w-12 h-12 rounded-full flex justify-center items-center blur-sm "
          >
            <Image source={props.imgSrc} alt="icon" className="w-4 h-4" />
          </LinearGradient>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
