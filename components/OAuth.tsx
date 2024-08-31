// import { useOAuth } from "@clerk/clerk-expo";
import { router } from "expo-router";
import { Alert, Image, Text, View } from "react-native";

// import { googleOAuth } from "@/lib/auth";
import { icons } from "@/constants/image";
import { CustomButton } from "./CustomButton";

const OAuth = () => {
  // const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const handleGoogleSignIn = async () => {
    // const result = await googleOAuth(startOAuthFlow);
    // if (result.code === "session_exists") {
    //   Alert.alert("Success", "Session exists. Redirecting to home screen.");
    //   router.replace("/(root)/(tabs)/home");
    // }
    // Alert.alert(result.success ? "Success" : "Error", result.message);
  };

  return (
    <View>
      <CustomButton
        title="Log In with Google"
        className="mt-5 w-full shadow-none"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 h-5 mx-2"
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};

export default OAuth;
