import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/Footer";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SyntAI - Enterprise AI Solutions",
  description: "Experience the next generation of AI with our specialized agents. From data analysis to full-stack development, unlock unprecedented efficiency and innovation for your enterprise.",
  keywords: ["AI", "Enterprise AI", "Machine Learning", "Data Analysis", "Full-stack Development", "AI Agents", "Business Intelligence"],
  authors: [{ name: "SyntAI" }],
  creator: "SyntAI",
  publisher: "SyntAI",
  robots: "index, follow",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

