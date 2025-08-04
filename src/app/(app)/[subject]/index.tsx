import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link, Redirect, useLocalSearchParams } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import Header from "@/components/Header";
import { notes, Subject, subjectToHeadingMap } from "@/lib/notes";

export default function ChapterListScreen() {
  const { subject } = useLocalSearchParams<{
    subject: Subject;
  }>();

  if (!subject) {
    return <Redirect href=".." />;
  }

  const chapters = notes[subject];

  if (!chapters) {
    return <Redirect href=".." />;
  }

  const renderItem = ({
    item,
  }: {
    item: (typeof chapters)[number];
  }) => (
    <>
      <Link
        href={{
          pathname: "/[subject]/[chapterId]",
          params: { subject, chapterId: item.id },
        }}
        asChild
      >
        <TouchableOpacity className="flex-row items-center p-6 justify-between bg-white border-gray-200">
          <View className="flex-row items-center">
            <View className="mr-4">
              <AntDesign
                name="checkcircle"
                size={16}
                color="#005198"
              />
            </View>
            <Text className="text-base">{item.name}</Text>
          </View>
          <Text className="text-lg text-blue-900">
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color="#005198"
            />
          </Text>
        </TouchableOpacity>
      </Link>
      <View className="h-0.5 bg-gray-200 w-full" />
    </>
  );

  return (
    <View className="flex-1 bg-white">
      <Header title={subjectToHeadingMap[subject].name} />
      <View className="flex-1 flex-row justify-between">
        <FlatList
          className="flex-1"
          data={chapters}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingTop: 16 }}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}
