import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { DrawerActions } from "@react-navigation/native";
import Constants from "expo-constants";
import { router, useNavigation } from "expo-router";
import { Platform, Text, TouchableOpacity, View } from "react-native";

export default function Header({ title }: { title: string }) {
  const navigation = useNavigation();

  return (
    <>
      <View
        className="bg-blue-900 w-full rounded-b-2xl px-5"
        style={{
          paddingTop:
            Platform.OS === "web" ? 0 : Constants.statusBarHeight,
        }}
      >
        <View className="py-5 flex-row justify-between items-center">
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-xl font-bold">
            {title}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer());
            }}
          >
            <Entypo name="menu" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      {/* {isSidebarVisible && <Sidebar onClose={closeSidebar} />} */}
    </>
  );
}
