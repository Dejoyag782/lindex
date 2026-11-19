import type { Metadata, Viewport } from "next";
import { BASE_PATH, DOWNLOAD_URL, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "./site";
import "./globals.css";

// og.png is a screenshot of the homepage taken in CI on every deploy (scripts/og-snapshot.mjs).
const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "LinDex homepage: a full Linux desktop in your pocket",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Linux on Android",
    "Ubuntu on Android",
    "Kali Linux Android",
    "Debian Android",
    "XFCE Android",
    "no root Linux",
    "PRoot",
    "Linux desktop APK",
    "Kali NetHunter alternative",
    "Termux X11",
  ],
  alternates: { canonical: "/" },
  icons: { icon: `${BASE_PATH}/icon.svg` },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [ogImage.url],
  },
};

export const viewport: Viewport = { themeColor: "#0e1014" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/og.png`,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Android 8.0+",
  downloadUrl: DOWNLOAD_URL,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
