import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { brands, fragrances } from "@/data/data";
import { colors } from "@/constants/colors";
import { spacing, radius } from "@/constants/styles";
import Card, { CardContent } from "@/components/ui/Card";
import { Button, Typography, Input } from "@/components/ui";
import FragranceCard from "@/components/FragranceCard";
import BrandBadge from "@/components/BrandBadge";
import Container from "@/components/layout/Container";
import { Ionicons } from "@expo/vector-icons";
const GAP = spacing.lg;

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Container style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.headerRow}>
          <Typography variant="title" style={styles.homeTitle}>
            Welcome to Rayehat
          </Typography>
          <View style={styles.headerIcons}>
            <TouchableOpacity
              onPress={() => console.log("favorites")}
              style={styles.iconButton}
              activeOpacity={0.7}
            >
              <Ionicons name="heart-outline" size={24} color={colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log("cart")}
              style={styles.iconButton}
              activeOpacity={0.7}
            >
              <Ionicons name="cart-outline" size={24} color={colors.primary} />
            </TouchableOpacity>
          </View>
        </View>

        {/* BEGIN SEARCH SECTION */}
        <View style={styles.searchSection}>
          <Input
            placeholder="Search fragrances, brands..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.searchInput}
          />
        </View>
        {/* END SEARCH SECTION */}

        {/* BEGIN BRANDS SECTION */}

        <Typography variant="section" style={styles.sectionTitle}>
          Favorite Brands
        </Typography>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.brandsScrollContent}
          style={styles.brandsScroll}
        >
          {brands.map((brand) => (
            <BrandBadge
              key={brand.id}
              brand={brand}
              onPress={() => console.log(brand.id)}
            />
          ))}
        </ScrollView>

        {/* END BRANDS SECTION */}

        {/* BEGIN FRAGRANCES SECTION */}

        <Typography variant="section" style={[styles.sectionTitle, { marginTop:20 }]}>
          Favorite Fragrances
        </Typography>
        <View style={styles.fragrancesGrid}>
          {[0, 1].map((row) => (
            <View key={row} style={styles.fragranceRow}>
              {fragrances.slice(row * 3, row * 3 + 3).map((fragrance) => {
                const brand = brands.find((b) => b.id === fragrance.brandId);
                return (
                  <FragranceCard
                    key={fragrance.id}
                    fragrance={fragrance}
                    brand={brand}
                    onPress={() => console.log(fragrance.id)}
                  />
                );
              })}
            </View>
          ))}
        </View>
        <Button>View All Fragrances</Button>

        {/* END FRAGRANCES SECTION */}
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  homeTitle: {
    marginBottom: 0,
    flex: 1,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  iconButton: {
    padding: spacing.sm,
  },
  searchSection: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    marginBottom: spacing.md,
  },
  searchInput: {
    marginBottom: 0,
  },
  card: {
    paddingVertical: spacing.lg,
    marginBottom: spacing.lg,
  },
  cardContent: {
    paddingHorizontal: spacing.lg,
  },
  brandsScroll: {
    marginHorizontal: -spacing.lg,
  },
  brandsScrollContent: {
    flexDirection: "row",
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
  },
  fragrancesGrid: {
    paddingBottom: spacing.lg,
    width: "100%",
  },
  fragranceRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: spacing.sm,
    marginBottom: GAP,
  },
});
