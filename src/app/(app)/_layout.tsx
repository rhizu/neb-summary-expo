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
import { Text, View } from "react-native";

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
          icon={() => <Feather name="info" size={24} color="black" />}
          label="About Us"
          href="/about"
          onPress={() => router.push("/about")}
        />
        <DrawerItem
          icon={() => (
            <MaterialCommunityIcons
              name="shape-outline"
              size={24}
              color="black"
            />
          )}
          label="Theme"
          href="/theme"
          onPress={() => router.push("/theme")}
        />
        <DrawerItem
          icon={() => (
            <FontAwesome5
              name="graduation-cap"
              size={24}
              color="black"
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
          icon={() => (
            <MaterialIcons name="security" size={24} color="black" />
          )}
          label="Privacy Policy"
          href="/privacy"
          onPress={() => router.push("/privacy")}
        />
        <DrawerItem
          icon={() => (
            <FontAwesome5 name="headset" size={24} color="black" />
          )}
          label="Help and Support"
          href="/help"
          onPress={() => router.push("/help")}
        />
        <DrawerItem
          icon={() => (
            <FontAwesome
              name="share-square-o"
              size={24}
              color="black"
            />
          )}
          label="Tell Your Friends"
          onPress={() => {}}
        />
      </View>
    </View>
  );
}
