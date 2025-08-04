import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Nymnalogo from "../assets/logo/Nymna.svg";
import Sidebar from "./Sidebar";

export default function NotePage() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const openSidebar = () => setSidebarVisible(true);
  const closeSidebar = () => setSidebarVisible(false);

  return (
    <View className="flex flex-col flex-1 bg-gray-200">
      {/* Header */}
      <View className="bg-blue-900 w-full h-30 rounded-b-2xl flex-row justify-between items-center px-5 pt-10 pb-5">
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-xl font-bold">About us</Text>
        <TouchableOpacity onPress={openSidebar}>
          <Entypo name="menu" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {/* Body */}
      <View className="w-full p-5 h-full relative">
        <View className="p-2 bg-white rounded-xl h-1/2 w-full overflow-hidden">
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            className="flex flex-col justify-center items-center p-2 gap-2"
          >
            <Text className="font-bold">NEB SUMMARY</Text>
            <View>
              <Text className="text-left">
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
        <View className="absolute bottom-36 left-0 right-0 items-center">
          <Nymnalogo width={100} height={100} />
        </View>
      </View>
      {isSidebarVisible && <Sidebar onClose={closeSidebar} />}
    </View>
  );
}
