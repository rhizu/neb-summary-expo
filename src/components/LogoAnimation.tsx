import BookNEB from "@/assets/logo/BookNEB.svg"; // will come from right
import BookOutline from "@/assets/logo/BookOutline.svg"; // also comes from right
import Hat from "@/assets/logo/Hat.svg"; // comes from left, higher
import { View } from "react-native";
import Animated, {
  Easing,
  Keyframe,
  SlideInLeft,
  SlideInRight,
} from "react-native-reanimated";

const keyframe = new Keyframe({
  0: {
    transform: [{ translateY: 0 }],
  },
  100: {
    transform: [{ translateY: -100 }],
    easing: Easing.out(Easing.quad),
  },
});

export default function LogoAnimation() {
  return (
    <View className="absolute top-0 right-0 left-0 bottom-0 items-center justify-center">
      <Animated.View entering={keyframe.delay(1000).duration(500)}>
        <Animated.View entering={SlideInLeft.springify()}>
          <Hat width={200} height={200} />
        </Animated.View>
        <Animated.View
          entering={SlideInRight.springify()}
          className="absolute top-0 left-0 right-0 items-center"
        >
          <BookNEB width={200} height={200} />
        </Animated.View>
        <Animated.View
          entering={SlideInRight.springify()}
          className="absolute bottom-0 left-0 right-0 items-center"
        >
          <BookOutline width={200} height={200} />
        </Animated.View>
      </Animated.View>
    </View>
  );
}
