import Facebook from "@/assets/logo/Facebook.svg";
import Instagram from "@/assets/logo/Instagram.svg";
import Nymnalogo from "@/assets/logo/Nymna.svg";
import Whatsapp from "@/assets/logo/WhatsApp.svg";
import AppButton from "@/components/AppButton";
import { Linking, Text, TouchableOpacity, View } from "react-native";

export default function HelpScreen() {
  return (
    <View className="flex-1 bg-gray-200">
      <View className="p-5 flex-1 justify-between">
        <View className="bg-white rounded-2xl p-5 shadow-md">
          <Text className="font-bold text-2xl mb-2">
            Get in Touch
          </Text>
          <Text className="text-base mb-4 text-gray-700">
            If you have any issue or query related to content stuff
            then please feel free to contact us. We are always ready
            to help you.
          </Text>
          <View className="border-2 border-gray-200 rounded-xl mb-4">
            {/* Instagram */}
            <TouchableOpacity
              className="flex-row items-center p-4 border-b border-gray-200"
              onPress={() =>
                Linking.openURL(
                  "https://www.instagram.com/nymnatechnology/"
                )
              }
            >
              <Instagram width={36} height={36} />
              <Text className="ml-3 text-lg font-medium flex-1">
                Instagram
              </Text>
              <Text className="text-2xl text-gray-400">›</Text>
            </TouchableOpacity>
            {/* Facebook */}
            <TouchableOpacity
              className="flex-row items-center p-4 border-b border-gray-200"
              onPress={() =>
                Linking.openURL(
                  "https://www.facebook.com/profile.php?id=61573761292044"
                )
              }
            >
              <Facebook width={36} height={36} />
              <Text className="ml-3 text-lg font-medium flex-1">
                Facebook
              </Text>
              <Text className="text-2xl text-gray-400">›</Text>
            </TouchableOpacity>
            {/* WhatsApp */}
            <TouchableOpacity
              className="flex-row items-center p-4 border-b border-gray-200"
              onPress={() =>
                Linking.openURL("https://wa.me/9866115099")
              }
            >
              <Whatsapp width={36} height={36} />
              <Text className="ml-3 text-lg font-medium flex-1">
                WhatsApp
              </Text>
              <Text className="text-2xl text-gray-400">›</Text>
            </TouchableOpacity>
          </View>
          <Text className="text-center text-base mb-2">OR</Text>
          <AppButton
            title="Send Email"
            onPress={() => Linking.openURL("mailto:info@nynma.com")}
            className="bg-blue-800"
          />
        </View>
        <View className="items-center mb-4">
          <Nymnalogo width={100} height={100} />
        </View>
      </View>
    </View>
  );
}
