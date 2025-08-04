import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
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
  const [selectedGrade, setSelectedGrade] = useState<string | null>(
    null
  );
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
    <View className="flex-1 bg-[#005198] items-center justify-center">
      {/* Logo Animation */}
      <LogoAnimation onFinish={() => setShowModal(true)} />

      {/* Bottom Sheet */}
      {showModal && (
        <Animated.View
          style={{
            top: slideAnim,
            left: 0,
            right: 0,
            height: SCREEN_HEIGHT * 0.7,
          }}
          className="absolute bg-white rounded-t-2xl p-6 shadow-lg"
        >
          {!selectedGrade ? (
            <>
              <Text className="text-xl font-bold text-center mb-4">
                Select Grade
              </Text>
              <TouchableOpacity
                onPress={() => handleGradeSelect("11")}
                className="p-3 rounded-lg bg-gray-200 mb-2"
              >
                <Text className="text-center text-base">
                  Grade 11
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleGradeSelect("12")}
                className="p-3 rounded-lg bg-gray-200 mb-2"
              >
                <Text className="text-center text-base">
                  Grade 12
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text className="text-xl font-bold text-center mb-4">
                Select Subject
              </Text>
              <TouchableOpacity
                onPress={() => handleSubjectSelect("english")}
                className="p-3 rounded-lg bg-gray-200 mb-2"
              >
                <Text className="text-center text-base">English</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSubjectSelect("nepali")}
                className="p-3 rounded-lg bg-gray-200 mb-2"
              >
                <Text className="text-center text-base">Nepali</Text>
              </TouchableOpacity>
            </>
          )}
        </Animated.View>
      )}
    </View>
  );
}
