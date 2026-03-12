import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { ui } from '../../constants/styles';
import { colors } from '../../constants/colors';

const sizeMap = {
  sm: 'small',
  md: 'small',
  lg: 'large',
};

export default function Spinner({
  size = 'md',
  color = colors.primary,
  style,
}) {
  return (
    <View style={[ui.spinner, style]}>
      <ActivityIndicator size={sizeMap[size]} color={color} />
    </View>
  );
}
