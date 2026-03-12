import React from 'react';
import { View, Text } from 'react-native';
import { ui } from '../../constants/styles';

export function CardHeader({ title, description, children, style }) {
  return (
    <View style={[ui.cardHeader, style]}>
      {title && <Text style={ui.cardTitle}>{title}</Text>}
      {children}
    </View>
  );
}

export function CardContent({ children, style }) {
  return <View style={[ui.cardContent, style]}>{children}</View>;
}

export function CardFooter({ children, style }) {
  return <View style={[ui.cardFooter, style]}>{children}</View>;
}

export default function Card({ children, style }) {
  return <View style={[ui.card, style]}>{children}</View>;
}
