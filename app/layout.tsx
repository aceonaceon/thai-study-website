import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OrganizationJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "泰國留學 | 學無界 Study Without Borders",
  description: "泰國留學完整指南，包含大學排名、國際學程、國際學校、夏令營資訊。學無界擁有 18 年留學代辦經驗，提供免費諮詢服務。",
  keywords: "泰國留學, 泰國大學, 泰國國際學校, 泰國夏令營, 學無界, 留學代辦",
  authors: [{ name: "Jason Huang" }],
  alternates: {
    canonical: "https://thai.studywb.com",
  },
  openGraph: {
    title: "泰國留學 | 學無界 Study Without Borders",
    description: "泰國留學完整指南，包含大學排名、國際學程、國際學校、夏令營資訊。",
    url: "https://thai.studywb.com",
    siteName: "泰國留學",
    locale: "zh_TW",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "泰國留學 | 學無界 Study Without Borders",
    description: "泰國留學完整指南，包含大學排名、國際學程、國際學校、夏令營資訊。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="h-full antialiased">
      <body className="min-h-full flex flex-col" style={{ fontFamily: "'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif" }}>
        <a href="#main-content" className="skip-link">跳到主要內容</a>
        <OrganizationJsonLd />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
