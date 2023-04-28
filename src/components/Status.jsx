import { View, Text, Image } from 'react-native';
import React from 'react';

export default function Status(props) {
  return (
    <View className="flex justify-center items-center">
      <View className="flex flex-row items-center mx-3 space-x-1">
        <Image
          source={props.iconSrc}
          alt="icon"
          className={props.statusStyle}
        />
        <Text className="text-lg text-subTextColor capitalize">
          {props.statusTitle}
        </Text>
      </View>
      <Text className="font-black text-lg text-primaryTextColor capitalize">
        {props.statusText}
      </Text>
    </View>
  );
}
