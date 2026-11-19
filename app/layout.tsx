import type { Metadata, Viewport } from "next";
import { BASE_PATH } from "./site";
import "./globals.css";

export const metadata: Metadata = {
  title: "LinDex — Linux desktops on Android",
  description:
    "Run a full Ubuntu, Debian or Kali Linux desktop on your Android phone. No root, no Termux, one APK.",
  icons: { icon: `${BASE_PATH}/icon.svg` },
  openGraph: {
    title: "LinDex — Linux desktops on Android",
    description: "Ubuntu, Debian and Kali desktops on your phone. No root required.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#0e1014" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
