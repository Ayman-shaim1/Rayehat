import React from 'react';
import {
  Modal,
  View,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { ui } from '../../constants/styles';

export default function BottomSheet({
  visible = false,
  onClose,
  children,
  style,
}) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <Pressable style={ui.bottomSheetOverlay} onPress={onClose}>
          <Pressable
            style={[ui.bottomSheetContent, style]}
            onPress={(e) => e.stopPropagation()}
          >
            <View style={ui.bottomSheetHandle}>
              <View style={ui.bottomSheetHandleBar} />
            </View>
            <View style={ui.bottomSheetBody}>{children}</View>
          </Pressable>
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  );
}
