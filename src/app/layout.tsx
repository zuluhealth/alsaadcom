import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import {
  SITE_NAME,
  SITE_META_DESCRIPTION,
  SITE_URL,
} from "@/lib/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import ChromeGuard from "@/components/layout/ChromeGuard";
import "./globals.scss";

const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk-latin.woff2",
  variable: "--font-heading",
  display: "swap",
  weight: "400 700",
});

const poppins = localFont({
  src: [
    { path: "./fonts/poppins-300-latin.woff2", weight: "300" },
    { path: "./fonts/poppins-400-latin.woff2", weight: "400" },
    { path: "./fonts/poppins-500-latin.woff2", weight: "500" },
    { path: "./fonts/poppins-600-latin.woff2", weight: "600" },
  ],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "./fonts/jetbrains-mono-latin.woff2",
  variable: "--font-mono",
  display: "swap",
  weight: "400 500",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `${SITE_NAME} — A Safer Tomorrow`,
  },
  description: SITE_META_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "Al Saad Telecom",
    "AST",
    "telecommunications",
    "secured communications",
    "security infrastructure",
    "systems integrator",
    "Iraq",
    "RF systems",
    "security solutions",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — A Safer Tomorrow`,
    description: SITE_META_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/icon.svg",
        width: 512,
        height: 512,
        alt: `${SITE_NAME} logo`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} — A Safer Tomorrow`,
    description: SITE_META_DESCRIPTION,
    images: ["/icon.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { url: "/icons/ast-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description: SITE_META_DESCRIPTION,
  email: "info@alsaadtelecom.com",
  telephone: ["+9647718009955", "+9647818009955"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Baghdad",
    addressCountry: "IQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${poppins.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>
        <SmoothScroll>
          <ChromeGuard>
            <Navbar />
          </ChromeGuard>
          <main>{children}</main>
          <ChromeGuard>
            <Footer />
          </ChromeGuard>
        </SmoothScroll>
      </body>
    </html>
  );
}
