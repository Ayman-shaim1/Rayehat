import React from 'react';
import { Pressable, View, Text } from 'react-native';
import { ui } from '../../constants/styles';

export default function ListItem({
  title,
  description,
  left,
  right,
  showChevron = false,
  onPress,
  style,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        ui.listItem,
        pressed && onPress && ui.listItemPressed,
        style,
      ]}
    >
      {left}
      <View style={ui.listItemContent}>
        <Text style={ui.listItemTitle}>{title}</Text>
        {description && (
          <Text style={ui.listItemDescription}>{description}</Text>
        )}
      </View>
      <View style={ui.listItemRight}>
        {right}
        {showChevron && <Text style={ui.listItemChevron}>›</Text>}
      </View>
    </Pressable>
  );
}
