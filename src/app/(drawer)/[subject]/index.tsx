import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router, useLocalSearchParams } from "expo-router";
import { FlatList, Text, View } from "react-native";

import TouchableNativeOrHighlightOrOpacity from "@/components/TouchableNativeOrHighlightOrOpacity";
import { chapters, Subject, subjectToHeadingMap } from "@/lib/notes";
import { useTheme } from "@react-navigation/native";
import Drawer from "expo-router/drawer";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ChapterListScreen() {
  const { subject } = useLocalSearchParams<{
    subject: Subject;
  }>();

  const { bottom } = useSafeAreaInsets();
  const { colors } = useTheme();

  const renderItem = ({
    item,
  }: {
    item: (typeof chapters)[number];
  }) => (
    <>
      <TouchableNativeOrHighlightOrOpacity
        accessibilityRole="button"
        noSwipe
        underlayColor={"#ddd"}
        onPress={() => {
          router.push({
            pathname: "/notes/[chapterId]",
            params: { chapterId: item.id },
          });
        }}
      >
        <View
          pointerEvents="box-only"
          className="flex-row items-center p-6 justify-between"
        >
          <View className="flex-row items-center">
            <View className="mr-4">
              <AntDesign
                name="checkcircle"
                size={16}
                color={colors.primary}
              />
            </View>
            <Text className="text-base">{item.name}</Text>
          </View>
          <Text className="text-lg" style={{ color: colors.primary }}>
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color={colors.primary}
            />
          </Text>
        </View>
      </TouchableNativeOrHighlightOrOpacity>
      <View className="h-0.5 bg-gray-200 w-full" />
    </>
  );

  return (
    <>
      <Drawer.Screen
        options={{
          title: subjectToHeadingMap[subject].name,
        }}
      />
      <View className="flex-1 bg-white">
        <View className="flex-1 flex-row justify-between">
          <FlatList
            className="flex-1"
            data={chapters.filter((chapter) => {
              return (
                chapter.subject ===
                  subjectToHeadingMap[subject].subject &&
                chapter.grade === subjectToHeadingMap[subject].grade
              );
            })}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: bottom }}
            renderItem={renderItem}
          />
        </View>
      </View>
    </>
  );
}
