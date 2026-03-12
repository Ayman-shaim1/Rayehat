import React, { useEffect, useRef } from 'react';
import { View, Text, Pressable, Animated } from 'react-native';
import { ui } from '../../constants/styles';

const variantStyles = {
  default: null,
  destructive: ui.toastDestructive,
  success: ui.toastSuccess,
};

export default function Toast({
  visible = false,
  title,
  description,
  variant = 'default',
  duration = 3000,
  onClose,
  style,
}) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();

      if (duration > 0) {
        const timer = setTimeout(() => onClose?.(), duration);
        return () => clearTimeout(timer);
      }
    } else {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 20,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <View style={[ui.toastContainer, style]} pointerEvents="box-none">
      <Animated.View
        style={[
          ui.toast,
          variantStyles[variant],
          { opacity, transform: [{ translateY }] },
        ]}
      >
        <View style={ui.toastContent}>
          {title && <Text style={ui.toastTitle}>{title}</Text>}
          {description && (
            <Text style={ui.toastDescription}>{description}</Text>
          )}
        </View>
        {onClose && (
          <Pressable onPress={onClose} style={ui.toastClose}>
            <Text style={ui.toastCloseText}>✕</Text>
          </Pressable>
        )}
      </Animated.View>
    </View>
  );
}
