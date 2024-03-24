import React from "react";
import { useComputedColorScheme } from "@mantine/core";

interface FooterProps {
  colorScheme: "light" | "dark";
}

const Footer: React.FC<FooterProps> = ({ colorScheme }) => {
  const computedColorScheme = useComputedColorScheme(colorScheme);

  return (
    <footer
      style={{
        bottom: 0,
        left: 0,
        width: "100%",
        textAlign: "center",
        backgroundColor: computedColorScheme === "dark" ? "#242424" : "white",
        color: computedColorScheme === "dark" ? "white" : "#242424",
        padding: "10px 0",
      }}
    >
      Made with ♡ by Hannah Hsiao
    </footer>
  );
};

export default Footer;
