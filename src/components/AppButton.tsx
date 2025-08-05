import { useTheme } from "@react-navigation/native";
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
  const { colors } = useTheme();

  return Platform.OS === "android" ? (
    <View
      className={`${
        my0 ? "my-0" : mt0 ? "mb-2" : "my-2"
      } items-center justify-center overflow-hidden rounded-xl ${className} ${
        disabled ? "opacity-50" : ""
      }`}
      style={{ ...style, backgroundColor: colors.primary }}
    >
      <TouchableNativeFeedback
        onPress={disabled ? undefined : onPress}
        background={TouchableNativeFeedback.Ripple(
          colors.text,
          false
        )}
      >
        <View pointerEvents="box-only" className={`w-full p-3 py-4`}>
          <Text
            className={`text-center text-xl font-bold text-white`}
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
      } items-center justify-center rounded-xl p-3 ${className} ${
        disabled ? "opacity-50" : ""
      }`}
      style={{ ...style, backgroundColor: colors.primary }}
      onPress={disabled ? undefined : onPress}
    >
      <Text className={`text-center text-lg font-bold text-white`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
