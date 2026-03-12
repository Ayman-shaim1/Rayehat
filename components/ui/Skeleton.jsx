import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { ui } from '../../constants/styles';

export default function Skeleton({
  width,
  height,
  circle = false,
  style,
}) {
  const pulse = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 0.4,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    );
    animation.start();
    return () => animation.stop();
  }, []);

  return (
    <Animated.View
      style={[
        ui.skeleton,
        circle && ui.skeletonCircle,
        { width, height, opacity: pulse },
        circle && { width: width || height, height: height || width },
        style,
      ]}
    />
  );
}
