import Nymnalogo from "@/assets/logo/Nymna.svg";
import { Text, View } from "react-native";

export default function AboutUsScreen() {
  return (
    <View className="flex-1 bg-gray-200">
      <View className="p-5 flex-1 justify-between">
        <View className="p-2 bg-white rounded-xl">
          <View className="flex justify-center items-center p-2 gap-2">
            <Text className="font-bold text-2xl">NEB SUMMARY</Text>
            <View>
              <Text className="text-left">
                We are Nymna Technology, creators of HamroCSIT,
                HamroNotes, and other educational platforms built to
                simplify learning.
              </Text>
              <Text className="text-left mt-2">
                This app was made for Grades 11 and 12 a clean summary
                app to help students focus on what matters. Our goal
                is to support +2 students in doing their best in their
                exams.
              </Text>
              <Text className="text-left mt-2">
                With 20M+ views, 60K+ users, and 5,000+ active
                learners across our platforms , we're committed to
                improving based on your feedback and driving
                educational change in Nepal.
              </Text>
            </View>
          </View>
        </View>
        <View className="items-center mb-4">
          <Nymnalogo width={100} height={100} />
        </View>
      </View>
    </View>
  );
}
