import { createTamagui, createFont, createTokens } from 'tamagui'
import { shorthands } from '@tamagui/shorthands'
import { createMedia } from '@tamagui/react-native-media-driver'
import { themes } from './mytheme'
import { tokens } from './themes/tokens';

import { animations } from './animations'

const headingVosqueFont = createFont({
  family: 'VosqueStyleH',
  size: {
    6: 13,
  },
  lineHeight: {
    6: 20,
  },
  weight: {
    6: '700',
  },
  letterSpacing: {
    6: 1,
  },
  face: {
    700: { normal: 'Montserrat-Bold' },
  },
});

const bodyVosqueFont = createFont({
  family: 'VosqueStyleB',
  sizeSize: (size) => Math.round(size * 1.1),
  sizeLineHeight: (size) => Math.round(size * 1.1 + (size > 20 ? 10 : 10)),
  size: {
    1: 16,
    2: 14,
    3: 12,
    4: 10,
    5: 8,
    6: 6,
    true: 16,
  },
  lineHeight: {
    1: 18,
    2: 16,
    3: 14,
    4: 12,
    5: 10,
    6: 8,
  },
  weight: {
    1: '400',
    2: '400',
    3: '400',
    4: '400',
    5: '400',
    6: '400',
  },
  letterSpacing: {
    1: -0.5,
    2: -0.5,
    3: -0.5,
    4: -0.5,
    5: -0.5,
    6: -0.5,
  },
  face: {
    400: { normal: 'NotoSans-Medium' },
  },
});

const bodyBoldVosqueFont = createFont({
  family: 'VosqueStyleBBold',
  sizeSize: (size) => Math.round(size * 1.1),
  sizeLineHeight: (size) => Math.round(size * 1.1 + (size > 20 ? 10 : 10)),
  size: {
    1: 16,
    2: 14,
    3: 12,
    4: 10,
    5: 8,
    6: 6,
    true: 16,
  },
  lineHeight: {
    1: 18,
    2: 16,
    3: 14,
    4: 12,
    5: 10,
    6: 8,
  },
  weight: {
    1: '400',
    2: '400',
    3: '400',
    4: '400',
    5: '400',
    6: '400',
  },
  letterSpacing: {
    1: -0.5,
    2: -0.5,
    3: -0.5,
    4: -0.5,
    5: -0.5,
    6: -0.5,
  },
  face: {
    400: { normal: 'NotoSans-Bold' },
  },
});

const hackVosqueFont = createFont({
  family: 'VosqueStyleHack',
  sizeSize: (size) => Math.round(size * 1.1),
  sizeLineHeight: (size) => Math.round(size * 1.1 + (size > 20 ? 10 : 10)),
  size: {
    1: 16,
    2: 14,
    3: 12,
    4: 10,
    5: 8,
    6: 6,
    true: 16,
  },
  lineHeight: {
    1: 18,
    2: 16,
    3: 14,
    4: 12,
    5: 10,
    6: 8,
  },
  weight: {
    1: '400',
    2: '400',
    3: '400',
    4: '400',
    5: '400',
    6: '400',
  },
  letterSpacing: {
    1: -0.5,
    2: -0.5,
    3: -0.5,
    4: -0.5,
    5: -0.5,
    6: -0.5,
  },
  face: {
    400: { normal: 'Montserrat-MediumItalic' },
  },
});



export const config = createTamagui({
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  tokens,
  fonts: {
    heading: headingVosqueFont,
    body: bodyVosqueFont,
    hack: hackVosqueFont,
    bodyBold: bodyBoldVosqueFont,
  },
  themes,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
})
