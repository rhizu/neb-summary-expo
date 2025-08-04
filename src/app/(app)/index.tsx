import AppButton from "@/components/AppButton";
import LogoAnimation from "@/components/LogoAnimation";
import { Subject, subjectToHeadingMap } from "@/lib/notes";
import { usePersistedBearStore } from "@/store";
import { router } from "expo-router";
import { Text, View } from "react-native";
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
            <AppButton
              title={"Grade 11"}
              onPress={() => {
                setGrade("11");
              }}
            />
            <AppButton
              title={"Grade 12"}
              onPress={() => {
                setGrade("12");
              }}
            />
          </>
        ) : (
          <>
            <Text className="text-3xl font-bold text-center mb-4">
              Select Subject
            </Text>
            <AppButton
              title={"English"}
              onPress={() => {
                handleNavigateToChapters("english", grade);
              }}
            />
            <AppButton
              title={"Nepali"}
              onPress={() => {
                handleNavigateToChapters("nepali", grade);
              }}
            />
          </>
        )}
      </Animated.View>
    </View>
  );
}
