import { router, useLocalSearchParams } from "expo-router";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Header from "@/components/Header";
import { notes, Subject, subjectToHeadingMap } from "@/lib/notes";

export default function NotePage() {
  const { subject, chapterId } = useLocalSearchParams<{
    subject: Subject;
    chapterId: string;
  }>();

  let chapterIndex = 0;
  const chapter = notes[subject]?.find((note, index) => {
    if (note.id === chapterId) {
      chapterIndex = index;
      return true;
    }
    return false;
  });

  const previousChapterId =
    chapterIndex > 0
      ? notes[subject][chapterIndex - 1].id
      : undefined;
  const nextChapterId = notes[subject][chapterIndex + 1]?.id;

  if (!chapter) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg">Note not found.</Text>
      </View>
    );
  }

  return (
    <View className="flex flex-col flex-1 bg-gray-200">
      <Header title={subjectToHeadingMap[subject].name} />
      <View className="w-full p-5 h-full relative">
        <View className="p-2 bg-white rounded-xl h-3/4 w-full overflow-hidden">
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View className="flex flex-col justify-center items-center p-2 gap-2">
              <Text className="font-bold">{chapter.name}</Text>
              <View>
                <Text className="text-left">
                  {chapter.note || "Note not found."}
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
        {previousChapterId && (
          <TouchableOpacity
            className="mt-5 bg-blue-900 py-3 rounded-lg items-center w-full self-center"
            onPress={() =>
              router.replace({
                pathname: "/[subject]/[chapterId]",
                params: { subject, chapterId: previousChapterId },
              })
            }
          >
            <Text className="text-white text-base font-bold">
              Previous Chapter
            </Text>
          </TouchableOpacity>
        )}
        {nextChapterId && (
          <TouchableOpacity
            className="mt-5 bg-blue-900 py-3 rounded-lg items-center w-full self-center"
            onPress={() =>
              router.replace({
                pathname: "/[subject]/[chapterId]",
                params: { subject, chapterId: nextChapterId },
              })
            }
          >
            <Text className="text-white text-base font-bold">
              Next Chapter
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
