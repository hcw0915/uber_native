import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import { CustomButton } from "@/components/CustomButton";
import { InputField } from "@/components/InputField";
import { icons, images } from "@/constants/image";
import OAuth from "@/components/OAuth";

const defaultForm = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [form, setForm] = useState(defaultForm);

  const handleInputChange = (key: keyof typeof form, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSignIn = async () => {
    // sign up action
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        {/* Top Section */}
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5 ">
            Welcome 👋
          </Text>
        </View>

        {/* Input Section */}
        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => handleInputChange("email", value)}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            value={form.password}
            onChangeText={(value) => handleInputChange("password", value)}
          />

          <CustomButton
            title="Sign Up"
            className="mt-6"
            onPress={handleSignIn}
          />

          {/* OAuth */}

          <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
            <View className="flex-1 h-[1px] bg-general-100" />
            <Text className="text-lg">Or</Text>
            <View className="flex-1 h-[1px] bg-general-100" />
          </View>

          <OAuth />

          <Link
            href={"/sign-up"}
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>Don't have an account? </Text>
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>

        {/* Verification Modal */}
      </View>
    </ScrollView>
  );
};

export default SignIn;
