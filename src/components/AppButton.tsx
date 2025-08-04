import {
  Platform,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";

interface AppButtonProps {
  onPress: () => void;
  title: string;
  className?: string;
  style?: Object;
  disabled?: boolean;
  highlightColor?: string;
  my0?: boolean;
  mt0?: boolean;
}

export default function AppButton({
  title,
  onPress,
  className,
  style,
  disabled = false,
  highlightColor,
  my0,
  mt0,
}: AppButtonProps) {
  return Platform.OS === "android" ? (
    <View
      className={`${
        my0 ? "my-0" : mt0 ? "mb-2" : "my-2"
      } items-center justify-center overflow-hidden rounded-xl bg-[#005198] ${className} ${
        disabled ? "opacity-50" : ""
      }`}
      style={style}
    >
      <TouchableNativeFeedback
        onPress={disabled ? undefined : onPress}
        background={TouchableNativeFeedback.Ripple("#143b5d", false)}
      >
        <View pointerEvents="box-only" className={`w-full p-3`}>
          <Text
            className={`text-center text-lg font-bold text-white`}
          >
            {title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  ) : (
    <TouchableOpacity
      accessibilityRole="button"
      className={`${
        my0 ? "my-0" : mt0 ? "mt0 mb-2" : "my-2"
      } items-center justify-center rounded-xl bg-[#005198] p-3 ${className} ${
        disabled ? "opacity-50" : ""
      }`}
      style={style}
      onPress={disabled ? undefined : onPress}
    >
      <Text className={`text-center text-lg font-bold text-white`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
