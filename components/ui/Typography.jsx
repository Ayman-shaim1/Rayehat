import { Text } from 'react-native';
import React from 'react';
import { ui } from '@/constants/styles';

const VARIANTS = {
  title: ui.textTitle,
  section: ui.textSection,
  body: ui.textBody,
  caption: ui.textCaption,
};

export default function Typography({
  variant = 'body',
  children,
  style,
  ...props
}) {
  return (
    <Text style={[VARIANTS[variant] || VARIANTS.body, style]} {...props}>
      {children}
    </Text>
  );
}
