import React from 'react';
import { View, Image, Text } from 'react-native';
import { ui } from '../../constants/styles';

const sizeStyles = {
  sm: ui.avatarSm,
  md: null,
  lg: ui.avatarLg,
};

const fallbackSizeStyles = {
  sm: ui.avatarFallbackSm,
  md: null,
  lg: ui.avatarFallbackLg,
};

export default function Avatar({
  source,
  fallback,
  size = 'md',
  style,
}) {
  return (
    <View style={[ui.avatar, sizeStyles[size], style]}>
      {source ? (
        <Image source={source} style={ui.avatarImage} />
      ) : (
        <Text style={[ui.avatarFallback, fallbackSizeStyles[size]]}>
          {fallback || '?'}
        </Text>
      )}
    </View>
  );
}
