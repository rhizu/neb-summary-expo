// components/Sidebar.tsx
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link, router } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Logo from "../assets/logo/Logo.svg"; // optional

const Sidebar = ({ onClose }: { onClose: () => void }) => {
  const SCREEN_WIDTH = Dimensions.get("window").width;
  const DRAWER_WIDTH = 250;
  const slideAnim = useRef(new Animated.Value(SCREEN_WIDTH)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: SCREEN_WIDTH - DRAWER_WIDTH,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, []);

  const closeDrawer = () => {
    Animated.timing(slideAnim, {
      toValue: SCREEN_WIDTH,
      duration: 300,
      useNativeDriver: false,
    }).start(() => onClose());
  };

  const handleSwitch = () => {
    router.push("/?switchGrade=true");
  };

  return (
    <View style={StyleSheet.absoluteFill}>
      <Pressable style={styles.overlay} onPress={closeDrawer} />
      <Animated.View
        style={[
          styles.drawer,
          {
            transform: [
              {
                translateX: slideAnim.interpolate({
                  inputRange: [SCREEN_WIDTH - DRAWER_WIDTH, SCREEN_WIDTH],
                  outputRange: [0, DRAWER_WIDTH],
                  extrapolate: "clamp",
                }),
              },
            ],
          },
        ]}
      >
        <View style={styles.sidebarHeader}>
          <View style={styles.headerContent}>
            <Logo width={40} height={52} />
            <Text style={{ fontWeight: "bold", color: "white" }}>
              NEB SUMMARY
            </Text>
          </View>
        </View>
        <View style={styles.drawerContent}>
          <DrawerItem
            icon={<Feather name="info" size={24} color="black" />}
            label="About Us"
            navigateTo="/about"
          />
          <DrawerItem
            icon={
              <MaterialCommunityIcons
                name="shape-outline"
                size={24}
                color="black"
              />
            }
            label="Theme"
            navigateTo="/theme"
          />
          <TouchableOpacity onPress={handleSwitch} style={styles.drawerItem}>
            <FontAwesome6 name="arrows-rotate" size={24} color="black" />
            <Text style={styles.drawerText}>Switch Platform</Text>
          </TouchableOpacity>
          <DrawerItem
            icon={<MaterialIcons name="security" size={24} color="black" />}
            label="Privacy Policy"
            navigateTo="/privacy"
          />
          <DrawerItem
            icon={<FontAwesome5 name="headset" size={24} color="black" />}
            label="Help and Support"
            navigateTo="/help"
          />
          <DrawerItem
            icon={<FontAwesome name="share-square-o" size={24} color="black" />}
            label="Tell Your Friends"
            navigateTo="/share"
          />
        </View>
      </Animated.View>
    </View>
  );
};

const DrawerItem = ({
  icon,
  label,
  navigateTo,
}: {
  icon: React.ReactNode;
  label: string;
  navigateTo?: string;
}) => {
  if (navigateTo) {
    return (
      <Link href={navigateTo as any} asChild>
        <TouchableOpacity style={styles.drawerItem}>
          {icon}
          <Text style={styles.drawerText}>{label}</Text>
        </TouchableOpacity>
      </Link>
    );
  }
  return (
    <TouchableOpacity style={styles.drawerItem}>
      {icon}
      <Text style={styles.drawerText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  sidebarHeader: {
    paddingTop: 41,
    paddingBottom: 27,
    backgroundColor: "#005198",
    borderBottomRightRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
  },
  drawer: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 290,
    height: "100%",
    backgroundColor: "#fff",
    elevation: 10,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  drawerContent: {
    padding: 10,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  drawerText: {
    fontSize: 16,
    marginLeft: 12,
  },
});

export default Sidebar;
