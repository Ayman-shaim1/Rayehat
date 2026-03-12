import React from "react";
import {
  Modal as RNModal,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { ui } from "../../constants/styles";

export default function Modal({
  visible = false,
  onClose,
  title,
  description,
  children,
  footer,
  animationType = "fade",
}) {
  return (
    <RNModal
      visible={visible}
      transparent
      animationType={animationType}
      onRequestClose={onClose}
      presentationStyle="overFullScreen"
      statusBarTranslucent
    >
      <View style={ui.modalOverlay} pointerEvents="box-none">
        <TouchableOpacity
          style={ui.modalBackdrop}
          onPress={onClose}
          activeOpacity={1}
          collapsable={false}
        >
          <View style={{ flex: 1 }} />
        </TouchableOpacity>
        <View
          style={ui.modalContentWrapper}
          pointerEvents="box-none"
        >
          <View style={ui.modalContent}>
            {(title || description) && (
              <View style={ui.modalHeader}>
                {title && <Text style={ui.modalTitle}>{title}</Text>}
                {description && (
                  <Text style={ui.modalDescription}>{description}</Text>
                )}
              </View>
            )}

            <View style={ui.modalBody}>{children}</View>

            {footer && <View style={ui.modalFooter}>{footer}</View>}

            {onClose && (
              <TouchableOpacity
                onPress={onClose}
                style={ui.modalClose}
                hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                activeOpacity={0.7}
              >
                <Text style={ui.modalCloseText}>✕</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </RNModal>
  );
}
