import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Typography } from "@/components/ui";
import { colors } from "@/constants/colors";
import { spacing, radius } from "@/constants/styles";

export default function BrandBadge({ brand, onPress }) {
  return (
    <TouchableOpacity
      style={styles.badge}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.logoWrapper}>
        <Image
          source={brand.image}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Typography
        variant="caption"
        style={styles.title}
        numberOfLines={1}
      >
        {brand.title}
      </Typography>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  badge: {
    width: 72,
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderRadius: radius.lg,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.xs,
  },
  logoWrapper: {
    width: 44,
    height: 44,
    borderRadius: radius.full,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F4F5",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  title: {
    marginTop: spacing.xs,
    textAlign: "center",
  },
});
