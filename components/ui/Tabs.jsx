import React, { useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import { ui } from '../../constants/styles';

export default function Tabs({
  tabs,
  defaultValue,
  onValueChange,
  style,
}) {
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0]?.value);

  const handlePress = (value) => {
    setActiveTab(value);
    onValueChange?.(value);
  };

  const activeContent = tabs.find((t) => t.value === activeTab);

  return (
    <View style={style}>
      <View style={ui.tabsList}>
        {tabs.map((tab) => (
          <Pressable
            key={tab.value}
            onPress={() => handlePress(tab.value)}
            style={[
              ui.tabsTrigger,
              activeTab === tab.value && ui.tabsTriggerActive,
            ]}
          >
            <Text
              style={[
                ui.tabsTriggerText,
                activeTab === tab.value && ui.tabsTriggerTextActive,
              ]}
            >
              {tab.label}
            </Text>
          </Pressable>
        ))}
      </View>
      {activeContent?.content && (
        <View style={ui.tabsContent}>{activeContent.content}</View>
      )}
    </View>
  );
}
