import { useSelectionStore } from "@/store/useSelectionStore";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { Link, router } from "expo-router";

import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import notesData from "../lib/notes.json";
import Sidebar from "./Sidebar";

const capitalize = (s: string) =>
  s.charAt(0).toUpperCase() + s.slice(1);

const ChaptersScreen = () => {
  const { grade, subject } = useSelectionStore();
  const [isSidebarVisible, setSidebarVisible] = useState(false);

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
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerText}>
          {subject === "nepali" ? "नेपाली रचना" : "English Notes"}
        </Text>

        <TouchableOpacity onPress={openSidebar}>
          <Entypo name="menu" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Body */}
      <View style={styles.chapterContainer}>
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
              <TouchableOpacity style={styles.chapterCard}>
                <View style={styles.chapterLeft}>
                  <AntDesign
                    name="checkcircle"
                    size={24}
                    color="#005198"
                    style={styles.tickIcon}
                  />
                  <Text style={styles.chapterText}>{item.name}</Text>
                </View>
                <Text style={styles.chevron}>›</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  chapterContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  header: {
    backgroundColor: "#005198",
    width: "100%",
    height: 120,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 41,
    paddingBottom: 20,
  },

  headerContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  headerText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  chapterCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  chapterText: {
    fontSize: 16,
  },

  chapterLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  tickIcon: {
    marginRight: 10,
  },
  chevron: {
    fontSize: 22,
    color: "#005198",
  },
});
