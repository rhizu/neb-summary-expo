import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import notesDataRaw from "../lib/notes.json";
import Sidebar from "./Sidebar";

import { useSelectionStore } from "@/store/useSelectionStore";
import { Chapter, NotesData } from "@/types";
const notesData = notesDataRaw as NotesData;

const capitalize = (s: string) =>
  s.charAt(0).toUpperCase() + s.slice(1);

export default function NotePage() {
  const { id, title } = useLocalSearchParams();
  const chapterId = Array.isArray(id) ? id[0] : id;
  const { grade, subject } = useSelectionStore();

  // Handle missing selection
  if (!grade || !subject || !chapterId) {
    return (
      <View className="flex-1 bg-gray-200 items-center justify-center">
        <Text className="text-gray-600 text-lg">
          Missing data. Please reselect grade and subject.
        </Text>
      </View>
    );
  }

  // ✅ This is where your block goes
  const key =
    `class${grade}${capitalize(subject)}Chapters` as keyof NotesData;
  const chapterList = notesData[key] as Chapter[];
  const chapter = chapterList.find(
    (ch: Chapter) => ch.id === chapterId
  );

  const currentIndex = chapterList.findIndex(
    (ch) => ch.id === chapterId
  );
  const nextChapter = chapterList[currentIndex + 1];

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const openSidebar = () => setSidebarVisible(true);
  const closeSidebar = () => setSidebarVisible(false);

  return (
    <View className="flex flex-col flex-1 bg-gray-200">
      {/* Header */}
      <View className="bg-blue-900 w-full h-30 rounded-b-2xl flex-row justify-between items-center px-5 pt-10 pb-5">
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-xl font-bold">
          {subject === "nepali" ? "नेपाली रचना" : "English Notes"}
        </Text>
        <TouchableOpacity onPress={openSidebar}>
          <Entypo name="menu" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {/* Body */}
      <View className="w-full p-5 h-full relative">
        <View className="p-2 bg-white rounded-xl h-3/4 w-full overflow-hidden">
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View className="flex flex-col justify-center items-center p-2 gap-2">
              <Text className="font-bold">{title}</Text>
              <View>
                <Text className="text-left">
                  {chapter?.note || "Note not found."}
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
        {nextChapter && (
          <TouchableOpacity
            className="mt-5 bg-blue-900 py-3 rounded-lg items-center w-full self-center"
            onPress={() =>
              router.push({
                pathname: "/notes",
                params: {
                  id: nextChapter.id,
                  title: nextChapter.name,
                },
              })
            }
          >
            <Text className="text-white text-base font-bold">
              Next Chapter
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {isSidebarVisible && <Sidebar onClose={closeSidebar} />}
    </View>
  );
}
