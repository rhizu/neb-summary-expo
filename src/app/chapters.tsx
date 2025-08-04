import { useSelectionStore } from "@/store/useSelectionStore";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { Link, router } from "expo-router";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import notesData from "../lib/notes.json";

import Sidebar from "./Sidebar";

const capitalize = (s: string) =>
  s.charAt(0).toUpperCase() + s.slice(1);

const ChaptersScreen = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const { grade, subject } = useSelectionStore();

  const openSidebar = () => setSidebarVisible(true);
  const closeSidebar = () => setSidebarVisible(false);

  if (!grade || !subject) {
    return <Text>Missing grade or subject.</Text>;
  }

  const key = `class${grade}${capitalize(
    subject
  )}Chapters` as keyof typeof notesData;
  const chapters = notesData[key] || [];

  return (
    <View className="flex-1 bg-white">
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
      <View className="w-full px-5 flex-row justify-between">
        <FlatList
          data={chapters}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingTop: 16 }}
          renderItem={({ item }) => (
            <Link
              href={{
                pathname: "/notes",
                params: { id: item.id, title: item.name },
              }}
              asChild
            >
              <TouchableOpacity className="flex-row items-center justify-between bg-white py-3 px-6 border-b border-gray-200">
                <View className="flex-row items-center">
                  <AntDesign
                    name="checkcircle"
                    size={24}
                    color="#005198"
                    className="mr-2"
                  />
                  <Text className="text-base">{item.name}</Text>
                </View>
                <Text className="text-lg text-blue-900">›</Text>
              </TouchableOpacity>
            </Link>
          )}
        />
      </View>
      {isSidebarVisible && <Sidebar onClose={closeSidebar} />}
    </View>
  );
};

export default ChaptersScreen;
