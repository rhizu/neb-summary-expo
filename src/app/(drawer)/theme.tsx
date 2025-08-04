import { themeMap, usePersistedBearStore } from "@/store";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function ThemePickScreen() {
  const setThemeName = usePersistedBearStore(
    (state) => state.setThemeName
  );
  const themeName = usePersistedBearStore((state) => state.themeName);

  const themeNameAndColor = (
    Object.entries(themeMap) as [
      keyof typeof themeMap,
      (typeof themeMap)[keyof typeof themeMap],
    ][]
  ).map(([name, theme]) => ({
    name,
    color: theme.colors.primary,
  }));
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {themeNameAndColor.map(({ name, color }) => (
          <TouchableOpacity
            key={name as string}
            style={[styles.circle, { backgroundColor: color }]}
            onPress={() => setThemeName(name)}
          >
            {name === themeName && (
              <View
                style={{
                  position: "absolute",
                  top: 8,
                  left: 8,
                  right: 8,
                  bottom: 8,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="check"
                  size={24}
                  color="#fff"
                />
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 24,
    rowGap: 24,
    width: "90%",
  },
  circle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    margin: 12,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedCircle: {
    borderColor: "#333",
    borderWidth: 3,
  },
});
