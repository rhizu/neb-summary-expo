import { useTheme } from "@react-navigation/native";
import {
  Platform,
  TouchableHighlight,
  TouchableHighlightProps,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
export default function TouchableNativeOrHighlightOrOpacity({
  children,
  touchableOpacity,
  noSwipe,
  underlayColor,
  ...props
}: (
  | TouchableNativeFeedbackProps
  | TouchableHighlightProps
  | TouchableOpacityProps
) & {
  underlayColor?: string;
  noSwipe?: boolean;
  touchableOpacity?: boolean;
}) {
  const { colors } = useTheme();

  return Platform.OS === "android" ? (
    <TouchableNativeFeedback
      {...props}
      background={
        !props.onPress
          ? TouchableNativeFeedback.Ripple(colors.text, false)
          : TouchableNativeFeedback.Ripple(
              underlayColor || colors.text,
              false
            )
      }
    >
      <View style={props.style}>{children}</View>
    </TouchableNativeFeedback>
  ) : touchableOpacity ? (
    <TouchableOpacity {...props}>{children}</TouchableOpacity>
  ) : (
    <TouchableHighlight
      underlayColor={underlayColor || colors.text}
      {...props}
    >
      {children}
    </TouchableHighlight>
  );
}
