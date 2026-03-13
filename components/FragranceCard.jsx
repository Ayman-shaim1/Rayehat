import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Typography, Button } from "@/components/ui";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/colors";
import { spacing, radius } from "@/constants/styles";
import { fonts } from "@/constants/fonts";

export default function FragranceCard({
  fragrance,
  brand,
  onPress,
  onFavoritePress,
  onAddToCartPress,
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.imageBox}>
        <Image
          source={fragrance.image}
          style={styles.image}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={styles.heartBtn}
          onPress={() => onFavoritePress?.(fragrance)}
          activeOpacity={0.6}
        >
          <Ionicons name="heart-outline" size={16} color={colors.mutedForeground} />
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
        <Typography variant="caption" style={styles.title} numberOfLines={1}>
          {fragrance.title}
        </Typography>
        {brand && (
          <Typography variant="caption" style={styles.brandName} numberOfLines={1}>
            {brand.title}
          </Typography>
        )}
        {fragrance.rating != null && (
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={10} color="#EAB308" />
            <Typography variant="caption" style={styles.rating}>
              {fragrance.rating}
            </Typography>
          </View>
        )}
        <Typography variant="caption" style={styles.price}>
          ${fragrance.price}
        </Typography>
      </View>

      <Button
        variant="outline"
        size="sm"
        onPress={() => onAddToCartPress?.(fragrance)}
        leftIcon={<Ionicons name="bag-add-outline" size={14} color={colors.foreground} />}
        style={styles.cartBtn}
        textStyle={styles.cartBtnText}
      >
        Add
      </Button>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: 0,
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
  },
  imageBox: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#EBEAE7",
    padding: spacing.sm,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.08)",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: "80%",
  },
  heartBtn: {
    position: "absolute",
    top: spacing.xs,
    right: spacing.xs,
    width: 28,
    height: 28,
    borderRadius: radius.full,
    backgroundColor: colors.card,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  info: {
    paddingHorizontal: spacing.sm,
    paddingTop: spacing.sm,
  },
  title: {
    fontSize: 12,
    fontFamily: fonts.semiBold,
    color: colors.foreground,
  },
  brandName: {
    fontSize: 10,
    color: colors.mutedForeground,
    marginTop: 2,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    marginTop: 4,
  },
  rating: {
    fontSize: 10,
    fontFamily: fonts.semiBold,
    color: colors.foreground,
  },
  price: {
    fontSize: 13,
    fontFamily: fonts.bold,
    color: colors.foreground,
    marginTop: spacing.xs,
  },
  cartBtn: {
    margin: spacing.sm,
    borderRadius: radius.md,
  },
  cartBtnText: {
    fontSize: 11,
  },
});
