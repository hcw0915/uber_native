import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { welcomeBoardingConfig } from "@/constants";
import { CustomButton } from "@/components/CustomButton";

const OnBoarding = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<Swiper>(null);

  const isLastSlide = activeIndex === welcomeBoardingConfig.length - 1;

  const onPressSignUp = () => {
    router.replace("/(auth)/sign-up");
  };

  const onPressNext = () => {
    isLastSlide
      ? router.replace("/(auth)/sign-up")
      : swiperRef.current?.scrollBy(1);
  };

  const onIndexChanged = (idx: number) => {
    setActiveIndex(idx);
  };

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        className="w-full flex justify-end items-end p-5"
        onPress={onPressSignUp}
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 rounded-full bg-[#E2E8F0]" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 rounded-full bg-[#0286FF]" />
        }
        onIndexChanged={(index) => onIndexChanged(index)}
      >
        {welcomeBoardingConfig.map((item) => {
          return (
            <View
              key={item.id}
              className="flex items-center justify-center p-5"
            >
              <Image
                source={item.image}
                // 為什麼這裡不能使用 rem ?
                className="w-full h-[300px]"
                resizeMode="contain"
              />
              <View className="flex flex-row items-center justify-center w-full mt-10">
                <Text className="text-black text-3xl font-bold mx-10 text-center">
                  {item.title}
                </Text>
              </View>
              <Text className="text-lg font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
                {item.description}
              </Text>
            </View>
          );
        })}
      </Swiper>

      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        className="w-11/12 mt-10"
        onPress={onPressNext}
      />
    </SafeAreaView>
  );
};

export default OnBoarding;
