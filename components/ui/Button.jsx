import React from 'react';
import { Pressable, Text } from 'react-native';
import { ui } from '../../constants/styles';

const variantStyles = {
  default: ui.buttonDefault,
  secondary: ui.buttonSecondary,
  destructive: ui.buttonDestructive,
  outline: ui.buttonOutline,
  ghost: ui.buttonGhost,
};

const variantTextStyles = {
  default: null,
  secondary: ui.buttonTextSecondary,
  destructive: ui.buttonTextDestructive,
  outline: ui.buttonTextOutline,
  ghost: ui.buttonTextGhost,
};

const sizeStyles = {
  sm: ui.buttonSm,
  md: null,
  lg: ui.buttonLg,
};

const sizeTextStyles = {
  sm: ui.buttonTextSm,
  md: null,
  lg: ui.buttonTextLg,
};

export default function Button({
  children,
  variant = 'default',
  size = 'md',
  disabled = false,
  onPress,
  style,
  textStyle,
  leftIcon,
  rightIcon,
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        ui.button,
        variantStyles[variant],
        sizeStyles[size],
        pressed && { opacity: 0.8 },
        disabled && ui.buttonDisabled,
        style,
      ]}
    >
      {leftIcon}
      {typeof children === 'string' ? (
        <Text
          style={[
            ui.buttonText,
            variantTextStyles[variant],
            sizeTextStyles[size],
            textStyle,
          ]}
        >
          {children}
        </Text>
      ) : (
        children
      )}
      {rightIcon}
    </Pressable>
  );
}
