import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/Footer";
import { Providers } from "@/components/providers";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
};

export const metadata: Metadata = {
  title: "SyntAI - Enterprise AI Solutions",
  description: "Experience the next generation of AI with our specialized agents. From data analysis to full-stack development, unlock unprecedented efficiency and innovation for your enterprise.",
  keywords: ["AI", "Enterprise AI", "Machine Learning", "Data Analysis", "Full-stack Development", "AI Agents", "Business Intelligence"],
  authors: [{ name: "SyntAI" }],
  creator: "SyntAI",
  publisher: "SyntAI",
  robots: "index, follow",
  metadataBase: new URL('https://syntai.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://syntai.ai",
    title: "SyntAI - Enterprise AI Solutions",
    description: "Experience the next generation of AI with our specialized agents. From data analysis to full-stack development, unlock unprecedented efficiency and innovation for your enterprise.",
    siteName: "SyntAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "SyntAI - Enterprise AI Solutions",
    description: "Experience the next generation of AI with our specialized agents. From data analysis to full-stack development, unlock unprecedented efficiency and innovation for your enterprise.",
    creator: "@syntai",
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark scroll-smooth ${inter.variable}`}>
      <body className={`${inter.className} overflow-x-hidden min-h-screen flex flex-col`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

