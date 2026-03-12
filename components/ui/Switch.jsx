import React, { useEffect, useRef } from 'react';
import { Pressable, Animated } from 'react-native';
import { ui } from '../../constants/styles';

export default function Switch({
  value = false,
  onValueChange,
  disabled = false,
  style,
}) {
  const translateX = useRef(new Animated.Value(value ? 20 : 0)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: value ? 20 : 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }, [value]);

  return (
    <Pressable
      onPress={() => !disabled && onValueChange?.(!value)}
      style={[
        ui.switchTrack,
        value && ui.switchTrackActive,
        disabled && ui.switchDisabled,
        style,
      ]}
    >
      <Animated.View
        style={[ui.switchThumb, { transform: [{ translateX }] }]}
      />
    </Pressable>
  );
}
