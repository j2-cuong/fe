import type React from "react";
import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Thiên tử kiếm - Kiếm thế PC 2009",
    template: "%s | Thiên Tử Kiếm",
  },
  description:
    "Trang chủ của Thiên Tử Kiếm với tin tức, sự kiện và cộng đồng game thủ. Tham gia ngay để trải nghiệm những hoạt động hấp dẫn nhất như Bạch hổ đường, Tống kim, Võ Lâm liên đấu.",
  keywords: [
    "Thiên tử kiếm - Kiếm thế PC 2009",
    "cộng đồng game",
    "tin tức game",
    "sự kiện game",
    "tải game",
    "bạch hổ đường",
    "tống kim",
    "võ lâm liên đấu",
    "hoạt động game",
  ],
  authors: [{ name: "ArcadiaWorks" }],
  creator: "ArcadiaWorks",
  publisher: "ArcadiaWorks",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "Next.js",
  applicationName: "Thiên tử kiếm - Kiếm thế PC 2009",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#059669" },
    { media: "(prefers-color-scheme: dark)", color: "#10b981" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#059669" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://thientukiem.com",
    siteName: "Thiên tử kiếm - Kiếm thế PC 2009",
    title: "Thiên tử kiếm - Kiếm thế PC 2009",
    description:
      "Website Thiên tử kiếm - Kiếm thế PC 2009 với tin tức, sự kiện và cộng đồng game thủ. Tham gia ngay để trải nghiệm những hoạt động hấp dẫn nhất.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Thiên tử kiếm - Kiếm thế PC 2009",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiên tử kiếm - Kiếm thế PC 2009",
    description:
      "Website Thiên tử kiếm - Kiếm thế PC 2009 với tin tức, sự kiện và cộng đồng game thủ",
    images: ["/og-image.png"],
    creator: "@gamevietnam",
  },
  alternates: {
    canonical: "https://thientukiem.com",
    languages: {
      "vi-VN": "https://thientukiem.com",
    },
  },
  category: "gaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Thiên tử kiếm - Kiếm thế PC 2009",
              description:
                "Website Thiên tử kiếm - Kiếm thế PC 2009 với tin tức, sự kiện và cộng đồng game thủ",
              url: "https://thientukiem.com",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://thientukiem.com/tin-tuc?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              publisher: {
                "@type": "Organization",
                name: "Thiên Tử Kiếm",
                logo: {
                  "@type": "ImageObject",
                  url: "https://thientukiem.com/logo.png",
                },
              },
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="msapplication-TileColor" content="#059669" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <style>{`
          html {
            font-family: ${openSans.style.fontFamily};
            --font-sans: ${openSans.variable};
            --font-serif: ${montserrat.variable};
          }
        `}</style>
      </head>
      <body className="dark antialiased">{children}</body>
    </html>
  );
}
