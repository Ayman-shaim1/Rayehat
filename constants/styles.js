import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { fonts } from './fonts';

export const radius = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  '2xl': 32,
};

export const ui = StyleSheet.create({
  // ── Button ──────────────────────────────
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.md,
    paddingVertical: 10,
    paddingHorizontal: 16,
    gap: 8,
  },
  buttonDefault: {
    backgroundColor: colors.primary,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
  },
  buttonDestructive: {
    backgroundColor: colors.destructive,
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.input,
  },
  buttonGhost: {
    backgroundColor: 'transparent',
  },
  buttonSm: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: radius.md,
  },
  buttonLg: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: radius.md,
  },
  buttonText: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.primaryForeground,
  },
  buttonTextSecondary: {
    color: colors.secondaryForeground,
  },
  buttonTextDestructive: {
    color: colors.destructiveForeground,
  },
  buttonTextOutline: {
    color: colors.foreground,
  },
  buttonTextGhost: {
    color: colors.foreground,
  },
  buttonTextSm: {
    fontSize: 13,
  },
  buttonTextLg: {
    fontSize: 16,
  },
  buttonDisabled: {
    opacity: 0.5,
  },

  // ── Input (shadcn style: flat, minimal, no shadows) ───────────────
  inputWrapper: {
    gap: 6,
  },
  inputLabel: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.foreground,
    marginBottom: 2,
  },
  input: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.foreground,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.input,
    borderRadius: radius.sm,
    paddingVertical: 8,
    paddingHorizontal: 12,
    minHeight: 40,
    // Flat shadcn look - no shadows or emboss
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  inputFocused: {
    borderColor: colors.ring,
    borderWidth: 1,
    shadowColor: colors.ring,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  inputError: {
    borderColor: colors.destructive,
    borderWidth: 1,
  },
  inputErrorText: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.destructive,
    marginTop: 2,
  },
  inputDisabled: {
    opacity: 0.5,
    backgroundColor: colors.muted,
  },
  inputPlaceholder: {
    color: colors.mutedForeground,
  },

  // ── Card ────────────────────────────────
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  cardHeader: {
    padding: spacing.lg,
    gap: 4,
  },
  cardTitle: {
    fontFamily: fonts.semiBold,
    fontSize: 18,
    color: colors.cardForeground,
  },
  cardDescription: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.mutedForeground,
  },
  cardContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
    gap: spacing.sm,
  },

  // ── Avatar ──────────────────────────────
  avatar: {
    width: 40,
    height: 40,
    borderRadius: radius.full,
    backgroundColor: colors.muted,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  avatarSm: {
    width: 32,
    height: 32,
  },
  avatarLg: {
    width: 56,
    height: 56,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  avatarFallback: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.mutedForeground,
  },
  avatarFallbackSm: {
    fontSize: 12,
  },
  avatarFallbackLg: {
    fontSize: 22,
  },

  // ── Badge ───────────────────────────────
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: radius.sm,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  badgeDefault: {
    backgroundColor: colors.primary,
  },
  badgeSecondary: {
    backgroundColor: colors.secondary,
  },
  badgeDestructive: {
    backgroundColor: colors.destructive,
  },
  badgeOutline: {
    backgroundColor: 'transparent',
    borderColor: colors.border,
  },
  badgeText: {
    fontFamily: fonts.semiBold,
    fontSize: 12,
    color: colors.primaryForeground,
  },
  badgeTextSecondary: {
    color: colors.secondaryForeground,
  },
  badgeTextDestructive: {
    color: colors.destructiveForeground,
  },
  badgeTextOutline: {
    color: colors.foreground,
  },

  // ── Divider ─────────────────────────────
  divider: {
    height: 1,
    backgroundColor: colors.border,
  },
  dividerVertical: {
    width: 1,
    height: '100%',
    backgroundColor: colors.border,
  },

  // ── ListItem ────────────────────────────
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: spacing.lg,
    gap: 12,
    backgroundColor: colors.background,
  },
  listItemPressed: {
    backgroundColor: colors.accent,
  },
  listItemContent: {
    flex: 1,
    gap: 2,
  },
  listItemTitle: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.foreground,
  },
  listItemDescription: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.mutedForeground,
  },
  listItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemChevron: {
    fontSize: 18,
    color: colors.mutedForeground,
  },

  // ── Tabs ────────────────────────────────
  tabsList: {
    flexDirection: 'row',
    backgroundColor: colors.muted,
    borderRadius: radius.md,
    padding: 4,
  },
  tabsTrigger: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: radius.sm,
  },
  tabsTriggerActive: {
    backgroundColor: colors.background,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  tabsTriggerText: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.mutedForeground,
  },
  tabsTriggerTextActive: {
    color: colors.foreground,
  },
  tabsContent: {
    marginTop: spacing.md,
  },

  // ── Modal ───────────────────────────────
  modalOverlay: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.overlay,
    paddingHorizontal: spacing.xl,
  },
  modalBackdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  modalContentWrapper: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    paddingHorizontal: spacing.lg,
  },
  modalContent: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    backgroundColor: colors.background,
    borderRadius: radius.lg,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  modalHeader: {
    padding: spacing.lg,
    paddingRight: 40,
    gap: 4,
  },
  modalTitle: {
    fontFamily: fonts.semiBold,
    fontSize: 18,
    color: colors.foreground,
  },
  modalDescription: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.mutedForeground,
  },
  modalBody: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: spacing.lg,
    gap: spacing.sm,
  },
  modalClose: {
    position: 'absolute',
    top: 12,
    right: 12,
    padding: 12,
    margin: -8,
    zIndex: 10,
  },
  modalCloseText: {
    fontSize: 18,
    color: colors.mutedForeground,
  },

  // ── Toast ───────────────────────────────
  toastContainer: {
    position: 'absolute',
    bottom: 40,
    left: spacing.lg,
    right: spacing.lg,
    zIndex: 9999,
  },
  toast: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.foreground,
    borderRadius: radius.lg,
    paddingVertical: 12,
    paddingHorizontal: spacing.lg,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  toastDestructive: {
    backgroundColor: colors.destructive,
  },
  toastSuccess: {
    backgroundColor: colors.success,
  },
  toastContent: {
    flex: 1,
    gap: 2,
  },
  toastTitle: {
    fontFamily: fonts.semiBold,
    fontSize: 14,
    color: colors.primaryForeground,
  },
  toastDescription: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.primaryForeground,
  },
  toastClose: {
    padding: 4,
  },
  toastCloseText: {
    fontSize: 16,
    color: colors.primaryForeground,
  },

  // ── Skeleton ────────────────────────────
  skeleton: {
    backgroundColor: colors.muted,
    borderRadius: radius.md,
    overflow: 'hidden',
  },
  skeletonCircle: {
    borderRadius: radius.full,
  },

  // ── Switch ──────────────────────────────
  switchTrack: {
    width: 44,
    height: 24,
    borderRadius: radius.full,
    backgroundColor: colors.input,
    padding: 2,
    justifyContent: 'center',
  },
  switchTrackActive: {
    backgroundColor: colors.primary,
  },
  switchThumb: {
    width: 20,
    height: 20,
    borderRadius: radius.full,
    backgroundColor: colors.background,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  switchDisabled: {
    opacity: 0.5,
  },

  // ── Checkbox ────────────────────────────
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: radius.xs,
    borderWidth: 1.5,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
  },
  checkboxCheckmark: {
    fontFamily: fonts.bold,
    fontSize: 12,
    color: colors.primaryForeground,
  },
  checkboxLabel: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.foreground,
  },
  checkboxDisabled: {
    opacity: 0.5,
  },

  // ── BottomSheet ─────────────────────────
  bottomSheetOverlay: {
    flex: 1,
    backgroundColor: colors.overlay,
    justifyContent: 'flex-end',
  },
  bottomSheetContent: {
    backgroundColor: colors.background,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    maxHeight: '80%',
  },
  bottomSheetHandle: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  bottomSheetHandleBar: {
    width: 36,
    height: 4,
    borderRadius: radius.full,
    backgroundColor: colors.muted,
  },
  bottomSheetBody: {
    padding: spacing.lg,
  },

  // ── Spinner ─────────────────────────────
  spinner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
