import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { InputFieldProps } from "@/types/type";

export const InputField = (props: InputFieldProps) => {
  const {
    label,
    icon,
    secureTextEntry = false,
    labelStyle,
    containerStyle,
    inputStyle,
    iconStyle,
    className,
    ...rest
  } = props;

  return (
    <KeyboardAvoidingView
      // IOS, Android 虛擬鍵盤行為高度不同
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* 按鈕不要有任何效果 */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
            {label}
          </Text>
          <View
            className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500  ${containerStyle}`}
          >
            {icon && (
              <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
            )}
            <TextInput
              className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
              secureTextEntry={secureTextEntry}
              {...rest}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
