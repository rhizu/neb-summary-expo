import BookNEB from "@/assets/logo/BookNEB.svg"; // will come from right
import BookOutline from "@/assets/logo/BookOutline.svg"; // also comes from right
import Hat from "@/assets/logo/Hat.svg"; // comes from left, higher
import { Dimensions, View } from "react-native";
import Animated, {
  Easing,
  Keyframe,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

const keyframe = new Keyframe({
  0: {
    transform: [{ translateY: 0 }],
  },
  100: {
    transform: [{ translateY: -100 }],
    easing: Easing.bezier(0.4, 0.0, 0.2, 1),
  },
});

const slideInLeft = new Keyframe({
  0: { transform: [{ translateX: -width }] },
  100: {
    transform: [{ translateX: 0 }],
    easing: Easing.bezier(0.4, 0.0, 0.2, 1),
  },
});

const slideInRight = new Keyframe({
  0: { transform: [{ translateX: width }] },
  100: {
    transform: [{ translateX: 0 }],
    easing: Easing.bezier(0.4, 0.0, 0.2, 1),
  },
});

export default function LogoAnimation() {
  return (
    <View className="absolute top-0 right-0 left-0 bottom-0 items-center justify-center">
      <Animated.View entering={keyframe.delay(750).duration(500)}>
        <Animated.View entering={slideInLeft.duration(500)}>
          <Hat width={200} height={200} />
        </Animated.View>
        <Animated.View
          entering={slideInRight.duration(500)}
          className="absolute top-0 left-0 right-0 items-center"
        >
          <BookNEB width={200} height={200} />
        </Animated.View>
        <Animated.View
          entering={slideInRight.duration(500)}
          className="absolute bottom-0 left-0 right-0 items-center"
        >
          <BookOutline width={200} height={200} />
        </Animated.View>
      </Animated.View>
    </View>
  );
}
