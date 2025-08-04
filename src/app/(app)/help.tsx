import Nymnalogo from "@/assets/logo/Nymna.svg";
import Header from "@/components/Header";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function NotePage() {
  return (
    <View className="flex flex-col flex-1 bg-gray-200">
      <Header title="Help and Support" />
      <View className="w-full p-5 h-full relative">
        <View className="p-2 bg-white rounded-xl h-3/5 w-full overflow-hidden">
          <View className="p-5 bg-white flex-1">
            <Text className="text-lg font-semibold mb-2">
              Get in Touch
            </Text>
            <Text className="text-base mb-5">
              If you have any issue or query related to content stuff
              then please feel free to contact us. We are always ready
              to help you.
            </Text>
            <TextInput
              className="border border-gray-300 rounded-lg px-3 py-2 text-base mb-4"
              placeholder="Enter your Name"
              placeholderTextColor="#999"
            />
            <TextInput
              className="border border-gray-300 rounded-lg px-3 py-2 text-base mb-4"
              placeholder="Enter your Email"
              placeholderTextColor="#999"
              keyboardType="email-address"
            />
            <TextInput
              className="border border-gray-300 rounded-lg px-3 py-2 text-base mb-4 h-24"
              placeholder="Write your message"
              placeholderTextColor="#999"
              multiline
            />
            <TouchableOpacity className="bg-blue-700 py-3 rounded-xl items-center mt-1">
              <Text className="text-white text-base font-medium">
                Send Message
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="absolute bottom-36 left-0 right-0 items-center">
          <Nymnalogo width={100} height={100} />
        </View>
      </View>
    </View>
  );
}
