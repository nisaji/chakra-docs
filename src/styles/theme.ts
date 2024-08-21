import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    // カラーパレットの設定
    primary: {
      main: "#2196F3",
      dark: "#1769AA",
      light: "#4DABF5",
    },
    secondary: {
      main: "#F50057",
      dark: "#AB003C",
      light: "#F73378",
    },
  },
  fonts: {
    body: "Noto Sans JP, sans-serif",
    heading: "'M PLUS Rounded 1c', sans-serif",
    mono: "Noto Sans JP, monospace",
    brand: "'M PLUS Rounded 1c', sans-serif",
    accent: "Noto Sans JP, serif",
  },
  styles: {
    // グローバルスタイルの設定
    global: {
      body: {
        bg: "gray.100",
        color: "gray.800",
      },
      a: {
        color: "primary.main",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
});

export default theme;
