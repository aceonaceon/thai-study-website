import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "泰國留學 | 學無界 Study Without Borders",
  description: "泰國留學完整指南，包含大學排名、國際學程、國際學校、夏令營資訊。學無界擁有 18 年留學代辦經驗，提供免費諮詢服務。",
  keywords: "泰國留學, 泰國大學, 泰國國際學校, 泰國夏令營, 學無界, 留學代辦",
  authors: [{ name: "Jason Huang" }],
  openGraph: {
    title: "泰國留學 | 學無界 Study Without Borders",
    description: "泰國留學完整指南，包含大學排名、國際學程、國際學校、夏令營資訊。",
    url: "https://thai.studywb.com",
    siteName: "泰國留學",
    locale: "zh_TW",
    type: "website",
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
      <head>
        {/* Google Fonts - Noto Sans TC */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
