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
  return Platform.OS === "android" ? (
    <TouchableNativeFeedback
      {...props}
      background={
        !props.onPress
          ? TouchableNativeFeedback.Ripple("#005198", false)
          : TouchableNativeFeedback.Ripple(
              underlayColor || "#0b365c",
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
      underlayColor={underlayColor || "#0b365c"}
      {...props}
    >
      {children}
    </TouchableHighlight>
  );
}
