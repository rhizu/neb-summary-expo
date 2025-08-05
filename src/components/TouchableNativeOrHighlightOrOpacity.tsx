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
import {
  TouchableHighlight as _TouchableHighlight,
  TouchableHighlightProps as _TouchableHighlightProps,
  TouchableNativeFeedback as _TouchableNativeFeedback,
  TouchableOpacity as _TouchableOpacity,
  TouchableOpacityProps as _TouchableOpacityProps,
} from "react-native-gesture-handler";
import { TouchableNativeFeedbackProps as _TouchableNativeFeedbackProps } from "react-native-gesture-handler/lib/typescript/components/touchables/TouchableNativeFeedbackProps";

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
  if (noSwipe) {
    return Platform.OS === "android" ? (
      <_TouchableNativeFeedback
        {...(props as _TouchableNativeFeedbackProps)}
        background={
          !props.onPress
            ? TouchableNativeFeedback.Ripple(colors.white, false)
            : TouchableNativeFeedback.Ripple(
                underlayColor || colors.highlight,
                false
              )
        }
      >
        <View style={props.style}>{children}</View>
      </_TouchableNativeFeedback>
    ) : touchableOpacity ? (
      <_TouchableOpacity {...(props as _TouchableOpacityProps)}>
        {children}
      </_TouchableOpacity>
    ) : (
      <_TouchableHighlight
        underlayColor={underlayColor || colors.text}
        {...(props as _TouchableHighlightProps)}
      >
        {children}
      </_TouchableHighlight>
    );
  }
  return Platform.OS === "android" ? (
    <TouchableNativeFeedback
      {...props}
      background={
        !props.onPress
          ? TouchableNativeFeedback.Ripple(colors.background, false)
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
