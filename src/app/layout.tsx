import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopHeader from "./TopHeader";
import MenuBar, { PhoneMenuBar } from "./PhoneMenuBar";
import { Toaster } from "@/components/ui/sonner";
import Footer from "./Footer";
import DonationButton from "@/components/DonationButton";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | autismawareness",
    default: "autismawareness",
  },
  description: "Understanding autism with love and awareness.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopHeader />
        <MenuBar />
        <Suspense >
          <PhoneMenuBar />
        </Suspense>

        {children}
        <DonationButton />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
