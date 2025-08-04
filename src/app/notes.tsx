import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import notesDataRaw from "../lib/notes.json";
import { useSelectionStore } from "../store/useSelectionStore";
import { Chapter, NotesData } from "../types";

import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";
import Sidebar from "./Sidebar";

const notesData = notesDataRaw as NotesData;
const screenHeight = Dimensions.get("window").height;

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default function NotePage() {
  const { id, title } = useLocalSearchParams();
  const chapterId = Array.isArray(id) ? id[0] : id;
  const { grade, subject } = useSelectionStore();

  // Handle missing selection
  if (!grade || !subject || !chapterId) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          Missing data. Please reselect grade and subject.
        </Text>
      </View>
    );
  }

  // ✅ This is where your block goes
  const key = `class${grade}${capitalize(subject)}Chapters` as keyof NotesData;
  const chapterList = notesData[key] as Chapter[];
  const chapter = chapterList.find((ch: Chapter) => ch.id === chapterId);

  const currentIndex = chapterList.findIndex((ch) => ch.id === chapterId);
  const nextChapter = chapterList[currentIndex + 1];

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const openSidebar = () => setSidebarVisible(true);
  const closeSidebar = () => setSidebarVisible(false);

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
      <View style={styles.OuterNotesContainer}>
        <View style={styles.notesContainer}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <Text style={{ fontWeight: "bold" }}>{title}</Text>
            <View>
              <Text style={{ textAlign: "left" }}>
                {chapter?.note || "Note not found."}
              </Text>
            </View>
          </ScrollView>
        </View>
        {nextChapter && (
          <TouchableOpacity
            style={styles.nextButton}
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
            <Text style={styles.nextButtonText}>Next Chapter</Text>
          </TouchableOpacity>
        )}
      </View>

      {isSidebarVisible && <Sidebar onClose={closeSidebar} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#eee",
  },

  OuterNotesContainer: {
    width: "100%",
    height: "100%",
    padding: 20,
  },

  scrollContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },

  notesContainer: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    height: screenHeight * 0.7,
    width: "100%",
    overflow: "hidden",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  noteText: {
    fontSize: 16,
    lineHeight: 24,
  },
  errorText: {
    fontSize: 18,
    color: "red",
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

  drawerContent: {
    padding: 10,
  },

  nextButton: {
    marginTop: 20,
    backgroundColor: "#005198",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
