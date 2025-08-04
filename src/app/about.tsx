import { router } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Sidebar from "./Sidebar";

import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

import Nymnalogo from "@/assets/logo/Nymna.svg";

const screenHeight = Dimensions.get("window").height;

export default function NotePage() {
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

        <Text style={styles.headerText}>About us</Text>

        <TouchableOpacity onPress={openSidebar}>
          <Entypo name="menu" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Body */}
      <View style={styles.OuterNotesContainer}>
        <View style={styles.notesContainer}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <Text style={{ fontWeight: "bold" }}>NEB SUMMARY</Text>
            <View>
              <Text style={{ textAlign: "left" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Id explicabo debitis quisquam quia maiores
                corrupti dignissimos, aliquid voluptatem, voluptas
                possimus autem. Consequuntur, dolore? Tempora adipisci
                necessitatibus nihil! Vitae facere soluta assumenda
                harum dolorem accusantium a perspiciatis aliquid
                tenetur illo fugit reprehenderit corporis maiores,
                earum error iure in! Vel possimus, ad fugiat expedita
                corporis ex excepturi doloribus praesentium aliquid
                sint, officia unde, similique iste dignissimos
                voluptatem itaque illum? Voluptatem delectus
                laboriosam perferendis debitis soluta vel laudantium a
                quidem atque quia dignissimos, ipsa ad aut ut labore!
                Adipisci, repudiandae hic officiis animi deleniti amet
                quisquam blanditiis neque harum illum, voluptatem
                possimus! Consequatur?
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.logoWrapper}>
          <Nymnalogo width={100} height={100} />
        </View>
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
  logoWrapper: {
    position: "absolute",
    bottom: 150, // Fixed distance from bottom
    left: 0,
    right: 0,
    alignItems: "center",
  },

  OuterNotesContainer: {
    width: "100%",

    padding: 20,
    height: screenHeight,
    position: "relative",
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
    height: screenHeight * 0.5,
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
});
