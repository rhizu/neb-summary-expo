import Logo from "@/assets/logo/Logo.svg";
import { usePersistedBearStore } from "@/store";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { router } from "expo-router";
import Drawer from "expo-router/drawer";
import { Share, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <Drawer
      drawerContent={DrawerContent}
      screenOptions={{
        drawerType: "front",
      }}
    >
      <Drawer.Screen
        name="[subject]/index"
        options={{
          drawerLabel: "Chapters",
          drawerIcon(props) {
            return (
              <MaterialCommunityIcons
                name="book-open-page-variant-outline"
                size={props.size}
                color={props.color}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="about"
        options={{
          title: "About",
          drawerIcon(props) {
            return (
              <MaterialCommunityIcons
                name="information-outline"
                size={props.size}
                color={props.color}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="privacy"
        options={{
          title: "Privacy Policy",
          drawerIcon(props) {
            return (
              <MaterialCommunityIcons
                name="shield-alert-outline"
                size={props.size}
                color={props.color}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="help"
        options={{
          title: "Help",
          drawerIcon(props) {
            return (
              <MaterialCommunityIcons
                name="headset"
                size={props.size}
                color={props.color}
              />
            );
          },
        }}
      />
    </Drawer>
  );
}

function DrawerContent(props: DrawerContentComponentProps) {
  const setGrade = usePersistedBearStore((state) => state.setGrade);

  return (
    <>
      <View className="pt-[41px] pb-[27px] bg-[#005198] rounded-br-[25px] justify-center items-center">
        <View className="flex-row items-center justify-center gap-2.5">
          <Logo width={40} height={52} />
          <Text className="font-bold text-white">NEB SUMMARY</Text>
        </View>
      </View>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          padding: 0,
        }}
      >
        <DrawerItem
          label="Select Subject"
          onPress={() => {
            setGrade(null);
            router.replace({
              pathname: "/",
            });
          }}
          icon={({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="book-multiple-outline"
              size={size}
              color={focused ? "#005198" : color || "black"}
            />
          )}
        />
        <DrawerItemList {...props} />
        <DrawerItem
          label="Tell Your Friends"
          onPress={() => {
            Share.share({
              message: "https://neb-summary.nymna.com",
            });
          }}
          icon={({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="share-outline"
              size={size}
              color={focused ? "#005198" : color || "black"}
            />
          )}
        />
      </DrawerContentScrollView>
    </>
  );
}
// const setGrade = usePersistedBearStore((state) => state.setGrade);

// return (
//   <View>
//     <View className="pt-[41px] pb-[27px] bg-[#005198] rounded-br-[25px] justify-center items-center">
//       <View className="flex-row items-center justify-center gap-2.5">
//         <Logo width={40} height={52} />
//         <Text className="font-bold text-white">NEB SUMMARY</Text>
//       </View>
//     </View>
//     <View className="p-2.5">
//       <DrawerItem
//         icon={({ focused, color, size }) => (
//           <Feather
//             name="home"
//             size={size}
//             color={focused ? "#005198" : color || "black"}
//           />
//         )}
//         label="Home"
//         href="/[subject]"
//         onPress={() => router.push("/")}
//       />
//       <DrawerItem
//         icon={({ focused, color, size }) => (
//           <Feather
//             name="info"
//             size={size}
//             color={focused ? "#005198" : color || "black"}
//           />
//         )}
//         label="About Us"
//         href="/about"
//         onPress={() => router.push("/about")}
//       />
//       <DrawerItem
//         icon={({ focused, color, size }) => (
//           <MaterialCommunityIcons
//             name="shape-outline"
//             size={size}
//             color={focused ? "#005198" : color || "black"}
//           />
//         )}
//         label="Theme"
//         href="/theme"
//         onPress={() => router.push("/theme")}
//       />
//       <DrawerItem
//         icon={({ focused, color, size }) => (
//           <FontAwesome5
//             name="graduation-cap"
//             size={size}
//             color={focused ? "#005198" : color || "black"}
//           />
//         )}
//         label="Switch Grade"
//         href="/"
//         onPress={() => {
//           setGrade(null);
//           router.push("/");
//         }}
//       />
//       <DrawerItem
//         icon={({ focused, color, size }) => (
//           <MaterialIcons
//             name="security"
//             size={size}
//             color={focused ? "#005198" : color || "black"}
//           />
//         )}
//         label="Privacy Policy"
//         href="/privacy"
//         onPress={() => router.push("/privacy")}
//       />
//       <DrawerItem
//         icon={({ focused, color, size }) => (
//           <FontAwesome5
//             name="headset"
//             size={size}
//             color={focused ? "#005198" : color || "black"}
//           />
//         )}
//         label="Help and Support"
//         href="/help"
//         onPress={() => router.push("/help")}
//       />
//       <DrawerItem
//         icon={({ focused, color, size }) => (
//           <FontAwesome
//             name="share-square-o"
//             size={size}
//             color={focused ? "#005198" : color || "black"}
//           />
//         )}
//         label="Tell Your Friends"
//         onPress={() => {
//           Share.share({
//             message:
//               "Check out the NEB Summary app for easy learning!",
//             url: "https://example.com",
//           });
//         }}
//       />
//     </View>
//   </View>
// );
// }
