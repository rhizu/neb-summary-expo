import { router } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Nymnalogo from "../assets/logo/Nymna.svg";
import Sidebar from "./Sidebar";

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

        <Text style={styles.headerText}>Help and Support</Text>

        <TouchableOpacity onPress={openSidebar}>
          <Entypo name="menu" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Body */}
      <View style={styles.OuterNotesContainer}>
        <View style={styles.notesContainer}>
          <View style={styles.Formcontainer}>
            <Text style={styles.Formtitle}>Get in Touch</Text>
            <Text style={styles.description}>
              If you have any issue or query related to content stuff then
              please feel free to contact us. We are always ready to help you.
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your Name"
              placeholderTextColor="#999"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your Email"
              placeholderTextColor="#999"
              keyboardType="email-address"
            />
            <TextInput
              style={[styles.input, styles.messageInput]}
              placeholder="Write your message"
              placeholderTextColor="#999"
              multiline
            />

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Send Message</Text>
            </TouchableOpacity>
          </View>
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
    bottom: 150,
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
    height: screenHeight * 0.6,
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
  Formcontainer: {
    padding: 20,
    backgroundColor: "#ffffff",
    flex: 1,
  },
  Formtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#333",
    marginBottom: 20,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    marginBottom: 15,
  },
  messageInput: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#005bbb",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
  },
});
