import AppButton from "@/components/AppButton";
import LogoAnimation from "@/components/LogoAnimation";
import { Subject, subjectToHeadingMap } from "@/lib/notes";
import { usePersistedBearStore } from "@/store";
import { useTheme } from "@react-navigation/native";
import { router } from "expo-router";
import { Dimensions, Text, View } from "react-native";
import Animated, {
  Easing,
  FadeIn,
  FadeOut,
  Keyframe,
} from "react-native-reanimated";

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
      router.replace({
        pathname: "/(drawer)/[subject]",
        params: { subject: key },
      });
    }
  });
};

const { height } = Dimensions.get("window");

const slideInDown = new Keyframe({
  0: { transform: [{ translateY: height }] },
  100: {
    transform: [{ translateY: 0 }],
    easing: Easing.bezier(0.4, 0.0, 0.2, 1),
  },
});

export default function SelectGradeAndSubjectScreen() {
  const { colors } = useTheme();
  const grade = usePersistedBearStore((state) => state.grade);
  const setGrade = usePersistedBearStore((state) => state.setGrade);

  return (
    <>
      <View
        style={{ backgroundColor: colors.primary }}
        className="flex-1 items-center justify-center"
      >
        <View className="flex-1" />
        <LogoAnimation />
        <Animated.View
          style={{
            transform: [{ translateY: height }]          }}
          entering={slideInDown.delay(750).duration(500)}
          className="w-full bg-white rounded-t-2xl p-6 py-12 shadow-lg"
        >
          {!grade ? (
            <Animated.View exiting={FadeOut}>
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
            </Animated.View>
          ) : (
            <GradeSelector grade={grade} />
          )}
        </Animated.View>
      </View>
    </>
  );
}

function GradeSelector({
  grade,
}: {
  grade: (typeof subjectToHeadingMap)[Subject]["grade"];
}) {
  return (
    <Animated.View entering={FadeIn.delay(200)} exiting={FadeOut}>
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
    </Animated.View>
  );
}
