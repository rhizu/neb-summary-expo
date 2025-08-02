import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelectionStore } from "../store/useSelectionStore";
import LogoAnimation from "./LogoAnimation";

const SCREEN_HEIGHT = Dimensions.get("window").height;

export default function Home() {
  const router = useRouter();
  const { setSelection } = useSelectionStore();
  const { switchGrade } = useLocalSearchParams();

  const slideAnim = useRef(new Animated.Value(SCREEN_HEIGHT)).current;
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      Animated.timing(slideAnim, {
        toValue: SCREEN_HEIGHT * 0.7,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [showModal]);

  useEffect(() => {
    if (switchGrade === "true") {
      setSelectedGrade(null);
    }
  }, [switchGrade]);

  const handleGradeSelect = (grade: string) => {
    setSelectedGrade(grade);
  };

  const handleSubjectSelect = (subject: string) => {
    if (selectedGrade) {
      setSelection(selectedGrade, subject);
      router.push("/chapters");
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo Animation */}
      <LogoAnimation onFinish={() => setShowModal(true)} />

      {/* Bottom Sheet */}
      {showModal && (
        <Animated.View style={[styles.bottomSheet, { top: slideAnim }]}>
          {!selectedGrade ? (
            <>
              <Text style={styles.sheetTitle}>Select Grade</Text>
              <TouchableOpacity
                onPress={() => handleGradeSelect("11")}
                style={styles.optionButton}
              >
                <Text style={styles.optionText}>Grade 11</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleGradeSelect("12")}
                style={styles.optionButton}
              >
                <Text style={styles.optionText}>Grade 12</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.sheetTitle}>Select Subject</Text>
              <TouchableOpacity
                onPress={() => handleSubjectSelect("english")}
                style={styles.optionButton}
              >
                <Text style={styles.optionText}>English</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSubjectSelect("nepali")}
                style={styles.optionButton}
              >
                <Text style={styles.optionText}>Nepali</Text>
              </TouchableOpacity>
            </>
          )}
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#005198",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  bottomSheet: {
    position: "absolute",
    left: 0,
    right: 0,
    height: SCREEN_HEIGHT * 0.7,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  optionButton: {
    padding: 14,
    borderRadius: 8,
    backgroundColor: "#eee",
    marginBottom: 10,
  },
  optionText: {
    textAlign: "center",
    fontSize: 16,
  },
});
