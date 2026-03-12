import React from 'react';
import { View, Text } from 'react-native';
import { ui } from '../../constants/styles';

const variantStyles = {
  default: ui.badgeDefault,
  secondary: ui.badgeSecondary,
  destructive: ui.badgeDestructive,
  outline: ui.badgeOutline,
};

const variantTextStyles = {
  default: null,
  secondary: ui.badgeTextSecondary,
  destructive: ui.badgeTextDestructive,
  outline: ui.badgeTextOutline,
};

export default function Badge({ children, variant = 'default', style, textStyle }) {
  return (
    <View style={[ui.badge, variantStyles[variant], style]}>
      {typeof children === 'string' ? (
        <Text style={[ui.badgeText, variantTextStyles[variant], textStyle]}>
          {children}
        </Text>
      ) : (
        children
      )}
    </View>
  );
}
