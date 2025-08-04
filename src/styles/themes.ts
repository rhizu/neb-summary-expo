import {
  DarkTheme,
  DefaultTheme,
  Theme,
} from "@react-navigation/native";

export const LightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#0066cc",
    background: "#ffffff",
    card: "#ffffff",
    text: "#000000",
    border: "#e0e0e0",
  },
};

export const DarkThemeCustom: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#0a84ff",
    background: "#000000",
    card: "#1c1c1e",
    text: "#ffffff",
    border: "#272729",
  },
};

export const RedTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ff0000",
    background: "#fff5f5",
    card: "#ffeaea",
    text: "#800000",
    border: "#ffcccc",
  },
};

export const YellowTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ffff00",
    background: "#fffff0",
    card: "#fffde7",
    text: "#666600",
    border: "#f0e68c",
  },
};

export const GreenTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#00ff00",
    background: "#f0fff0",
    card: "#e0ffe0",
    text: "#006600",
    border: "#ccffcc",
  },
};

export const CyanTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#00ffff",
    background: "#f0ffff",
    card: "#e0ffff",
    text: "#006666",
    border: "#ccffff",
  },
};

export const BlueTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#0000ff",
    background: "#f0f4ff",
    card: "#e0e7ff",
    text: "#000066",
    border: "#ccd9ff",
  },
};

export const NavyTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#004080",
    background: "#f0f4ff",
    card: "#e0e7ff",
    text: "#002040",
    border: "#ccd9ff",
  },
};

export const PurpleTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#8000ff",
    background: "#faf5ff",
    card: "#f0e6ff",
    text: "#400080",
    border: "#e0ccff",
  },
};

export const MagentaTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ff00ff",
    background: "#fff0ff",
    card: "#ffe0ff",
    text: "#800080",
    border: "#ffccff",
  },
};

export const PinkTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ff007f",
    background: "#fff0f5",
    card: "#ffe0eb",
    text: "#800040",
    border: "#ffcce0",
  },
};
