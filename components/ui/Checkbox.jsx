import React from 'react';
import { Pressable, View, Text } from 'react-native';
import { ui } from '../../constants/styles';

export default function Checkbox({
  checked = false,
  onValueChange,
  label,
  disabled = false,
  style,
}) {
  return (
    <Pressable
      onPress={() => !disabled && onValueChange?.(!checked)}
      style={[ui.checkboxRow, disabled && ui.checkboxDisabled, style]}
    >
      <View style={[ui.checkbox, checked && ui.checkboxChecked]}>
        {checked && <Text style={ui.checkboxCheckmark}>✓</Text>}
      </View>
      {label && <Text style={ui.checkboxLabel}>{label}</Text>}
    </Pressable>
  );
}
