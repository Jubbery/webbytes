import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const metadata: Metadata = {
  title: "winBYTES",
  description: "Get free food when your team wins!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let theme;
  if (typeof window !== "undefined") {
    theme = createTheme();
  }

  return (
    <html lang="en">
      <ThemeProvider theme={theme || {}}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
