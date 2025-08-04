import React, { useEffect } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

// Import your SVGs
import RightPart from "../assets/logo/Center.svg"; // will come from right
import CenterOverlay from "../assets/logo/Left.svg"; // comes from left, higher
import LeftPart from "../assets/logo/Right.svg"; // also comes from right

const { width, height } = Dimensions.get("window");

type LogoAnimationProps = {
  onFinish?: () => void;
};

export default function LogoAnimation({ onFinish }: LogoAnimationProps) {
  // Separate shared values for each part
  const leftX = useSharedValue(width + 100); // LeftPart
  const rightX = useSharedValue(width + 100); // RightPart
  const centerX = useSharedValue(-100); // CenterOverlay

  const leftY = useSharedValue(height / 2 - 50);
  const rightY = useSharedValue(height / 2 - 50);
  const centerY = useSharedValue(height / 2 - 120); // higher up

  useEffect(() => {
    const targetX = width / 2 - 50;

    // Animate LeftPart from right
    leftX.value = withTiming(targetX, { duration: 700 });

    // Animate RightPart from right
    rightX.value = withTiming(targetX, { duration: 700 });

    // Animate CenterOverlay from left
    centerX.value = withTiming(targetX, { duration: 700 }, () => {
      // Final small upward move for polish
      leftY.value = withTiming(leftY.value - 20, { duration: 400 });
      rightY.value = withTiming(rightY.value - 20, { duration: 400 });
      centerY.value = withTiming(centerY.value - 40, { duration: 400 }, () => {
        if (onFinish) runOnJS(onFinish)();
      });
    });
  }, []);

  // Animated styles
  const leftStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: leftX.value }, { translateY: leftY.value }],
  }));

  const rightStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: rightX.value }, { translateY: rightY.value }],
  }));

  const centerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: centerX.value }, { translateY: centerY.value }],
  }));

  return (
    <View style={StyleSheet.absoluteFill}>
      <Animated.View style={[styles.logoPart, centerStyle]}>
        <CenterOverlay width={100} height={100} />
      </Animated.View>

      <Animated.View style={[styles.logoPart, leftStyle]}>
        <LeftPart width={120} height={100} />
      </Animated.View>

      <Animated.View style={[styles.logoPart, rightStyle]}>
        <RightPart width={100} height={100} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoPart: {
    position: "absolute",
    width: 100,
    height: 100,
  },
});
