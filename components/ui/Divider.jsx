import React from 'react';
import { View } from 'react-native';
import { ui } from '../../constants/styles';

export default function Divider({ vertical = false, style }) {
  return (
    <View style={[vertical ? ui.dividerVertical : ui.divider, style]} />
  );
}
