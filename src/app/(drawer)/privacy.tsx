import Nymnalogo from "@/assets/logo/Nymna.svg";
import { Linking, ScrollView, Text, View } from "react-native";

export default function PrivacyPolicyScreen() {
  return (
    <View className="flex-1 bg-gray-200">
      <View className="p-5 flex-1 gap-2">
        <View className="p-2 bg-white rounded-xl flex-1">
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View className="p-2 gap-2">
              <Text className="font-bold">
                Privacy Policy - NEB Summary
              </Text>
              <Text>
                At Nymna Technology, your privacy is important to us.
                The NEB Summary app is built to be simple,
                offline-friendly, and focused on helping +2 students
                study without distractions.
              </Text>
              <Text className="font-bold">
                What Information We Collect
              </Text>
              <Text>
                We do not collect, store, or request any personal
                information. You don't need to sign in or create an
                account to use the app. Everything works locally on
                your device.
              </Text>
              <Text className="font-bold">
                Ads and Third-Party Services
              </Text>
              <Text>
                This app may display ads provided by third-party ad
                networks such as Google AdMob. These services may use
                anonymous identifiers (such as your device type or
                general usage data) to show relevant ads.
              </Text>
              <Text className="font-bold">
                We do not have access to or control over any of this
                data.
              </Text>
              <Text>
                You may be able to opt out of personalized ads through
                your device settings or ad preferences.
              </Text>
              <Text className="font-bold">Children's Privacy</Text>
              <Text>
                We do not knowingly collect any personal data from
                children under 13. The app is safe for students, and
                any ads shown are managed by third-party networks in
                accordance with their own policies.
              </Text>
              <Text className="font-bold">Internet Usage</Text>
              <Text>
                The app works mostly offline but may use an internet
                connection to load ads or open external links. We do
                not track or monitor your activity.
              </Text>
              <Text className="font-bold">Policy Updates</Text>
              <Text>
                We may update this Privacy Policy in the future as we
                add new features. Any changes will be clearly
                mentioned in the app.
              </Text>
              <Text className="font-bold">Contact Us</Text>
              <Text>
                If you have any questions or concerns about this
                Privacy Policy, feel free to contact us:{" "}
                <Text
                  className="text-blue-600 underline"
                  onPress={() => {
                    Linking.openURL(
                      "mailto:nymnatechnology@gmail.com"
                    );
                  }}
                >
                  nymnatechnology@gmail.com
                </Text>
              </Text>
            </View>
          </ScrollView>
        </View>
        <View className="items-center mb-4">
          <Nymnalogo width={100} height={100} />
        </View>
      </View>
    </View>
  );
}
