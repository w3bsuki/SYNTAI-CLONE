import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadingWrapper from "@/components/LoadingWrapper";
import Header from "@/components/ui/Header";
import CustomFooter from "@/components/ui/footer-section";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Agency Dashboard",
  description: "Modern AI solutions for your business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark !scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-black text-foreground min-h-screen selection:bg-zinc-800 selection:text-zinc-100`}
      >
        <LoadingWrapper>
          <Header />
          <main className="flex min-h-screen flex-col pt-16">
            {children}
          </main>
          <CustomFooter />
        </LoadingWrapper>
      </body>
    </html>
  );
}

