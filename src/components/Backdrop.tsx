import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { C } from '../theme';

const GRID = require('../assets/grid.png');
const GLOW = require('../assets/glow.png');

/** Neon grid with a colored glow at the top and bottom edge. Place it first inside a full-screen view. */
export function Backdrop({ topColor, bottomColor }: { topColor: string; bottomColor: string }) {
  return (
    <View style={[StyleSheet.absoluteFill, { pointerEvents: 'none' }]}>
      <Image source={GLOW} resizeMode="stretch" tintColor={topColor}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '45%', width: '100%', opacity: 0.16 }} />
      <Image source={GLOW} resizeMode="stretch" tintColor={bottomColor}
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%', width: '100%', opacity: 0.12,
          transform: [{ rotate: '180deg' }] }} />
      <Image source={GRID} resizeMode="repeat" tintColor={C.dim}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.12 }} />
    </View>
  );
}
