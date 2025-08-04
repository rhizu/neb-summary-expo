import Logo from "@/assets/logo/Logo.svg"; // optional
import { usePersistedBearStore } from "@/store";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { DrawerItem } from "@react-navigation/drawer";
import { router } from "expo-router";
import Drawer from "expo-router/drawer";
import { Share, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <Drawer
      drawerContent={() => <DrawerContent />}
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
      }}
    />
  );
}

function DrawerContent() {
  const setGrade = usePersistedBearStore((state) => state.setGrade);

  return (
    <View>
      <View className="pt-[41px] pb-[27px] bg-[#005198] rounded-br-[25px] justify-center items-center">
        <View className="flex-row items-center justify-center gap-2.5">
          <Logo width={40} height={52} />
          <Text className="font-bold text-white">NEB SUMMARY</Text>
        </View>
      </View>
      <View className="p-2.5">
        <DrawerItem
          icon={({ focused, color, size }) => (
            <Feather
              name="home"
              size={size}
              color={focused ? "#005198" : color || "black"}
            />
          )}
          label="Home"
          href="/[subject]"
          onPress={() => router.push("/")}
        />
        <DrawerItem
          icon={({ focused, color, size }) => (
            <Feather
              name="info"
              size={size}
              color={focused ? "#005198" : color || "black"}
            />
          )}
          label="About Us"
          href="/about"
          onPress={() => router.push("/about")}
        />
        <DrawerItem
          icon={({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="shape-outline"
              size={size}
              color={focused ? "#005198" : color || "black"}
            />
          )}
          label="Theme"
          href="/theme"
          onPress={() => router.push("/theme")}
        />
        <DrawerItem
          icon={({ focused, color, size }) => (
            <FontAwesome5
              name="graduation-cap"
              size={size}
              color={focused ? "#005198" : color || "black"}
            />
          )}
          label="Switch Grade"
          href="/"
          onPress={() => {
            setGrade(null);
            router.push("/");
          }}
        />
        <DrawerItem
          icon={({ focused, color, size }) => (
            <MaterialIcons
              name="security"
              size={size}
              color={focused ? "#005198" : color || "black"}
            />
          )}
          label="Privacy Policy"
          href="/privacy"
          onPress={() => router.push("/privacy")}
        />
        <DrawerItem
          icon={({ focused, color, size }) => (
            <FontAwesome5
              name="headset"
              size={size}
              color={focused ? "#005198" : color || "black"}
            />
          )}
          label="Help and Support"
          href="/help"
          onPress={() => router.push("/help")}
        />
        <DrawerItem
          icon={({ focused, color, size }) => (
            <FontAwesome
              name="share-square-o"
              size={size}
              color={focused ? "#005198" : color || "black"}
            />
          )}
          label="Tell Your Friends"
          onPress={() => {
            Share.share({
              message:
                "Check out the NEB Summary app for easy learning!",
              url: "https://example.com",
            });
          }}
        />
      </View>
    </View>
  );
}
