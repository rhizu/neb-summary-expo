import Nymnalogo from "@/assets/logo/Nymna.svg";
import { ScrollView, Text, View } from "react-native";

export default function NotePage() {
  return (
    <View className="flex flex-col flex-1 bg-gray-200">
      <View className="w-full p-5 h-full relative">
        <View className="p-2 bg-white rounded-xl h-1/2 w-full overflow-hidden">
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View className="flex flex-col justify-center items-center p-2 gap-2"></View>
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
    </View>
  );
}
