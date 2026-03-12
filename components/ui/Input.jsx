import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { ui } from '../../constants/styles';
import { colors } from '../../constants/colors';

export default function Input({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  disabled = false,
  secureTextEntry = false,
  keyboardType,
  multiline = false,
  numberOfLines = 1,
  style,
  inputStyle,
  ...props
}) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={[ui.inputWrapper, style]}>
      {label && <Text style={ui.inputLabel}>{label}</Text>}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.mutedForeground}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={numberOfLines}
        editable={!disabled}
        underlineColorAndroid="transparent"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={[
          ui.input,
          focused && ui.inputFocused,
          error && ui.inputError,
          disabled && ui.inputDisabled,
          multiline && { minHeight: 80, textAlignVertical: 'top' },
          inputStyle,
        ]}
        {...props}
      />
      {error && <Text style={ui.inputErrorText}>{error}</Text>}
    </View>
  );
}
