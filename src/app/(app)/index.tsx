import LogoAnimation from "@/components/LogoAnimation";
import { Subject, subjectToHeadingMap } from "@/lib/notes";
import { usePersistedBearStore } from "@/store";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, { SlideInDown } from "react-native-reanimated";

export default function SelectGradeAndSubjectScreen() {
  const grade = usePersistedBearStore((state) => state.grade);
  const setGrade = usePersistedBearStore((state) => state.setGrade);

  const subjectEntries = Object.entries(subjectToHeadingMap) as [
    Subject,
    (typeof subjectToHeadingMap)[Subject],
  ][];

  const handleNavigateToChapters = (
    subject: (typeof subjectToHeadingMap)[Subject]["subject"],
    grade: (typeof subjectToHeadingMap)[Subject]["grade"]
  ) => {
    subjectEntries.forEach(([key, value]) => {
      if (value.grade === grade && value.subject === subject) {
        router.push({
          pathname: "/[subject]",
          params: { subject: key },
        });
      }
    });
  };

  return (
    <View className="flex-1 bg-[#005198] items-center justify-center">
      <View className="flex-1" />
      <LogoAnimation />
      <Animated.View
        entering={SlideInDown.delay(500).duration(1000)}
        className="w-full bg-white rounded-t-2xl p-6 py-12 shadow-lg"
      >
        {!grade ? (
          <>
            <Text className="text-3xl font-bold text-center mb-4">
              Select Grade
            </Text>
            <TouchableOpacity
              onPress={() => {
                setGrade("11");
              }}
              className="p-3 rounded-lg bg-gray-200 mb-2"
            >
              <Text className="text-center text-base">Grade 11</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setGrade("12");
              }}
              className="p-3 rounded-lg bg-gray-200 mb-2"
            >
              <Text className="text-center text-base">Grade 12</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text className="text-3xl font-bold text-center mb-4">
              Select Subject
            </Text>
            <TouchableOpacity
              onPress={() => {
                handleNavigateToChapters("english", grade);
              }}
              className="p-3 rounded-lg bg-gray-200 mb-2"
            >
              <Text className="text-center text-base">English</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleNavigateToChapters("nepali", grade);
              }}
              className="p-3 rounded-lg bg-gray-200 mb-2"
            >
              <Text className="text-center text-base">Nepali</Text>
            </TouchableOpacity>
          </>
        )}
      </Animated.View>
    </View>
  );
}
